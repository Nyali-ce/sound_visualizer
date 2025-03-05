export default interface OptionContextProps {
    audioFile: File | null,
    setAudioFile: (file: File | null) => void,
    audioDuration: number,
    setAudioDuration: (duration: number) => void
}