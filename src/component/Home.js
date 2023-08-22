import React from "react";
import { NavLink } from "react-router-dom";
import homeimg from '../images/homeimg.webp';
import '../Css/HomeAbout.css';

const Home=()=>{
    return(
        <>
<div className="mainSection">
   <div className="contentBox">
<h1>Jai Bageswar Dham Sarkar</h1>
<p>
Laga ke aag daulat mein,
Hamne ye shauk paale hain !!
Koi poochhe to kah dena,
Ham baageshvar vaale hain !!

 </p>
 <div className="btnBox">
    <div className="btn">
        <NavLink to="/about" className="readMore">
            Read More
        </NavLink>
    </div>
 </div>
</div>  
<div className="imgContainer">
    <img src={homeimg} alt="home"/>
    </div> 
 </div>
        </>
    )
}

export default Home;