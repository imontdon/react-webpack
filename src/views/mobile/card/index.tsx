import * as React from 'react';

import { Icon } from 'antd'

interface AppProps {
  listItem: NavList
}
interface MobileState {

}
import {
  NavList,
  NavItem
} from '../../../interface/nav'
class Card extends React.Component<AppProps, MobileState> {
  render() {
    const { listItem } = this.props
    return (
      <div className={'card'}>
        <div className={'top-line'}>
          <Icon type={listItem.icon} className={'card-icon'} />
          <strong>{ listItem.classify }</strong>
        </div>
      </div>
    )
  }
}

export default Card