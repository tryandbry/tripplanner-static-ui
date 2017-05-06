var express = require('express');
var router = express.Router();
var {db,Place,Hotel,Activity,Restaurant} = require('../db');
var util = require('../util');
var Promise = require('bluebird');

router.get('/',function(request,response){
  var hotels,restaurants,activities;

  const QUERY_HOTEL = {attributes: ['name']};
  const QUERY_ACTIVITY = {attributes: ['name']};
  const QUERY_RESTAURANT = {attributes: ['name']};

  Promise.all([     Hotel.findAll(QUERY_HOTEL),
                 Activity.findAll(QUERY_ACTIVITY),
               Restaurant.findAll(QUERY_RESTAURANT)])
  .then(function(arr){
    function extract(agg,e){
      agg.push(e.dataValues.name);
      return agg;
    }

    hotels = arr[0].reduce(extract,[]);
    activities = arr[1].reduce(extract,[]);
    restaurants = arr[2].reduce(extract,[]);

    response.render('index',{hotels,activities,restaurants});
  });
});

module.exports = router;
