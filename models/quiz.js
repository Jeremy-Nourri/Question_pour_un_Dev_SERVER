const { DataTypes } = require("sequelize");

const sequelize = require("../database");

const Quiz = sequelize.define("quiz", {
    // Model attributes are defined here
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    topic: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    image: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
});

console.log(Quiz === sequelize.models.quiz);

module.exports = Quiz;
