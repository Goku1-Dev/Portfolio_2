import React from 'react'
import { Download } from 'lucide-react';
import './index.scss'

const CardCnt = () => {
    const CardBox = [
        { heading : 'Designing', text: 'Talk about your journey into full-stack development what inspires you, and what excites you about building things with code.Talk about your journey into full-stack development what inspires you, and what excites you about building things with code.', icon: <Download/>},
        { heading : 'Development', text: 'Talk about your journey into full-stack development what inspires you, and what excites you about building things with code.', icon: <Download/> },
        { heading : 'Deployment', text: 'Talk about your journey into full-stack development what inspires you, and what excites you about building things with code.' ,icon: <Download/> }
    ];
    return (
        <div className='CardCnt_container'>
            <div className='CardCnt_wrapper'>
                {CardBox.map((card, index) => (
                    <div className='Card_container' key={index}>
                        <div className='Card_icon'>{card.icon}</div>
                        <div className='Card_heading'>{card.heading}</div>
                        <div className='Card_text'>{card.text}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CardCnt