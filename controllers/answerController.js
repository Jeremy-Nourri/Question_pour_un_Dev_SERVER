const { Answer } = require("../models");

const answerController = {

    async getTrueAnswer (_req, res) {
        try {
            const answers = await Answer.findAll(
                {
                    where: {
                        correct: true,
                    }
                }
            );
            res.status(200).json(answers);
        }
        catch (error) {
            res.status(500).json(`Désolé, une erreur serveur s'est produite lors de la récupération des réponses.`);
        }
    },
}

module.exports = answerController;