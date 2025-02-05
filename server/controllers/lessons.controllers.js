const { Lesson } = require('../database/models/lessons.mode');


const LessonsController = {
    // Retrieve all lessons for a given level
    async getLessonsByLevel(req, res) {
        const { levelId } = req.params;
        
        try {
            const lessons = await Lesson.findAll({
                where: { level_id: levelId }
            });
            res.status(200).json(lessons);
        } catch (error) {
            res.status(500).json({ error: 'Failed to fetch lessons' });
        }
    },

    // Begin a lesson and track progress
    async startLesson(req, res) {
        const { lessonId } = req.params;
        const userId = req.user.id; // Assuming user is authenticated
        
        try {
            // Here you would typically create a record in a UserLessonProgress table
            // Since that model isn't shown, we'll just return the lesson details
            const lesson = await Lesson.findByPk(lessonId);
            if (!lesson) {
                return res.status(404).json({ error: 'Lesson not found' });
            }
            res.status(200).json({ 
                message: 'Lesson started',
                lesson
            });
        } catch (error) {
            res.status(500).json({ error: 'Failed to start lesson' });
        }
    },

    // Mark a lesson as completed and reward XP
    async completeLesson(req, res) {
        const { lessonId } = req.params;
        const userId = req.user.id; // Assuming user is authenticated
        
        try {
            // Here you would typically:
            // 1. Update UserLessonProgress to mark as completed
            // 2. Add XP to user's profile
            // Since those models aren't shown, we'll just return a success message
            const lesson = await Lesson.findByPk(lessonId);
            if (!lesson) {
                return res.status(404).json({ error: 'Lesson not found' });
            }
            res.status(200).json({ 
                message: 'Lesson completed',
                xpEarned: 100 // Default XP value
            });
        } catch (error) {
            res.status(500).json({ error: 'Failed to complete lesson' });
        }
    }
};

module.exports = LessonsController;
