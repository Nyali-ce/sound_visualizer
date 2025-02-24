import './optionsContainer.scss';
import { useState } from 'react';

interface OptionsContainerProps {
    updateOptions: (newOptions: string[]) => void;
}

const OptionsContainer = () => {
    const [options, setOptions] = useState<string[]>([]);

    const handleButtonClick = (newOptions: string[]) => {
        setOptions(newOptions);
    };

    return (
        <>
            <div id='left-options-container'>
                <button onClick={() => handleButtonClick(['Option 1', 'Option 2', 'Option 3'])}>Menu 1</button>
                <button onClick={() => handleButtonClick(['Option A', 'Option B', 'Option C'])}>Menu 2</button>
                <div id='options'>
                    {options.map((option, index) => (
                        <div key={index}>{option}</div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default OptionsContainer;