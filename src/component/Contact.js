import React from "react";
import '../Css/Form.css';
 

const Contact=()=>{
    return(
        <>
         <div className="container">
<h1>Get In Touch</h1>
<h2>contact@BageswardhamSarkar.com</h2>
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.747370076572!2d79.79961587450772!3d24.838311646145012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3982ed022861ce07%3A0x423758b10e540e22!2sBageshwar%20Balaji%20Temple!5e0!3m2!1sen!2sin!4v1693572712265!5m2!1sen!2sin" 
width="100%" 
height="450" 
style={{ border:0}}
 allowFullScreen="" loading="lazy" 
 referrerpolicy="no-referrer-when-downgrade"></iframe>

 <div className="bottom">
 <div className="card">
 <img src="https://hindupost.in/wp-content/uploads/2023/01/bageshwar-696x398.png"/> 
 <p>For Donation scan this QR</p>
 <img src="https://bageshwardham.live/wp-content/uploads/2022/09/download.png"/>
 <p>
 Contact number of Bageshwar Dham -  8982862921 / 8120592371</p>
 <p>Village – Garha, Post – Ganj, District – Chhatarpur

Madhya Pradesh, Pin – 471105</p>

 </div>
 
    <div className="contact-form">
        <form action="#" method="POST">
            <input type="text" name="username" placeholder="username" autoComplete="off"
            required
             />
              <input type="text" name="Email" placeholder="Email" autoComplete="off"
            required
             />
             <input type="text"
             name="Mobile Number" placeholder="Mobile number" autoComplete="off" required></input>
            
    <h4>Reason to contact</h4>
    <label className="label">
        <select className="continent">
          <option value="general">Ram Katha(Bhagwat)</option>
          <option value="travel">Divya Darwar</option>
          <option value="music">Others</option>
        </select>
      </label>

{/* <input type="dropdown"></input> */}
<textarea name="Message" cols="30"
   rows="3" 
required 
autoComplete="off" placeholder="Enter your message"></textarea>
<input type="submit" value="submit" className="button"/>
        </form>
    </div>
 </div> 
 </div>
 
        </>
    )
}

export default Contact;