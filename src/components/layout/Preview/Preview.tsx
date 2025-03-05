import './preview.scss';
import { useEffect, useRef, useContext } from 'react';
import WaveSurfer from 'wavesurfer.js';
import { OptionContext } from '../../../Contexts/OptionContext';

const Preview = () => {
    const { audioFile } = useContext(OptionContext);
    const waveformRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (audioFile && waveformRef.current) {
            const waveSurfer = WaveSurfer.create({
                container: waveformRef.current,
                waveColor: 'violet',
                progressColor: 'purple',
            });

            waveSurfer.load(URL.createObjectURL(audioFile));

            return () => waveSurfer.destroy();
        }
    }, [audioFile]);

    return (
        <div id='preview-container'>
            <div id='preview' ref={waveformRef}></div>
        </div>
    );
}

export default Preview;