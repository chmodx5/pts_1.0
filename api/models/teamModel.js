module.exports = (sequelize, DataTypes) => {
  const Team = sequelize.define(
    "teams",
    {
      TeamId: {
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
      Location: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      TeamLeaderId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        validate: {
          notEmpty: true,
        },
      },
      IsExternal: {
        type: DataTypes.BOOLEAN,
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

  return Team;
};
