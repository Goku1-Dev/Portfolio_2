import React from 'react';
import { Download } from 'lucide-react';
import { motion as Motion } from 'framer-motion';
import './index.scss';

const HomeDetails = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
            delayChildren: 0.2
        }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5
        }
        }
    };

    const imageVariants = {
        hidden: { scale: 0.8, opacity: 0 },
        visible: {
        scale: 1,
        opacity: 1,
        transition: {
            duration: 0.8,
            ease: "easeOut"
        }
        }
    };

    return (
        <div className='HomeDetails_container' id="home">
            <div className='HomeDetails_wrapper'>
            <Motion.div 
                className='HomeDetails_left_container'
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                <div className='HomeDetails_left_wrapper'>
                <Motion.div className='HomeDetails_header' variants={itemVariants}>
                    👋 Hey There,
                </Motion.div>
                <Motion.div className='HomeDetails_heading' variants={itemVariants}>
                    I'm Gokul Sureshkumar
                </Motion.div>
                <Motion.div className='HomeDetails_content' variants={itemVariants}>
                    Talk about your journey into full-stack development, 
                    what inspires you, 
                    and what excites you about building things with code.
                </Motion.div>
                <Motion.div className='HomeDetails_button_container' variants={itemVariants}>
                    <button className='HomeDetails_Email_button'>
                    <span className='HomeDetails_Email_button_text'>DROP ME AN EMAIL</span>
                    </button>
                    <div className='HomeDetails_Download_button'><Download className='icon'/></div>
                </Motion.div>
                <Motion.div 
                    className='HomeDetails_scroll_container'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                >
                    <div className='HomeDetails_scroll_mouse'></div>
                </Motion.div>
                </div>
            </Motion.div>
            <Motion.div 
                className='HomeDetails_right_container'
                initial="hidden"
                animate="visible"
                variants={imageVariants}
            >
                <div className='HomeDetails_right_wrapper'>
                <div className='HomeDetails_image'></div>
                </div>
            </Motion.div>
            </div>
        </div>
    );
};

export default HomeDetails;