import React from 'react';
import { Instagram, Github, Linkedin, Twitter } from 'lucide-react';
import { motion as Motion } from 'framer-motion';
import './index.scss';

const Footer = () => {

const iconVariants = {
hover: {
    scale: 1.2,
    backgroundColor: "#ffffff",
    transition: { duration: 0.3 }
},
tap: {
    scale: 0.9
}
};

const containerVariants = {
hidden: { opacity: 0, y: 20 },
visible: {
    opacity: 1,
    y: 0,
    transition: {
    staggerChildren: 0.1,
    delayChildren: 0.3
    }
}
};

const itemVariants = {
hidden: { opacity: 0, y: 20 },
visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
}
};

return (
<Motion.div 
    className='Footer_layout_container'>
    <div className='Footer_layout_wrapper'>
    <Motion.div 
        className='Footer_container'>
        <div className='Footer_wrapper'> 
        <Motion.div 
            className='contact_container'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            variants={containerVariants}
        >
            <Motion.div 
            className='contact_wrapper'
            variants={itemVariants}
            >
            <div className='contact_info'>
                <Motion.h2 
                className='contact_title'
                whileHover={{ scale: 1.05 }}
                >
                Contact
                </Motion.h2>
                <Motion.p 
                className='contact_text'
                whileHover={{ scale: 1.02 }}
                >
                Talk about your journey into full-stack development what inspires you
                </Motion.p>
                <Motion.button 
                className='contact_button'
                whileHover={{ 
                    scale: 1.05,
                    backgroundColor: "#333333"
                }}
                whileTap={{ scale: 0.95 }}
                >
                Get in touch
                </Motion.button>
            </div>
            </Motion.div>
        </Motion.div>

        <div className='Footer_content'>
            <div className='Footer_content_wrapper'>
            <Motion.div 
                className="profile-container"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                variants={containerVariants}
            >
                <div className="profile-top">
                <Motion.div 
                    className="profile-image"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                />
                <Motion.div 
                    className="profile-info"
                    variants={itemVariants}
                >
                    <Motion.p 
                    className='Footer_text1'
                    whileHover={{ scale: 1.02 }}
                    >
                    I am a self-taught developer & designer from West Bengal,
                    </Motion.p>
                    <Motion.h2 
                    className='Footer_h2_text'
                    whileHover={{ scale: 1.03 }}
                    >
                    Gokul Sureshkumar
                    </Motion.h2>
                </Motion.div>
                <Motion.div 
                    className="profile-icons"
                    variants={containerVariants}
                >
                    <Motion.div 
                    className="icon"
                    variants={iconVariants}
                    whileHover="hover"
                    whileTap="tap"
                    >
                    <Instagram className='Footer_svg' />
                    </Motion.div>
                    <Motion.div 
                    className="icon"
                    variants={iconVariants}
                    whileHover="hover"
                    whileTap="tap"
                    >
                    <Github className='Footer_svg' />
                    </Motion.div>
                    <Motion.div 
                    className="icon"
                    variants={iconVariants}
                    whileHover="hover"
                    whileTap="tap"
                    >
                    <Linkedin className='Footer_svg' />
                    </Motion.div>
                    <Motion.div 
                    className="icon"
                    variants={iconVariants}
                    whileHover="hover"
                    whileTap="tap"
                    >
                    <Twitter className='Footer_svg' />
                    </Motion.div>
                </Motion.div>
                </div>
                
                <Motion.hr 
                className='Footer_hr'
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                />
                
                <Motion.div 
                    className="profile-bottom"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                >
                <p className='Footer_text'>
                    <span className="Footer_wave" role="img" aria-label="wave">Hey👋</span>, 
                    my name is <strong className='strong'>Gokul Sureshkumar</strong>! 
                    I am a self-taught developer & designer from West Bengal,
                </p>
                </Motion.div>
            </Motion.div>
            </div>
        </div>
        </div>
    </Motion.div>
    </div>
</Motion.div>
);
};

export default Footer;