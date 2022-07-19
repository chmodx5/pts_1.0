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
      },
      ExpectedStartDate: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      ExpectedEndDate: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      ActualStartDate: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      ActualEndDate: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      Completed: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      CustomerId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      AdministratorId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      timestamps: true,
    }
  );

  return Project;
};
