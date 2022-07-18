const dbConfig = require("../config/dbConfig.js");
const { Sequelize, DataTypes } = require("sequelize");

// Initialize sequelize
const sequelize = new Sequelize(
  dbConfig.DB,
  dbConfig.USERNAME,
  dbConfig.PASSWORD,
  {
    host: dbConfig.HOST,
    dialect: dbConfig.DIALECT,
    operatorsAliases: false,

    pool: {
      max: dbConfig.POOL.MAX,
      min: dbConfig.POOL.MIN,
      acquire: dbConfig.POOL.ACQUIRE,
      idle: dbConfig.POOL.IDLE,
    },
  }
);

//connect to database
sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

//initialize the db object
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//define models
db.project = require("./projectModel")(sequelize, DataTypes);
db.customer = require("./customerModel")(sequelize, DataTypes);
db.predecessor = require("./predecessorModel")(sequelize, DataTypes);
db.status = require("./statusModel")(sequelize, DataTypes);
db.task = require("./taskModel")(sequelize, DataTypes);
db.subtask = require("./subtaskModel")(sequelize, DataTypes);
db.team = require("./teamModel")(sequelize, DataTypes);
db.teamMember = require("./teamMemberModel")(sequelize, DataTypes);
db.person = require("./personModel")(sequelize, DataTypes);

//prevents the program to sync the models with the database on every refresh
db.sequelize.sync({ force: false }).then(() => {
  console.log("Database synced");
});

module.exports = db;
