import React from 'react';
import { useSelector } from 'react-redux';
import { Spinner } from 'reactstrap';
import './DashboardRecruiter.css';
import CvList from '../AddCV/CvList';
import EditRecruiter from '../../authRecruiter/EditRecruiter';
import Addjobs from '../AddJobs/Addjobs';


function DashboardRecruiter() {
  const recruiter = useSelector((state) => state.authRecReducer.recruiter);
  console.log(recruiter)

  if (!recruiter) {
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <Spinner
          style={{ width: '3rem', height: '3rem', color: 'secondary' }}
          type="grow"
        />
      </div>
    );
  }

  return (
    <div> 
        <div style={{background: "-webkit-linear-gradient(left, #afafc0, #f5f7f8)", padding:"1%" }}>  
            <div className="container emp-profile" style={{padding:"1%"}}>
                <form method="post">
                <div className="row">
                    <div className="col-md-4">
                        <div className="profile-img">
                            <img src={`/uploads/${recruiter.companyLogo}`} alt="..."/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="profile-head">
                            <h5>{recruiter.companyName}</h5>
                            <h6>{recruiter.business}</h6>
                            <p className="proile-rating">Location : <span>{recruiter.location}</span></p>
                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About us</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div style={{padding:"1%"}}>
                            <EditRecruiter recruiter={recruiter}/>
                        </div>
                        <div style={{padding:"1%"}}>
                            <Addjobs/>
                        </div>
                    </div>
                </div>
                <div style={{marginLeft:350}}>
                    <div className="col-md-8">
                        <div className="tab-content profile-tab" id="myTabContent">
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>Date of opening:</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>{recruiter.dateOfCreation.split("T")[0]}</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>Company Name:</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>{recruiter.companyName}</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>Email:</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>{recruiter.email}</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>number of employees:</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>{recruiter.employees}</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <label>Company Bio:</label><br/>
                                        <p>{recruiter.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </form>           
            </div>
        </div>
        <CvList/> 
    </div>        
  )
}

export default DashboardRecruiter;