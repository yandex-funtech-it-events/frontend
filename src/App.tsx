import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/home';
import AuthPage from './pages/auth';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/auth" element={<AuthPage />} />
    </Routes>
  );
}

export default App;
