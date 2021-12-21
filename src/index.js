import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navigation,
  Home,
  Blog,
  ImagePage,
  Posts,
  Post,
} from "./components";
import {MAPS, TOP_LEVEL_NAV} from "./constants.js"

ReactDOM.render(
  <div id="fullpage">
    <Router>
      <Navigation links={TOP_LEVEL_NAV}/>
      <div class="content">
        <Routes >
          <Route path="/" element={<Home />} />
          <Route 
            path="/maps" 
            element={
              <Blog title="Maps" base="maps" links={MAPS}/>
            } 
          >
            <Route path=":id" element={<ImagePage />} />
          </Route>
          <Route 
            path="/history" 
            element={
              <Blog title="History and Information"/>
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