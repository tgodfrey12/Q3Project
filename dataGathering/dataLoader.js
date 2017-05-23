let lineCount = 0;

var lineReader = require('readline').createInterface({
  input: require('fs').createReadStream('dataGathering/google_transit/routes.txt')
});

lineReader.on('line', function(line) {
  //console.log('Line from file:', line);
  insertRoutes(line);
});

//Insert a record into the routes table containing
//the info in a passed-in array
function insertRoutes(route) {

  var env = process.env.NODE_ENV || 'development';
  var config = require('../knexfile')[env];
  module.exports = require('knex')(config);


  routeAra = route.split(',');
  //console.log(routeAra);

  for (var i = 0; i < routeAra.length; i++) {
    insertDBRecord("routes", routeAra[i]);
  }

}

function insertDBRecord(recordType, record) {
  console.log(record);

  // knex(recordType).insert(req.body.post)
  //   .returning("route_id")
  //   .then(function(id) {
  //
  //   })
  //   .catch(function(err) {
  //     console.log(err);
  //   });
}
