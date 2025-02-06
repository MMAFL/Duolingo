import  { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllAchievements } from '../store/reducers/achievementSlice'; // Correct import
import { RootState } from '../store'; // Correct import for RootState
import { ThunkDispatch } from '@reduxjs/toolkit'; // For typing dispatch

// Define the Achievement type (if not already defined)
interface Achievement {
  id: number;
  name: string;
}

const AchievementList = () => {
  // Typing dispatch for async thunks
  const dispatch = useDispatch<ThunkDispatch<RootState, void, any>>();

  // Typing the state using RootState
  const { achievements, loading, error } = useSelector((state: RootState) => state.achievement);

  useEffect(() => {
    dispatch(fetchAllAchievements()); // Dispatch the thunk
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Achievements</h1>
      <ul>
        {achievements.map((achievement: Achievement) => (
          <li key={achievement.id}>{achievement.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default AchievementList;