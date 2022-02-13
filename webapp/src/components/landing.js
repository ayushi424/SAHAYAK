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
        {/* Below code is only development example */}
        <div class="button">
        <button class="btn-solid danger" ><Link to="/"> Home </Link>  </button>      
        <button class="btn-solid danger" ><Link to="/policesignup"> Police Account</Link></button>
        <button class="btn-solid danger" ><Link to="/publicsignup"> Public Account</Link></button>
        <button class="btn-solid danger" ><Link to="/policehome"> Police Home</Link></button>
        <button class="btn-solid danger" ><Link to="/publichome"> Public Home</Link></button> 
         </div>
      {/* Development example ends */}
        <h1>Welcome to SAHAYAK</h1>
        <h2>You want to continue as ?</h2>
        <br></br>       
        <div class="cards-list">
            <div class="card 1">
              <div class="card_title">
                <p>PUBLIC</p>
                </div>
        <div class="card_image">
             <img src="assets/images/public.png" alt="" />
             <Link to="/publicsignup"><img src="https://img.icons8.com/color-glass/24/000000/circled-left-2.png" alt=" " /> Click here to login as PUBLIC</Link>
            </div>
        </div>
        
        <div class="card 2">
            <div class="card_title ">
                <p>POLICE</p>
            </div>
            <div class="card_image">
                
                <img src="assets/images/police.jpg" alt=""/>
                <Link to="/policesignup"><img src="https://img.icons8.com/color-glass/24/000000/circled-left-2.png" alt=" " /> Click here to login as POLICE</Link>

                {/* /*<div class="card_title">
                    <a href = "PoliceHome.js"><p>Click here for Police Account</p></a>
                </div>*/ }
                
            </div>
        </div>
    </div>
    </React.Fragment>
)
  }
