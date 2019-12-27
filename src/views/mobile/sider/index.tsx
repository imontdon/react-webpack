import * as React from 'react'
import { Input, AutoComplete, Icon } from 'antd'

// import menuList from '../../../data/menu'
// mock
import {
  mockFetchMenu
} from '../../../request/index'

import { MenuItem, SubMenuItem } from '../../../interface/menu'

interface AppProps {  }
interface AppState {
  menuList?: MenuItem[],
  loading?: boolean,
  dataSource?: any[],
  value: string | number
  // loading: boolean,
  // dataSource: object[],
  // value: string
}
interface MenuProps {
  list?: MenuItem[]
}
class SideBar extends React.Component<AppProps, AppState> {
  constructor(props) {
    super(props)
    this.searchData = this.debounce(this.searchData, 300)
  }
  state = {
    loading: false,
    dataSource: [],
    value: '',
    menuList: []
  }
  handleFocus() {}
  searchData(): void { // 搜索
    let source
    if (this.state.value) {
      source = this.state.dataSource 
      source.push({ value: this.state.value + Math.random() * 100, text: this.state.value })
    } else {
      source = []
    }
    this.setState({ dataSource: source })
    source = null
  }
  handleChange = (value: string | number): void => { // 输入框改变方法
    this.setState({ value: value ? value : '' })
    this.searchData()
  }
  debounce(fn: Function | React.FC, ms: number = 300) { // 防抖
    let timer = null
    return function() {
      if (timer) { clearTimeout(timer) }
      timer = setTimeout(() => {
        fn.apply(this)
      }, ms)
    }
  }
  menuClick(index: number, e: Event | MouseEvent) {
    e.stopPropagation()
    const target = e.currentTarget as HTMLElement
    let subMenu = target.parentNode.querySelector('.sub-menu') as HTMLElement
    const icon = target.querySelector('.right-icon') as HTMLElement
    if (subMenu.classList.contains('show')) {
      subMenu.classList.remove('show')
      target.classList.remove('active')
      icon.style.cssText = ''
      subMenu.style.cssText = 'transform: rotate(0deg);'
    } else {
      subMenu.classList.add('show')
      target.classList.add('active')
      icon.style.cssText = 'transform: rotate(180deg)'
      subMenu.style.cssText = `height: ${this.state.menuList[index].subTypes.length * 0.6}rem;`
    }
  }
  async componentDidMount() {
    const res = await mockFetchMenu()
    const menuList = JSON.parse(res.data)
    this.setState({ menuList })
  }
  render() {
    const Menu = (props: MenuProps): JSX.Element => {
      const { list } = props
      return (
        <div className={'menu'}>
          {
            list.map((menu: MenuItem, index) => {
              return (
                <div className={'menu-item'}>
                  <div className={'menu-header'} onClick={this.menuClick.bind(this, index)}>
                    <Icon type={menu.icon}></Icon>
                    <span className={'menu-title'}>{ menu.type }</span>
                    <Icon type={'down'} className={'right-icon'}></Icon>
                  </div>
                  <ul className={'sub-menu'}>
                    {
                      menu.subTypes.map((sub: SubMenuItem) => {
                        return (
                          <li className={'sub-menu__item'}>
                            <a  href={`#${sub.classify}`}>
                              <Icon type={sub.icon} className={'sub-menu__item-icon'}></Icon>
                              <span className={'sub-menu__item-desc'}>{ sub.classify }</span>
                            </a>
                          </li>
                        )
                      })
                    }
                  </ul>
                </div>
              )
            })
          }
        </div>
      )
    }
    return (
      <div className={'slider-bar'}>
        <AutoComplete
          className="certain-category-search"
          dropdownClassName="certain-category-search-dropdown"
          dropdownMatchSelectWidth={false}
          dropdownStyle={{ width: 300 }}
          size="large"
          style={{ width: '100%' }}
          dataSource={this.state.dataSource}
          placeholder="input here"
          optionLabelProp="value"
          allowClear
          onChange={this.handleChange}
          // onDropdownVisibleChange={this.test}
        >
          {/* <Input suffix={<Icon type="search" className="certain-category-icon" onClick={e => this.handleSearch(e)} />} /> */}
        </AutoComplete>
        <Menu list={this.state.menuList}/>
      </div>
    )
  }
}

export default SideBar