import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import ProfilePage from "./pages/ProfilePage";
import LessonPage from "./pages/LessonPage";
import DailyRewardsPage from "./pages/DailyRewardsPage";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/lessons" element={<LessonPage />} />
        <Route path="/daily-rewards" element={<DailyRewardsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
