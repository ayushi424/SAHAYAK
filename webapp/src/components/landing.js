import React from "react"
import { Link } from "react-router-dom"
export default function Landing()
{ 
return (
<React.Fragment>
        <div class="header"> 
            <div class="logo"> 
            <img src="assets/images/logo.png" alt=""/>
            </div>
        </div> 
      
        <h1>Welcome to SAHAYAK</h1>
        <h2>You want to continue as ?</h2>
        <br></br>
        <ul >
          <li class="active" >
        <Link to="/PublicHome"><img src="https://img.icons8.com/color/24/000000/user-manual.png" alt="" /> Public Account</Link></li>
        <li><Link to="/"><img src="https://img.icons8.com/color-glass/24/000000/circled-left-2.png" alt=" " /> Log Out</Link></li>
      </ul>
         
        <div class="cards-list">
            <div class="card 1">
              <div class="card_title">
                <p>PUBLIC</p>
                </div>
        <div class="card_image">
             <img src="assets/images/public.png" alt="" />
              
            </div>
        </div>
        
        <div class="card 2">
            <div class="card_title ">
                <p>POLICE</p>
            </div>
            <div class="card_image">
                
                <img src="assets/images/police.jpg" alt=""/>
                {/* /*<div class="card_title">
                    <a href = "PoliceHome.js"><p>Click here for Police Account</p></a>
                </div>*/ }
                
            </div>
        </div>
    </div>
    </React.Fragment>
)
  }
