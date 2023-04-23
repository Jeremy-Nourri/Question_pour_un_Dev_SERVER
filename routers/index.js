const { Router } = require('express');
const userController = require('../controllers/userController');
const quizController = require('../controllers/quizController');
const authController = require('../controllers/authController');
const questionController = require('../controllers/questionController');
const answerController = require('../controllers/answerController');
const scoreController = require('../controllers/scoreController');
const uploadAvatarController = require('../controllers/uploadAvatarController');
const authToken = require('../middlewares/authToken');


// i create the router 
const mainRouter = new Router();

mainRouter.get('/', (_req, res) => {
  res.send('Bienvenue sur une question pour un dév !');
});

mainRouter.post('/uploads', uploadAvatarController.uploadAvatar);

mainRouter.get('/question', questionController.getAllQuestion);
mainRouter.get('/question/:quizId/:difficultyId', questionController.getQuestions);

mainRouter.get('/answers/true', answerController.getTrueAnswer);

mainRouter.get('/quiz', quizController.getAllQuiz);
mainRouter.get('/quiz/:topic', quizController.getQuizByTopic);
mainRouter.get('/quiz/:id', quizController.getQuizById);
// mainRouter.post('/quiz', quizController.createQuiz);
// mainRouter.patch('/quiz/:id', quizController.modifyQuiz);
// mainRouter.delete('/quiz/:id', quizController.deleteQuiz);

mainRouter.get('/user/:id', authToken, userController.getUser);
mainRouter.delete('/user/:userId/delete', authToken, userController.deleteUser);
mainRouter.post('/user/:userId/avatar', authToken, userController.modifyAvatar);

mainRouter.get('/score/:userId/:quizId/:difficultyId', authToken, scoreController.getScore);
mainRouter.get('/score/:userId', authToken, scoreController.getScores);
mainRouter.post('/score', authToken, scoreController.addScore);
mainRouter.patch('/score/:id', authToken, scoreController.modifyScore);

mainRouter.post('/signup', authController.signUp);
mainRouter.post('/login', authController.login);
mainRouter.post('/logout', authToken, authController.logout);


module.exports = mainRouter;