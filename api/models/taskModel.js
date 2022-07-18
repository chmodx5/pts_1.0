module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define(
    "task",
    {
      TaskId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      Name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      ExpectedStartDate: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      ExpectedEndDate: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      ActualDateStarted: {
        type: DataTypes.DATE,
        allowNull: true,
        validate: {
          notEmpty: true,
        },
      },
      ActualDateCompleted: {
        type: DataTypes.DATE,
        allowNull: true,
        validate: {
          notEmpty: true,
        },
      },
      ProjectId: {
        type: DataTypes.INT,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      TeamId: {
        type: DataTypes.INT,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      StatusId: {
        type: DataTypes.INT,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      PercentCompleted: {
        type: DataTypes.INT,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
    },
    {
      timestamps: true,
    }
  );
  //realationships
  Task.associate = (models) => {
    //many tasks belong to one project
    Task.hasMany(models.predecessor, {
      foreignKey: "taskId",
      onDelete: "CASCADE",
    });
    //many tasks belong to one project
    Task.hasMany(models.predecessor, {
      foreignKey: "PredecessorId",
      onDelete: "CASCADE",
    });
    Task.hasMany(models.subtask, {
      foreignKey: "TaskId",
      onDelete: "CASCADE",
    });

    //task belongs to project
    Task.belongsTo(models.project, {
      foreignKey: "ProjectId",
      onDelete: "CASCADE",
    });
    //task belongs to status
    Task.belongsTo(models.status, {
      foreignKey: "StatusId",
      onDelete: "CASCADE",
    });
  };
  return Task;
};
