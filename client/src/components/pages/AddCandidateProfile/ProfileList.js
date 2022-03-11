import React,{ useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getProfile} from '../../../js/actions/profileActions';
import ProfileCard from "./ProfileCard/ProfileCard";


function ProfileList() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProfile());
    }, []);

    const profiles = useSelector((state) => state.profileReducer.profiles);
    

  return (
    <div>
        {profiles &&
        profiles
        .map((profile) => (
        <ProfileCard key={profile._id} profile={profile} />
        ))}
    </div>
)
}

export default ProfileList;