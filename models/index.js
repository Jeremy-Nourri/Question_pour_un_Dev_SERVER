const Answer = require("./answer");
const Difficulty = require("./difficulty");
const Question = require("./question");
const Quiz = require("./quiz");
const User = require("./user");
const Score = require("./score");

// an answer is linked to a question
Answer.belongsTo(Question);

// a question has many answers
Question.hasMany(Answer, { foreignKey: "questionId"});

// a question has a difficulty
Question.belongsTo(Difficulty);

// a difficulty has many questions
Difficulty.hasMany(Question, { foreignKey: "difficultyId"});

// a quiz is administered by a user
Quiz.belongsTo(User);

// a user can administer many quizzes
User.hasMany(Quiz, { foreignKey: "userId"});

// a quiz has many questions
Quiz.hasMany(Question, { foreignKey: "quizId"});

// a question belongs to a quiz
Question.belongsTo(Quiz);

// a user has many scores
User.hasMany(Score, { foreignKey: "userId"});

// a quiz has many scores
Quiz.hasMany(Score, { foreignKey: "quizId"});

// a difficulty has many scores
Difficulty.hasMany(Score, { foreignKey: "difficultyId"});

// a score belongs to a user
Score.belongsTo(User);

// a score belongs to a quiz
Score.belongsTo(Quiz);

// a score belongs to a difficulty
Score.belongsTo(Difficulty);


module.exports = {
    Answer,
    Difficulty,
    Question,
    Quiz,
    User,
    Score,
};

