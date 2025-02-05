// seed.js
const {
    User,
    Language,
    UserLanguage,
    Level,
    Lesson,
    Exercise,
    Quiz,
    UserProgress,
    Heart,
    Gem,
    Leaderboard,
    Achievement,
    UserAchievement,
    Streak
  } = require("./index");
  
  async function seed() {
    try {
      // 1. Languages (create before any tables that reference them)
      await Language.bulkCreate(
        [
          { language_name: "English" },
          { language_name: "Spanish" },
          { language_name: "French" }
        ],
        { ignoreDuplicates: true }
      );
  
      // 2. Users
      await User.bulkCreate(
        [
          { username: "john_doe", email: "john@example.com", password_hash: "hashed_password_1" },
          { username: "jane_doe", email: "jane@example.com", password_hash: "hashed_password_2" }
        ],
        { ignoreDuplicates: true }
      );
  
      // 3. UserLanguages (associating users with languages)
      // (Assumes john_doe (user_id 1) is learning English (language_id 1)
      //  and jane_doe (user_id 2) is learning Spanish (language_id 2))
      await UserLanguage.bulkCreate(
        [
          { user_id: 1, language_id: 1, learning_progress: 50 },
          { user_id: 2, language_id: 2, learning_progress: 75 }
        ],
        { ignoreDuplicates: true }
      );
  
      // 4. Levels (each level is linked to a language)
      await Level.bulkCreate(
        [
          { language_id: 1, level_title: "Beginner", unlock_points_required: 0, xp_reward: 10 },
          { language_id: 1, level_title: "Intermediate", unlock_points_required: 50, xp_reward: 20 },
          { language_id: 2, level_title: "Beginner", unlock_points_required: 0, xp_reward: 10 }
        ],
        { ignoreDuplicates: true }
      );
  
      // 5. Lessons (each lesson is linked to a level)
      await Lesson.bulkCreate(
        [
          { level_id: 1, lesson_title: "Lesson 1: Greetings", lesson_description: "Introduction to greetings." },
          { level_id: 1, lesson_title: "Lesson 2: Basic Grammar", lesson_description: "Introduction to basic grammar." },
          { level_id: 2, lesson_title: "Lesson 1: Conversation", lesson_description: "Intermediate conversation skills." }
        ],
        { ignoreDuplicates: true }
      );
  
      // 6. Exercises (each exercise is linked to a lesson)
      await Exercise.bulkCreate(
        [
          {
            lesson_id: 1,
            exercise_type: "Multiple Choice",
            question_text: "How do you say hello?",
            correct_answer: "Hello",
            options: JSON.stringify(["Hello", "Goodbye", "Please", "Thanks"])
          },
          {
            lesson_id: 2,
            exercise_type: "Fill in the Blank",
            question_text: "Fill in: I ____ to the store.",
            correct_answer: "went",
            options: null
          }
        ],
        { ignoreDuplicates: true }
      );
  
      // 7. Quizzes (each quiz is linked to a level)
      await Quiz.bulkCreate(
        [
          {
            level_id: 1,
            questions: JSON.stringify([
              { question: "What is your name?", options: ["A", "B", "C", "D"], answer: "A" }
            ])
          }
        ],
        { ignoreDuplicates: true }
      );
  
      // 8. UserProgress (tracks each user's progress)
      await UserProgress.bulkCreate(
        [
          {
            user_id: 1,
            level_id: 1,
            lesson_id: 1,
            quiz_completed: true,
            score: 80,
            mistakes: 2,
            xp_earned: 10
          }
        ],
        { ignoreDuplicates: true }
      );
  
      // 9. Hearts (tracks the remaining hearts per user)
      await Heart.bulkCreate(
        [
          { user_id: 1, remaining_hearts: 5 },
          { user_id: 2, remaining_hearts: 4 }
        ],
        { ignoreDuplicates: true }
      );
  
      // 10. Gems (tracks the gem balance per user)
      await Gem.bulkCreate(
        [
          { user_id: 1, gem_balance: 10 },
          { user_id: 2, gem_balance: 15 }
        ],
        { ignoreDuplicates: true }
      );
  
      // 11. Leaderboards (ranks users based on XP points)
      await Leaderboard.bulkCreate(
        [
          { user_id: 1, xp_points: 150, rank: 1 },
          { user_id: 2, xp_points: 120, rank: 2 }
        ],
        { ignoreDuplicates: true }
      );
  
      // 12. Achievements
      await Achievement.bulkCreate(
        [
          { title: "First Steps", description: "Completed your first lesson", xp_reward: 10 },
          { title: "Quiz Master", description: "Scored above 80% on a quiz", xp_reward: 20 }
        ],
        { ignoreDuplicates: true }
      );
  
      // 13. UserAchievements (assign achievements to users)
      await UserAchievement.bulkCreate(
        [
          { user_id: 1, achievement_id: 1 },
          { user_id: 2, achievement_id: 2 }
        ],
        { ignoreDuplicates: true }
      );
  
      // 14. Streaks (tracks daily activity streaks)
      await Streak.bulkCreate(
        [
          { user_id: 1, streak_count: 3 },
          { user_id: 2, streak_count: 5 }
        ],
        { ignoreDuplicates: true }
      );
  
      console.log("Seed data have been saved");
    } catch (error) {
      console.error("Error seeding data:", error);
    }
  }
  
  seed();
  