import './Main.scss';
import { motion } from 'framer-motion';

const Main = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className='animate'
        >
            <div id='main'>

                <div id='left-selection'>
                    <div className='left-option-container'>
                        <div className='left-option'>
                            <div className='left-option-icon'>
                                <img src="tv-music.svg" alt="TV Music Logo" className='option-icon' />
                            </div>
                            <p className='option-text'>
                                General
                            </p>
                        </div>
                    </div>
                    <div className='left-option-container'>
                        <div className='left-option'>
                        <div className='left-option-icon'>
                                <img src="waveform-lines.svg" alt="File Audio" className='option-icon' />
                            </div>
                            <p className='option-text'>
                                Audio
                            </p>
                        </div>
                    </div>
                    <div className='left-option-container'>
                        <div className='left-option'>
                        <div className='left-option-icon'>
                                <img src="wave-sine.svg" alt="Wave Sine" className='option-icon' />
                            </div>
                            <p className='option-text'>
                                Visualizer
                            </p>
                        </div>
                    </div>
                    <div className='left-option-container'>
                        <div className='left-option'>
                        <div className='left-option-icon'>
                                <img src="sparkles.svg" alt="Sparkles" className='option-icon' />
                            </div>
                            <p className='option-text'>
                                Effects
                            </p>
                        </div>

                    </div>
                    <div className='left-option-container'>
                        <div className='left-option'>
                        <div className='left-option-icon'>
                                <img src="image.svg" alt="Image" className='option-icon' />
                            </div>
                            <p className='option-text'>
                                Backdrop
                            </p>
                        </div>
                    </div>
                    <div className='left-option-container'>
                        <div className='left-option'>
                        <div className='left-option-icon'>
                                <img src="text-size.svg" alt="TV Music Logo" className='option-icon' />
                            </div>
                            <p className='option-text'>
                                Text
                            </p>
                        </div>

                    </div>
                </div>
                <div id='left-options-container'>

                </div>
                <div id='preview'>

                </div>
            </div>
        </motion.div>
    );
}

export default Main;