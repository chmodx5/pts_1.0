module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define(
    "tasks",
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
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      TeamId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      StatusId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      PercentCompleted: {
        type: DataTypes.INTEGER,
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

  return Task;
};
