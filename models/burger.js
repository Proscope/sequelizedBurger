module.exports = function(sequelize, Datatypes) {
  var Burgers = sequelize.define("burgers", {
    id: {
      type: Datatypes.INTEGER, 
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    }, 
    burger_name: {
      type: Datatypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
        notEmpty: true
      }
    },
    devoured: {
      type: Datatypes.BOOLEAN,
      defaultValue: 0
    },
    date: {
      type: Datatypes.DATE,
      defaultValue: Datatypes.NOW
    },
    timestamps: false
  });
  return Burgers;
};