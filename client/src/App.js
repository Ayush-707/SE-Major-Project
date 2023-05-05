import Navbar from './Components/Sidebar/Navbar';
import Login from './pages/Authentication/UserLogin';
import UserHomePage from './pages/Authentication/UserHome';
import Contact from './pages/User/ContactUs'
import NewAccount from './pages/User/NewAccount'
import Transaction from './pages/User/Transaction'
import Withdraw from './pages/Admin/Withdraw'
import Landing from './pages/Authentication/LandingPage'
import Log from './pages/Authentication/AdminLogin'
import AdminHomePage from './pages/Authentication/AdminHome'
import Req from './pages/Admin/PendingReq'
import Display from './pages/User/display'
import Transact from './pages/Admin/Transact'
import InAccount from './pages/User/InAccount'
import FirstPage from './pages/Admin/FirstPage'
import InvestDetail from './pages/Admin/InvestDetail'
import Depoe from './pages/Admin/Depoe'
import Account from './pages/Admin/Account'
//import AddEmployee from './pages/Admin/AddEmployee'



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
            <Route path = '/User/display' element = {<Display/>} />
            <Route path = '/User/InAccount' element = {<InAccount/>} />
            <Route path = '/Admin/Transact' element = {<Transact/>} />
            
            
           



            <Route path = '/Admin/Auth' element = {<Log/>} />
            <Route path = '/Admin/Home' element = {<AdminHomePage/>} /> 
            <Route path = '/Admin/Withdraw' element = {<Withdraw/>} />
            <Route path = '/Admin/PendingReq' element = {<Req/>} />
            <Route path = '/Admin/FirstPage' element = {<FirstPage/>} />
            <Route path = '/Admin/InvestDetail' element = {<InvestDetail/>} />
            <Route path = '/Admin/Depoe' element = {<Depoe/>} />
            <Route path = '/Admin/Account' element = {<Account/>} />
           




            
        
      </Routes>
    

    
 
  </>
  );
}

export default App;

