import { HashRouter, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';

import './App.css';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/druga-strana' element={<h1>Druga strana</h1>} />
        <Route path='*' element={<h1>Not Found 404</h1>} />
      </Routes>
    </HashRouter>
  );
}

export default App;
