
import * as React from 'react';
// import * as ReactDOM from 'react-dom';
// import PropTypes from 'prop-types'

import { Icon } from 'antd'

// redux
import { connect, Dispatch } from 'react-redux';
import * as actions from '../../actions/menu';
import { StoreState } from '../../types'
import { store } from '../../index'

// components
import SideBar from './sider/index'
import Card from './card/index'

import {
  mockFetchNav
} from '../../request/index'

import {
  NavList,
  NavItem
} from '../../interface/nav'
const img =  require('../../assets/images/header.png')
interface AppProps {
  showMenu?: () => void,
  hiddenMenu?: () => void,
  getMenuStatus?: () => void
}
interface MobileState {
  status?: boolean,
  navList: NavList[]
}
interface HeaderProps {

}

class Mobile extends React.Component<AppProps, MobileState> {
  constructor(props) {
    super(props)
    // this.state = {
    //   status: false
    // }
  }
  async componentDidMount() {
    const res = await mockFetchNav()
    // console.log(JSON.parse(res.data)[0])
    this.setState({ navList: JSON.parse(res.data) })
    setTimeout(() => {
      console.log(this.state.navList)
    }, 10000)
    // this.setState({ status: store.getState().menuStatus })
    window.addEventListener('click', this.hiddenMenu.bind(this))
  }
  hiddenMenu(e: MouseEvent | TouchEvent | Event) {
    const target = e.target as EventTarget & HTMLInputElement
    // console.log(target.className)
    if(target.className === 'mobile-app' || 
       target.className === 'app-body' || 
       target.className === 'app-content' || 
       target.className === '' && store.getState().menuStatus) {
      const { hiddenMenu } = this.props
      hiddenMenu()
    }
  }
  componentWillUnmount() {
    window.removeEventListener('click', this.hiddenMenu)
  }
  render() {
    const { showMenu } = this.props
    const Header = ({}: HeaderProps): JSX.Element => {
      return <div className={'header'}>
        <Icon type="menu" onClick={showMenu} className={'icon-menu'}/>
      </div>
    }
    const CardList = (): JSX.Element | null => {
      return (
        <div className={'card-list'}>
          {
            this.state ? 
            this.state.navList.length > 0 ? 
              this.state.navList.map((nav: NavList) => {
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
            <span>Imontdon</span>
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