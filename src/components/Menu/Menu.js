import React, { Component } from 'react'
import { Route , Link } from 'react-router-dom'

const menus = [
   {
      name: 'Home',
      exact: true,
      to: '/'
   },
   {
      name: 'Products',
      exact: false,
      to: '/products-list'
   }
]
const CustomLink = ({exact,children,to}) => {
   return (
      <Route
         path={to.pathname}
         exact={exact}
         children={({match}) => (
            <li>
               <Link to={to}>{ children }</Link>
            </li>
         )}
      />
   )
}
class Menu extends Component {
   showMenu = (menus) => {
      var result = null
      if(menus.length > 0) {
         result = menus.map((menu,index) => {
            return (
               <CustomLink 
                  key={index} 
                  exact={menu.exact} 
                  to = {{
                     pathname: menu.to
                  }}
               >
                  { menu.name.toUpperCase() }
               </CustomLink>
               )  
            })
         }
      return result
   }
   render() {
      return (
         <nav className="navbar navbar-default">
            <div className="container-fluid">
               <div className="navbar-header">
                  <a className="navbar-brand">React API</a>
               </div>
               <ul className="nav navbar-nav">
                  { this.showMenu(menus) }
               </ul>
            </div>
         </nav>
      );
   }
}

export default Menu