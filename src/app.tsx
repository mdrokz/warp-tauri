import { useState } from "preact/hooks";
import preactLogo from "./assets/preact.svg";
import { invoke } from "@tauri-apps/api/tauri";
import "./index.css";

import Welcome from './components/Welcome';

import Send from './components/Send';

export function App() {
  const [greetMsg, setGreetMsg] = useState<string>("");
  const [name, setName] = useState<string>("");

  const greet = async () => {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    setGreetMsg(await invoke("greet", { name }));
  };

  return (
    <div>
      <Welcome />
      <Send />
    </div>
  );
}
