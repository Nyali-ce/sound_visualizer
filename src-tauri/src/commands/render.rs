use chrono::Local;
use serde::Deserialize;
use std::path::PathBuf;
use std::process::Command;
use tauri::command;

#[derive(Deserialize)]
pub struct Options {
    pub width: u32,
    pub height: u32,
    pub duration: u32,
    pub color: String,
    pub audio_file: String,
    pub visualizer_color: String,
    // pub smoothness: u32,
    // pub particle_effect: bool,
    pub background_type: String,
    pub background_image: Option<String>,
}

#[command]
pub fn render(options: Options) -> Result<(), String> {
    // if output folder does not exist, create it
    let mut path = PathBuf::from("output");
    if !path.exists() {
        std::fs::create_dir_all(&path).map_err(|e| e.to_string())?;
    }

    // if file already exists, delete it
    path.push("render.mp4");

    let color_filter = format!(
        "color=c={}:s={}x{}:d={}",
        options.color, options.width, options.height, options.duration
    );

    let filter_complex = if options.background_type == "image" {
        format!(
            "[0:v]scale={}x{}[bg];[2:a]showwaves=s={}x{}:mode=line:colors={}[wave];[bg][wave]overlay=(W-w)/2:(H-h)/2",
            options.width, options.height, options.width, options.height, options.visualizer_color
        )
    } else {
        format!(
            "[1:a]showwaves=s={}x{}:mode=line:colors={}[wave];[0:v][wave]overlay=(W-w)/2:(H-h)/2",
            options.width, options.height, options.visualizer_color
        )
    };

    let date = format!("output/{}.mp4", Local::now().format("%Y-%m-%d_%H-%M-%S"));

    let mut args = vec![
        "-f",
        "lavfi",
        "-i",
        &color_filter,
        "-i",
        &options.audio_file,
        "-filter_complex",
        &filter_complex,
        "-c:v",
        "libx264",
        "-c:a",
        "aac",
        "-shortest",
        &date,
    ];

    if options.background_type == "image" {
        if let Some(image) = &options.background_image {
            args.insert(0, "-i");
            args.insert(1, image);
        } else {
            return Err("Background image is required for image background type".to_string());
        }
    }

    let output = Command::new("ffmpeg")
        .args(&args)
        .output()
        .map_err(|e| e.to_string())?;

    if output.status.success() {
        Ok(())
    } else {
        Err(String::from_utf8_lossy(&output.stderr).to_string())
    }
}
