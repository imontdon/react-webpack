import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import { StoreState } from './types'
import { menu } from './reducers/menu'
// import reducers from './reducers'

import Moible from './views/mobile/app'
import Web from './views/pc/web'

import { 
  BrowserRouter as Router, 
  Route, 
} from 'react-router-dom'
import NotFound from './404'
interface AppProps {
  type?: string
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
  }
  
  render() : JSX.Element {
    const isWeb = this.isWeb()
    return (
      <Router>
        {
          isWeb ?  
            <Route component={Web}></Route>
              : 
            <Route component={Moible}></Route>
        }
      </Router>
    )
  }
}

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

export default App
