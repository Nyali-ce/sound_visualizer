import { createContext, useState, ReactNode} from "react";

import OptionContextProps from "../interfaces/OptionContextProps";

export const OptionContext = createContext<OptionContextProps>({
    audioFile: null,
    setAudioFile: () => {},
    audioDuration: 0,
    setAudioDuration: () => {}
});

export const OptionProvider = ({ children }: { children: ReactNode }) => {
    const [audioFile, setAudioFile] = useState<File | null>(null);
    const [audioDuration, setAudioDuration] = useState<number>(0);

    return (
        <OptionContext.Provider value={{ audioFile, setAudioFile, audioDuration, setAudioDuration }}>
            {children}
        </OptionContext.Provider>
    );
};