import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import {
  CssBaseline,
  createTheme,
  StyledEngineProvider,
} from "@mui/material";

import { ThemeProvider } from './Context';




const muiTheme = createTheme();

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <StyledEngineProvider injectFirst>
    <ThemeProvider>
       <CssBaseline />
        <App />
    </ThemeProvider>
    </StyledEngineProvider>
  </BrowserRouter>
);
document.getElementById('root')
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
