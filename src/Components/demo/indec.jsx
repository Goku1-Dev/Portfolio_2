// // Dropdown.jsx
// import React, { useState, useEffect } from 'react'
// import { ChevronDown } from 'lucide-react';
// import './index.scss'

// const Dropdown = ({ options = [], onSelect, placeholder = "Select an option", defaultValue = null }) => {
//     const [isOpen, setIsOpen] = useState(false);
//     const [selectedOption, setSelectedOption] = useState(null);
    
//     // Reset selected option when options change (category change)
//     useEffect(() => {
//         setSelectedOption(null);
//         setIsOpen(false);
//     }, [options]);
    
//     // Set default value if provided
//     useEffect(() => {
//         if (defaultValue && options.length > 0) {
//             const defaultOption = options.find(option => option.value === defaultValue);
//             if (defaultOption) {
//                 setSelectedOption(defaultOption);
//                 onSelect && onSelect(defaultOption.value);
//             }
//         }
//     }, [defaultValue, options, onSelect]);
    
//     const handleSelect = (value) => {
//         const option = options.find(opt => opt.value === value);
//         setSelectedOption(option);
//         setIsOpen(false);
        
//         if (onSelect) {
//             onSelect(value);
//         }
//     };

//     return (
//         <div className="dropdown">
//             <button 
//                 className={`dropdown_toggle ${isOpen ? 'open' : ''}`}
//                 onClick={() => setIsOpen(!isOpen)}
//                 type="button"
//             >
//                 <div className="dropdown_toggle_content">
//                     <div className="dropdown_toggle_text">
//                         <span className="dropdown_toggle_icon">
//                             {selectedOption?.icons || ''}
//                         </span>
//                         <span className="dropdown_toggle_label">
//                             {selectedOption ? selectedOption.label : placeholder}
//                         </span>
//                     </div>
//                     <ChevronDown 
//                         size={20} 
//                         className={`dropdown_toggle_arrow ${isOpen ? 'rotate' : ''}`}
//                     />
//                 </div>
//             </button>
            
//             {isOpen && (
//                 <div className="dropdown_menu">
//                     {options.map((option) => (
//                         <button
//                             key={option.value}
//                             className={`dropdown_menu_item ${
//                                 selectedOption?.value === option.value ? 'selected' : ''
//                             }`}
//                             onClick={() => handleSelect(option.value)}
//                             type="button"
//                         >
//                             <div className="dropdown_menu_item_content">
//                                 <span className="dropdown_menu_item_icon">
//                                     {option.icons || ''}
//                                 </span>
//                             </div>
//                             {option.label}
//                         </button>
//                     ))}
//                 </div>
//             )}
//         </div>
//     )
// }

// export default Dropdown