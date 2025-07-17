import React from 'react'
import './index.scss'
import ProjectPage from './ProjectPage'
import SkillsPage from './SkillsPage'

const ProjectSkills = () => {
    return (
        <div className='ProjectSkills_container'>
            <div className='ProjectSkills_wrapper'>
                <div className='ProjectSkills_left'>
                    {[1, 2, 3, 4, 5].map((item) => (
                        <div key={item} className='ProjectSkills_layout'>
                            <ProjectPage />
                        </div>
                    ))}
                </div>
                <div className='ProjectSkills_right'>
                    <SkillsPage />
                </div>
            </div>
        </div>
    )
}

export default ProjectSkills