import React from 'react'
import HomeDetails from './components/HomeDetails'
// import ExperienceDetails from './components/ExperienceDetails'
// import ProjectsDetails from './components/ProjectsDetails'
// import SkillDetails from './components/SkillDetails'
import './index.scss'
import AboutCnt from '../../Components/AboutCnt'
import CardCnt from '../../Components/AboutCnt/CardCnt'
import LandscapeCards from '../../Components/CardComponent/LandscapeCards'
import MediaCnt from '../../Components/MediaCnt'

export const Home = () => {
    return (
        <div className="Home_body_container">
            <div className='Home_body_wrapper'>
                <div className='Body_Home'>
                    <div className='HomeDetails'><HomeDetails /></div>
                    <div className='MediaCnt'><MediaCnt /></div>
                </div>
                <div className='Body_About'>
                    <div className='AboutCnt'><AboutCnt /></div>
                    <div className='CardCnt'><CardCnt /></div>
                    {/* <div><LandscapeCards /></div> */}
                </div>
                {/* <div className='Body_Experience'>
                    <ExperienceDetails />
                </div>
                <div className='Body_Projects'>
                    <ProjectsDetails />
                </div>
                <div className='Body_Skill'>
                    <SkillDetails />
                </div> */}
            </div>
        </div>
    )
}

export default Home