import React from 'react';
import { Circle, Triangle, Square } from 'lucide-react';
import { motion as Motion } from 'framer-motion';
import './index.scss';

const CardCnt = () => {
    const CardBox = [
        { 
            heading: 'Designing', 
            text: 'Talk about your journey into full-stack development what inspires you, and what excites you about building things with code.Talk about your journey into full-stack development what inspires you, and what excites you about building things with code.', 
            icon: <Circle style={{color: '#ff5532'}} fill='#ff5532' width={30} height={30}/>
        },
        { 
            heading: 'Development', 
            text: 'Talk about your journey into full-stack development what inspires you, and what excites you about building things with code.', 
            icon: <Triangle style={{color: 'SkyBlue'}} fill='SkyBlue' width={30} height={30}/>  
        },
        { 
            heading: 'Deployment', 
            text: 'Talk about your journey into full-stack development what inspires you, and what excites you about building things with code.', 
            icon: <Square style={{color: 'green'}} fill='green' width={30} height={30}/> 
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const cardVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    return (
        <div className='CardCnt_container'>
            <Motion.div 
                className='CardCnt_wrapper'
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={containerVariants}
            >
                {CardBox.map((card, index) => (
                    <Motion.div 
                        className='Card_container' 
                        key={index}
                        variants={cardVariants}
                    >
                        <div className='Card_icon'>{card.icon}</div>
                        <div className='Card_heading'>{card.heading}</div>
                        <div className='Card_text'>{card.text}</div>
                    </Motion.div>
                ))}
            </Motion.div>
        </div>
    );
};

export default CardCnt;