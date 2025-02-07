import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllAchievements } from '../store/reducers/achievementSlice';
import { RootState } from '../store';
import { ThunkDispatch } from '@reduxjs/toolkit'
import '../styles/AchievementList.css';

interface Achievement {
  achievement_id: number;
  title: string;
  description?: string;
  xp_reward?: number;
  completed: boolean;
}

interface AchievementState {
  achievements: Achievement[];
  loading: boolean;
  error: string | null;
}

const AchievementList = () => {
  const dispatch = useDispatch<ThunkDispatch<RootState, void, any>>();
  const { achievements, loading, error } = useSelector((state: RootState) => state.achievement as AchievementState);
  const userXP = useSelector((state: RootState) => state.user.xp);

  useEffect(() => {
    dispatch(fetchAllAchievements());
  }, [dispatch]);

  useEffect(() => {
    achievements.forEach((achievement) => {
      if (!achievement.completed) {
        // Check for XP milestones
        if (achievement.title.includes('XP') && userXP >= (achievement.xp_reward || 0)) {
          alert(`🎉 Congratulations! You've earned ${userXP} XP!`);
        }
        
        // Check for lesson completion
        if (achievement.title.includes('Lesson') && achievement.completed === false) {
          alert(`🎉 Congratulations! You've completed ${achievement.title}!`);
        }

        // Check for daily goals
        if (achievement.title.includes('Daily') && userXP >= 30) {
          alert(`🌟 Amazing! You've reached your daily XP goal!`);
        }
      }
    });
  }, [userXP, achievements]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Achievements</h1>
      <div className="xp-progress-container">
        <div 
          className="xp-progress-bar" 
          style={{ width: `${Math.min((userXP / 100) * 100, 100)}%` }}
        >
          <span className="xp-text">{userXP} XP</span>
        </div>
      </div>
      <ul>
        {achievements.map((achievement) => (
          <li key={achievement.achievement_id}>
            {achievement.title}: {achievement.description} - {achievement.xp_reward} XP
            {achievement.completed && <span> (Completed)</span>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AchievementList;