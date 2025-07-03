import React, { useState, useEffect  } from 'react'
import './index.scss';
import { 
    NavigationHeading,
    NavigationWebItems,
    NavigationProgrammingItems,
    NavigationDatabaseItems,
    NavigationVersionItems,
    NavigationDesignItems } from './data'; 

const SkillCnt = () => {
    const [activeCategory, setActiveCategory] = useState(1);
    const [selectedItem, setSelectedItem] = useState(null);

    // Function to get items based on category
    const getItemsByCategory = (categoryId) => {
        switch (categoryId) {
            case 1:
                return NavigationWebItems;
            case 2:
                return NavigationProgrammingItems;
            case 3:
                return NavigationDatabaseItems;
            case 4:
                return NavigationVersionItems;
            case 5:
                return NavigationDesignItems;
            default:
                return [];
        }
    };

    // Auto-select first item when component mounts or category changes
    useEffect(() => {
        const currentItems = getItemsByCategory(activeCategory);
        if (currentItems.length > 0) {
            // Find the item with id: 1, or fallback to first item
            const firstItem = currentItems.find(item => item.id === 1) || currentItems[0];
            setSelectedItem(firstItem);
        }
    }, [activeCategory]);

    const handleCategoryClick = (categoryId) => {
        setActiveCategory(categoryId);
        // selectedItem will be set by useEffect
    };

    const handleItemClick = (item) => {
        setSelectedItem(item);
    };

    const currentItems = getItemsByCategory(activeCategory);

    return (
        <div className='SkillCnt_container'>
            <div className='SkillCnt_wrapper'>
                <div className='SkillCnt_header'>// Skills</div>
                <div className='SkillCnt_heading'>
                    Talk about your journey into full-stack development what inspires you, 
                    and what excites you about building things with code.
                </div>
                <div className='SkillCnt_skill_container'>
                    <div className='SkillCnt_skill_wrapper'>
                        <div className='SkillCnt_skill_header'>
                            {NavigationHeading.map((skill) => (
                                <div 
                                    className={`skill_container ${activeCategory === skill.id ? 'active' : ''}`} 
                                    key={skill.id}
                                    onClick={() => handleCategoryClick(skill.id)}
                                >
                                    <div className='skill_nav_item'>
                                        {skill.title}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className='SkillCnt_skill_body'>    
                            <div className='SkillCnt_skill_sidebar'>
                                {currentItems.map((item) => (
                                    <div 
                                        key={item.id}
                                        className={`sidebar_item ${selectedItem?.id === item.id ? 'selected' : ''}`}
                                        onClick={() => handleItemClick(item)}
                                    >
                                        <div className='item_icon'>{item.icons}</div>
                                        {/* <span className='item_title'>{item.title}</span> */}
                                    </div>
                                ))}
                            </div>
                            <div className='SkillCnt_skill_content'>
                                {selectedItem && (
                                    <div className='content_container'>
                                        <div className='content_wrapper'>
                                            <div className='content_heading'>{selectedItem.title}</div>
                                            <div className='content_description'>{selectedItem.description}</div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SkillCnt



{/* <div className='Skills_dropdown'>
    <div 
        className={`Skills_dropdown_trigger ${isDropdownOpen ? 'open' : ''}`}
        onClick={toggleDropdown}
    >
        <span>{selectedItem ? selectedItem.title : 'Select a skill'}</span>
        <span className={`dropdown_arrow ${isDropdownOpen ? 'rotated' : ''}`}>▼</span>
    </div>
    {isDropdownOpen && (
        <div className='Skills_dropdown_menu'>
            {currentItems.map((item) => (
                <div 
                    className={`Skills_dropdown_item ${selectedItem && selectedItem.id === item.id ? 'active' : ''}`} 
                    key={item.id}
                    onClick={() => handleItemClick(item)}
                >
                    {item.title}
                </div>
            ))}
        </div>
    )}
</div> */}