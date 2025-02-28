import { motion } from 'framer-motion';

function Backdrop() {
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
                <h1 className='option-title'>Backdrop</h1>
                <p className='option-description'>Backdrop content goes here.</p>
            </motion.div>
    );
}

export default {
    name: 'Backdrop',
    icon: 'image.svg',
    alt: 'Image',
    component: Backdrop
};