const { DataTypes } = require("sequelize");

const sequelize = require("../database");

const Difficulty = sequelize.define("difficulty", {
    // Model attributes are defined here
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.TEXT,
        allowNull: false,
    },

});

console.log(Difficulty === sequelize.models.difficulty);

module.exports = Difficulty;