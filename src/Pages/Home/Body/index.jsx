import React from 'react'
import HomeDetails from './components/HomeDetails'
import ProjectDetails from './components/ProjectDetails'
import ExperienceDetails from './components/ExperienceDetails'
import './index.scss'

const Body = () => {
    return (
        <div className='body_container'>
            <div className='body_wrapper'>
                <div className='body_home'><HomeDetails /></div>
                <div className='body_project'><ProjectDetails /></div>
                <div className='body_experience'><ExperienceDetails /></div>
            </div>
        </div>
    )
}

export default Body