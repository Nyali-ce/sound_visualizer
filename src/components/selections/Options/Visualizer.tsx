import { motion } from 'framer-motion';

function Visualizer() {

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
                key={'visualizer'}
                className='option-container'
            >
                <h1 className='option-title'>Visualizer</h1>
                <p className='option-description'>Visualizer content goes here.</p>
            </motion.div>
    );
}

export default {
    name: 'Visualizer',
    icon: 'wave-sine.svg',
    alt: 'Wave Sine',
    component: Visualizer
};