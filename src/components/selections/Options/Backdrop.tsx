import { motion } from 'framer-motion';
import { Title, ColorPicker, SelectionGrid, MediaInput } from '../Blocks';
import React, { useContext } from 'react';
import { OptionContext } from '../../../Contexts/OptionContext';
import {invoke} from '@tauri-apps/api/core';

function Backdrop() {
    const { 
        backgroundColor, 
        setBackgroundColor,
        backgroundType,
        setBackgroundType,
        setBackgroundImage,
        setWidth,
        setHeight
    } = useContext(OptionContext);

    const onBackgroundTypeChange = (type: string) => {
        setBackgroundType(type as 'color' | 'image');
    }

    const onBackgroundColorChange = (color: string) => {
        setBackgroundColor(color);
    }

    const onBackgroundImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = (event.target as HTMLInputElement).files?.[0];
        if (file) {
            setBackgroundImage(file);

            const image = document.createElement('img');
            image.src = URL.createObjectURL(file);
            image.onload = () => {
                // Send the file to the backend
                const reader = new FileReader();
                reader.onload = () => {
                    const arrayBuffer = reader.result as ArrayBuffer;
                    const uint8Array = new Uint8Array(arrayBuffer);

                    // Send the file to the backend
                    invoke('save_file', { fileName: file.name, fileType: 'Image', fileData: Array.from(uint8Array) })
                        .then(() => {
                            console.log('File saved successfully');
                            setWidth(image.width);
                            setHeight(image.height);
                        })
                        .catch((error: Error) => {
                            console.error('Error saving file:', error);
                        });
                };
                reader.readAsArrayBuffer(file);
            }
        }
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
                key={'backdrop'}
                className='option-container'
            >
                <Title title='Backdrop' />
                <SelectionGrid text='Background Type' options={['color', 'image']} selectedValue={backgroundType} onSelect={onBackgroundTypeChange} />
                {backgroundType === 'color' && <ColorPicker text='Backdrop Color' initialColor={backgroundColor} onChange={onBackgroundColorChange} />}
                {backgroundType === 'image' && <MediaInput text='Backdrop Image' fileType='image' handleFileChange={onBackgroundImageChange} icon='image.svg' type='inline' />}
            </motion.div>
    );
}

export default {
    name: 'Backdrop',
    icon: 'image.svg',
    alt: 'Image',
    component: Backdrop
};