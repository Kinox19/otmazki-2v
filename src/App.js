import { HomePage } from './pages/HomePage/HomePage';
import s from './styles/App.scss';
import { Routes, Route } from 'react-router';
import { MakeMeReason } from './pages/MakeMeReason/MakeMeReason';
import { ResultPage } from './pages/ResultPage/ResultPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/1" element={<MakeMeReason/>} />
        <Route path="/2" element={<ResultPage/>} />
      </Routes>
    </div>
  );
}

export default App;
