import './App.css';
import { Routes, Route } from 'react-router-dom';
import React from "react";
//Menu elements
import Menu from './components/Menu';
import Home from './routes/Home'
import Active from './routes/Active'
import Completed from './routes/Completed';

import BtnDL from './components/BtnDL';

function App() {
  
  return (
    <div>
      <BtnDL
      />
      <h1 className="font-black text-5xl text-center text-black mx-auto mt-10 dark:text-slate-300">
        To Do App
      </h1>
      
      < Menu
      />
      <div>
        <Routes>
          <Route path="/"
            element={
              <Home/>}
          />

          <Route path="/Active"
            element={
              <Active/>}
          />

          <Route path="/Completed"
            element={
              <Completed/>}
          />

        </Routes>
      </div>
    </div>

  )
}

export default App
