use serde::Deserialize;
use std::fs::File;
use std::io::Write;
use std::path::PathBuf;
use tauri::command;

#[derive(Deserialize, PartialEq)]
pub enum FileType {
    Audio,
    Image,
}

#[command]
pub fn save_file(file_name: String, file_type: FileType, file_data: Vec<u8>) -> Result<(), String> {
    // if file type is audio, save it in audio_files folder
    if file_type == FileType::Audio {
        save_audio_file(file_name, &file_data)
    } else {
        save_background_file(file_name, &file_data)
    }
}

fn save_audio_file(file_name: String, file_data: &[u8]) -> Result<(), String> {
    let mut path = PathBuf::from("audio_files");
    if !path.exists() {
        std::fs::create_dir_all(&path).map_err(|e| e.to_string())?;
    }
    path.push(file_name);

    let mut file = File::create(path).map_err(|e| e.to_string())?;
    file.write_all(file_data).map_err(|e| e.to_string())?;
    Ok(())
}

fn save_background_file(file_name: String, file_data: &[u8]) -> Result<(), String> {
    let mut path = PathBuf::from("background_files");
    if !path.exists() {
        std::fs::create_dir_all(&path).map_err(|e| e.to_string())?;
    }
    path.push(file_name);

    let mut file = File::create(path).map_err(|e| e.to_string())?;
    file.write_all(file_data).map_err(|e| e.to_string())?;
    Ok(())
}
