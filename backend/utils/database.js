const Sequelize = require('sequelize');
const sequelize = new Sequelize('expensedetails' , 'root','Parth@Sagar26',{
  host : 'localhost',
  dialect : 'mysql' ,
})

module.exports = sequelize;