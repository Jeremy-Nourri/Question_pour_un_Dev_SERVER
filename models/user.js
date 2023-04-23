///// FEATURE IN PROGRESS

const { DataTypes } = require("sequelize");

const sequelize = require("../database");

const User = sequelize.define('user', {
    // Model attributes are defined here
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
        }
    },
    password: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    nickname: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    avatar: {
        type: DataTypes.TEXT,
    },
    role: {
        type: DataTypes.TEXT,
        defaultValue: "user",
    },
});

console.log(User === sequelize.models.user);

module.exports = User;