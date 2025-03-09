export default interface RustRenderProps {
    [key: string]: unknown;
    options: {
        width: number;
        height: number;
        duration: number & { __brand: 'integer' };
        color: string;
        audio_file: string;
        visualizer_color: string;
        smoothness: number;
        particle_effect: boolean;
        background_type: 'color' | 'image';
        background_image: string | null;
    };
}
