import React from 'react'
import {BrowserRouter as Router, Routes, Route,Navigate} from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

export default function PrivateRoute({component: Component, ...rest}) {
  // export default function PrivateRoute({children, ...rest}) {
    const {currentUser} = useAuth()
    // return currentUser ? <Component {...rest}/> : <Navigate to='/login'/>
  // return (
  //   <Route {...rest} 
  //   render={props => {
  //      return currentUser ? <Outlet {...props}/> : <Navigate to='/login'/>
  //   }}>

  //   </Route>)
  // return <Route {...rest}>{currentUser ? children:<Navigate to='/login'/>}</Route>
  // return currentUser ? <Outlet {...props}/> : <Navigate to="/login" />;
  return (
    <div {...rest}
  render={props => {
         return currentUser ? <Component {...props}/> : <Navigate to='/login'/>
      }}>
    </div>)
  
}
// const PrivateRoute = ({ children }) => {
//   const {currentUser} = useAuth() // isauth() returns true or false based on localStorage
  
//   return currentUser ? children : <Navigate to="/login" />;
// }
// https://stackoverflow.com/questions/63690695/react-redirect-is-not-exported-from-react-router-dom
// Redirect to replace Navigate
// function PrivateRoute({ element, path }) {
//     const {currentUser} = useAuth() // isauth() returns true or false based on localStorage
//     const ele = currentUser === true ? element : <Navigate to="/login"  />;
//     return <Route path={path} element={ele} />
//   }
  // export default PrivateRoute
  // https://stackoverflow.com/questions/69864165/error-privateroute-is-not-a-route-component-all-component-children-of-rou