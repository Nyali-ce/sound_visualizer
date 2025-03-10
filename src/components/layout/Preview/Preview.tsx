import './preview.scss';
import { useContext } from 'react';
import { OptionContext } from '../../../Contexts/OptionContext';
import { motion } from 'framer-motion';

const Preview = () => {
    const {
        backgroundColor,
        backgroundType,
        visualizerColor,
        backgroundImage
    } = useContext(OptionContext);

    return (
        <motion.div id='preview-container'
            initial={{ opacity: 0, y: -400 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                delay: 1,
                duration: 1,
                ease: "easeInOut",
            }}

        >
            <div id='preview' style={{ backgroundColor: backgroundColor }}>
            </div>
        </motion.div>
    );
}

export default Preview;