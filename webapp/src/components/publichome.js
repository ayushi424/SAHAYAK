import React from "react";
import {Link} from 'react-router-dom'
export default function PublicHome ()
{
return (
<React.Fragment>

    <nav class="fixed-top">
    <div class="logo"><img src="assets/images/logo.png" width="60px" height="60px" alt=" " /></div>
      <input type="checkbox" id="click"/>
      <label for="click" class="menu-btn">
          <i class="fas fa-bars"></i>
      </label>
      <ul>
          <li class="active" >
        <Link to="/PublicHome"><img src="https://img.icons8.com/color/24/000000/user-manual.png" alt="" /> Public Account</Link></li>
        <li><Link to="/"><img src="https://img.icons8.com/color-glass/24/000000/circled-left-2.png" alt=" " /> Log Out</Link></li>
      
          {/* <!-- Dark/light toggle--> */}
          <div class="dark-mode-toggle">
            <label class="theme-switch" for="checkbox">
            <input type="checkbox" class="toggle-checkbox" id="checkbox" />
            <div class="slider round"></div>
            </label>
         </div>
      </ul>
  </nav>

{/* <!-- ChatBot section--> */}
  <div class="chatbot-button">
    <i class="fa fa-comments" aria-hidden="true"></i>
  </div>

  <div class="chatarea-main">
    <div class="chat-box-header">
      ChatBot
      <span class="chat-box-toggle"
        ><i class="fa fa-times" aria-hidden="true"></i
      ></span>
    </div>
    <div class="chat-main">
      <div class="chatarea-outer"></div>
    </div>
    <div class="chat-input">
      <button id="mic">
        <i class="flaticon-microphone"></i>
      </button>
    </div>
  </div> 
  
  
{/* <!-- ChatBot Section End--> */}


<section style={{height: '95vh'}}>
      <section style={{height: '70vh'}}>
          <div class="px-3 pt-5">
              <div class="row text-dark">
                  <div
                      class="col-md-6 d-flex mt-5 flex-column text-center justify-content-center animate__animated animate__zoomIn animate__delay-0.2s">
                      <h2 class="mb-0">INSTRUCTIONS
                      </h2>
                      <br></br>
                      <h6>
                        
                          <p>1. You have to be registered user to file a complaint(FIR).</p>
                          <p>2. Click on Fill FIR form/File Complaint</p>
                          <p>3. After opening the form you have to fill all the mandatory fields in order to file an FIR.</p>
                          <p>3. After opening the form you have to fill all the mandatory fields in order to file an FIR.</p>
                          <p>4. Select correct information or complaint type and provide maximum supporting documents/videos.</p>
                          <p>5. Make sure you recheck all information you have provided is correct before submitting it .</p>
                          <p>6. Once all these steps are done, you will receive the details of your report on your email id and print out the FIR for future reference.</p>

                      </h6>
                  </div>
                  <div class="col-md-6">
                      <img class="img-fluid d-block img-fluid d-block  animate__animated animate__zoomIn animate__delay-1s"
                          src="assets/images/Instructions.png" alt=" " />
                  </div>
              </div>
              </div>
              
        </section>
 </section>
            
         {/* <!-- footer --> */}
                    
<footer class="text-white text-center text-lg-start">
            <div class="container">
              <div class="row">
                <div class="col-lg-4 col-md-4 mb-4 mb-md-0">
                  <ul class="list-unstyled mb-0 footer-list">
                    <li><h5 class="text-uppercase">Quick Links</h5></li>
                    
                    <Link to="/"><img src="https://img.icons8.com/color-glass/24/000000/circled-left-2.png" alt=" " /> File Complaint</Link>
                    <Link to="/"><img src="https://img.icons8.com/color-glass/24/000000/circled-left-2.png" alt=" " /> Log Out</Link>
                  </ul>
                </div>
                <div class="col-lg-4 col-md-4 mb-4 mb-md-0">
                  <ul class="list-unstyled mb-0 footer-list">
                    <li><h5 class="text-uppercase">Contact Us</h5></li>
                    <li>
                      <i class="fa fa-envelope-o" aria-hidden="true"></i><h5>Sahayak.inquiregmail.com</h5>
                    </li>
                    <li>
                      <i class="fa fa-phone" aria-hidden="true"></i><h5>1234-123-234</h5></li>
                    <br></br>
                   
                  </ul>
                </div>
                <div class="col-lg-4 col-md-4 mb-4 mb-md-0">   
                  <div class="container footer-list">
                    <h5 class="text-uppercase connect">Connect</h5>
                    <div class="row">
                        <div class="col-2"></div>
                      <div class="col-2"><img src="../Images/facebook.png" alt="" /></div>
                      <div class="col-2"><img src="../Images/instagram.png" alt="" /></div>
                      <div class="col-2"><img src="../Images/linkedin.png" alt="" /></div>
                      <div class="col-2"><img src="../Images/twitter.png" alt="" /></div>
                    </div>
                  </div>
                </div>
              </div>
            </div> 
            <div class="text-center p-3 copyright" >
              © 2020 Copyright:
              <Link to="/"><img src="https://img.icons8.com/color-glass/24/000000/circled-left-2.png" alt=" " /> SAHAYAK </Link>
            </div>
</footer>
</React.Fragment>

    )
}
