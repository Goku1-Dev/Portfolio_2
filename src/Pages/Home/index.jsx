import React from 'react'
import HomeDetails from './components/HomeDetails'
import AboutCnt from '../../Components/AboutCnt'
import CardCnt from '../../Components/AboutCnt/CardCnt'
import MediaCnt from '../../Components/MediaCnt'
import './index.scss'
import SkillCnt from '../../Components/SkillCnt'
import Skills from '../../Components/Skills'

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
                </div>
                <div className='Body_Skills'>
                    {/* <SkillCnt /> */}
                    <Skills />
                </div>
            </div>
        </div>
    )
}

export default Home