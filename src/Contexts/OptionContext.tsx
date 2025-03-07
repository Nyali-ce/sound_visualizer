import { createContext, useState, ReactNode} from "react";

import OptionContextProps from "../interfaces/OptionContextProps";

export const OptionContext = createContext<OptionContextProps>({
    audioFile: null,
    setAudioFile: () => {},

    audioDuration: 0,
    setAudioDuration: () => {},

    backgroundType: 'color',
    setBackgroundType: () => {},

    backgroundColor: '#000000',
    setBackgroundColor: () => {},

    backgroundImage: null,
    setBackgroundImage: () => {},
});

export const OptionProvider = ({ children }: { children: ReactNode }) => {
    const [audioFile, setAudioFile] = useState<File | null>(null);
    const [audioDuration, setAudioDuration] = useState<number>(0);
    const [backgroundType, setBackgroundType] = useState<'color' | 'image'>('color');
    const [backgroundColor, setBackgroundColor] = useState<string>('#000000');
    const [backgroundImage, setBackgroundImage] = useState<File | null>(null);

    return (
        <OptionContext.Provider value={{ 
            audioFile, setAudioFile,
            audioDuration, setAudioDuration,
            backgroundType, setBackgroundType,
            backgroundColor, setBackgroundColor,
            backgroundImage, setBackgroundImage
}}>
            {children}
        </OptionContext.Provider>
    );
};