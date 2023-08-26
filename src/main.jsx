import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home.jsx";
import Email from "./pages/Email.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="email" element={<Email />} />
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
