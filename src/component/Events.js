import React from "react";
// import { NavLink } from "react-router-dom";
 
import '../Css/ServiceStyle.css';
import Card from "./Card";
import Data from "./Data";


const Event=()=>{
    return(
        <>
{/* <h1> Our Services</h1> */}
 
<div className="services">
{Data.map((values)=>{
    return(
        <Card
        title={values.Stitle}
        imgSource={values.imgsrc}
        desc={values.desc}
        btnService={values.btnService}/>
    )
})}
    
   
</div>
        </>
    )
}

export default Event;