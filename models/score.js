const { DataTypes } = require("sequelize");

const sequelize = require("../database");

const Score = sequelize.define('score', {
    // Model attributes are defined here
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    score: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
});

console.log(Score === sequelize.models.score);

module.exports = Score;
