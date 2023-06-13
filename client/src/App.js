
import Landing from './pages/Authentication/LandingPage'




import { Route,Routes } from "react-router-dom"
import './App.css'

function App() {

  
  return (
  <>
  

 
      <Routes>
          
            <Route exact path = '/' element = {<Landing/>} />


           
          




            
        
      </Routes>
    

    
 
  </>
  );
}

export default App;

