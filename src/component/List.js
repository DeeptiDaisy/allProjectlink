import React from "react";
import logo from '../images/JaisreeRam.jpg';
import { NavLink } from "react-router-dom";
//import { Icon } from "@mui/material/Icon";
// import SearchIcon from '@mui/icons-material/Search';
// import PersonIcon from '@mui/icons-material/Person';
// import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import '../Css/ListStyle.css';

const List=()=>{
    return(
        <>
<header>
    <div className="container container-flex">
        <div className="logoContainer">
            <img src={logo} alt="logo" className="logo"/>
        </div>
        <nav>
            <div className="list">
<NavLink to="" className="listItem" activeClassName="activeItem">Home</NavLink>
<NavLink to="/about" className="listItem" activeClassName="activeItem">About</NavLink>
<NavLink to="/videos" className="listItem" activeClassName="activeItem">Videos</NavLink>
<NavLink to="/events" className="listItem" activeClassName="activeItem">Events</NavLink>
<NavLink to="/contact" className="listItem" activeClassName="activeItem">Contact</NavLink>
            </div>
        </nav>
        {/* <div className="icons">
            <SearchIcon/>
            <PersonIcon/>
            <LocalPhoneIcon/>
        </div> */}
    </div>

</header>
        </>
    )
}

export default List;