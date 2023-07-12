import { useState } from 'react'
import './style.css';
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
//import Loginsignup from './Loginsignup'
import Main from './Main'
import Registration from './Registration';
import Loginsignup from './Loginsignup';
import About from './About';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
     <Routes>
    <Route exact path='/'element={<Registration/>}/>
    <Route path="/Loginsignup"element={<Loginsignup/>}/>
    <Route path="/About"element={<About/>}/>
    </Routes>

   </Router>
  )
}
export default App;