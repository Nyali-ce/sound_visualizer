import './optionsContainer.scss';
import { AnimatePresence } from 'framer-motion';

interface OptionsContainerProps {
    component: JSX.Element;
}

const OptionsContainer = ({ component }: OptionsContainerProps) => {
    return (
        <>
            <div id='left-options-container'>
                <AnimatePresence>
                {component}
                </AnimatePresence>
            </div>
        </>
    );
};

export default OptionsContainer;