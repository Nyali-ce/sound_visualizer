import { motion } from 'framer-motion';
import { Title, NumberInput } from '../Blocks';
import { useContext } from 'react';
import { OptionContext } from '../../../Contexts/OptionContext';

function General() {
    const {
        width,
        setWidth,
        height,
        setHeight
    } = useContext(OptionContext);

    const handleWidthChange = (newWidth: number) => {
        setWidth(parseInt(newWidth.toFixed(0)));
    }

    const handleHeightChange = (newHeight: number) => {
        setHeight(parseInt(newHeight.toFixed(0)));
    }

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
            {/* width and height select */}
            <NumberInput
                label='Width'
                value={width}
                onChange={handleWidthChange}
                min={0}
                max={1920 * 2}
                step={1}
            />
            <NumberInput
                label='Height'
                value={height}
                onChange={handleHeightChange}
                min={0}
                max={1080 * 2}
                step={1}
            />
        </motion.div>
    );
}

export default {
    name: 'General',
    icon: 'tv-music.svg',
    alt: 'TV Music Logo',
    component: General
};