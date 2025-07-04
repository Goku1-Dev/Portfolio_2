import React, { useState, useEffect, useCallback } from 'react'
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

const SkillsCnt = () => {
    const [activeCategory, setActiveCategory] = useState(1);
    const [selectedSkillId, setSelectedSkillId] = useState(null);

    const categoryDataMap = {
        1: NavigationWebItems,
        2: NavigationProgrammingItems,
        3: NavigationDatabaseItems,
        4: NavigationVersionItems,
        5: NavigationDesignItems
    };

    // Get the first item ID of the current category
    const getFirstItemId = useCallback(() => {
        const currentItems = categoryDataMap[activeCategory];
        return currentItems && currentItems.length > 0 ? currentItems[0].id : null;
    }, [activeCategory]);

    // Set the first item as selected when category changes
    useEffect(() => {
        setSelectedSkillId(getFirstItemId());
    }, [activeCategory, getFirstItemId]);

    const handleCategoryClick = (categoryId) => {
        setActiveCategory(categoryId);
    };

    const handleSkillSelect = useCallback((skillId) => {
        setSelectedSkillId(skillId);
    }, []);

    // Get current category data for dropdown
    const getCurrentCategoryData = () => {
        return categoryDataMap[activeCategory] || [];
    };

    // Get current category title
    // const getCurrentCategoryTitle = () => {
    //     const category = NavigationHeading.find(cat => cat.id === activeCategory);
    //     return category ? category.title : '';
    // };

    // Get the currently selected skill
    const selectedSkill = getCurrentCategoryData().find(item => item.id === selectedSkillId);
    console.log(selectedSkill)

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
                                        <h2 className='Skills_body_right_heading'>{selectedSkill?.title}</h2>
                                        <Dropdown 
                                            className='Skills_body_right_dropdown'
                                            options={getCurrentCategoryData().map(item => ({
                                                value: item.id,
                                                label: item.title,
                                                icons: item.icons
                                            }))}
                                            onSelect={handleSkillSelect}
                                            value={selectedSkillId}
                                        />
                                    </div>
                                    <div className='Skills_body_right_content'>
                                        {selectedSkill ? (
                                            <div className="skill_detail">
                                                <div className="skill_detail_info">
                                                    <div className='skill_detail_info_subheading'>
                                                        <h2>Proficient – Used extensively in 5+ real-time projects</h2>
                                                    </div>
                                                    <div className="skill_detail_info_description">
                                                        <h3 className="skill_detail_info_description_heading">Description</h3>
                                                        <p className="skill_detail_info_description_para">
                                                            Developed interactive and responsive user interfaces using React.js,
                                                            implementing advanced concepts like hooks, context API, and performance optimization techniques. 
                                                            Built scalable applications integrating REST APIs and ensured reusable component design for faster development.
                                                            Developed interactive and responsive user interfaces using React.js,
                                                            implementing advanced concepts like hooks, context API, and performance optimization techniques. 
                                                            Built scalable applications integrating REST APIs and ensured reusable component design for faster development.
                                                        </p>
                                                    </div>
                                                    <div className="skill_detail_info_keyDescription">
                                                        <h3 className="skill_detail_info_keyDescription_heading">Key Projects using {selectedSkill.title}</h3>
                                                        <p className="skill_detail_info_keyDescription_para">
                                                            Developed interactive and responsive user interfaces using React.js,
                                                            implementing advanced concepts like hooks, context API, and performance optimization techniques. 
                                                            Built scalable applications integrating REST APIs and ensured reusable component design for faster development.
                                                            Developed interactive and responsive user interfaces using React.js,
                                                            implementing advanced concepts like hooks, context API, and performance optimization techniques. 
                                                            Built scalable applications integrating REST APIs and ensured reusable component design for faster development.
                                                        </p>
                                                    </div>
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

export default SkillsCnt;