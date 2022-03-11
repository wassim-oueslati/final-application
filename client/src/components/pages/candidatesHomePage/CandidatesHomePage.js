import React from 'react';
import LoginCandidate from '../../auth/LoginCandidate';
import RegisterCandidate from '../../auth/RegisterCandidate';
import MainJobList from '../AddJobs/MainJobList';
import './CandidatesHome.css';
import backgroundLight from './image/backgroundLight.jpg'

function CandidatesHomePage() {
  return( 
  <div>
      <header style={{backgroundImage:`url(${backgroundLight})`,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover", height:450, display:"flex" , justifyContent:"space-between" , padding: '5%'}}>
        <div style={{paddingTop:200}}>
          <div className='container'>
            <h3>Welcome to Candidate section.</h3>
            <p>Register or Login to your account if you already have one.</p>
            <RegisterCandidate/>
          </div>
        </div>
        <div style={{ height:350 , width:370 , paddingTop:20}}> 
          <h6>Login to your space</h6>
          <LoginCandidate/>  
        </div> 
      </header>
      <MainJobList/>
  </div>
  ) 
}

export default CandidatesHomePage;