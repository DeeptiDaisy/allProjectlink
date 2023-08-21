 import React from "react";
import { Routes,Route } from 'react-router-dom';
import Home from "./component/Home";
import About from "./component/About";
import Services from "./component/Services";
import Videos from "./component/Videos";
import Contact from "./component/Contact"; 
import Error from "./component/Error"

const App=()=>{
  return(
<>
<Routes>
<Route path="/" element={<Home />}/> 
<Route path="/about" element={<About/>}/> 
<Route path="/services" element={<Services/>}/> 
<Route path="/contact" element={<Contact/>}/> 
<Route path="/videos" element={<Videos/>}/> 
 
</Routes>
{/* <h1>App Component</h1> */}
</>
  )
 }

 export default App;
