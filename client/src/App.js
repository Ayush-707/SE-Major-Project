import Navbar from './Components/Sidebar/Navbar';
import Login from './pages/Authentication/Login';
import UserHomePage from './pages/Authentication/UserHome';
import Contact from './pages/Misc/ContactUs'
import Deposit from './pages/Misc/Deposit'
import NewAccount from './pages/Misc/NewAccount'
import Transaction from './pages/Misc/Transaction'
import Withdraw from './pages/Misc/Withdraw'
import Landing from './pages/Authentication/LandingPage'

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
            <Route path = '/User/Deposit' element = {<Deposit/>} />
            <Route path = '/User/New-Account' element = {<NewAccount/>} />
            <Route path = '/User/Transaction' element = {<Transaction/>} />
            <Route path = '/User/Withdraw' element = {<Withdraw/>} />
            {/* <Route path = '/User/Page-6' element = {<Page6/>} /> */}
            
        
      </Routes>

    
 
  </>
  );
}

export default App;
{/* <Route path = '/User/loan' element = {<Loan/>} />
<Route path = '/Admin/Adminloan' element = {<Adminloan/>} />
<Route path = '/User/transaction' element = {<Transaction/>} /> */}