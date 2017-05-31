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

router.get('/:lat/:long', (req, res, next) => {
  console.log("In the stops get lat longroute");
  // knex('stops')
  //   .where('stop_lat', 'like', '30.26%').andWhere('stop_lon', 'like', '-97.74%')
  //   .limit(10)
  //   .then((stops) => {
  //     res.send(stops);
  //   })
  //   .catch((err) => {
  //     next(err);
  //   });
})




module.exports = router
