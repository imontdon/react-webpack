
import * as React from 'react';
// import * as ReactDOM from 'react-dom';
// import PropTypes from 'prop-types'
import { useContext } from 'react'
import { Icon } from 'antd'
import Loadable from 'react-loadable';

// redux
import { connect, Dispatch } from 'react-redux';
import * as actions from '../../actions/menu';
import { StoreState } from '../../types'
import App, { store } from '../../index'

// components
// import SideBar from './sider/index'
// import Card from './card/index'
import Loading from '../loading'

const SideBar = Loadable({
  loader: () => import('./sider/index'),
  loading: Loading,
  timeout: 300
});
const Card = Loadable({
  loader: () => import('./card/index'),
  loading: Loading,
  timeout: 300
})

// mock
import {
  mockFetchNav
} from '../../request/index'

// assets
const img =  require('../../assets/images/header.png')

// interface 
import {
  NavItem
} from '../../interface/nav'

// theme
import { themes, ThemeContext, theme } from '../../utils/theme'

// const ThemeContext = React.createContext(themes.dark)

interface MobileProps {
  showMenu?: () => void,
  hiddenMenu?: () => void,
  getMenuStatus?: () => void
}
interface MobileState {
  status?: boolean,
  theme?: theme,
  navList: NavItem[],
  userOffSetTop?: number,
  toggle?: any
}
interface HeaderProps { }

class Mobile extends React.Component<MobileProps, MobileState> {
  constructor(props) {
    super(props)
    this.state = {
      navList: [],
      userOffSetTop: 0,
      theme: themes.dark,
      status: false
    }
  }
  toggle = ():void => {
    this.setState((state: MobileState) => ({
      theme: state.theme === themes.dark ? themes.highlight : themes.dark
    }))
  }
  async componentDidMount() {
    // 设置nav
    const res = await mockFetchNav()
    this.setState({ navList: JSON.parse(res.data) })
    // 获取初始化头像位置
    const authorEle = document.querySelector('.author') as HTMLElement
    this.setState({ userOffSetTop: authorEle.offsetTop })
    // 添加监听
    window.addEventListener('click', this.handleHiddenMenu.bind(this))
    window.addEventListener('scroll', this.srollFn.bind(this), false)
  }
  // document.documentElement.scrollTop
  // document.querySelector('.author').offsetTop
  // 滚动事件
  srollFn() {
    // console.log(e)
    const scrollTop = document.documentElement.scrollTop
    if (scrollTop > this.state.userOffSetTop) {
      if (!this.state.status) {
        this.setState({ status: true })
      }
    } else {
      if (this.state.status) {
        this.setState({ status: false})
      }
    }
  }
  handleHiddenMenu(e: MouseEvent | TouchEvent | Event) {
    const target = e.target as EventTarget & HTMLInputElement
    // console.log([target])
    if((target.className && typeof target.className === 'string') && !target.className.includes('ant') && store.getState().menuStatus) {
      const { hiddenMenu } = this.props
      hiddenMenu()
    }
  }
  componentWillUnmount() {
    window.removeEventListener('click', this.handleHiddenMenu)
    window.removeEventListener('scroll', this.srollFn)
  }
  // static contextType = ThemeContext
  render() {
    const { showMenu } = this.props
    const { theme } = this.state

    // 头部
    const Header = ({}: HeaderProps): JSX.Element => {
      const context = useContext(ThemeContext)
      return (
        <div className={'header'} style={context.theme}>
          <Icon type="menu" onClick={showMenu} className={'icon-menu'}/>
          {
            this.state && this.state.status ? <img src={img} className={'header-icon'} onClick={() => this.toggle()} /> : null
          }
        </div>
      )
    }
    // 卡片列表
    const CardList = (): JSX.Element | null => {
      return (
        <div className={'card-list'}>
          {
            this.state ? 
            this.state.navList.length > 0 ? 
              this.state.navList.map((nav: NavItem) => {
                return <Card listItem={nav}></Card>
              }) : null
            : null
          }
        </div>
      )
      
    }
    return (
      <ThemeContext.Provider value={{ theme }}>
        <div className={'mobile-app'}>
          <SideBar />
          <div className={'app-content'} style={{ ...theme, background: (theme === themes.dark ? themes.dark.background : '#f3f6f8') }}>
            <Header />
            <div className={'app-body'} style={theme}>
              <img src={img} alt="" className={'logo-img'}/>
              <span className={'author'}>Imontdon</span>
              <CardList />
            </div>
          </div>
        </div>
        <Footer />
      </ThemeContext.Provider>
    )
  }
}

// 尾部
const Footer = (): JSX.Element => {
  const context = useContext(ThemeContext)
  return (
    <div className={'common-footer'} style={Object.assign({ ...context.theme }, context.theme.background === '#252627' ? { boxShadow: '0 1px 6px rgba(255, 255, 255, 0.2)' } : { boxShadow: '0 1px 10px rgba(0, 0, 0, 0.2)' })}>
      Copyright &copy; 2019 <a style={{ marginLeft: '.2rem' }} href={'https://github.com/imontdon'} target='_blank'>imontdon</a>
    </div>
  )
}

// redux
const mapStateToProps = (state: StoreState): { menuStatus: boolean } => {
  return {
    menuStatus: state.menuStatus
  }
}
const mapDispatchToProps = (dispatch: Dispatch<actions.MenuAction>) => {
  return {
    showMenu: () => dispatch(actions.ShowMenu()),
    hiddenMenu: () => dispatch(actions.HiddenMenu()),
    getMenuStatus: () => dispatch(actions.GetMenuStatus())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Mobile)