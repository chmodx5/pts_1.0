module.exports = (sequelize, DataTypes) => {
  const Status = sequelize.define(
    "status",
    {
      StatusId: {
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

  return Status;
};
