module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define(
    "project",
    {
      ProjectId: {
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
      ExpectedStartDate: {
        type: DataTypes.DATE,
        allowNull: true,
        validate: {
          notEmpty: true,
        },
      },
      ExpectedEndDate: {
        type: DataTypes.DATE,
        allowNull: true,
        validate: {
          notEmpty: true,
        },
      },
      ActualStartDate: {
        type: DataTypes.DATE,
        allowNull: true,
        validate: {
          notEmpty: true,
        },
      },
      ActualEndDate: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          notEmpty: true,
        },
      },
      Completed: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        validate: {
          notEmpty: true,
        },
      },
      CustomerId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      AdministratorId: {
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
  //add ralationship
  Project.associate = (models) => {
    //one project has many tasks
    Project.hasMany(models.task, {
      foreignKey: "ProjectId",
      onDelete: "CASCADE",
    });

    //belongs to customer
    Project.belongsTo(models.customer, {
      foreignKey: "CustomerId",
      onDelete: "CASCADE",
    });

    //belongs to person
    Project.belongsTo(models.person, {
      foreignKey: "UserId",
      onDelete: "CASCADE",
    });
  };

  return Project;
};
