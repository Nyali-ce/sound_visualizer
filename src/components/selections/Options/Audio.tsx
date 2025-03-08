import { motion } from 'framer-motion';
import { OptionContext } from '../../../Contexts/OptionContext';
import { useContext } from 'react';
import { Title, Text, MediaInput, InfoContainer } from '../Blocks';

function Audio() {
    const { 
        audioFile, 
        setAudioFile,
        audioDuration,
        setAudioDuration 
    } = useContext(OptionContext);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            const file = event.target.files[0];
            setAudioFile(file);

            const audio = document.createElement('audio');
            audio.src = URL.createObjectURL(file);
            audio.onloadedmetadata = () => {
                setAudioDuration(audio.duration);
            };
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

            {!audioFile && <Text text='Upload an audio file to use in Sound Visualizer Thing.'/>}
            {audioFile && 
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