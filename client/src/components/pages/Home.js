import React from 'react';
import MainJobList from './AddJobs/MainJobList';
import ContactUs from './ContactUs';
import Services from './Services';
import MainProfileList from './AddCandidateProfile/MainProfileList';


const Home = () => {
  return (
    <div id="page-top">
      <header className="masthead">
            <div className="container px-4 px-lg-5 h-100">
                <div className="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
                    <div className="col-lg-8 align-self-end">
                        <h1 className="text-white font-weight-bold">Welcome To Our Website!</h1>
                        <hr className="divider" />
                    </div>
                    <div className="col-lg-8 align-self-baseline">
                        <h3 className="text-white-75 mb-5">Post or Apply for a Job</h3>
                        <a className="btn" href="#services" style={{  backgroundColor: "#f4623a" , borderRadius:50}}>Find Out More</a>
                    </div>
                </div>
            </div>
      </header>
      <Services/>
      <MainJobList/>
      <MainProfileList/>
      <ContactUs/>
    </div>
  );
};

export default Home;