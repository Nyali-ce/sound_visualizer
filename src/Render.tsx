import { useContext } from "react";
import { OptionContext } from "./Contexts/OptionContext";
import { invoke } from "@tauri-apps/api/core";
import RustRenderProps from "./interfaces/RustRenderProps";

const Render = () => {
    const {
        audioFile,
        audioDuration,
        backgroundType,
        backgroundColor,
        backgroundImage,
        visualizerColor,
        smoothness,
        particleEffect
    } = useContext(OptionContext);
        
    const handleRender = () => {
        if (!audioFile) {
            alert('Please select an audio file');
            return;
        }

        const renderProps: RustRenderProps = {
            options: {
                width: 1920,
                height: 1080,
                audio_file: `./audio_files/${audioFile?.name}`,
                duration: toInteger(audioDuration),
                color: backgroundColor,
                visualizer_color: visualizerColor,
                smoothness: smoothness,
                particle_effect: particleEffect,
                background_type: backgroundType,
                background_image: backgroundImage ? `./background_files/${backgroundImage.name}` : null
            }
        };

        invoke('render', renderProps)
    }

    return (<button 
        className='player-element' 
        id='render-button'
        onClick={handleRender}
    >
        Render Video
    </button>);
}

function toInteger(audioDuration: number): number & { __brand: "integer"; } {
    return Math.floor(audioDuration) as number & { __brand: "integer"; };
}

export default Render;