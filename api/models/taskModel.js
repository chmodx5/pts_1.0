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
      },
      ExpectedStartDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      ExpectedEndDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      ActualDateStarted: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      ActualDateCompleted: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      ProjectId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      TeamId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      StatusId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      PercentCompleted: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      timestamps: true,
    }
  );

  return Task;
};
