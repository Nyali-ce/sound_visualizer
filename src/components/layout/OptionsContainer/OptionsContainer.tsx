import './optionsContainer.scss';
import { AnimatePresence } from 'framer-motion';

interface OptionsContainerProps {
    Component: () => JSX.Element;
}

const OptionsContainer = ({ Component }: OptionsContainerProps) => {
    return (
        <>
            <div id='left-options-container'>
                <AnimatePresence>
                <Component />
                </AnimatePresence>
            </div>
        </>
    );
};

export default OptionsContainer;