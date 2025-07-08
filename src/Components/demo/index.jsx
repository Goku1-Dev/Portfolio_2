import React, { useState, useEffect, useRef } from 'react'
import { projectsList } from './data';
import './index.scss'

const ProjectDemo = () => {
    const [activeProject, setActiveProject] = useState(0);
    const [visibleProjects, setVisibleProjects] = useState(new Set());
    const projectRefs = useRef([]);
    const timelineRef = useRef(null);
    const [timelineVisible, setTimelineVisible] = useState(false);
    const [cardPositions, setCardPositions] = useState({});

    useEffect(() => {
        const updateCardPositions = () => {
            const positions = {};
            projectRefs.current.forEach((ref, index) => {
                if (ref) {
                    const rect = ref.getBoundingClientRect();
                    positions[index + 1] = rect.top + window.scrollY + rect.height / 2;
                }
            });
            setCardPositions(positions);
        };

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && entry.target === timelineRef.current) {
                        setTimelineVisible(true);
                    }
                    
                    const projectId = parseInt(entry.target.dataset.projectId);
                    if (entry.isIntersecting) {
                        setVisibleProjects(prev => new Set([...prev, projectId]));
                        setActiveProject(prev => Math.max(prev, projectId));
                    }
                });
                updateCardPositions();
            },
            {
                threshold: 0.3,
                rootMargin: '-50px 0px -50px 0px'
            }
        );

        projectRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        if (timelineRef.current) {
            observer.observe(timelineRef.current);
        }

        window.addEventListener('resize', updateCardPositions);
        window.addEventListener('scroll', updateCardPositions);
        updateCardPositions();

        return () => {
            observer.disconnect();
            window.removeEventListener('resize', updateCardPositions);
            window.removeEventListener('scroll', updateCardPositions);
        };
    }, []);

    const handleTimelineClick = (projectId) => {
        const projectElement = document.querySelector(`[data-project-id="${projectId}"]`);
        if (projectElement) {
            projectElement.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'center' 
            });
        }
    };

    // Sort projects by position
    const sortedProjects = [...projectsList].sort((a, b) => a.id - b.id);

    return (
        <div className='ProjectCnt_container'>
            <div className='ProjectCnt_wrapper'>
                <div className='ProjectCnt_layout_container'>
                    <div className='ProjectCnt_layout_wrapper'>
                        <div className='ProjectCnt_header'>
                            <div className='ProjectCnt_header_heading'>// Project</div>
                            <div className='ProjectCnt_header_content'>
                                Talk about your journey into full-stack development what inspires you, 
                                and what excites you about building things with code.
                            </div>
                        </div>
                        <div className='ProjectCnt_body'>
                            <div className='ProjectCnt_body_left'>
                                {/* Project 1 (top left) */}
                                <div 
                                    ref={el => projectRefs.current[0] = el}
                                    data-project-id={1}
                                    className={`ProjectCnt_project_card ${visibleProjects.has(1) ? 'visible' : ''}`}
                                >
                                    <h2 className='ProjectCnt_project_title'>{sortedProjects[0].title}</h2>
                                    <p className='ProjectCnt_project_description'>{sortedProjects[0].description}</p>
                                    <div className='ProjectCnt_project_buttons'>
                                        <button className='ProjectCnt_project_button_primary'>View Project</button>
                                        <button className='ProjectCnt_project_button_secondary'>GitHub</button>
                                    </div>
                                </div>
                                
                                {/* Empty space for middle */}
                                <div style={{ flex: 1 }}></div>
                                
                                {/* Project 3 (bottom left) */}
                                <div 
                                    ref={el => projectRefs.current[2] = el}
                                    data-project-id={3}
                                    className={`ProjectCnt_project_card ${visibleProjects.has(3) ? 'visible' : ''}`}
                                >
                                    <h2 className='ProjectCnt_project_title'>{sortedProjects[2].title}</h2>
                                    <p className='ProjectCnt_project_description'>{sortedProjects[2].description}</p>
                                    <div className='ProjectCnt_project_buttons'>
                                        <button className='ProjectCnt_project_button_primary'>View Project</button>
                                        <button className='ProjectCnt_project_button_secondary'>GitHub</button>
                                    </div>
                                </div>
                            </div>
                            
                            <div className='ProjectCnt_body_container' ref={timelineRef}>
                                <div className={`ProjectCnt_timeline_line ${timelineVisible ? 'animate' : ''}`}></div>
                                {[1, 2, 3].map((num) => (
                                    <div 
                                        key={num} 
                                        className='ProjectCnt_timeline_item'
                                        style={{ 
                                            position: 'absolute',
                                            top: cardPositions[num] ? `${cardPositions[num] - (timelineRef.current?.getBoundingClientRect().top + window.scrollY || 0)}px` : '0'
                                        }}
                                    >
                                        <div 
                                            className={`ProjectCnt_timeline_circle ${
                                                activeProject >= num ? 'active' : ''
                                            } ${timelineVisible ? 'pulse' : ''}`}
                                            onClick={() => handleTimelineClick(num)}
                                        >
                                            {num}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            
                            <div className='ProjectCnt_body_right'>
                                {/* Empty space for top */}
                                <div style={{ flex: 1 }}></div>
                                
                                {/* Project 2 (center right) */}
                                <div 
                                    ref={el => projectRefs.current[1] = el}
                                    data-project-id={2}
                                    className={`ProjectCnt_project_card ${visibleProjects.has(2) ? 'visible' : ''}`}
                                >
                                    <h2 className='ProjectCnt_project_title'>{sortedProjects[1].title}</h2>
                                    <p className='ProjectCnt_project_description'>{sortedProjects[1].description}</p>
                                    <div className='ProjectCnt_project_buttons'>
                                        <button className='ProjectCnt_project_button_primary'>View Project</button>
                                        <button className='ProjectCnt_project_button_secondary'>GitHub</button>
                                    </div>
                                </div>
                                
                                {/* Empty space for bottom */}
                                <div style={{ flex: 1 }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDemo