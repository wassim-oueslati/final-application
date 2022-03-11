import React from "react";
import './Job.css'
import JobApplication from "../../AddCV/JobApplication";

function JobCard({job}) {
  return (
    <div style={{width:400}}>
			<div className="job-card">
				<div className="job-card__content">
					<div className="job-card__content-top">
						<div className="job-card_img">
							<img src={`/uploads/${job.companyLogo}`} alt="Company Logo"/>
						</div>
						<div className="job-card_info">
							<h5 className="mb-1 d-inline-block">{job.companyName}</h5>
							<p className="text-muted mb-0">{job.location}</p>
						</div>
					</div>
				  <div className="job-card_content-mid">
						<h4>{job.title}</h4>
						<p>{job.description}</p>
						<h6>Minimum experience required: {job.experience} year(s) </h6>
						<p className="mb-0">{job.salary}DT</p>
					</div>
				</div>
					<div className="job-card__footer">
						<p className="mb-1 mt-1 text-muted">Posted: {job.date.split("T")[0]} </p>
						<JobApplication job={job}/>
					</div>
			</div>	
		</div>
  )
}

export default JobCard