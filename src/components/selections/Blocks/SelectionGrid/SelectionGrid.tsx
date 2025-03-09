import React from 'react';
import './SelectionGrid.scss';

interface SelectionGridProps {
    // options is array of string
    options: string[];
    onSelect: (value: string) => void;
    selectedValue: string;
    text: string;
}

const SelectionGrid: React.FC<SelectionGridProps> = ({ options, onSelect, selectedValue, text }) => {
    return (
        <div className="selection-grid">
            <label className="selection-grid-label">{text}</label>
            <div className="selection-grid-container">
            {options.map(option => (
                <div
                    key={option}
                    className={`selection-box ${selectedValue === option ? 'selected-grid' : ''}`}
                    onClick={() => onSelect(option)}
                >
                    {option}
                </div>
            ))}
            </div>
        </div>
    );
};

export default SelectionGrid;