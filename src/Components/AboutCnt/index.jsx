import React from 'react';
import './index.scss';
import AboutSection from './AboutSection';
import ExperienceSection from './ExperienceSection';
import CardCnt from './CardCnt';

const AboutCnt = () => {
    return (
        <div className='AboutSection_container'>
            <div className='AboutSection_wrapper'>
                <div className='AboutSection_header'> <AboutSection /></div>
                <div className='AboutSection_body'> <CardCnt /></div>
                <div className='AboutSection_footer'><ExperienceSection /></div>
            </div>
        </div>
    )
}

export default AboutCnt;