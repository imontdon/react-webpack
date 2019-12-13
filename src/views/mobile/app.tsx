
import * as React from 'react';
import * as ReactDOM from 'react-dom';


interface AppProps {
  title?: string
}
class Mobile extends React.Component<AppProps, object> {
  render() {
    return (
      <div>
        mobile
      </div>
    )
  }
}

export default Mobile