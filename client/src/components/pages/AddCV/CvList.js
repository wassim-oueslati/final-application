import React,{ useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import {getCv} from '../../../js/actions/cvActions';
import CvCard from "./CvCard";

function CvList() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCv());
    }, []);

    const recruiter = useSelector((state) => state.authRecReducer.recruiter);
    const RecruiterEmail = recruiter.email
    
    const cvs = useSelector((state) => state.cvReducer.cvs);
  
    return (
        <div style={{display:"flex" , flexWrap:"wrap" , justifyContent:"space-around" , padding:"9%"}}>
            {cvs &&
            cvs
            .filter((cv)=> (RecruiterEmail.includes(cv.jobemail)))
            .map((cv) => (
            <CvCard key={cv._id} cv={cv}/>
            ))}
        </div>
    )
}

export default CvList