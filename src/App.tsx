import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/home';
import AuthPage from './pages/auth';
import ProfilePage from './pages/profile';
import ProfileLayout from './components/profile-layout.tsx';
import SettingPage from './pages/settings';
import ChatsPage from './pages/chats';
import MaterialsPage from './pages/meterials';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/profile" element={<ProfileLayout />}>
        <Route index element={<ProfilePage />} />
        <Route path="settings" element={<SettingPage />} />
        <Route path="chats" element={<ChatsPage />} />
        <Route path="materials" element={<MaterialsPage />} />
      </Route>
    </Routes>
  );
}

export default App;
