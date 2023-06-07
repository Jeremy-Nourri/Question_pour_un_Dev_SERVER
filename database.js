const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.PG_DB, 
  process.env.PG_USER, 
  process.env.PG_PASSWORD, {
    host: 'localhost',
    dialect: 'postgres',
    // dialectOptions: {
    //   ssl: {
    //     require: true,
    //     rejectUnauthorized: false
    //   }
    // },
    define: {
      freezeTableName: true,
      timestamps: false
    }
});




// Test the connection with the database
const testConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
    };

testConnection();

module.exports = sequelize;