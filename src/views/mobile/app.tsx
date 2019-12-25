
import * as React from 'react';
// import * as ReactDOM from 'react-dom';
// import PropTypes from 'prop-types'

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

interface MobileProps {
  showMenu?: () => void,
  hiddenMenu?: () => void,
  getMenuStatus?: () => void
}
interface MobileState {
  status?: boolean,
  navList: NavItem[],
  userOffSetTop?: number,
}
interface HeaderProps { }

class Mobile extends React.Component<MobileProps, MobileState> {
  constructor(props) {
    super(props)
  }
  async componentDidMount() {
    const res = await mockFetchNav()
    this.setState({ navList: JSON.parse(res.data) })
    const authorEle = document.querySelector('.author') as HTMLElement
    this.setState({ userOffSetTop: authorEle.offsetTop })
    window.addEventListener('click', this.handleHiddenMenu.bind(this))
    window.addEventListener('scroll', this.srollFn.bind(this), false)
  }
  // document.documentElement.scrollTop
  // document.querySelector('.author').offsetTop
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
    if((target.className && typeof target.className === 'string') && !target.className.includes('ant') && store.getState().menuStatus) {
      const { hiddenMenu } = this.props
      hiddenMenu()
    }
  }
  componentWillUnmount() {
    window.removeEventListener('click', this.handleHiddenMenu)
    window.removeEventListener('scroll', this.srollFn)
  }
  render() {
    const { showMenu } = this.props
    const Header = ({}: HeaderProps): JSX.Element => {
      return <div className={'header'}>
        <Icon type="menu" onClick={showMenu} className={'icon-menu'}/>
        {
          this.state && this.state.status ? <img src={img} className={'header-icon'} /> : null
        }
      </div>
    }
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
      <div className={'mobile-app'}>
        <SideBar />
        <div className={'app-content'}>
          <Header />
          <div className={'app-body'}>
            <img src={img} alt="" className={'logo-img'}/>
            <span className={'author'}>Imontdon</span>
            <CardList />
          </div>
        </div>
      </div>
    )
  }
}
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