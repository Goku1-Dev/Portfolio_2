import React from 'react';
import { motion as Motion } from 'framer-motion';
import './index.scss';
import LandscapeCards from '../LandscapeCards';

const ExperienceSection = () => {

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
        <div className='ExperienceCnt_layout_container'>
            <div className='ExperienceCnt_layout_wrapper'>
                <div className='ExperienceCnt_container'>
                    <div className='ExperienceCnt_wrapper'>
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

export default ExperienceSection;