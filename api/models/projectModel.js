module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define(
    "projects",
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

  return Project;
};
