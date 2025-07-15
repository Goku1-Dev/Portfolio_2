import React from 'react'
import './index.scss'
import ProjectPage from './Projectpage'
import SkillsPage from './SkillsPage'

const ProjectSkills = () => {
    return (
        <div className='ProjectSkills_container'>
            <div className='ProjectSkills_wrapper'>
                <div className='ProjectSkills_left'>
                    <div className='ProjectSkills_top'>
                        <ProjectPage />
                    </div>
                    <div className='ProjectSkills_bottom'>
                        
                    </div>
                </div>
                <div className='ProjectSkills_right'>
                    <SkillsPage />
                </div>
            </div>
        </div>
    )
}

export default ProjectSkills