const { DataTypes} = require("sequelize");

const sequelize = require("../database");

const Answer = sequelize.define("answer", {
    // Model attributes are defined here
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    correct: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
});

console.log(Answer === sequelize.models.answer);

module.exports = Answer;

