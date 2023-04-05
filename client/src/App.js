import Login from './pages/Authentication/Login';
import UserHomePage from './pages/Authentication/UserHome';
import { Routes, Route } from "react-router-dom"

function App() {
  return (
   <Routes>
    <Route path = '/' element = {<Login/>} />
    <Route path = '/User/Home' element = {<UserHomePage/>} />
   </Routes>
  );
}

export default App;
