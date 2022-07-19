import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Link, Route, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Auth/Login";
import NewProject from "./pages/projects/NewProject";
import Tasks from "./pages/projects/Tasks";
import Projects from "./pages/projects/Projects";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/newproject" element={<NewProject />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
