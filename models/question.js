const { DataTypes } = require("sequelize");

const sequelize = require("../database");;

const Question = sequelize.define("question", {
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
});

console.log(Question === sequelize.models.question);

module.exports = Question;
