import { useState } from 'react';
import './selectionMenu.scss';
import SelectionMenuProps from '../../../interfaces/SelectionMenuProps';
import { motion } from 'framer-motion';

const SelectionMenu = ({ options, onSelectOption }: SelectionMenuProps) => {
    if (!options) {
        return null;
    }

    const [selectedOption, setSelectedOption] = useState('General');

    return (
        <motion.div id='left-selection'
        initial={{ opacity: 0, y: -400 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
            delay: 0,
            duration: 1,
            ease: "easeInOut",
        }}
        >
            {options.map(option => (
                <div key={option.name} className='left-option-container'>
                    <div
                        className={`left-option ${selectedOption === option.name ? 'selected-option' : ''}`}
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
        </motion.div>
    );
}

export default SelectionMenu;
