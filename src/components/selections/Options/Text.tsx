import { motion } from 'framer-motion';

function Text() {
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
                key={'text'}
                className='option-container'
            >
                <h1 className='option-title'>Text</h1>
                <p className='option-description'>Text content goes here.</p>
            </motion.div>
    );
}

export default {
    name: 'Text',
    icon: 'text-size.svg',
    alt: 'Text Size',
    component: Text
};