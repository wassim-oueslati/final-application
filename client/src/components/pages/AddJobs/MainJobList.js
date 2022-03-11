import React,{useState} from 'react';
import JobList from './JobList';
import SearchJob from './SearchJob';

//style={{display:"flex" , flexWrap:"wrap"}}
function MainJobList() {
    const [search, setSearch]= useState('');
    return (
        <div style={{ backgroundColor:'rgb(248, 249, 250)' ,padding:'2%'}}>
            <div className="text-center" id="jobList" style={{padding:'2%'}}>
                <h1>Recent Jobs</h1>
                <hr className="divider" />
            </div >
            <SearchJob search={search} setSearch={setSearch} />
            <div >
            <JobList search={search}/>
            </div>
        </div>   
    )
}

export default MainJobList