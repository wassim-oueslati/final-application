import React from 'react';


function Services() {
    return (
    <section className="page-section" id="services">
        <div className="container px-4 px-lg-5">
            <h2 className="text-center mt-0">At Your Service</h2>
            <hr className="divider" />
            <div className="row gx-4 gx-lg-5">
                <div className="col-lg-3 col-md-6 text-center">
                    <div className="mt-5">
                        <div className="mb-2"><i className="bi bi-card-checklist fs-1" style={{color:"#f4623a"}}></i></div>
                        <h3 className="h4 mb-2">Search Millions of Jobs</h3>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 text-center">
                    <div className="mt-5">
                        <div className="mb-2"><i className="bi-laptop fs-1" style={{color:"#f4623a"}}></i></div>
                        <h3 className="h4 mb-2">Up to Date</h3>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 text-center">
                    <div className="mt-5">
                        <div className="mb-2"><i className="bi bi-people-fill fs-1" style={{color:"#f4623a"}}></i></div>
                        <h3 className="h4 mb-2">Easy To Manage Jobs</h3>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 text-center">
                    <div className="mt-5">
                        <div className="mb-2"><i className="bi bi-lock fs-1" style={{color:"#f4623a"}}></i></div>
                        <h3 className="h4 mb-2">Web Security</h3>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Services