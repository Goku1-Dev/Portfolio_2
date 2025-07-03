import React, { useState } from 'react'
import './index.scss';
import { 
    NavigationHeading,
    NavigationWebItems,
    NavigationProgrammingItems,
    NavigationDatabaseItems,
    NavigationVersionItems,
    NavigationDesignItems
} from './data'; 
import Dropdown from './Dropdown';

const Skills = () => {
        const [activeCategory, setActiveCategory] = useState(1);
        const [selectedSkill, setSelectedSkill] = useState(null);
        
        const categoryDataMap = {
            1: NavigationWebItems,
            2: NavigationProgrammingItems,
            3: NavigationDatabaseItems,
            4: NavigationVersionItems,
            5: NavigationDesignItems
        };
        const handleCategoryClick = (categoryId) => {
            setActiveCategory(categoryId);
            setSelectedSkill(null);
        };

        const handleSkillSelect = (skillId) => {
            const currentCategoryData = categoryDataMap[activeCategory];
            const skill = currentCategoryData.find(item => item.id === skillId);
            setSelectedSkill(skill);
        };
        
        // Get current category data for dropdown
        const getCurrentCategoryData = () => {
            return categoryDataMap[activeCategory] || [];
        };
        
        // Get current category title
        const getCurrentCategoryTitle = () => {
            const category = NavigationHeading.find(cat => cat.id === activeCategory);
            return category ? category.title : '';
        };

    return (
        <div className='Skills_container'>
            <div className='Skills_wrapper'>
                <div className='Skills_layout_container'>
                    <div className='Skills_layout_wrapper'>
                        <div className='Skills_header'>
                            <div className='Skills_header_heading'>// Skills</div>
                            <div className='Skills_header_content'>
                                Talk about your journey into full-stack development what inspires you, 
                            and what excites you about building things with code.
                            </div>
                        </div>
                        <div className='Skills_body'>
                            <div className='Skills_body_left'>
                                {NavigationHeading.map((skill) => (
                                    <div 
                                        className={`Skills_body_left_container ${activeCategory === skill.id ? 'active' : ''}`} 
                                        key={skill.id}
                                        onClick={() => handleCategoryClick(skill.id)}
                                    >
                                        <div className='skill_body_nav_item'>
                                            {skill.title}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className='Skills_body_right'>
                                <div className='Skills_body_right_container'>
                                    <div className='Skills_body_right_wrapper'>
                                        <h3 className='Skills_body_right_heading'>Select a skill</h3>
                                        <Dropdown className='Skills_body_right_dropdown'
                                            options={getCurrentCategoryData().map(item => ({
                                                    value: item.id,
                                                    label: item.title
                                                }))}
                                                onSelect={handleSkillSelect}
                                                placeholder={`${getCurrentCategoryTitle()}`}
                                        />
                                    </div>
                                    <div className='Skills_body_right_content'>
                                        {selectedSkill ? (
                                            <div className="skill_detail">
                                                <div className="skill_detail_icon">
                                                    {selectedSkill.icons}
                                                </div>
                                                <div className="skill_detail_info">
                                                    <h3>{selectedSkill.title}</h3>
                                                    <p>Category: {getCurrentCategoryTitle()}</p>
                                                    {/* Add more skill details here as needed */}
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="skill_placeholder">
                                                <p>Select a skill from the dropdown to see details</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills