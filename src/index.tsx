import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { BackTop } from 'antd'

import { Provider } from 'react-redux'
import { createStore } from 'redux'

import Loadable from 'react-loadable';

import { StoreState } from './types'
import { menu } from './reducers/menu'
// import reducers from './reducers'

// components
import Loading from './views/loading'
// import Moible from './views/mobile/app'
import Web from './views/pc/web'

import './api'
import './assets/index.scss'
// import './api/nav'


const Moible = Loadable({
  loader: () => import('./views/mobile/app'),
  loading: Loading,
  timeout: 300
})

import { 
  BrowserRouter as Router, 
  Route, 
} from 'react-router-dom'
// import NotFound from './404'
interface AppProps {
  status?: boolean
}
interface AppState {

}
const storeState: StoreState = {
  menuStatus: false
}
// const store = createStore(reducers)
export const store = createStore(menu, storeState)

class App extends React.Component<AppProps, AppState> {
  isWeb() {
    const userAgent = navigator.userAgent
    const mobileType = ['Android', 'iPhone', 'Windows Phone', 'iPad', 'iPod', 'SymbianOS']
    const arr = mobileType.filter(item => userAgent.includes(item))
    if (arr.length > 0) { return false } 
      else { return true }
  }
  componentDidMount() {
    if (!this.isWeb()) { // 手机端
      var docEl: HTMLElement = document.documentElement
      var resizeEvt: string = 'orientationchange' in window ? 'orientationchange' : 'resize'
      const recalc = function(): void {
        const clientWidth: number = document.documentElement.clientWidth
        if (clientWidth > 640) {
          docEl.style.cssText = 'font-size: 100px !important;'
          document.body.style.cssText = `font-size: 100px !important;`
        } else {
          const target =  Math.floor(100 * (clientWidth / 720));
          docEl.style.cssText = `font-size: ${target}px !important;`
          document.body.style.cssText = `font-size: ${target}px !important;`
        }
      }
      window.addEventListener(resizeEvt, recalc, false)
      document.addEventListener('DOMContentLoaded', recalc, false);
    } else { // PC端，先不做
      
    }
    window.addEventListener('resize', this.changeMode.bind(this), false)
  }
  changeMode() {
    this.setState({ status: 1 }) // 触发render事件，无实际意义
  }
  componentWillMount() {
    window.removeEventListener('resize', this.changeMode)
  }
  render() : JSX.Element {
    const isWeb = this.isWeb()
    const Footer = (): JSX.Element => {
      return (
        <div className={'common-footer'}>
          Copyright &copy; 2019 <a style={{ marginLeft: '.2rem' }} href={'https://github.com/imontdon'} target='_blank'>imontdon</a>
        </div>
      )
    }
    return (
      <div>
        <Router>
          {
            isWeb ?  
              <Route component={Web}></Route>
                : 
              <Route component={Moible}></Route>
          }
        </Router>
        <Footer />
        <BackTop>
          <div className="backtop">
            UP
          </div>
        </BackTop>
      </div>
    )
  }
}

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

export default App
