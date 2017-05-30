const express = require('express')
const router = express.Router()
const knex = require('../db')

//Call http GET http://localhost:7000/api/stops
//to get all the stops in the capMetroDB database
router.get('/', (req, res, next) => {
  console.log("In the stops get root route");



  knex('stops')
    .where('stop_lat', 'like', '30.26%').andWhere('stop_lon', 'like', '-97.74%')
    .then((stops) => {
      res.send(stops);
    })
    .catch((err) => {
      next(err);
    });
})

function params(req) {
  return {
    title: req.body.title,
    body: req.body.body,
    author: req.body.author,
    image_url: req.body.image_url,
  }
}

function validate(req, res, next) {
  const errors = [];
  ['title', 'body', 'author', 'image_url'].forEach(field => {
    if (!req.body[field] || req.body[field].trim() === '') {
      errors.push({
        field: field,
        messages: ["cannot be blank"]
      })
    }
  })
  if (errors.length) return res.status(422).json({
    errors
  })
  next()
}



module.exports = router
