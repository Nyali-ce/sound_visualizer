import { motion } from 'framer-motion';

function Effects() {
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
                key={'effects'}
                className='option-container'
            >
                <h1 className='option-title'>Effects</h1>
                <p className='option-description'>Effects content goes here.</p>
            </motion.div>
    );
}

export default {
    name: 'Effects',
    icon: 'sparkles.svg',
    alt: 'Sparkles',
    component: Effects
};