export interface MenuItem {
  icon: string,
  type: string,
  subTypes: SubMenuItem[]
}
export interface SubMenuItem {
  icon: string,
  classify: string
}