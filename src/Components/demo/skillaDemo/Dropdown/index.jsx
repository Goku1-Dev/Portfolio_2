import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react';
import './index.scss'

const Dropdown = ({ options = [], onSelect, placeholder = "Select an option", value }) => {
    const [isOpen, setIsOpen] = useState(false);

    const selectedOption = options.find(option => option.value === value) || null;

    const handleSelect = (value) => {
        setIsOpen(false);
        onSelect?.(value);
    };

    const handleMouseEnter = () => {
        setIsOpen(true);
    };

    const handleMouseLeave = () => {
        setIsOpen(false);
    };

    return (
        <div className="dropdown-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <button
                className={`dropdown-trigger ${isOpen ? 'open' : ''}`}
                onClick={() => setIsOpen(!isOpen)}
                type="button"
            >
                <div className="dropdown-content">
                    <div className="dropdown-icon">
                        <div className="icon-circle">
                            <img className='dropdown-icon_img' src={selectedOption?.icons} alt={selectedOption?.label} />
                        </div>
                    </div>
                    <span className="dropdown-label">
                        {selectedOption ? selectedOption.label : placeholder}
                    </span>
                </div>
                <ChevronDown 
                    className={`dropdown-arrow ${isOpen ? 'rotated' : ''}`}
                    size={20}
                />
            </button>
            
            {isOpen && (
                <div className="dropdown-menu">
                    {options.map((option) => (
                        <button
                            key={option.value}
                            className={`dropdown_menu_item ${
                                value === option.value ? 'selected' : ''
                            }`}
                            onClick={() => handleSelect(option.value)}
                            type="button"
                        >
                            <div className="dropdown-content">
                                <div className="dropdown-icon">
                                    <div className="icon-circle">
                                        <img className='dropdown-icon_img' src={option.icons} alt={option.label} />
                                    </div>
                                </div>
                                <span className="dropdown-label">{option.label}</span>
                            </div>
                        </button>
                    ))}
                </div>
            )}
        </div>
    )
}

export default React.memo(Dropdown);