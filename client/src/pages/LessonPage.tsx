import React from "react";
import Sidebar from "../components/Sidebar";
import LessonList from "../components/LessonList";

const LessonPage: React.FC = () => {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <LessonList />
    </div>
  );
};

export default LessonPage;
