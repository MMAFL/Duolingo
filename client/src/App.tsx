import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import ProfilePage from "./pages/ProfilePage";
import LessonPage from "./pages/LessonPage";
import DailyRewardsPage from "./pages/DailyRewardsPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import './App.css'
import Gems from './components/gems.tsx'
import Levels from './components/levels.tsx'
import Store from './pages/store.tsx'
import AchievementList from "./components/AchievementList.tsx"
const App: React.FC = () => {
  const isAuthenticated = !!localStorage.getItem("token");


  return (
    <Router>
      <Routes>
        <Route path="/" element={<AchievementList />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/lessons" element={<LessonPage />} />
        <Route path="/daily-rewards" element={<DailyRewardsPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/dashboard"
          element={isAuthenticated ? <DashboardPage /> : <Navigate to="/login" />}
        />
        <Route path="/" element={<Navigate to="/register" />} />
        <Route path="/store" element={<Store />} />

      </Routes>
    </Router>
  );
};

export default App;
