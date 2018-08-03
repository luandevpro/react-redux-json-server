import React, { Component } from 'react'
import { BrowserRouter as Router , Switch , Route } from 'react-router-dom'
import Menu from './components/Menu/Menu'
import routes from './routes'

class App extends Component {
  showRoutes = (routes) => {
      var result = null
      if(routes.length > 0){
         result = routes.map((route,index) => {
            return <Route 
                     path={route.path}
                     exact={route.exact}
                     component={route.main}
                     key={index}
                  />
      })}
      return <Switch>{ result }</Switch>
   }  
  render() {
    return (
      <Router>
         <div>
            <Menu/>
            <div className="container">
               <div className="row">
                  { this.showRoutes(routes)}
               </div>
            </div>
         </div>
      </Router>
   )
  }
}

export default App
