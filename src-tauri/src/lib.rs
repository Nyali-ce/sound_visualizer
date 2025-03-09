use std::fs::File;
use std::io::Write;
use std::path::PathBuf;
use std::process::Command;
use tauri::command;

#[command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

use serde::Deserialize;

#[derive(Deserialize)]
struct Options {
    width: u32,
    height: u32,
    duration: u32,
    color: String,
    audio_file: String,
}

#[command]
fn save_audio_file(file_name: String, file_data: Vec<u8>) -> Result<(), String> {
    let mut path = PathBuf::from("audio_files");
    if !path.exists() {
        std::fs::create_dir_all(&path).map_err(|e| e.to_string())?;
    }
    path.push(file_name);

    let mut file = File::create(path).map_err(|e| e.to_string())?;
    file.write_all(&file_data).map_err(|e| e.to_string())?;
    Ok(())
}

#[command]
fn render(options: Options) -> Result<(), String> {
    // if output folder does not exist, create it
    let mut path = PathBuf::from("output");
    if !path.exists() {
        std::fs::create_dir_all(&path).map_err(|e| e.to_string())?;
    }

    // if file already exists, delete it
    path.push("render.mp4");
    let output = Command::new("ffmpeg")
        .args([
            "-f",
            "lavfi",
            "-i",
            &format!(
                "color=c={}:s={}x{}:d={}",
                options.color, options.width, options.height, options.duration
            ),
            "-i",
            &options.audio_file,
            "-c:v",
            "libx264",
            "-c:a",
            "aac",
            "-shortest",
            "output/render.mp4",
        ])
        .output()
        .map_err(|e| e.to_string())?;

    if output.status.success() {
        Ok(())
    } else {
        Err(String::from_utf8_lossy(&output.stderr).to_string())
    }
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![greet, save_audio_file, render])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
