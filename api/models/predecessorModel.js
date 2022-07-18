module.exports = (sequelize, DataTypes) => {
  const Predecessor = sequelize.define(
    "predecessor",
    {
      TaskId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      PredecessorId: {
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
  //belongs to task
  Predecessor.associate = (models) => {
    Predecessor.belongsTo(models.task, {
      foreignKey: "TaskId",
      onDelete: "CASCADE",
    });
    //belongs to predecessor
    Predecessor.belongsTo(models.task, {
      foreignKey: "PredecessorId",
      onDelete: "CASCADE",
    });
  };

  return Predecessor;
};
