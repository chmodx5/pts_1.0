module.exports = (sequelize, DataTypes) => {
  const Status = sequelize.define(
    "status",
    {
      UserId: {
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
    },
    {
      timestamps: true,
    }
  );

  Status.associate = (models) => {
    Status.hasMany(models.task, {
      foreignKey: "StatusId",
      onDelete: "CASCADE",
    });
    Status.hasMany(models.subtask, {
      foreignKey: "StatusId",
      onDelete: "CASCADE",
    });
  };

  return Status;
};
