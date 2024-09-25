import React from "react";
import {createRoot} from "react-dom/client";
import "./index.css";
import App from "./App";

const elmid =  document.getElementById("root")
const root = createRoot(elmid)
root.render(<App />,elmid)
