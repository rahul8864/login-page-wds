import { Container } from 'react-bootstrap';
import '../App.css';
import {AuthProvider} from '../contexts/AuthContext';
import Signup from './Signup';
import Dashboard from './Dashboard'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from './Login';
import PrivateRoute from './PrivateRoute';

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
           <Route exact path='/' element={<Dashboard/>}/>
             {/* <PrivateRoute exact path='/' element={<Dashboard/>}/> */}
             {/* <Route exact path='/' element={<PrivateRoute/>}>
            <Route exact path='/' element={<Login/>}/>
          </Route> */}
             <Route path='/login' element={<Login/>}/>
             <Route path='/signup' element={<Signup/>}/>
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

export default App;
