import { motion } from 'framer-motion';
import { Title, Text } from '../Blocks';

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

            <Title title='General' />
            <Text text='This is the general section of the app. You can use this to change general settings.' />

        </motion.div>
    );
}

export default {
    name: 'General',
    icon: 'tv-music.svg',
    alt: 'TV Music Logo',
    component: General
};