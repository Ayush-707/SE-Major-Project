import Navbar from './Components/Sidebar/Navbar';
import Login from './pages/Authentication/Login';
import UserHomePage from './pages/Authentication/UserHome';
import Page1 from './pages/Misc/Page-1'
import Page2 from './pages/Misc/Page-2'
import Page3 from './pages/Misc/Page-3'
import Page4 from './pages/Misc/Page-4'
import Page5 from './pages/Misc/Page-5'
import { Route,Routes } from "react-router-dom"
import './App.css'

function App() {

  
  return (
  <>
  
  <Navbar/>
      <Routes>
          
            <Route exact path = '/' element = {<Login/>} />
            <Route path = '/User/Home' element = {<UserHomePage/>} />
            <Route path = '/User/Page-1' element = {<Page1/>} />
            <Route path = '/User/Page-2' element = {<Page2/>} />
            <Route path = '/User/Page-3' element = {<Page3/>} />
            <Route path = '/User/Page-4' element = {<Page4/>} />
            <Route path = '/User/Page-5' element = {<Page5/>} />
        
      </Routes>

    
 
  </>
  );
}

export default App;
