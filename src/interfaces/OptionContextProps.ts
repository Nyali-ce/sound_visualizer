export default interface OptionContextProps {
    audioFile: File | null,
    setAudioFile: (file: File | null) => void,

    audioDuration: number,
    setAudioDuration: (duration: number) => void

    backgroundType: 'color' | 'image',
    setBackgroundType: (type: 'color' | 'image') => void,

    backgroundColor: string,
    setBackgroundColor: (color: string) => void,

    backgroundImage: File | null,
    setBackgroundImage: (file: File | null) => void,
}