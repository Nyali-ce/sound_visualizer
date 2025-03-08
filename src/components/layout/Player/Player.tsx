import './player.scss'
import { OptionContext } from '../../../Contexts/OptionContext';
import React, { useState, useContext } from 'react';
import { FaPlay, FaPause, FaVolumeMute, FaVolumeUp } from 'react-icons/fa';
import render from '../../../render';

const Player = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(1);
    const [isMuted, setIsMuted] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    
    const { audioDuration } = useContext(OptionContext);

    const togglePlayPause = () => {
        setIsPlaying(!isPlaying);
    };

    const toggleMute = () => {
        setIsMuted(!isMuted);
        setVolume(isMuted ? 1 : 0);
    };

    const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setVolume(parseFloat(event.target.value));
        setIsMuted(event.target.value === '0');
    };

    const handleRender = () => {
        render();
    };

    return (
        <div id='player-container'>
            {/* play/pause button */}
            <div id='player'>

                <button onClick={togglePlayPause} className='player-element' id='play-pause'> 
                    {isPlaying ? <FaPause /> : <FaPlay />}
                </button>

                {/* volume control, on hover show a slider for volume, and click for mute */}
                <div className='player-element' id='volume-control'>
                    <button onClick={toggleMute}>
                        {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
                    </button>
                    <div className='volume-slider'>
                        <input
                            type="range"
                            min="0"
                            max="1"
                            step="0.01"
                            value={volume}
                            onChange={handleVolumeChange}
                        />
                    </div>

                </div>

                {/* progress time ex. 0:00/2:00 */}
                <div className='player-element' id='progress-time'>
                    {Math.floor(currentTime / 60 / 60)}:{('0' + Math.floor(currentTime / 60 % 60)).slice(-2)}/
                    {Math.floor(audioDuration / 60)}:{('0' + Math.floor(audioDuration % 60)).slice(-2)}
                </div>

                {/* progress bar line that occupies the rest of the space */}
                <div className='player-element' id='progress-bar'>
                    <input
                        type="range"
                        min="0"
                        max={audioDuration * 60}
                        value={currentTime}
                        onChange={(e) => setCurrentTime(parseFloat(e.target.value))}
                    />
                </div>

                <button className='player-element' id='render-button'
                    onClick={handleRender}
                >Render Video

                </button>
            </div>
        </div>
    );
};

export default Player;