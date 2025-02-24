import React, { useState } from 'react';
import './selectionMenu.scss';

interface SelectionMenuProps {
    options: { name: string, icon: string, alt: string }[];
}

const SelectionMenu = ({ options }: SelectionMenuProps) => {
    if (!options) {
        return null;
    }

    const [selectedOption, setSelectedOption] = useState('General');

    return (
        <div id='left-selection'>
            {options.map(option => (
                <div key={option.name} className='left-option-container'>
                    <div
                        className={`left-option ${selectedOption === option.name ? 'selected' : ''}`}
                        onClick={() => setSelectedOption(option.name)}
                    >
                        <div className='left-option-icon'>
                            <img src={option.icon} alt={option.alt} className='option-icon' />
                        </div>
                        <p className='option-text'>
                            {option.name}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default SelectionMenu;
