import React from "react";
import ReactDom from 'react-dom/client';
import App from './App';
import './index.css'

import Song from "./Song";
const root =ReactDom.createRoot(document.getElementById("root"));

root.render(
  <>
  <Song />

    <App />
  </>
  
)