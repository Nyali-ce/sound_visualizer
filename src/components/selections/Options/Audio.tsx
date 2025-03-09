import { motion } from 'framer-motion';
import { OptionContext } from '../../../Contexts/OptionContext';
import { useContext, useState } from 'react';
import { Title, Text, MediaInput, InfoContainer } from '../Blocks';
import { invoke } from '@tauri-apps/api/core';

function Audio() {
    const { 
        audioFile, 
        setAudioFile,
        audioDuration,
        setAudioDuration 
    } = useContext(OptionContext);
    const [loading, setLoading] = useState(false);

    const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            setLoading(true);

            const file = event.target.files[0];
            setAudioFile(file);

            const audio = document.createElement('audio');
            audio.src = URL.createObjectURL(file);
            audio.onloadedmetadata = () => {
                setAudioDuration(audio.duration);
            };

            // Read the file as an ArrayBuffer
            const reader = new FileReader();
            reader.onload = () => {
                const arrayBuffer = reader.result as ArrayBuffer;
                const uint8Array = new Uint8Array(arrayBuffer);

                // Send the file to the backend
                invoke('save_audio_file', { fileName: file.name, fileData: Array.from(uint8Array) })
                    .then(() => {
                        console.log('File saved successfully');
                    })
                    .catch((error: Error) => {
                        console.error('Error saving file:', error);
                        setLoading(false);
                    })
                    .finally(() => {
                        // Hide loading message
                        setLoading(false);
                    });
            };
            reader.readAsArrayBuffer(file);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, x: -400 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
                duration: 0.3,
                ease: "easeInOut",
            }}
            exit={{ opacity: 0, x: 400 }}
            key={'audio'}
            className='option-container'
        >
            <Title title='Audio'/>
            <MediaInput text='Upload Audio' fileType='audio' handleFileChange={handleFileChange} icon='music-note.svg'/>

            {loading && <Text text='Loading... Please wait.'/>}

            {!audioFile && !loading && <Text text='Upload an audio file to use in Sound Visualizer Thing.'/>}
            {audioFile && !loading && 
                <>
                    <InfoContainer text='Audio File' info={audioFile.name}/> 
                    <InfoContainer text='Duration' info={audioDuration.toFixed(2) + 's'}/>
                </>
            }
        </motion.div>
    );
}

export default {
    name: 'Audio',
    icon: 'waveform-lines.svg',
    alt: 'File Audio',
    component: Audio
};