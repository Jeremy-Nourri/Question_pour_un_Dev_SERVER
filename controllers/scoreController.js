const { Score, Difficulty, Quiz, User } = require('../models');

const scoreController = {

    async getScore (req, res) {
        const userId = parseInt(req.params.userId, 10);
        const quizId = parseInt(req.params.quizId, 10);
        const difficultyId = parseInt(req.params.difficultyId, 10);
        try {
            const score = await Score.findOne({ where: { userId, quizId, difficultyId } });
            if (!score) {
                res.status(404).json(`Tu n'as pas encore enregistré de score`);
                return;
            }
            res.status(200).json(score);
        } catch (error) {
            res.status(500).json(`Désolé, une erreur serveur s'est produite lors de la récupération de ton score.`)
        }
    },

    async getScores (req, res) {
        const userId = parseInt(req.params.userId, 10);
        try {
            const scores = await Score.findAll(
                {
                    where: { userId },
                    include: [
                        {
                            model: Difficulty,
                            attributes: ["name"],
                        },
                        {
                            model: Quiz,
                            attributes: ["topic", "image"],
                        },
                    ],
                },
            );
            if (!scores) {
                res.status(404).json(`Tu n'as pas encore enregistré de score`);
                return;
            }
            res.status(200).json(scores);
        } catch (error) {
            res.status(500).json(`Désolé, une erreur serveur s'est produite lors de la récupération de tes scores.`)
        }
    },

    async addScore (req, res) {
        try {
            const score = await Score.create({ ...req.body });
            res.status(200).json(score);
        } catch (error) {
            res.status(500).json(`Désolé, une erreur serveur s'est produite lors de l'enregistrement de ton score.`)
        }
    },
    async modifyScore (req, res) {
        try {
            const score = await Score.findByPk(req.params.id);
            score.score = req.body.score;
            await score.save();
            res.status(200).json(score);
        } catch (error) {
            res.status(500).json(`Désolé, une erreur serveur s'est produite lors de la modification de ton score.`)	
        }
    },

};

module.exports = scoreController;