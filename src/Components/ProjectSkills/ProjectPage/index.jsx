import React, { useState } from 'react'
import './index.scss'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const ProjectPage = () => {
    const [currentSection, setCurrentSection] = useState('center1')

    const handleNext = () => {
        setCurrentSection(currentSection === 'center1' ? 'center2' : 'center1')
    }

    const handlePrevious = () => {
        setCurrentSection(currentSection === 'center1' ? 'center2' : 'center1')
    }

    
    return (
        <div className='ProjectPage_container'>
            <div className='ProjectPage_wrapper'>
                <div className='ProjectPage_top'>
                    <div className='ProjectPage_top_heading'>
                        <h2>Projects</h2>
                    </div>
                </div>

                {currentSection === 'center1' && (
                    <div className='ProjectPage_center'>
                        <div className='ProjectPage_content'>
                            <h2>Projects</h2>
                            <p>Talk about your journey into full-stack development, what inspires you, 
                                and what excites you about building things with code.
                                Talk about your journey into full-stack development, what inspires you, 
                                and what excites you about building things with code.Talk about your journey into full-stack development, what inspires you, 
                                and what excites you about building things with code.
                            </p>
                        </div>
                        <div className='ProjectPage_card'></div>
                    </div>
                )}
                
                {currentSection === 'center2' && (
                    <div className='ProjectPage_center'>
                        <div className='ProjectPage_center_parent'>
                            <div className='ProjectPage_card1'>
                                <h2>Projects</h2>
                                <p>Talk about your journey into full-stack development, what inspires you, 
                                    and what excites you about building things with code.
                                    Talk about your journey into full-stack development, what inspires you, 
                                    and what excites you about building things with code.Talk about your journey into full-stack development, what inspires you, 
                                    and what excites you about building things with code.
                                </p>
                                <p>Talk about your journey into full-stack development, what inspires you, 
                                    and what excites you about building things with code.
                                    Talk about your journey into full-stack development, what inspires you, 
                                    and what excites you about building things with code.Talk about your journey into full-stack development, what inspires you, 
                                    and what excites you about building things with code.
                                </p>
                                <p>Talk about your journey into full-stack development, what inspires you, 
                                    and what excites you about building things with code.
                                    Talk about your journey into full-stack development, what inspires you, 
                                    and what excites you about building things with code.Talk about your journey into full-stack development, what inspires you, 
                                    and what excites you about building things with code.
                                </p>
                            </div>
                            <div className='ProjectPage_card2'>
                                <div className='ProjectPage_card2_child'></div>
                                <div className='ProjectPage_card2_child'></div>
                                <div className='ProjectPage_card2_child'></div>
                            </div>
                        </div>
                    </div>
                )}

                <div className='ProjectPage_bottom'>
                    <div className='ProjectPage_link_button'>
                        <div className='ProjectPage_link1'>Site Link</div>
                        <div className='ProjectPage_link2'>Github</div>
                    </div>
                    <div className='ProjectPage_button'>
                        <div 
                            className='ProjectPage_button_left'
                            onClick={handlePrevious}
                            style={{ cursor: 'pointer' }}
                        >
                            <ChevronLeft />
                        </div>
                        <div 
                            className='ProjectPage_button_right'
                            onClick={handleNext}
                            style={{ cursor: 'pointer' }}
                        >
                            <ChevronRight />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectPage