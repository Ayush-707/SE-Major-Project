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
import Deposit from './pages/Admin/Deposit'
import Req from './pages/Admin/PendingReq'
import Display from './pages/User/display'
import History from './pages/Admin/History'
import Whistory from './pages/Admin/wHistory'
import InAccount from './pages/User/InAccount'
import FirstPage from './pages/Admin/FirstPage'
import InvestDetail from './pages/Admin/InvestDetail'
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
            
            
           



            <Route path = '/Admin/Auth' element = {<Log/>} />
            <Route path = '/Admin/Home' element = {<AdminHomePage/>} /> 
            <Route path = '/Admin/Withdraw' element = {<Withdraw/>} />
            <Route path = '/Admin/Deposit' element = {<Deposit/>} />
            <Route path = '/Admin/PendingReq' element = {<Req/>} />
            <Route path = '/Admin/History' element = {<History/>} />
            <Route path = '/Admin/wHistory' element = {<Whistory/>} />
            <Route path = '/Admin/FirstPage' element = {<FirstPage/>} />
            <Route path = '/Admin/InvestDetail' element = {<InvestDetail/>} />
           




            
        
      </Routes>
    

    
 
  </>
  );
}

export default App;

/*"@testing-library/react": "^14.0.0",


{
  "name": "se-major-project",
  "version": "1.0.0",
  "description": "* User Authentication: The system should have a secure authentication mechanism that allows users to log in and access their accounts. This can be achieved using JWT tokens or other secure authentication methods.",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/Ayush-707/SE-Major-Project.git"
  },
  "author": "",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/Ayush-707/SE-Major-Project/issues"
  },
  "homepage": "https://github.com/Ayush-707/SE-Major-Project#readme",
  "dependencies": {
    "@heroicons/react": "^1.0.6",
    "@testing-library/react": "^14.0.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "@babel/plugin-syntax-jsx": "^7.21.4",
    "@babel/preset-env": "^7.21.4",
    "@babel/preset-react": "^7.18.6",
    
    "react-test-renderer": "^18.2.0"
  },
  "devDependencies": {
    "jest": "^29.5.0"
  }
}


*/