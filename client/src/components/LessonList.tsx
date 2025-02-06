import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import { completeLesson, deductHeart } from "../store/slices/gameSlice";

const LessonList: React.FC = () => {
  const dispatch = useDispatch();
  const lessons = useSelector((state: RootState) =>
    state.game.levels.flatMap((level) => level.lessons)
  );

  const handleCompleteLesson = (lessonId: number) => {
    dispatch(completeLesson({ lessonId }));
  };

  const handleMistake = () => {
    dispatch(deductHeart());
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ color: "#343a40" }}>Lessons</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {lessons.map((lesson) => (
          <li
            key={lesson.lessonId}
            style={{
              backgroundColor: "#f8f9fa",
              padding: "15px",
              margin: "10px 0",
              borderRadius: "8px",
              border: "1px solid #e0e0e0",
            }}
          >
            <h3 style={{ color: "#007bff" }}>{lesson.title}</h3>
            <p style={{ color: "#343a40" }}>{lesson.description}</p>
            <button
              onClick={() => handleCompleteLesson(lesson.lessonId)}
              disabled={lesson.completed}
              style={{
                backgroundColor: lesson.completed ? "#4CAF50" : "#007bff",
                color: "#ffffff",
                border: "none",
                padding: "8px 16px",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              {lesson.completed ? "Completed" : "Complete Lesson"}
            </button>
          </li>
        ))}
      </ul>
      <button
        onClick={handleMistake}
        style={{
          backgroundColor: "#dc3545",
          color: "#ffffff",
          border: "none",
          padding: "8px 16px",
          borderRadius: "4px",
          cursor: "pointer",
          marginTop: "20px",
        }}
      >
        Make a Mistake (Lose a Heart)
      </button>
    </div>
  );
};

export default LessonList;
