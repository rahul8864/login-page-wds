import React from 'react'
import {Route, Navigate} from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

// export default function PrivateRoute({component: Component, ...rest}) {
//     const {currentUser} = useAuth()
//   return (
//     <Route {...rest} 
//     render={props => {
//        return currentUser ? <Component {...props}/> : <Navigate to='/login'/>
//     }}>

//     </Route>
//   )
// }
// https://stackoverflow.com/questions/63690695/react-redirect-is-not-exported-from-react-router-dom
// Redirect to replace Navigate
function PrivateRoute({ element, path }) {
    const {currentUser} = useAuth() // isauth() returns true or false based on localStorage
    const ele = currentUser === true ? element : <Navigate to="/login"  />;
    return <Route path={path} element={ele} />
  }
  export default PrivateRoute