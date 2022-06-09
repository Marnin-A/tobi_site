import Styles from'./App.module.css';
import React from "react";
import { lazy, Suspense, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
const Navbar=lazy(()=>import('./components/navbar/navbar'));
const Home=lazy(()=>import('./pages/home/home'));

function App() {
  return (
  <div className="App">
    <Suspense fallback={<h1>Loadging...</h1>}>
      <Navbar/>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </Router>
    </Suspense>
    </div>
  );
}

export default App;
