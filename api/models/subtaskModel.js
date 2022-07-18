module.exports = (sequelize, DataTypes) => {
  const SubTask = sequelize.define(
    "subTask",
    {
      SubtaskId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      Name: {
        type: DataTypes.STRING,
        allowNull: true,
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
        allowNull: true,
        validate: {
          notEmpty: true,
        },
      },
      TaskId: {
        type: DataTypes.INT,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      TeamMemberId: {
        type: DataTypes.INT,
        allowNull: true,
        validate: {
          notEmpty: true,
        },
      },
    },
    {
      timestamps: true,
    }
  );

  SubTask.associate = (models) => {
    SubTask.belongsTo(models.task, {
      foreignKey: "TaskId",
      onDelete: "CASCADE",
    });
    SubTask.belongsTo(models.teamMember, {
      foreignKey: "TeamMemberId",
      onDelete: "CASCADE",
    });
    SubTask.belongsTo(models.status, {
      foreignKey: "StatusId",
      onDelete: "CASCADE",
    });
  };

  return SubTask;
};
