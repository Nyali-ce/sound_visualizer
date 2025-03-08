import { motion } from 'framer-motion';
import { Title, ColorPicker } from '../Blocks';
import { useContext } from 'react';
import { OptionContext } from '../../../Contexts/OptionContext';

function Backdrop() {
    const { 
        backgroundColor, 
        setBackgroundColor 
    } = useContext(OptionContext);

    return (
            <motion.div
            initial={{ opacity: 0, x: -400 }}
            animate={{ opacity: 1, x: 0 }}
            transition={
                {
                    duration: 0.3,
                    ease: "easeInOut",
                }}
            exit={{ opacity: 0, x: 400 }}
                key={'backdrop'}
                className='option-container'
            >
                <Title title='Backdrop' />
                <ColorPicker text='Backdrop Color' initialColor={backgroundColor} onChange={setBackgroundColor} />
            </motion.div>
    );
}

export default {
    name: 'Backdrop',
    icon: 'image.svg',
    alt: 'Image',
    component: Backdrop
};