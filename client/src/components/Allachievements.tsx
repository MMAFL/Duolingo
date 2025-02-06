// components/AllAchievements.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllAchievements } from '../types/states/achievementTypes';

const AllAchievements = () => {
  const dispatch = useDispatch();
  const { allAchievements, loading, error } = useSelector((state) => state.achievement);

  useEffect(() => {
    dispatch(fetchAllAchievements());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>All Achievements</h2>
      {allAchievements.map((achievement) => (
        <div key={achievement.id}>
          <h3>{achievement.name}</h3>
          <p>{achievement.description}</p>
          <p>Reward: {achievement.reward} XP</p>
        </div>
      ))}
    </div>
  );
};

export default AllAchievements;