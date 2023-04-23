const { Question, Answer } = require("../models");

const questionController = {

    async getAllQuestion (_req, res) {
        try {
            const questions = await Question.findAll();
            res.status(200).json(questions);
        }
        catch (error) {
            res.status(500).json(`Désolé, une erreur serveur s'est produite lors de la récupération des questions.`);
        }

    },

    async getQuestions (req, res) {
        try {
            const questions = await Question.findAll(
                {
                    where: {
                        quizId: req.params.quizId,
                        difficultyId: req.params.difficultyId,
                    },
                    include: {
                        model: Answer,
                    }
                }
            );
            res.status(200).json(questions);
        }
        catch (error) {
            res.status(500).json(`Désolé, une erreur serveur s'est produite lors de la récupération des questions.`);
        }
    },
}

module.exports = questionController;