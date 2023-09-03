import React from "react";
import { NavLink } from "react-router-dom";
import '../Css/HomeAbout.css';
import homeimg from '../images/homeimg.webp';
import Same from './Same';

const Home=()=>{
    return(
        <> 
        <Same title="Jai Bageswar Dham Sarkar" 
        text="With fire in our chest, we have developed these hobbies.
        If someone asks, then tell that we are from Bageshwar."
        imgsrc={homeimg}
        btn="Read More"/>
        </>
    )
}

export default Home;