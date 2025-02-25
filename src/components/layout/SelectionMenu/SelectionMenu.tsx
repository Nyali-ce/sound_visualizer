import { useState } from 'react';
import './selectionMenu.scss';
import SelectionMenuProps from '../../../interfaces/SelectionMenuProps';

const SelectionMenu = ({ options, onSelectOption }: SelectionMenuProps) => {
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
                        onClick={() => {
                            setSelectedOption(option.name)
                            onSelectOption(option)
                            }
                        }
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
