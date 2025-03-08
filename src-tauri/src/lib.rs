use std::process::Command;
use tauri::command;

#[command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

// options
use serde::Deserialize;

#[derive(Deserialize)]
struct Options {
    width: u32,
    height: u32,
    duration: u32,
    color: String,
}

#[command]
fn render(options: Options) -> Result<(), String> {
    let output = Command::new("ffmpeg")
        .args([
            "-f",
            "lavfi",
            "-i",
            &format!(
                "color=c={}:s={}x{}:d={}",
                options.color, options.width, options.height, options.duration
            ),
            "-c:v",
            "libx264",
            "-t",
            &options.duration.to_string(),
            "video.mp4",
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
        .invoke_handler(tauri::generate_handler![greet, render])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
