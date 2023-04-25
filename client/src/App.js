import Navbar from './Components/Sidebar/Navbar';
import Login from './pages/Authentication/UserLogin';
import UserHomePage from './pages/Authentication/UserHome';
import Contact from './pages/User/ContactUs'
import Deposit from './pages/Admin/Deposit'
import NewAccount from './pages/User/NewAccount'
import Transaction from './pages/User/Transaction'
import Investment from './pages/User/Investment'
import Withdraw from './pages/Admin/Withdraw'
import Landing from './pages/Authentication/LandingPage'


import Log from './pages/Authentication/AdminLogin'
import AdminHomePage from './pages/Authentication/AdminHome'

//import Page6 from './pages/Misc/'
// import Adminloan from './pages/Loan&Transaction/Adminloan'
// import Loan from './pages/Loan&Transaction/Loan'
// import Transaction from './pages/Loan&Transaction/Transaction'
import { Route,Routes } from "react-router-dom"
import './App.css'

function App() {

  
  return (
  <>
  

  <Navbar/>
      <Routes>
          
            <Route exact path = '/' element = {<Landing/>} />


            <Route exact path = '/User/Auth' element = {<Login/>} />
            <Route path = '/User/Home' element = {<UserHomePage/>} />
            <Route path = '/User/Contact' element = {<Contact/>} />
            <Route path = '/User/New-Account' element = {<NewAccount/>} />
            <Route path = '/User/Transaction' element = {<Transaction/>} />
            <Route path = '/User/Investment' element = {<Investment/>} />
            



            <Route path = '/Admin/Auth' element = {<Log/>} />
            <Route path = '/Admin/Home' element = {<AdminHomePage/>} /> 
            <Route path = '/Admin/Withdraw' element = {<Withdraw/>} />
            <Route path = '/Admin/Deposit' element = {<Deposit/>} />
            
        
      </Routes>
    

    
 
  </>
  );
}

export default App;
