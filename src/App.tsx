import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/home';
import AuthPage from './pages/auth';
import ProfilePage from './pages/profile';
import ProfileLayout from './components/profile-layout.tsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/profile" element={<ProfileLayout />}>
        <Route index element={<ProfilePage />} />
      </Route>
    </Routes>
  );
}

export default App;
