import React from 'react'
import { Linkedin, Instagram, Github, Twitter } from 'lucide-react';
import './index.scss'

const MediaCnt = () => {
    const MediaCnt = [
        { icon: <Instagram /> },
        { icon: <Twitter /> },
        { icon: <Linkedin /> },
        { icon: <Github /> },
    ];
    return (
        <div className='MediaCnt_container'>
            <div className='MediaCnt_wrapper'>
                {MediaCnt.map((icons, index) => (
                    <div className='MediaCnt_icon' key={index}>
                        {icons.icon}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MediaCnt