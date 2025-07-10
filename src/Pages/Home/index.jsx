import React from 'react'
import HomeDetails from './components/HomeDetails'
import AboutCnt from '../../Components/AboutCnt'
import CardCnt from '../../Components/AboutCnt/CardCnt'
import MediaCnt from '../../Components/MediaCnt'
import './index.scss'
import SkillsCnt from '../../Components/Skills'
import SkillShowcase from '../../Components/SkillShowcase'
import ProjectCnt from '../../Components/projectCnt'

export const Home = () => {
    return (
        <div className="Home_body_container">
            <div className='Home_body_wrapper'>
                <div className='Body_Home'>
                    <div className='HomeDetails'><HomeDetails /></div>
                    {/* <div className='MediaCnt'><MediaCnt /></div> */}
                </div>
                <div className='Body_About'>
                    <div className='AboutCnt'><AboutCnt /></div>
                </div>
                <div className='Body_Projects'>
                    <ProjectCnt />
                </div>
                <div className='Body_Skills'>
                    <SkillsCnt />
                </div>
                <div className='Body_SkillShowcase'>
                    {/* <SkillShowcase /> */}
                </div>
            </div>
        </div>
    )
}

export default Home