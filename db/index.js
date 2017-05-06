var _db = require('./db');

var Place = require('./models/place');
var Hotel = require('./models/hotel');
var Activity = require('./models/activity');
var Restaurant = require('./models/restaurant');

Hotel.belongsTo(Place);
Activity.belongsTo(Place);
Restaurant.belongsTo(Place);

module.exports = {        db: _db,
                       Place: Place,
                       Hotel: Hotel,
                    Activity: Activity,
                  Restaurant: Restaurant };
