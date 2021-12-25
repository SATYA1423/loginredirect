import './App.css';
import {BrowserRouter as Router ,Route,Routes} from 'react-router-dom'
import Login from "./Pages/Login"; 
import Profile from "./Pages/Profile";
import Block from './Pages/Block';

function App() {
  return (
   <div>
     <Router>
       <Routes>
         <Route path="/" element={<Login/>} />
         <Route path="/Profile" element={<Profile/>}/>
         <Route path="/Block" element={<Block/>}/>
         <Route/>
       </Routes>

     </Router>
</div>
 );

}

export default App;