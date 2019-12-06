import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { 
  BrowserRouter as Router, 
  Switch, 
  Route, 
  Link,
  useParams,
  useRouteMatch,
  Redirect
} from 'react-router-dom'
import NotFound from './404'
interface AppProps {
  title?: string
}
class App extends React.Component<AppProps, object> {
  isWeb() {
    const userAgent = navigator.userAgent
    const mobileType = ['Android', 'iPhone', 'Windows Phone', 'iPad', 'iPod', 'SymbianOS']
    const arr = mobileType.filter(item => userAgent.includes(item))
    if (arr.length > 0) { return false } 
     else { return true }
  }
  render() {
    return (
      <div>
        <Router>
          {
            this.isWeb
          }
          <Route component={NotFound} />
        </Router>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

export default App
