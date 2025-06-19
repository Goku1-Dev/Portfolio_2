// import React from 'react';
import { iconFile } from "../../../utils";
import './index.scss';

export const MySkills = () => {
const skillsList = [
{ name: 'HTML5', icon: iconFile.html },
{ name: 'CSS3', icon: iconFile.css },
{ name: 'SCSS', icon: iconFile.scss },
{ name: 'Bootstrap', icon: iconFile.bootstrap },
{ name: 'JavaScript', icon: iconFile.js },
{ name: 'React.js', icon: iconFile.react },
{ name: 'Next.js', icon: iconFile.nextjs },
{ name: 'PayloadCMS', icon: iconFile.payloadCMS },
{ name: 'Node.js', icon: iconFile.nodejs },
{ name: 'Python', icon: iconFile.Python },
{ name: 'FastAPI', icon: iconFile.FastAPI },
{ name: 'MySQL', icon: iconFile.sql },
{ name: 'Figma', icon: iconFile.figma },
{ name: 'CorelDraw_X7', icon: iconFile.corel_draw },
{ name: 'Git', icon: iconFile.git },
{ name: 'Github', icon: iconFile.github }
];

return (
<div className='skills-container'>
    <div className='skills-wrapper'>
    <div className='skills-left-container'>
        <div className='skills-left-header'>
            <h2 className='skills-left-heading'>Skills</h2>
            <p className='skills-left-para'>
                A self-taught developer with expertise in multiple technologies. My focus is on creating clean, 
                efficient code and designing intuitive user experiences with a minimalist approach.
            </p>
        </div>
        <div className='skills-left-body'>
        {skillsList.map((skill, index) => (
            <div className="skills-item" key={index}>
            <div className="skills-icon-container">
                {/* Replace with actual icons or use icon library */}
                <div className="skills-icon"><img src={skill.icon} alt="icon" className="skills-icon-img" /></div>
            </div>
            <span className="skills-name">{skill.name}</span>
            </div>
        ))}
        </div>
    </div>
    <div className='skills-right-container'>
        <div className="about-me">
        <h2>About</h2>
        <div className="about-content">
            <p className="about-greeting">
            Hey👋, my name is Gokul Sureshkumar! I am a self-taught developer & designer from West Bengal, India, who is 
            really into unique designs, user experience and writing clean code.
            </p>
            <p className="about-journey">
            Speaking of myself while studying B.com(Hons) in Accountancy from University of Calcutta (Surprise!), web 
            development crossed my way and since then my journey as a developer begun. Currently I am working as a 
            freelance developer, I ave always taken deep interest in designing and developing beautiful websites for my 
            clients which focus on providing the best experience for everyone using them. Designing is something that needs 
            patience, effort and time. I am here to give in all of it and make sure that my work becomes my identity. Being a 
            minimalist, my belief is to make things simple and very specific. I am open to learning and working my level best 
            to make the results near to perfect.I ave always taken deep interest in designing and developing beautiful websites for my 
            clients which focus on providing the best experience for everyone using them. Designing is something that needs 
            patience, effort and time. I am here to give in all of it and make sure that my work becomes my identity. Being a 
            minimalist, my belief is to make things simple and very specific. I am open to learning and working my level best 
            to make the results near to perfect.
            </p>
        </div>
        </div>
    </div>
    </div>
</div>
);
};

export default MySkills;