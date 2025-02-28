import { motion } from 'framer-motion';

function Audio() {
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
                key={'audio'}
                className='option-container'
            >
                <h1 className='option-title'>Audio</h1>
                <p className='option-description'>Audio content goes here.</p>
            </motion.div>
    );
}

export default {
    name: 'Audio',
    icon: 'waveform-lines.svg',
    alt: 'File Audio',
    component: Audio
};