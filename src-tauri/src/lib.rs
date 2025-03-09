use tauri::command;

mod commands {
    pub mod render;
    pub mod save_file;
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![
            commands::save_file::save_file,
            commands::render::render
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
