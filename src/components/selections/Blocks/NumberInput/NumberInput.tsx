import React, { useState } from 'react';
import './numberInput.scss';

interface NumberInputProps {
    label: string;
    min: number;
    max: number;
    step: number;
    value: number;
    onChange: (value: number) => void;
}

const NumberInput: React.FC<NumberInputProps> = ({ label, min, max, step, value, onChange }) => {
    const [inputValue, setInputValue] = useState(value);

    const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = Number(event.target.value);
        setInputValue(newValue);
        onChange(newValue);
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = Number(event.target.value);
        setInputValue(newValue);
        onChange(newValue);
    };

    return (
        <div className="number-input-container">
            <div className='number-input-range'>
            <label className="number-input-label">{label}</label>
            {max <= 100 && (
                <input
                    type="range"
                    className="number-input-slider"
                    min={min}
                    max={max}
                    step={step}
                    value={inputValue}
                    onChange={handleSliderChange}
                />
            )}
            </div>
            <input
                type="number"
                className="number-input-field"
                min={min}
                max={max}
                step={step}
                value={inputValue}
                onChange={handleInputChange}
            />
        </div>
    );
};

export default NumberInput;