import * as React from 'react'
import Loadable from "react-loadable"
interface RouteConfig {
  path: string,
  name: string,
  component?: React.FC | JSX.Element | Function | React.Component | string,
  children?: RouteConfig[]
}
const Routes: RouteConfig[] = [
  {
    name: 'match',
    path: '/match',
    component: '',
    children: [
      {
        name: 'Rendering with React',
        path: '/rendering'
      },
      {
        name: 'components with React',
        path: '/components',
      },
      {
        name: 'components with React',
        path: '/components'
      }
    ]
  },
]


export default Routes