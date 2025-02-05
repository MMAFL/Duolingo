const { Language, UserLanguages } = require('../database/models');

const LanguageController = {
    // Fetch all available languages
    async getAllLanguages(req, res) {
        try {
            const languages = await Language.findAll();
            res.status(200).json(languages);
        } catch (error) {
            res.status(500).json({ error: 'Failed to fetch languages' });
        }
    },

    // Allow a user to start learning a language
    async addUserLanguage(req, res) {
        const { languageId } = req.body;
        const userId = req.user.id; // Assuming user is authenticated

       

        try {
            // Check if language exists
            const language = await Language.findByPk(languageId);
            if (!language) {
                return res.status(404).json({ error: 'Language not found' });
            }

            // Check if user already has this language
            const existingAssociation = await UserLanguages.findOne({
                where: {
                    UserId: userId,
                    LanguageId: languageId
                }
            });

            if (existingAssociation) {
                return res.status(400).json({ error: 'Language already added' });
            }

            // Create new association
            const userLanguage = await UserLanguages.create({
                UserId: userId,
                LanguageId: languageId,
                learning_progress: 0
            });

            res.status(201).json(userLanguage);
        } catch (error) {
            res.status(500).json({ error: 'Failed to add language to user' });
        }
    },

    // Get the list of languages a user is learning
    async getUserLanguages(req, res) {
        const userId = req.user.id; // Assuming user is authenticated

        try {
            const userLanguages = await UserLanguages.findAll({
                where: { UserId: userId },
                include: [{
                    model: Language,
                    attributes: ['id', 'language_name']
                }]
            });

            res.status(200).json(userLanguages);
        } catch (error) {
            res.status(500).json({ error: 'Failed to fetch user languages' });
        }
    }
};

module.exports = LanguageController;
