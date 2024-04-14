import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/home';
import SingleEvent from './pages/single-event';
import AuthPage from './pages/auth';
import ProfilePage from './pages/profile';
import ProfileLayout from './components/profile-layout.tsx';
import SettingPage from './pages/settings';
import ChatsPage from './pages/chats';
import MaterialsPage from './pages/meterials';
import Layout from './components/layout.tsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="single-event" element={<SingleEvent />} />
        <Route path="auth" element={<AuthPage />} />

        <Route path="profile" element={<ProfileLayout />}>
          <Route index element={<ProfilePage />} />
          <Route path="settings" element={<SettingPage />} />
          <Route path="chats" element={<ChatsPage />} />
          <Route path="materials" element={<MaterialsPage />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
