
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useState, useEffect  } from 'react'

import Header from './header'
import Aside from './aside';

import '../../assets/web/index.scss'
const Web = () => {
  useEffect(() => {
    console.log('222')
  })
  return (
    <div className={'web-body'}>
      <Header />
      <div className={'web-main'}>
        <Aside />
        <div>
          <List list={[{ text: '222', checked: false }]} />
        </div>
      </div>
    </div>
  )
}
interface ItemProps {
  text: string | number,
  checked: boolean,
  onChange?: any
}
const ListItem = (props: ItemProps) => {
  return (
    <li>
      <input type="checkbox" checked={props.checked} onChange={() => props.onChange('?')} />
      <span>{props.text}</span>
    </li>
  )
}
interface ListProps {
  list: ItemProps[],
  // handleItemChange: () => []
}
const List = (props: ListProps) => {
  const [ list, setList ] = useState(
    props.list.map((item: ItemProps) => {
      return (
        {
          text: item.text,
          checked: item.checked
        }
      )
    })
  )
  return (
    <div>
      <ul>
        {
          list.map((item: ItemProps, index: number) => {
            return (
              <ListItem
                key={index}
                text={item.text}
                checked={item.checked}
                onChange={(data: string | number) => {
                  setList([{
                    text: data,
                    checked: true
                  }])
                }}
              />
            )
          })
        }
      </ul>
    </div>
  )
}
export default Web
