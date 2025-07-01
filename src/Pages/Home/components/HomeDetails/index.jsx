import React from 'react'
import { Download } from 'lucide-react';
import './index.scss'

const HomeDetails = () => {
    return (
        <div className='HomeDetails_container'>
            <div className='HomeDetails_wrapper'>
                <div className='HomeDetails_left_container'>
                    <div className='HomeDetails_left_wrapper'>
                        <div className='HomeDetails_header'>👋 Hey There,</div>
                        <div className='HomeDetails_heading'>I'm Gokul Sureshkumar</div>
                        <div className='HomeDetails_content'>
                            Talk about your journey into full-stack development, 
                            what inspires you, 
                            and what excites you about building things with code.
                        </div>
                        <div className='HomeDetails_button_container'>
                            <button className='HomeDetails_Email_button'>
                                <span className='HomeDetails_Email_button_text'>DROP ME AN EMAIL</span>
                            </button>
                            <div className='HomeDetails_Download_button'><Download className='icon'/></div>
                        </div>
                        <div className='HomeDetails_scroll_container'>
                            <div className='HomeDetails_scroll_mouse'></div>
                        </div>
                    </div>
                </div>
                <div className='HomeDetails_right_container'>
                    <div className='HomeDetails_right_wrapper'>
                        <div className='HomeDetails_image'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeDetails
