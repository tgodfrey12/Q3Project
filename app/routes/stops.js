const express = require('express')
const router = express.Router()
const knex = require('../db')

//Call http GET http://localhost:7000/api/stops
//to get all the stops in the capMetroDB database
router.get('/', (req, res, next) => {
  console.log("In the stops get root route");
  knex('stops')
    .where('stop_lat', 'like', '30.26%').andWhere('stop_lon', 'like', '-97.74%')
    .limit(10)
    .then((stops) => {
      res.send(stops);
    })
    .catch((err) => {
      next(err);
    });
})


//Get all the stops near a provided lat/long
router.get('/search', (req, res, next) => {
  //req.query gets the params
  console.log("In the search route, lat = " + req.query.lat);
  console.log("In the search route, long = " + req.query.long);


  let latFloat = parseFloat(req.query.lat);
  let longFloat = parseFloat(req.query.long);

  let latFloatStr = latFloat.toFixed(3).toString();
  let longFloatStr = longFloat.toFixed(3).toString();

  // console.log("inside search Route with rounded lat " + latFloat.toFixed(3));
  // console.log("inside search Route with rounded lat " + longFloat.toFixed(3));



  latFloatStr += '%';
  longFloatStr += '%';


  console.log("Running the query with lat " + latFloatStr);
  console.log("Running the query with long " + longFloatStr);

  knex('stops')
    //.where('stop_lat', 'like', latFloatStr).andWhere('stop_lon', 'like', longFloatStr)
    .limit(10)
    .then((stops) => {
      res.send(stops);
    })
    .catch((err) => {
      next(err);
    });


  //res.send("reponse")

})

module.exports = router
