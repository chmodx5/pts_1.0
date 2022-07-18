module.exports = (sequelize, DataTypes) => {
  const Team = sequelize.define(
    "team",
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
        type: DataTypes.INT,
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

  Team.associate = (models) => {
    Team.hasMany(models.teamMember, {
      foreignKey: "TeamId",
      onDelete: "CASCADE",
    });
    Team.hasMany(models.task, {
      foreignKey: "TeamId",
      onDelete: "CASCADE",
    });

    //belongs to person
    Team.belongsTo(models.person, {
      foreignKey: "TeamLeaderId",
      onDelete: "CASCADE",
    });
  };
  return Predecessor;
};
