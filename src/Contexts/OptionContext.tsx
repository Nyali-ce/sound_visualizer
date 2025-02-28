import { createContext, useState, ReactNode} from "react";

import OptionContextProps from "../interfaces/OptionContextProps";

export const OptionContext = createContext<OptionContextProps>({
    audioFile: null,
    setAudioFile: () => {}
});

export const OptionProvider = ({ children }: { children: ReactNode }) => {
    const [audioFile, setAudioFile] = useState<File | null>(null);

    return (
        <OptionContext.Provider value={{ audioFile, setAudioFile }}>
            {children}
        </OptionContext.Provider>
    );
};