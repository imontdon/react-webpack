
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useState, useEffect  } from 'react'

interface AppProps {
  title?: string
}
function Example(props) {
  const [count, setCount] = useState(0)
  const flag = true
  useEffect(() => {
    function handleTest(status) {
      setCount(status.count)
    }
    document.title = `HI ${count}`
  }, [count])
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>click me</button>
    </div>
  )
}
const Web = () => {
  useEffect(() => {
    console.log('222')
  })
  return (
    <div>
      <Example />
    </div>
  )
}
// class Web extends React.Component<AppProps, object> {
//   render() {
//     return (
//       <div>
//         Web
//       </div>
//     )
//   }
// }

export default Web