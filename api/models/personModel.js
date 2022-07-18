module.exports = (sequelize, DataTypes) => {
  const Person = sequelize.define(
    "person",
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
      Name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      Username: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      Password: {
        type: DataTypes.STRING(256),
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      Email: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          notEmpty: true,
        },
      },
      TelephoneNo: {
        type: DataTypes.INT,
        allowNull: true,
        validate: {
          notEmpty: true,
        },
      },
      IsAdministrator: {
        type: DataTypes.BOOLEAN,
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

  //relationship between person and project
  Person.associate = (models) => {
    Person.hasMany(models.project, {
      foreignKey: "AdministratorId",
      onDelete: "CASCADE",
    });
    //relationship between person and team
    Person.hasMany(models.teamMember, {
      foreignKey: "UserId",
      onDelete: "CASCADE",
    });
    Person.hasMany(models.team, {
      foreignKey: "TeamLeaderId",
      onDelete: "CASCADE",
    });
    //relationship between person and subtask
    Person.hasMany(models.subTask, {
      foreignKey: "TeamMemberId",
      onDelete: "CASCADE",
    });
  };

  return Person;
};
