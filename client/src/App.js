import logo from './logo.svg';
//import Register from './pages/Authentication/Register';
import Login from './pages/Authentication/Login';
import { Routes, Route } from "react-router-dom"
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
   <Routes>
    <Route path = '/' element = {<Login/>} />
   </Routes>
  );
}

export default App;
