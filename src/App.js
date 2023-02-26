import { HashRouter, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';

import './App.css';
import Navbar from './components/Navbar/Navbar';
import Menu from './components/Menu/Menu';
import { useState } from 'react';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <HashRouter>
      <Menu menuOpen={menuOpen} />
      <Navbar setMenuOpen={setMenuOpen} />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/druga-strana' element={<h1>Druga strana</h1>} />
        <Route path='*' element={<h1>Not Found 404</h1>} />
      </Routes>
    </HashRouter>
  );
}

export default App;
