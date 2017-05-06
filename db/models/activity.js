var Sequelize = require('sequelize');
var _db = require('../db');

var Activity = _db.define('activity',{
       name: {type:Sequelize.STRING},
  age_range: {type:Sequelize.STRING},
  });

module.exports = Activity;
