import React  from 'react';
import './App.css';
import  { Link,Route,Routes} from 'react-router-dom';
import Home from './Components/Home';
import Students from './Components/Students';
import ContactUs from './Components/ContactUs';
function App() {
  return (
    <div className="App">
      <div style={{display:"flex",flexDirection:"row",justifyContent:"space-around",marginTop:"none",backgroundColor:"#081e6f",color:"White"}} className='linkDiv'>
        <Link style={{color:"white",textDecoration:"none",padding:"1em",fontStyle:"oblique"}} to= "/">Home</Link>
        <Link style={{color:"white",textDecoration:"none",padding:"1em",fontStyle:"oblique"}} to="/students">Students</Link>
        <Link style={{color:"white",textDecoration:"none",padding:"1em",fontStyle:"oblique"}} to="/contactUs">Contact Us</Link>
      </div>
      <Routes>
        <Route path='/' element = {<Home/>} />
        <Route path='/students' element = {<Students/>} />
        <Route path='/contactUs' element = {<ContactUs/>} />
      </Routes>
    </div>
  );
}

export default App;
