import { HomePage } from './pages/HomePage/HomePage';
import s from './styles/App.scss';
import { Routes, Route } from 'react-router';
import { MakeMeReason } from './pages/MakeMeReason/MakeMeReason';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/1" element={<MakeMeReason/>} />
      </Routes>
    </div>
  );
}

export default App;
