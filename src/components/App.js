import { Container } from 'react-bootstrap';
import '../App.css';
import {AuthProvider} from '../contexts/AuthContext';
import Signup from './Signup';
import Dashboard from './Dashboard'
import {BrowserRouter as Router, Routes, Route, useParams} from 'react-router-dom'
import Login from './Login';
import PrivateRoute from './PrivateRoute';
import ForgotPassword from './ForgotPassword';
import UpdateProfile from './UpdateProfile';

function App() {
  return (
    // <AuthProvider>
    // <Container className='d-flex align-items-center justify-content-center' style={{minHeight:'100vh'}}>
    //   <div className='w-100' style={{maxWidth:'400px'}}>
    //   <Signup />
    //   </div> 
    // </Container>
    // </AuthProvider>  old 
    <Container className='d-flex align-items-center justify-content-center' style={{minHeight:'100vh'}}>
       <div className='w-100' style={{maxWidth:'400px'}}>
       <Router>
         <AuthProvider>
           <Routes>
           {/* <PrivateRoute exact path='/' element={<Dashboard/>}/> */}
             {/* <PrivateRoute exact path='/' element={<Dashboard/>}/> */}
             {/* <Route exact path='/' element={<PrivateRoute/>}>
            <Route exact path='/login' element={<Login/>}/>
            
          </Route> */}
          <Route exact path='/' element={<PrivateRoute><Dashboard/></PrivateRoute>}/>
          <Route path='/update-profile' element={<PrivateRoute><UpdateProfile/></PrivateRoute>}/>
             {/* <Route exact path='/' element={<Dashboard/>}/> */}
             <Route path='/login' element={<Login/>}/>
             <Route path='/signup' element={<Signup/>}/>
             <Route path='/forgot-password' element={<ForgotPassword/>}/>
             <Route path='/:pageName' element={<PageNotFound/>}/>
           </Routes>
         </AuthProvider>
       </Router>
       {/* <Signup /> */}
       </div>
    </Container>
  )
}
// https://stackoverflow.com/questions/54744949/uncaught-typeerror-cannot-destructure-property-name-of-undefined-or-null
// https://stackoverflow.com/questions/63124161/attempted-import-error-switch-is-not-exported-from-react-router-dom?page=1&tab=scoredesc#tab-top

// Switch replace Routes
// component={SignUp} to replace element={<Signup/>}

function PageNotFound() {
  const params = useParams()
 return <p>'/{params.pageName}' Page Not Found 🤣404🤣</p>
}
export default App;
