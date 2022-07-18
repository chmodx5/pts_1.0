module.exports = (sequelize, DataTypes) => {
  const TeamMember = sequelize.define(
    "teamMembers",
    {
      UserId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      TeamId: {
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

  return TeamMember;
};
