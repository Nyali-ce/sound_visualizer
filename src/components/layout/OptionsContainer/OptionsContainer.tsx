import './optionsContainer.scss';
import { useState } from 'react';

interface OptionsContainerProps {
    component: JSX.Element;
}

const OptionsContainer = ({ component }: OptionsContainerProps) => {
    return (
        <>
            <div id='left-options-container'>
                {component}
            </div>
        </>
    );
};

export default OptionsContainer;