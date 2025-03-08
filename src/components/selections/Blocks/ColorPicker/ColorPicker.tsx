import React, { useState, useRef, useEffect } from 'react';
import './ColorPicker.scss';

interface ColorPickerProps {
    initialColor?: string;
    onChange?: (color: string) => void;
    text?: string;
}

const ColorPicker: React.FC<ColorPickerProps> = ({ initialColor, onChange, text }) => {
    const [color, setColor] = useState(initialColor);
    const inputRef = useRef<HTMLInputElement>(null);

        useEffect(() => {
            const input = inputRef.current;
            if (input) {
                const handleInputChange = () => {
                    const newColor = input.value;
                    setColor(newColor);
                    if (onChange) {
                        onChange(newColor);
                    }
                };
                input.addEventListener('input', handleInputChange);
                return () => {
                    input.removeEventListener('input', handleInputChange);
                };
            }
        }, [onChange]);

    const handleButtonClick = () => {
        if (inputRef.current) {
            inputRef.current.click();
        }
    };

    return (
        <div className="color-picker">
            <label>{text}</label>
            <button
                style={{ backgroundColor: color }}
                className="color-button"
                onClick={handleButtonClick}
            >
                <input type="color" className='color-input' ref={inputRef} />
            </button>
        </div>
    );
};

export default ColorPicker;