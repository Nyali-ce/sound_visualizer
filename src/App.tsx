import { useState } from "react";
import { invoke } from "@tauri-apps/api/core";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.scss";

import { Background } from "./components/layout";

import Menu from "./pages/Menu";
import Main from "./pages/Main";

import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();

  return (
    <>
    <Background />
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Menu/>} />
        <Route path="/Main" element={<Main/>} />
      </Routes>
    </AnimatePresence>
    </>
  );
}

export default App;

  // const [greetMsg, setGreetMsg] = useState("");
  // const [name, setName] = useState("");

  // async function greet() {
  //   // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
  //   setGreetMsg(await invoke("greet", { name }));
  // }

{/* <form
  className="row"
  onSubmit={(e) => {
    e.preventDefault();
    greet();
  }}
>
  <input
    id="greet-input"
    onChange={(e) => setName(e.currentTarget.value)}
    placeholder="Enter a name..."
  />
  <button type="submit">Greet</button>
</form> */}