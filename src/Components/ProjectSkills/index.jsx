import React from 'react'
import './index.scss'
import ProjectPage from './Projectpage'
import SkillsPage from './SkillsPage'

const ProjectSkills = () => {
    return (
        <div className='ProjectSkills_body_container'>
            <div className='ProjectSkills_body_wrapper'>
                <div className='ProjectSkills_header'></div>
                <div className='ProjectSkills_container'>
                    <div className='ProjectSkills_wrapper'>
                        <div className='ProjectSkills_left'>
                            <div className='ProjectSkills_left_top'>
                                <h3 className='ProjectSkills_left_top_heading'>Projects</h3>
                                <p className='ProjectSkills_left_top_para'>Talk about your journey into full-stack development, what inspires you, 
                                    and what excites you about building things with code.</p>
                            </div>
                            <div className='ProjectSkills_left_bottom'>
                                <ProjectPage />
                            </div>
                        </div>
                        <div className='ProjectSkills_right'>
                            <div className='ProjectSkills_right_top'>
                                <h3 className='ProjectSkills_right_top_heading'>Skills</h3>
                                <p className='ProjectSkills_right_top_para'>Talk about your journey into full-stack development, what inspires you, 
                                    and what excites you about building things with code.</p>
                            </div>
                            <div className='ProjectSkills_right_bottom'>
                                <SkillsPage />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectSkills