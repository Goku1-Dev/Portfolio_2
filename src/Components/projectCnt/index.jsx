import React from 'react'
import './index.scss'

const ProjectCnt = () => {
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
                                <div className='ProjectCnt_body_left_top'>
                                    <h2>Project 1</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                    <button>View More</button>
                                </div>
                                <div className='ProjectCnt_body_left_middle'>
                                    <h2>GitHub Link</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                    <button>View More</button>
                                </div>
                                <div className='ProjectCnt_body_left_bottom'>
                                    <h2>Project 3</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                    <button>View More</button>
                                </div>
                            </div>
                            <div className='ProjectCnt_body_center'>
                                <div className='ProjectCnt_body_center_top'>
                                    <div className='ProjectCnt_body_center_top_circle'></div>
                                </div>
                                <div className='ProjectCnt_body_center_middle'>
                                    <div className='ProjectCnt_body_center_middle_circle'></div>
                                </div>
                                <div className='ProjectCnt_body_center_bottom'>
                                    <div className='ProjectCnt_body_center_bottom_circle'></div>
                                </div>
                            </div>
                            <div className='ProjectCnt_body_right'>
                                <div className='ProjectCnt_body_right_top'>
                                    <h2>GitHub Link</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                    <button>View More</button>
                                </div>
                                <div className='ProjectCnt_body_right_middle'>
                                    <h2>Project 2</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                    <button>View More</button>
                                </div>
                                <div className='ProjectCnt_body_right_bottom'>
                                    <h2>GitHub Link</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                    <button>View More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCnt