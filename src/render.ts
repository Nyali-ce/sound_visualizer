import { useContext } from "react";
import { OptionContext } from "./Contexts/OptionContext";
import { invoke } from "@tauri-apps/api/core";

const render = () => {
    const {
        audioDuration,
        backgroundColor,
    } = useContext(OptionContext);

    invoke('render', {
        width: 1920,
        height: 1080,
        duration: audioDuration,
        color: backgroundColor,
    })
}

export default render;