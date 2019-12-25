export interface NavItem {
  icon: string, 
  classify: string, 
  sites: NavSite[]
}
export interface NavSite {
  href: string, 
  logo: string, 
  name: string, 
  desc: string 
}
