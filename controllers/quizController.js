const { Quiz } = require('../models');

const quizController = {
    async getAllQuiz (_req, res) {
        try {
            const quizzes = await Quiz.findAll();
            res.status(200).json(quizzes);
        } catch (error) {
            res.status(500).json(`Désolé, une erreur serveur s'est produite lors de la récupération des quiz.`);
        }
    },

    async getQuizByTopic (req, res) {
        const topic = req.params.topic;
        try {
            const quiz = await Quiz.findOne({ where: { topic } });
            res.status(200).json(quiz);
        } catch (error) {
            res.status(500).json(`Désolé, une erreur serveur s'est produite lors de la récupération du quiz.`);
        }
    },

    async getQuizById (req, res) {

        const quizId = parseInt(req.params.id, 10);
 
        try {
            const quiz = await Quiz.findByPk(quizId);
            res.status(200).json(quiz);
        } 
        catch (error) {
            console.log(error.message);            
            res.status(500).json(`Désolé, une erreur serveur s'est produite lors de la récupération du quiz.`);
        }
    },

    ///// Features coming soon, not implemented yet /////

    // async createQuiz (req, res) {
    //     try {
    //         const quiz = await Quiz.create(req.body);
    //         res.status(200).json(quiz);
    //     } catch (error) {
    //         res.status(500).json("Unexpected server error. Please verify your request or try again later.");
    //     }
    // },
    // async modifyQuiz (req, res) {
    //     try {
    //         const quiz = await Quiz.findByPk(req.params.id);
    //         quiz.title = req.body.title;
    //         quiz.description = req.body.description;
    //         quiz.image = req.body.image;
    //         quiz.questions = req.body.questions;
    //         await quiz.save();
    //         res.status(200).json(quiz);
    //     } catch (error) {
    //         res.status(500).json("Unexpected server error. Please verify your request or try again later.");
    //     }
    // },
    // async deleteQuiz (req, res) {
    //     try {
    //         const quiz = await Quiz.findByPk(req.params.id);
    //         await quiz.destroy();
    //         res.status(200).json(quiz);
    //     } catch (error) {
    //         res.status(500).json("Unexpected server error. Please verify your request or try again later.");
    //     }
    // }

}

module.exports = quizController;
