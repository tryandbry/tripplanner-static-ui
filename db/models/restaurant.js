var Sequelize = require('sequelize');
var _db = require('../db');

var Restaurant = _db.define('restaurant',{
     name: {    type: Sequelize.STRING   },
  cuisine: {    type: Sequelize.STRING   },
    price: {    type: Sequelize.INTEGER,
            validate: {min:1, max:5}     },
  });

module.exports = Restaurant;
