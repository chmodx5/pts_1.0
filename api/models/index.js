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

//realtionshio customerId belongs to project is

db.customer.hasMany(db.project, {
  foreignKey: "CustomerId",
});
db.project.belongsTo(db.customer, {
  foreignKey: "CustomerId",
  onDelete: "CASCADE",
});

//relationship between person and project

db.person.hasMany(db.project, {
  foreignKey: "AdministratorId",
  onDelete: "CASCADE",
});
db.project.belongsTo(db.person, {
  foreignKey: "UserId",
  onDelete: "CASCADE",
});

db.person.hasMany(db.teamMember, {
  foreignKey: "UserId",
  onDelete: "CASCADE",
});
db.teamMember.belongsTo(db.person, {
  foreignKey: "UserId",
  onDelete: "CASCADE",
});

db.person.hasMany(db.team, {
  foreignKey: "TeamLeaderId",
  onDelete: "CASCADE",
});
db.team.belongsTo(db.person, {
  foreignKey: "TeamLeaderId",
  onDelete: "CASCADE",
});

db.project.hasMany(db.task, {
  foreignKey: "ProjectId",
  onDelete: "CASCADE",
});
db.task.belongsTo(db.project, {
  foreignKey: "ProjectId",
  onDelete: "CASCADE",
});

db.status.hasMany(db.task, {
  foreignKey: "StatusId",
  onDelete: "CASCADE",
});
db.task.belongsTo(db.status, {
  foreignKey: "StatusId",
  onDelete: "CASCADE",
});

db.person.hasMany(db.subtask, {
  foreignKey: "TeamMemberId",
  onDelete: "CASCADE",
});
db.person.belongsTo(db.subtask, {
  foreignKey: "TeamMemberId",
  onDelete: "CASCADE",
});
db.task.hasMany(db.predecessor, {
  foreignKey: "PredecessorId",
  onDelete: "CASCADE",
});

db.predecessor.belongsTo(db.task, {
  foreignKey: "TaskId",
  onDelete: "CASCADE",
});

db.status.hasMany(db.subtask, {
  foreignKey: "StatusId",
  onDelete: "CASCADE",
});
db.subtask.belongsTo(db.status, {
  foreignKey: "StatusId",
  onDelete: "CASCADE",
});

db.task.hasMany(db.subtask, {
  foreignKey: "TaskId",
  onDelete: "CASCADE",
});
db.subtask.belongsTo(db.task, {
  foreignKey: "TaskId",
  onDelete: "CASCADE",
});

db.teamMember.hasMany(db.subtask, {
  foreignKey: "TeamMemberId",
  onDelete: "CASCADE",
});
db.subtask.belongsTo(db.teamMember, {
  foreignKey: "TeamMemberId",
  onDelete: "CASCADE",
});

db.team.hasMany(db.teamMember, {
  foreignKey: "TeamId",
  onDelete: "CASCADE",
});
db.teamMember.belongsTo(db.team, {
  foreignKey: "TeamId",
  onDelete: "CASCADE",
});

db.team.hasMany(db.task, {
  foreignKey: "TeamId",
  onDelete: "CASCADE",
});
db.task.belongsTo(db.team, {
  foreignKey: "TeamId",
  onDelete: "CASCADE",
});

module.exports = db;
