const Sequelize = require('sequelize');
const sequelize = require('../database');

class User extends Sequelize.Model {

get fullname() {
  return this.firstname + ' ' + this.lastname;
};
}

User.init({
  firstname: Sequelize.STRING,
  lastname: Sequelize.STRING,
  date_of_birth: Sequelize.DATE,
  age: Sequelize.INTEGER,
  email: Sequelize.STRING,
  password: Sequelize.STRING,
  adress: Sequelize.STRING,
  city: Sequelize.STRING,
  postal_code: Sequelize.INTEGER,
  created_at: { allowNull: false, type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') },
  role: Sequelize.STRING
},{
  sequelize,
  tableName: "user"
});


module.exports = User;