import React,{ useEffect ,useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import Pagination  from "./Pagination";
import {getJob} from '../../../js/actions/jobActions';
import JobCard from './JobCard/JobCard';

const  JobList = ({search}) => {
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(1);
    const [jobsPerPage] = useState(6);

    useEffect(() => {
        dispatch(getJob());
    }, []);
   
    const jobs = useSelector((state) => state.jobReducer.jobs);
    console.log(jobs)
    
    //Get current Jobs
    const indexOfLastJob = currentPage * jobsPerPage;
    const indexOfFirstJob = indexOfLastJob - jobsPerPage;
    const currentJobs = jobs.slice(indexOfFirstJob,indexOfLastJob);

    //Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div>
            <div style={{display:"flex" , flexWrap:"wrap" , justifyContent:"space-around" , padding:"2%"}}>
            {currentJobs &&
            currentJobs
            .filter((job) => (job.title.includes(search)))
            .map((job) => (
            <JobCard key={job._id} job={job} />
            ))}
            </div>
            
            <Pagination jobsPerPage={jobsPerPage} totalJobs={jobs.length} paginate={paginate}/>
            
        </div>
    )
}

export default JobList