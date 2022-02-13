import React from "react"
import { Link } from "react-router-dom"
export default function Landing()
{ 
return (
<React.Fragment>
<nav class="fixed-top">
    <div class="logo"><img src="../Images/logo.png" width="60px" height="60px" ></img></div>
      <input type="checkbox" id="click"/>
      <label for="click" class="menu-btn">
          <i class="fas fa-bars"></i>
      </label>
      <ul>
          <li><a class="active" href="home.html" class=" text-decoration: none"><img src="https://img.icons8.com/color/24/000000/user-manual.png"/> Instructions</a></li>
          <li><a href="./report.html"><img src="https://img.icons8.com/color/24/000000/marker--v1.png"/> File Complaint</a></li>

          <li><a href="../index.html"><img src="https://img.icons8.com/color-glass/24/000000/circled-left-2.png"/>
                  Log Out</a></li>
          
          {/* <!-- Dark/light toggle--> */}
          <div class="dark-mode-toggle">
            <label class="theme-switch" for="checkbox">
            <input type="checkbox" class="toggle-checkbox" id="checkbox" />
            <div class="slider round"></div>
            </label>
         </div>
      </ul>
  </nav>
</React.Fragment>
)
  }
