import React from 'react';
import LoginRecruiter from '../../authRecruiter/LoginRecruiter';
import RegisterRecruiter from '../../authRecruiter/RegisterRecruiter';
import lightBackground from './image/lightBackground.jpg'


function RecruitersHomePage() {
  return(
    <div>
        <header style={{backgroundImage:`url(${lightBackground})`, backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover", height:450, display:"flex" , justifyContent:"space-between" , padding: '5%'}}>
        <div style={{paddingTop:200}}>
          <div className='container'>
            <h3>Welcome to Recruiter section.</h3>
            <p>Register or Login to your account if you already have one.</p>
            <RegisterRecruiter/>
          </div>
        </div>
        <div style={{ height:350 , width:370 , paddingTop:20}}> 
          <h6>Login to your space</h6>
          <LoginRecruiter/>  
        </div> 
        </header>
    </div>
  ) 
}

export default RecruitersHomePage;