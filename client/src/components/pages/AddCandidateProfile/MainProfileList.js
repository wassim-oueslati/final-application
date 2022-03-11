import React from 'react'
import ProfileList from './ProfileList'

function MainProfileList() {
  return (
    <div style={{marginBottom:40, backgroundColor:'#EAF4F6', padding:'2%'}}>
        <div className="text-center" style={{padding:'2%'}}>
            <h1>Recent Profiles</h1>
            <hr className="divider" />
        </div >
        <div >
            <ProfileList />
        </div>
    </div>
  )
}

export default MainProfileList