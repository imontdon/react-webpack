import Mock from 'mockjs'
import Nav from './nav'



// nav
Mock.mock(/\/api\/mock\/nav/, 'post', Nav.fetchNav)