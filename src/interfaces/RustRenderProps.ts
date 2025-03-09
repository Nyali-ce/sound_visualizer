export default interface RustRenderProps {
    [key: string]: unknown;
    options:{
        width: number,
        height: number,
        duration: number & { __brand: 'integer' },
        color: string,
        audio_file: string,
    }
}
