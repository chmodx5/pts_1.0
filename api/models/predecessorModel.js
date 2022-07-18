module.exports = (sequelize, DataTypes) => {
  const Predecessor = sequelize.define(
    "predecessors",
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

  return Predecessor;
};
