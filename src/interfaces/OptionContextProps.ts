interface OptionContextProps {
    audioFile: File | null;
    setAudioFile: (file: File | null) => void;

    audioDuration: number;
    setAudioDuration: (duration: number) => void;

    backgroundType: 'color' | 'image';
    setBackgroundType: (type: 'color' | 'image') => void;

    backgroundColor: string;
    setBackgroundColor: (color: string) => void;

    backgroundImage: File | null;
    setBackgroundImage: (file: File | null) => void;

    visualizerColor: string;
    setVisualizerColor: (color: string) => void;

    smoothness: number;
    setSmoothness: (smoothness: number) => void;

    particleEffect: boolean;
    setParticleEffect: (enabled: boolean) => void;
}

export default OptionContextProps;