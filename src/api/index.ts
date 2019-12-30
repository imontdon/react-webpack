import Mock from 'mockjs'
import Nav from './nav'
import Menu from './menu'



// nav
Mock.mock(/\/api\/mock\/nav/, 'get', Nav.fetchNav)

// menu
Mock.mock(/\/api\/mock\/menu/, 'get', Menu.fetchMenu)
