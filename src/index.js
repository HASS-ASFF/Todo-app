// Use a feature that needs Babel to work in all browsers :)
// arrow functions + Array fill

// index.js

import React from "react";
import { createRoot } from "react-dom/client";
import Hello from "./Hello";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<Hello />);