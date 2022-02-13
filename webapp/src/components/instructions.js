import React from "react"
import { Link } from "react-router-dom"
export default function Instructions()
{ 
return (
<React.Fragment>
<div class="header"> 
            <div class="logo"> 
            <img src="assets/images/logo.png" alt=""/>
            </div>
        </div> 
        <div class="button">
        <button class="btn-solid danger" ><Link to="/"> Home </Link>  </button>      
        <button class="btn-solid danger" ><Link to="/policesignup"> Police Account</Link></button>
        <button class="btn-solid danger" ><Link to="/publicsignup"> Public Account</Link></button> 
         </div>

         <section style={{height: '95vh'}}>
      <section style={{height: '70vh'}}>
          <div class="px-3 pt-5">
              <div class="row text-dark">
                  <div
                      class="col-md-6 d-flex mt-5 flex-column text-center justify-content-center animate__animated animate__zoomIn animate__delay-0.2s">
                      <h2 class="mb-0"> IMPORTANT INSTRUCTIONS </h2>
                      <br></br>
                      <h6>
                        {/* <h3>To Signup</h3> */}
                          <p>1. Enter the <b>LEGAL NAME</b> that you use as per government Identity Proofs.</p>
                          <p>2. You will be asked to verify your identity so make sure you enter correct information or else you might get blocked from using our services.</p>
                          <p>3. Create a password as per <b>Standard guidelines</b></p>
                          <p>4. Once signed up and verified your identity, upon verification the team may ask you for more relevant information over a <b>unique code confirmation</b>.</p>
                          <li>An unique code will be given incase if we require additional supporting documents regarding the complaint which is strictly confidential and must not be shared with any one.
                              In case you get a call/email/message etc asking to disclose unique code immediately inform the team and make sure not to disclose any details regarding the complaint.
                          </li>
                          <p>5. Do not Share crucial information as password, unique code, tracking id etc to any third person. </p>
                          <p>6. Kindly maintain <b>STRICT CONFIDENTAILITY</b> for better and smooth experience.</p>

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
</React.Fragment>
)
}
