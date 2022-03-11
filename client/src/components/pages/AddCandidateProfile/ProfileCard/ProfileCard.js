import React from 'react';
import './ProfileCard.css'

function ProfileCard({profile}) {
  return (
    <div >
    <div style={{display:"flex", flexWrap:"wrap"}}>
        <div className="col-md-4">
            <div className="card p-3 py-4">
                <div className="text-center"> <img src={`/uploads/${profile.profilePic}`} width="100" className="rounded-circle" alt=''/> </div>
                <div className="text-center mt-3"> <span className="bg-secondary p-1 px-4 rounded text-white">Pro</span>
                    <h5 className="mt-2 mb-0">{profile.name} {profile.lastName}</h5> <span>{profile.work}</span>
                    <div className="px-4 mt-1">
                        <p className="fonts">{profile.description}</p>
                    </div>
                    <ul className="social-list">
                        <li><i className="bi bi-facebook"></i></li>
                        <li><i className="bi bi-dribbble"></i></li>
                        <li><i className="bi bi-instagram"></i></li>
                        <li><i className="bi bi-linkedin"></i></li>
                        <li><i className="bi bi-google"></i></li>
                    </ul>
                    <div className="buttons"><button className="btn btn-outline-primary px-4">Message</button> <button className="btn btn-primary px-4 ms-3">Contact</button> </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  ) ;
}

export default ProfileCard;