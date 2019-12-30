import * as constants from '../constants'

export interface ShowMenu {
  type: constants.SHOW_MENU
}

export interface HiddenMenu {
  type: constants.HIDDEN_MENU
}
export interface GetMenuStatus {
  type: constants.GET_MENU_STATUS
}

export type MenuAction = ShowMenu | HiddenMenu | GetMenuStatus

export function ShowMenu(): ShowMenu {
  return {
    type: constants.SHOW_MENU
  }
}

export function HiddenMenu(): HiddenMenu {
  return {
    type: constants.HIDDEN_MENU
  }
}

export function GetMenuStatus(): GetMenuStatus {
  return {
    type: constants.GET_MENU_STATUS
  }
}

