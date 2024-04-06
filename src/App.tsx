import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/home';
import SingleEvent from './pages/single-event';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/single-event" element={<SingleEvent />} />
    </Routes>
  );
}

export default App;
