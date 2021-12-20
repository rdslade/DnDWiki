import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navigation,
  Home,
  Blog,
  Posts,
  Post,
} from "./components";

ReactDOM.render(
  <div id="fullpage">
    <Router>
      <Navigation />
      <div id="content">
        <Routes >
          <Route path="/" element={<Home />} />
          <Route 
            path="/maps" 
            element={
              <Blog title="Maps" />
            } 
          />
          <Route 
            path="/history" 
            element={
              <Blog title="History and Information" />
            } 
          />
          <Route 
            path="/resources" 
            element={
              <Blog title="Scrolls and Books" />
            } 
          />          
        </Routes>
      </div>
    </Router>
  </div>,

  document.getElementById("root")
);