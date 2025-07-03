import React, { useState, useEffect } from 'react'
import { ChevronDown } from 'lucide-react';
import './index.scss'

const Dropdown = ({ options = [], onSelect, placeholder = "Select an option", defaultValue = null }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    
    // Reset and select first option when options change (category change)
    useEffect(() => {
        setIsOpen(false);
        
        if (options.length > 0) {
            // Select first option by default
            const firstOption = options[0];
            setSelectedOption(firstOption);
            
            // Call onSelect with the first option's value
            if (onSelect) {
                onSelect(firstOption.value);
            }
        } else {
            setSelectedOption(null);
        }
    }, [options]); // Removed onSelect from dependency array to prevent unnecessary re-renders
    
    // Set default value if provided (this will override the first option selection)
    useEffect(() => {
        if (defaultValue && options.length > 0) {
            const defaultOption = options.find(option => option.value === defaultValue);
            if (defaultOption) {
                setSelectedOption(defaultOption);
                if (onSelect) {
                    onSelect(defaultOption.value);
                }
            }
        }
    }, [defaultValue, options]); // Removed onSelect from dependency array
    
    const handleSelect = (value) => {
        const option = options.find(opt => opt.value === value);
        setSelectedOption(option);
        setIsOpen(false);
        
        if (onSelect) {
            onSelect(value);
        }
    };

    return (
        <div className="dropdown-container">
            <button
                className={`dropdown-trigger ${isOpen ? 'open' : ''}`}
                onClick={() => setIsOpen(!isOpen)}
                type="button"
            >
                <div className="dropdown-content">
                    <div className="dropdown-icon">
                        <div className="icon-circle"></div>
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
                                selectedOption?.value === option.value ? 'selected' : ''
                            }`}
                            onClick={() => handleSelect(option.value)}
                            type="button"
                        >
                            <div className="dropdown-content">
                                <div className="dropdown-icon">
                                    <div className="icon-circle"></div>
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

export default Dropdown