import React from 'react'
import { iconFile } from "../../utils";
import './index.scss'
import LandscapeCards from './LandscapeCards';

const AboutCnt = () => {
    const skillsList = [
        { name: 'JavaScript', icon: iconFile.js },
        { name: 'React.js', icon: iconFile.react },
        { name: 'Next.js', icon: iconFile.nextjs },
        { name: 'Node.js', icon: iconFile.nodejs }
    ];

    return (
        <div className='AboutCnt_layout_container'>
            <div className='AboutCnt_layout_wrapper'>
                <div className='AboutExperienceCnt_container'>
                    <div className='AboutExperienceCnt_wrapper'>
                        <div className='AboutCnt_Layout'>
                            <div className='AboutCnt_header'>
                                // About
                            </div>
                            <div className='AboutCnt_content_container'>
                                <div className='AboutCnt_content_heading'>
                                    Hello world! My name is Gokul Sureshkumar, 
                                    I’m a Designer & Software Engnier.
                                </div>
                                <div className='AboutCnt_content'>
                                    Talk about your journey into full-stack development, 
                                    what inspires you, and what excites you about building things with code. 
                                    Talk about your journey into full-stack development, what inspires you, 
                                    and what excites you about building things with code.
                                    Talk about your journey into full-stack development, 
                                    what inspires you, and what excites you about building things with code. 
                                    Talk about your journey into full-stack development, what inspires you, 
                                    and what excites you about building things with code.
                                </div>
                            </div>
                            <div className='AboutCnt_icon_container'>
                                {skillsList.map((skill, index) => (
                                    <div className='AboutCnt_icon' key={index}>
                                        <img src={skill.icon} alt="icon" className="icon_img" />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className='ExperienceCnt_Layout'>
                            <div className='ExperienceCnt_header'>
                                // Experience
                            </div>
                            <div className='ExperienceCnt_content_container'>
                                <div className='ExperienceCnt_content_heading'>
                                    Hello world! My name is Gokul Sureshkumar, 
                                    I’m a Designer & Software Engnier.
                                </div>
                                <div className='ExperienceCnt_content'>
                                    Talk about your journey into full-stack development, 
                                    what inspires you, and what excites you about building things with code. 
                                    Talk about your journey into full-stack development, what inspires you, 
                                    and what excites you about building things with code.
                                    Talk about your journey into full-stack development, 
                                    what inspires you, and what excites you about building things with code. 
                                    Talk about your journey into full-stack development, what inspires you, 
                                    and what excites you about building things with code.
                                </div>
                            </div>
                            <div className='ExperienceCnt_Project_container'>
                                <div className='ExperienceCnt_Project_wrapper'><LandscapeCards /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutCnt