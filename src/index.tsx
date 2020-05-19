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
// import Web from './views/pc/web'
// const Web = React.lazy(() => import('./views/pc/web'))

import './api'
import './assets/index.scss'
// import './api/nav'

const Web = Loadable({
  loader: () => import('./views/pc/web'),
  loading: Loading,
  timeout: 300
})
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
    this.recalc()
    this.dealPageUnit()
    // window.addEventListener('resize', this.changeMode.bind(this), false)
  }
  dealPageUnit() {
    const resizeEvt: string = 'orientationchange' in window ? 'orientationchange' : 'resize'
    window.addEventListener(resizeEvt, this.recalc.bind(this), false)
    // if (!this.isWeb()) { // 手机端
    //   // document.addEventListener('DOMContentLoaded', this.recalc, false);
    // } else { // PC端，先不做
    //   // window.removeEventListener(resizeEvt, this.recalc)
    //   // document.removeEventListener('DOMContentLoaded', this.recalc)
    //   document.body.removeAttribute('style')
    //   document.documentElement.removeAttribute('style')
    // }
  }
  recalc () {
    const docEl: HTMLElement = document.documentElement
    const clientWidth: number = document.documentElement.clientWidth
    if (this.isWeb()) { // 先不做
      document.body.removeAttribute('style')
      document.documentElement.removeAttribute('style')
    } else {
      if (clientWidth > 640) {
        docEl.style.cssText = 'font-size: 100px !important;'
        document.body.style.cssText = `font-size: 100px !important;`
      } else {
        const target =  Math.floor(100 * (clientWidth / 720));
        docEl.style.cssText = `font-size: ${target}px !important;`
        document.body.style.cssText = `font-size: ${target}px !important;`
      }
    }
    this.setState({ status: 1 }) // 响应render函数，无实际意义
  }
  componentWillMount() {
    window.removeEventListener('resize', this.recalc)
  }
  render() : JSX.Element {
    const isWeb = this.isWeb()
    // const Footer = (): JSX.Element => {
    //   return (
    //     <div className={'common-footer'}>
    //       Copyright &copy; 2019 <a style={{ marginLeft: '.2rem' }} href={'https://github.com/imontdon'} target='_blank'>imontdon</a>
    //     </div>
    //   )
    // }
    return (
      <>
        <Router>
          {/* <React.Suspense fallback={Loading}> */}
            {
              isWeb ?  
                <Route component={Web}></Route>
                  : 
                <Route component={Moible}></Route>
            }
          {/* </React.Suspense> */}
        </Router>
        {/* <Footer /> */}
        <BackTop>
          <div className="backtop">
            UP
          </div>
        </BackTop>
      </>
    )
  }
}

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

export default App
