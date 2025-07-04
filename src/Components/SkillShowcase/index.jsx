import React from 'react'
import { logoIconsList } from "./data";
import './index.scss'

const LogoIcon = ({ icon }) => {
    return (
        <div className='SkillShowcase_marquee_box_item'>
            <img src={icon.imgPath} alt={icon.name} />
        </div>
    )
}
const SkillShowcase = () => {
    return (
        <div className='SkillShowcase_container'>
            <div className='SkillShowcase_wrapper'>
                <div className='SkillShowcase_gradient-edge'/>
                <div className='SkillShowcase_gradient-edge'/>

                <div className='SkillShowcase_marquee'>
                    <div className='SkillShowcase_marquee_box'>
                        {logoIconsList.map((icon, index) => (
                            <LogoIcon key={index} icon={icon} />
                        ))}

                        {logoIconsList.map((icon, index) => (
                            <LogoIcon key={index} icon={icon} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SkillShowcase