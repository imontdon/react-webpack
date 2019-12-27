const navList = [
  { icon: "play-circle", classify: "在线视频", sites: [
    { href: "http://www.zmz2019.com/", logo: "http://175.6.228.2/ftp/avatar/f_noavatar_m.gif", name: "人人影视", desc: "YYets 人人影视字幕组" }, 
    { href: "https://www.btbtt.us/", logo: "https://www.btbtt.us/favicon.ico", name: "BT之家", desc: "BT下载" }, 
    { href: "https://bde4.com/", logo: "https://bde4.com/images/favicon.png", name: "哔嘀影视", desc: "在线影视，影视下载" }, 
    { href: "http://www.hao6v.com/", logo: "http://www.hao6v.com/images/logo.gif", name: "6v电影", desc: "最新电影下载" }, 
    { href: "http://www.952780.com", logo: "http://www.952780.com/favicon.ico", name: "碟影视界", desc: "经典好看_手机在线_电影推荐" }, 
    { href: "http://www.novipnoad.com/", logo: "http://www.novipnoad.com/favicon.ico", name: "NO视频", desc: "海外热门剧集在线观看" }, 
    { href: "https://v.gimy.tv/", logo: "https://v.gimy.tv/favicon.ico", name: "Gimy TV", desc: "高清影音免費線上看" }, 
    { href: "https://www.dybee.tv/", logo: "加载失败", name: "电影蜜蜂", desc: "在线观看" }, 
    { href: "http://www.meijuxingqiu.com/", logo: "http://www.meijuxingqiu.com/images/fixed-app-icon.png", name: "美剧星球", desc: "免费在线看最新高清美剧" }] },
  { icon: "search", classify: "搜索工具", sites: [
    { href: "http://magnet.chongbuluo.com/", logo: "https://search.chongbuluo.com/favicon.ico", name: "虫部落 - 资源搜索", desc: "资源搜索引擎集合" }, 
    { href: "http://mctool.cn/music/", logo: "http://mctool.cn/favicon.ico", name: "音乐搜索", desc: "VIP音乐解析" }, 
    { href: "http://www.baiduonce.com/index.html", logo: "http://www.baiduonce.com/favicon.ico", name: "摆渡一下", desc: "无损音乐下载" }, 
    { href: "https://www.jubt.net/cn/index.html", logo: "https://www.jubt.net/assets/images/favicon.png", name: "聚BT", desc: "聚合最优质的BT、磁力资源" }, 
    { href: "https://www.usouluo.com/", logo: "https://usouluo.oss-cn-hangzhou.aliyuncs.com/2019/11/默认标题_LOGO设计_2019-11-14-0-1-300x300.png", name: "优搜罗", desc: "搜罗全网优质软件工具" }] },
  { icon: "files-o", classify: "论文搜索", sites: [
    { href: "https://scholar.google.com", logo: "加载失败", name: "Google Scholar", desc: "站在巨人的肩膀上" }, 
    { href: "https://sci-hub.se/", logo: "https://sci-hub.se/favicon.ico", name: "Sci-Hub", desc: "removing barriers in the way of science" }, 
    { href: "https://lunwen.im/", logo: "加载失败", name: "猫咪论文", desc: "聚合了现有95%以上的开放论文数据源" }, 
    { href: "https://scholar.chongbuluo.com/", logo: "https://scholar.chongbuluo.com/favicon.ico", name: "虫部落 - 学术搜索", desc: "文献检索网站集合" }, 
    { href: "https://dblp.uni-trier.de/db/", logo: "https://dblp.uni-trier.de/img/favicon.ico", name: "DBLP", desc: "dblp: computer science bibliography" }, 
    { href: "https://www.semanticscholar.org/", logo: "https://www.semanticscholar.org/img/favicon.png", name: "Semantic Scholar", desc: "An academic search engine" }] },
  { icon: "pencil", classify: "写作工具", sites: [
    { href: "https://www.linggle.com/", logo: "加载失败", name: "https://www.linggle.com/static/img/favicon.png", desc: "Language Reference Search Engines" }, 
    { href: "http://www.phrasebank.manchester.ac.uk", logo: "加载失败", name: "Academic Phrasebank", desc: "Referring to Sources" }, 
    { href: "http://detexify.kirelabs.org/classify.html", logo: "http://detexify.kirelabs.org/favicon.ico", name: "Detexify", desc: "An approach to simplify finding LaTeX symbols" }, 
    { href: "https://www.thesaurus.com/", logo: "https://www.thesaurus.com/hp-assets/tcom_favicon-54545f5303fccb956af394ac10f1655d.png", name: "Thesaurus", desc: "Synonyms and Antonyms of Words" }, 
    { href: "https://semdom.org/", logo: "https://semdom.org/sites/default/themes/rapidwords/favicon.ico", name: "Semantic Domains", desc: "Promoting Dictionary Creation" }, 
    { href: "https://ludwig.guru/", logo: "加载失败", name: "Ludwig", desc: "找到你需要的英文语句" }, 
    { href: "https://webdemo.myscript.com/", logo: "https://webdemo.myscript.com/assets/img/demo/home_96x96.png", name: "MyScript Webdemo", desc: "手写字符转换" }] },
  { icon: "ofsticky-note", classify: "PPT工具", sites: [
    { href: "http://www.tretars.com/", logo: "加载失败", name: "逼格PPT", desc: "免费ppt模板下载 教程和素材" }, 
    { href: "http://www.ppt115.com/", logo: "加载失败", name: "PPT宝典", desc: "PPT网站导航" }] },
  { icon: "chrome", classify: "软件集合", sites: [
    { href: "http://www.zdfans.com/", logo: "http://www.zdfans.com/favicon.ico", name: "zd423", desc: "更新快、去广告类软件博客领跑者" }, 
    { href: "https://hao.su/", logo: "https://tva1.sinaimg.cn/large/6f8a2832gy1g52f4fyo33j202o02oq32.jpg", name: "不死鸟", desc: "专注分享图片、视频、文字的分享" }, 
    { href: "https://www.laomoit.com/", logo: "https://www.laomo.me/cdn/img/favicon.ico", name: "老殁 | 殁漂遥", desc: "互联网分享精神，专注收藏分享" }, 
    { href: "https://www.u-lis.com/", logo: "https://www.u-lis.com/wp-content/uploads/2012/10/ulis-1.png", name: "遊離式", desc: "软件、APP分享" }, 
    { href: "https://www.iplaysoft.com/", logo: "加载失败", name: "异次元软件世界", desc: "专注于推荐优秀软件、APP应用和互联网资源" }] },
  { icon: "paper-plane", classify: "科学上网", sites: [{ 
    href: "http://ac.scmor.com/", logo: "http://ac.scmor.com/res/favicon.ico", name: "Google镜像", desc: "学术搜索、网页搜索" }, 
    { href: "https://www.ssrtool.com/tool/free_ssr", logo: "加载失败", name: "SS免费账号", desc: "SSR/SS/V2Ray/Vmess/Socks5免费账号" }, 
    { href: "http://387099.blogspot.com/2018/03/ssssr.html", logo: "加载失败", name: "部分机场", desc: "浅谈部分机场的使用感受" }, 
    { href: "http://ctfb.xyz/", logo: "加载失败", name: "CTCloud", desc: "CTCloud" }, 
    { href: "https://www.flycloud.gg/", logo: "加载失败", name: "flycloud", desc: "flycloud" }, 
    { href: "https://china-internet-exchange.com/user", logo: "加载失败", name: "ssrcloud", desc: "ssrcloud" }, 
    { href: "https://portal.cylink.top/user", logo: "加载失败", name: "次元链接", desc: "次元链接" }] },
  { icon: "sitemap", classify: "综合导航", sites: [
    { href: "https://search.chongbuluo.com/", logo: "https://scholar.chongbuluo.com/favicon.ico", name: "虫部落 快搜", desc: "搜索引擎集合" }, 
    { href: "https://www.youyisi8.com/", logo: "https://www.youyisi8.com/favicon.ico", name: "有意思吧", desc: "分享有意思的文字，网络新鲜好玩内容" }, 
    { href: "https://docs.rsshub.app/", logo: "加载失败", name: "RSSHub", desc: "可以给任何奇奇怪怪的内容生成 RSS 订阅源" }, 
    { href: "http://jibulao.com/", logo: "http://jibulao.com/favicon.ico", name: "记不牢", desc: "网站导航" }] }]
// const navList = JSON.parse(input)

export {
  navList
}