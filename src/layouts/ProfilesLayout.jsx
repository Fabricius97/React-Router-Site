import React from 'react'
import { Outlet } from 'react-router-dom'

const ProfilesLayout = () => {
    return (
        <div className="profile-layout">
            <h2>Profiler</h2>
            <p>Ta en titt på vilka profiler som är redo för jobb!</p>
            <Outlet />
        </div>
    )
}

export default ProfilesLayout
