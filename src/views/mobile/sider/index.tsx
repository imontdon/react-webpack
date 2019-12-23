import * as React from 'react'
import { Input, AutoComplete, Icon } from 'antd'

import  "../../../assets/index.scss"

interface AppProps {  }
interface AppState {
  // loading: boolean,
  // dataSource: object[],
  // value: string
}
class SideBar extends React.Component<AppProps, AppState> {
  constructor(props) {
    super(props)
    this.searchData = this.debounce(this.searchData, 300)
  }
  state = {
    loading: false,
    dataSource: [],
    value: '',
  }
  handleFocus() {}
  searchData(): void { // 搜索
    let source
    if (this.state.value) {
      source = this.state.dataSource 
      source.push({ value: this.state.value + Math.random() * 100, text: this.state.value })
    } else {
      source = []
    }
    this.setState({ dataSource: source })
    source = null
  }
  handleChange = (value: string | number): void => { // 输入框改变方法
    this.setState({ value: value ? value : '' })
    this.searchData()
  }
  debounce(fn: Function | React.FC, ms: number = 300) { // 防抖
    let timer = null
    return function() {
      if (timer) { clearTimeout(timer) }
      timer = setTimeout(() => {
        fn.apply(this)
      }, ms)
    }
  }
  componentDidMount() {
  }
  render() {
    return (
      <div className={'silder-bar'}>
        <AutoComplete
          className="certain-category-search"
          dropdownClassName="certain-category-search-dropdown"
          dropdownMatchSelectWidth={false}
          dropdownStyle={{ width: 300 }}
          size="large"
          style={{ width: '100%' }}
          dataSource={this.state.dataSource}
          placeholder="input here"
          optionLabelProp="value"
          allowClear
          onChange={this.handleChange}
          // onDropdownVisibleChange={this.test}
        >
          {/* <Input suffix={<Icon type="search" className="certain-category-icon" onClick={e => this.handleSearch(e)} />} /> */}
        </AutoComplete>
      </div>
    )
  }
}

export default SideBar