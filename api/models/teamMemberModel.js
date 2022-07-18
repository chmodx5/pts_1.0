const { BelongsTo } = require("sequelize/types");

module.exports = (sequelize, DataTypes) => {
  const TeamMember = sequelize.define(
    "teamMember",
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

  TeamMember.associate = (models) => {
    TeamMember.belongsTo(models.team, {
      foreignKey: "TeamId",

      onDelete: "CASCADE",
    });
    TeamMember.belongsTo(models.person, {
      foreignKey: "UserId",
      onDelete: "CASCADE",
    });
  };

  return TeamMember;
};
