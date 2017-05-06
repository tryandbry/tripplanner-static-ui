var Sequelize = require('sequelize');
var _db = require('../db');

var Hotel = _db.define('hotel',{
       name: {    type: Sequelize.STRING },
  num_stars: {    type: Sequelize.FLOAT,
              validate: {min: 1, max:5}  },
  amenities: {    type: Sequelize.STRING },
  });

module.exports = Hotel;
