import { MenuAction } from '../actions/menu'

import { StoreState } from '../types/index'

import { SHOW_MENU, HIDDEN_MENU, GET_MENU_STATUS } from '../constants'

export function menu(state: StoreState, action: MenuAction): StoreState {
  if (!action.type.includes('INIT')) {
    const slider = document.querySelector('.slider-bar') as HTMLElement
    switch(action.type) {
      case SHOW_MENU:
        if (!state.menuStatus) {
          slider.classList.add('show')
        }
        return { ...state, menuStatus: true}
      case HIDDEN_MENU:
        if (state.menuStatus) {
          slider.classList.remove('show')
        }
        return { ...state, menuStatus: false }
      case GET_MENU_STATUS:
        return state
    }
  }
  return state
}