# Sound Visualizer

Sound Visualizer is a project that allows users to upload audio files and generate videos with visualizations of the audio. The visualizations can include waveforms, background images, and various effects.

## Features

- Upload audio files
- Generate videos with audio visualizations
- Customize visualizer color
- Add background images
- Adjust visualizer smoothness
- Enable particle effects

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/sound_visualizer.git
    cd sound_visualizer
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Build the project:
    ```sh
    npm run build
    ```

4. Run the project:
    ```sh
    npm run tauri dev
    ```

## Usage

1. Open the application.
2. Upload an audio file using the "Upload Audio" button.
3. Customize the visualizer settings (color, background image, smoothness, particle effects).
4. Click the "Render Video" button to generate the video.

## Project Structure

- `src/`: Contains the frontend code.
- `src-tauri/`: Contains the backend code.
- `src/components/`: Contains the React components.
- `src/contexts/`: Contains the context providers.
- `src/interfaces/`: Contains TypeScript interfaces.
- `src-tauri/src/commands/`: Contains the Tauri commands.
- `src-tauri/src/main.rs`: Entry point for the Tauri application.
- `src-tauri/src/lib.rs`: Main library file for the Tauri application.

## TODO

- [ ] Add support for more audio formats.
- [ ] Improve the UI for better user experience.
- [ ] Add more visualizer effects.
- [ ] Implement video export options (e.g., different resolutions, formats).
- [ ] Add unit tests for the backend commands.
- [ ] Optimize the performance of the video rendering process.
- [ ] Add documentation for the codebase.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.