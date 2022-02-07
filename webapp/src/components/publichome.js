import React from "react";
import {Link} from 'react-router-dom'
export default function PublicHome ()
{
return (
<React.Fragment>
  
    <section style={{height: '95vh'}}>
      <section style={{height: '70vh'}}>
          <div class="px-3 pt-5">
              <div class="row text-dark">
              <ul >
          <li class="active" >
        <Link to="/PublicHome"><img src="https://img.icons8.com/color/24/000000/user-manual.png" alt="" /> Public Account</Link></li>
        <li><Link to="/"><img src="https://img.icons8.com/color-glass/24/000000/circled-left-2.png" alt=" " /> Log Out</Link></li>
      </ul>
                  <div
                      class="col-md-6 d-flex mt-5 flex-column text-center justify-content-center animate__animated animate__zoomIn animate__delay-0.2s">
                      <h2>INSTRUCTIONS</h2>
                      <br></br>
                      <h6><p>1. You have to be registered user to file a complaint(FIR).</p>
                          <p>2. Click on Fill FIR form/File Complaint</p>
                          <p>3. After opening the form you have to fill all the mandatory fields in order to file an FIR.</p>
                          <p>3. After opening the form you have to fill all the mandatory fields in order to file an FIR.</p>
                          <p>4. Select correct information or complaint type and provide maximum supporting documents/videos.</p>
                          <p>5. Make sure you recheck all information you have provided is correct before submitting it .</p>
                          <p>6. Once all these steps are done, you will receive the details of your report on your email id and print out the FIR for future reference.</p>
</h6>
                  </div>
                  <div class="col-md-6" >
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
