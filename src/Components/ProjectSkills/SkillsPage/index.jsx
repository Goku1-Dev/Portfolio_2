import React from 'react';
import './index.scss';
import { NavigationToolItems} from './data'; 

const SkillsPage = () => {

    return (
        <div className="SkillsPage-container">
            <div className="SkillsPage-wrapper">
                <div className='SkillsPage-layout visible'>
                    <div className="SkillsPage-body">
                        <div className="SkillsPage-grid">
                            {NavigationToolItems.map((item) => (
                                <div key={item.id} className="SkillsPage-card">
                                    <img className='SkillsPage-icon-img' src={item.icons} alt={item.title} />
                                    <div className="SkillsPage-info">
                                        <h3 className="SkillsPage-name">{item.title}</h3>
                                    </div>
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