module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define(
    "customer",
    {
      CustomerId: {
        type: DataTypes.INTEGER,
        primaryKey: true2,
        autoIncrement: true,
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
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      TelephoneNo: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      Company: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      Address: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      Country: {
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

  //realtionshio customerId belongs to project is
  Customer.associate = function (models) {
    Customer.hasMany(models.project, {
      foreignKey: "CustomerId",
    });
  };

  return Category;
};
