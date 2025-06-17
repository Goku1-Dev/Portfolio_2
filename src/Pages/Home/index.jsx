import React from 'react'
import HomeDetails from './components/HomeDetails'
import ExperienceDetails from './components/ExperienceDetails'
import ProjectsDetails from './components/ProjectsDetails'
import SkillDetails from './components/SkillDetails'
import './index.scss'

export const Home = () => {
    return (
        <div className="Home_body_container">
            <div className='Home_body_wrapper'>
                <div className='Body_Home'>
                    <HomeDetails />
                </div>
                <div className='Body_Experience'>
                    <ExperienceDetails />
                </div>
                <div className='Body_Projects'>
                    <ProjectsDetails />
                </div>
                <div className='Body_Skill'>
                    <SkillDetails />
                </div>
            </div>
        </div>
    )
}

export default Home