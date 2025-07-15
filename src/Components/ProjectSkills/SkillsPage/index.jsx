import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import './index.scss';
import { 
    NavigationHeading,
    NavigationWebItems,
    NavigationProgrammingItems,
    NavigationDatabaseItems,
    NavigationVersionItems,
    NavigationDesignItems
} from './data'; 

const SkillsPage = () => {
    const [activeCategory, setActiveCategory] = useState(1);
    
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const categoryDataMap = {
        1: NavigationWebItems,
        2: NavigationProgrammingItems,
        3: NavigationDatabaseItems,
        4: NavigationVersionItems,
        5: NavigationDesignItems
    };

    const handleCategoryClick = (categoryId) => {
        setActiveCategory(categoryId);
    };

    const getCurrentCategoryData = () => {
        return categoryDataMap[activeCategory] || [];
    };

    return (
        <div className="skills-container" ref={ref}>
            <div className="skills-wrapper">
                <div className={`skills-layout ${inView ? 'visible' : ''}`}>
                    {/* <div className="skills-header">
                        <h1 className="skills-title">// Skills</h1>
                        <div className="skills-intro">
                            <p className="skills-greeting">
                                Hello world! My name is Gokul Sureshkumar, I'm a Designer & Software Engineer.
                            </p>
                        </div>
                    </div> */}
                    
                    <div className="skills-categories">
                        {NavigationHeading.map((skill) => (
                            <button
                                key={skill.id}
                                className={`category-btn ${activeCategory === skill.id ? 'active' : ''}`}
                                onClick={() => handleCategoryClick(skill.id)}
                            >
                                {skill.title}
                            </button>
                        ))}
                    </div>

                    <div className="skills-body">
                        <div className="skills-grid">
                            {getCurrentCategoryData().map((item) => (
                                <div key={item.id} className="skill-card">
                                    <img className='skill-icon-img' src={item.icons} alt={item.title} />
                                    {/* <div className="skill-info">
                                        <h3 className="skill-name">{item.title}</h3>
                                    </div> */}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkillsPage;