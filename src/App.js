 import React from "react";
import { Routes,Route } from 'react-router-dom';
import Home from "./component/Home";
import About from "./component/About";
import Events from "./component/Events";
import Videos from "./component/Videos";
import Contact from "./component/Contact"; 
//import Error from "./component/Error";
import List from "./component/List";
import Footer from "./component/Footer";


const App=()=>{
  return(
<>
<List />
<Routes>
<Route path="/" element={<Home />}/> 
<Route path="/about" element={<About/>}/> 
<Route path="/events" element={<Events/>}/> 
<Route path="/contact" element={<Contact/>}/> 
<Route path="/videos" element={<Videos/>}/> 
 
</Routes>
{/* <h1>App Component</h1> */}
<Footer/>
</>
  )
 }

 export default App;
