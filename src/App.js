import * as React from 'react';
import './style.css';
import { Routes, Route, Link } from 'react-router-dom';
import Homepage from './Homepage';
import Loginpage from './Myformcomponent/Loginpage';
import Notfound from './Notfound';

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Loginpage />} />
        <Route path="/Loginpage" element={<Loginpage />} />
        <Route path="/Homepage" element={<Homepage />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </div>
  );
}
