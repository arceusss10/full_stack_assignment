import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import FetchPage from './pages/fetchPage';
import UpdatePage from './pages/updatePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fetch" element={<FetchPage />} />
        <Route path="/update" element={<UpdatePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
