import * as React from 'react';
import { Icon } from 'antd'

import { ThemeContext, theme } from '../../../utils/theme'

interface AppProps {
  listItem: NavItem
}
interface MobileState {

}
interface ListProps {
  sites: NavSite[],
  theme: theme
}

import {
  NavSite,
  NavItem
} from '../../../interface/nav'
class Card extends React.Component<AppProps, MobileState> {
  contextType = ThemeContext
  public openNewWindow(href: string) {
    window.open(href)
  }
  render() {
    const List = (props: ListProps): JSX.Element => {
      const { sites } = props
      // console.log(sites)
      return (
        <div className={'list'}>
          {
            sites.map((site: NavSite, key: number): JSX.Element => {
              return (
                <div className={'item'} onClick={() => this.openNewWindow(site.href)} key={key} >
                  <div className={'logo'}>
                    <span className={'logo-image'}>
                      {
                        site.logo === '加载失败' ? 
                          <span className={'logo-image__wrong'}>{ site.logo }</span> : <img src={site.logo} alt=""/>
                      }
                    </span>
                    <span className={'logo-desc'} style={{ color: props.theme.color }}>{ site.name }</span>
                  </div>
                  <div className={'item-desc'}>
                    { site.desc }
                  </div>
                </div>
              )
            })
          }
        </div>
      )
    }
    const { listItem } = this.props
    return (
      <ThemeContext.Consumer>
        {({ theme }) => (
          <div className={'card'}>
            <i id={listItem.classify}></i>
            <div className={'top-line'}>
              <Icon type={listItem.icon} className={'card-icon'} style={{ color: theme.color }}/>
              <strong style={{color: theme.color}}>{ listItem.classify }</strong>
            </div>
            <List sites={listItem.sites} theme={theme} ></List>
          </div>
        )}
      </ThemeContext.Consumer>
    )
  }
}

export default Card