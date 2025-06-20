import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import './App.css'
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import ChatsPage from "./pages/ChatsPage";
import ResetPassPage from "./pages/ResetPassPage";
import NewPassPage from "./pages/NewPassPage";
import ProfileRouteWrapper from "./features/profile/ProfileRouteWrapper";
import NotificationsPage from "./pages/NotificationsPage";

function Logout() {
    const navigate = useNavigate();

    useEffect(() => {
        const handleLogout = async () => {
            localStorage.clear(); // Clear localStorage after the API call
            navigate('/login'); // Redirect to login after logout
        };

        handleLogout();
    }, [navigate]);

    return <p>Logging out...</p>;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/chats" element={<ChatsPage />} />
        <Route path="/notifications" element={<NotificationsPage />} />
        <Route path="/profile/:userId" element={<ProfileRouteWrapper />} />
        <Route path="/reset-pass" element={<ResetPassPage />} />
        <Route path="/new-pass" element={<NewPassPage />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;