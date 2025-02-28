import { motion } from 'framer-motion';

function General() {
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
                key={'general'}
                className='option-container'
            >
                <h1 className='option-title'>General</h1>
                <p className='option-description'>General content goes here.</p>
            </motion.div>
    );
}

export default {
    name: 'General',
    icon: 'tv-music.svg',
    alt: 'TV Music Logo',
    component: General
};