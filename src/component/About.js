import React from "react";
// import { NavLink } from "react-router-dom";
import aboutimg from '../images/dhirendra-krishna-shastri-png-images-thumbnail-1688447797.png';
import '../Css/HomeAbout.css';
import Same from './Same';

const About=()=>{
    return(
        <> 
         <Same title="Dhirendra Krishna Shastri" 
        text="Dhirendra Krishna Shastri (born on 4 July 1996 as Dhirendra Krishna Garg) also known as Bageshwar Dham Sarkar or Maharaj, is the peethadhish of the Bageshwar Dham Sarkar, a religious pilgrimage site in Chhatarpur district of Madhya Pradesh, India.Shastri recites stories at Bageshwar Dham in Chhatarpur."
        imgsrc={aboutimg}
        btn="Know More"/>
        </>
    )
}

export default About;