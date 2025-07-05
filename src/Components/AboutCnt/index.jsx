import React from 'react';
import { motion as Motion } from 'framer-motion';
import { iconFile } from "../../utils";
import './index.scss';
import LandscapeCards from './LandscapeCards';

const AboutCnt = () => {
    const skillsList = [
        { name: 'JavaScript', icon: iconFile.js },
        { name: 'React.js', icon: iconFile.react },
        { name: 'Next.js', icon: iconFile.nextjs },
        { name: 'Node.js', icon: iconFile.nodejs }
    ];

    // Unified animation variants for both sections
    const sectionVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut",
                when: "beforeChildren",
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "backOut"
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15,
                duration: 0.8
            }
        }
    };

    return (
        <div className='AboutCnt_layout_container'>
            <div className='AboutCnt_layout_wrapper'>
                <div className='AboutExperienceCnt_container'>
                    <div className='AboutExperienceCnt_wrapper'>
                        {/* About Section */}
                        <Motion.div 
                            className='AboutCnt_Layout'
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            variants={sectionVariants}
                        >
                            <Motion.div className='AboutCnt_header' variants={itemVariants}>
                                // About
                            </Motion.div>
                            <Motion.div 
                                className='AboutCnt_content_container'
                                variants={itemVariants}
                            >
                                <Motion.div 
                                    className='AboutCnt_content_heading'
                                    variants={itemVariants}
                                >
                                    Hello world! My name is Gokul Sureshkumar, 
                                    I'm a Designer & Software Engineer.
                                </Motion.div>
                                <Motion.div 
                                    className='AboutCnt_content'
                                    variants={itemVariants}
                                >
                                    Talk about your journey into full-stack development, 
                                    what inspires you, and what excites you about building things with code. 
                                    Talk about your journey into full-stack development, what inspires you, 
                                    and what excites you about building things with code.
                                    Talk about your journey into full-stack development, 
                                    what inspires you, and what excites you about building things with code. 
                                    Talk about your journey into full-stack development, what inspires you, 
                                    and what excites you about building things with code.
                                </Motion.div>
                            </Motion.div>
                            <Motion.div 
                                className='AboutCnt_icon_container'
                                variants={itemVariants}
                            >
                                {skillsList.map((skill, index) => (
                                    <Motion.div 
                                        className='AboutCnt_icon' 
                                        key={index}
                                        variants={itemVariants}
                                        whileHover={{ 
                                            scale: 1.1,
                                            boxShadow: "0 8px 20px rgba(0,0,0,0.2)"
                                        }}
                                    >
                                        <img src={skill.icon} alt="icon" className="icon_img" />
                                    </Motion.div>
                                ))}
                            </Motion.div>
                        </Motion.div>

                        {/* Experience Section - Now with same animation style */}
                        <Motion.div 
                            className='ExperienceCnt_Layout'
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            variants={sectionVariants}
                        >
                            <Motion.div className='ExperienceCnt_header' variants={itemVariants}>
                                // Experience
                            </Motion.div>
                            <Motion.div 
                                className='ExperienceCnt_content_container'
                                variants={itemVariants}
                            >
                                <Motion.div 
                                    className='ExperienceCnt_content_heading'
                                    variants={itemVariants}
                                >
                                    Professional Experience
                                </Motion.div>
                                <Motion.div 
                                    className='ExperienceCnt_content'
                                    variants={itemVariants}
                                >
                                    Talk about your journey into full-stack development, 
                                    what inspires you, and what excites you about building things with code. 
                                    Talk about your journey into full-stack development, what inspires you, 
                                    and what excites you about building things with code.
                                    Talk about your journey into full-stack development, 
                                    what inspires you, and what excites you about building things with code. 
                                    Talk about your journey into full-stack development, what inspires you, 
                                    and what excites you about building things with code.
                                </Motion.div>
                            </Motion.div>
                            <Motion.div 
                                className='ExperienceCnt_Project_container'
                                variants={cardVariants}
                            >
                                <div className='ExperienceCnt_Project_wrapper'>
                                    <LandscapeCards />
                                </div>
                            </Motion.div>
                        </Motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutCnt;