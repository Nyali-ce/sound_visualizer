import './optionsContainer.scss';
import { AnimatePresence } from 'framer-motion';
import { JSX } from 'react';
import { motion } from 'framer-motion';

interface OptionsContainerProps {
    Component: () => JSX.Element;
}

const OptionsContainer = ({ Component }: OptionsContainerProps) => {
    return (
        <>
            <motion.div id='left-options-container'
                initial={{ opacity: 0, y: -400 }}
                animate={{ opacity: 1, y: 0 }}
                transition={
                    {
                        delay: 0.5,
                        duration: 1,
                        ease: "easeInOut",
                    }}>
                <AnimatePresence>
                    <Component key={Component.name} />
                </AnimatePresence>
            </motion.div>
        </>
    );
};

export default OptionsContainer;