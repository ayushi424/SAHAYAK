import React from "react"
import { Link } from "react-router-dom"

export default function PoliceSignup()
{ 
return (
<React.Fragment>
<div class="header"> 
            <div class="logo"> 
            <img src="assets/images/logo.png" alt=""/>
            </div>
        </div> 
        
            
        <button class="btn-solid danger" ><Link to="/"> Log Out</Link>  </button>        
        


<div class="container">
	<div class="form-contaier">
		<div class="signin-signup">
		<form action="" class="sign-in-form"></form>
			<h1>POLICE AUTHENTICATION</h1>
            <br></br>
			<h2 class="title">Sign in</h2>
			<div class="input-field">
				<i class="fas fa-user"></i>
				<input type="text" placeholder="Username" />
			</div>
			<div class="input-field">
				<i class="fas fa-lock"></i>
				<input type="password" placeholder="Password"/>
			</div>
			<input type="submit" value="login" class="btn-solid" />
			
		{/* </form> */}
        
		<form action="" class="sign-up-form"></form>
			{/* <h1>POLICE AUTHENTICATION</h1> */}
            <br></br>
			<h2 class="title">Sign up</h2>
			<div class="input-field">
				<i class="fas fa-user"></i>
				<input type="text" placeholder="Legal First Name" />
			</div>
			<div class="input-field">
				<i class="fas fa-user"></i>
				<input type="text" placeholder="Lastname" />
			</div>
			<div class="input-field">
				<i class="fas fa-envelope"></i>
				<input type="text" placeholder="Email" />
			</div>
			<div class="input-field">
				<i class="fas fa-lock"></i>
				<input type="password" placeholder="Password" />
			</div>
			<input type="submit" value="Sign up" class="btn-solid" />
            <button class="btn-solid transparent" id="sign-up-btn" >Sign up</button>
			
		{/* </form> */}
        
	</div>
</div>
<div class="panels-container">
	<div class="panel left-panel">
		<div class="content">
			<h3>New here ?</h3>
            <h4> Read insturctions to understand </h4>
		 <button class="btn-solid secondary" ><Link to="/instructions"> Instructions</Link></button> 
            
            <br></br>
            
                {/* <button class="pushable">
                <span class="front">Sign in with Police Account</span>
            </button> */}
		</div>
        
		<img src="assets/images/undraw_maker_launch_crhe.svg" class="image" alt=" " />        
	</div>
	<div class="panel right-panel">
		<div class="content">
			<h3>Already a member ?</h3>
			<button class="btn-solid transparent" id="sign-in-btn">Sign in</button>
            <br></br>
           
		</div>
       
		<img src="assets/images/undraw_press_play_bx2d.svg" class="image" alt=" " />
	</div>
</div>
</div>
   
   </React.Fragment>
)
  }
