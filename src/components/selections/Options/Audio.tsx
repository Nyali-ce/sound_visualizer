import { motion } from 'framer-motion';
import { OptionContext } from '../../../Contexts/OptionContext';
import { useContext, useState } from 'react';
import { Title, Text } from '../Blocks';

function Audio() {
    const { audioFile, setAudioFile } = useContext(OptionContext);
    const [audioDuration, setAudioDuration] = useState<number | null>(null);

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
            <Text text='Upload an MP3, WAV, or AAC file to sync your audio with the preview.'/>
            <input type="file" accept='audio/*' onChange={handleFileChange} />
            {audioFile ? (
                <div>
                    <audio src={URL.createObjectURL(audioFile)} controls></audio>
                    {audioDuration !== null && (
                        <p>Track length: {audioDuration.toFixed(2)} seconds</p>
                    )}
                </div>
            ) : (
                <p>You need to select a file</p>
            )}
        </motion.div>
    );
}

export default {
    name: 'Audio',
    icon: 'waveform-lines.svg',
    alt: 'File Audio',
    component: Audio
};