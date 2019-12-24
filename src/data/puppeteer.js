const puppeteer = require('puppeteer')
const path = require('path');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch({
    // headless: false,
    slowMo: 500
  });
  const page = await browser.newPage();
  await page.goto('https://likailee.gitee.io/');
  page.setViewport({ width: 375, height: 812 })
  console.log(`获取nav数据中...`)
  const navList = await page.$$eval('.box', eles =>{
    const navArr = []
    eles.forEach(ele => {
      const category = ele.querySelector('.sub-category')
      const icon = Array.from(category.querySelector('i').classList).join('').replace('mrfafa-', '')
      const classify = category.querySelector('strong').innerText
      const sites = []
      const sample = Array.from(ele.querySelectorAll('a'))
      sample.forEach(item => {
        const href = item.getAttribute('href')
        const logoDiv = item.querySelector('.logo')
        const img = logoDiv.querySelector('img')
        let logo = ''
        if (img) {
          logo = img.getAttribute('src')
        } else { logo = '加载失败' }
        const name = logoDiv.lastChild.innerText
        const desc = item.querySelector('.desc').innerText
        sites.push({ href, logo, name, desc })
      })
      navArr.push({ icon, classify, sites })
    })
    return navArr
  })
  console.log(`数据整理结束`)
  // console.log(JSON.stringify(navList))
  const file = path.join(__dirname, './nav.tsx')
  const ws = fs.createWriteStream(file)
  let output = `const input = '${JSON.stringify(navList)}'\r\nconst navList = JSON.parse(input)\r\r\nexport {\r\n navList\r\n}`
  ws.write(output, 'UTF8')
  ws.end()
  await browser.close();
})();