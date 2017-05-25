const express = require('express')
const router = express.Router()
const knex = require('../db')

//Call http GET http://localhost:7000/api/stops
//to get all the stops in the capMetroDB database
router.get('/', (req, res, next) => {
  console.log("In the stops get root route");

  knex('stops')
    .orderBy('stop_id')
    .then((stops) => {
      res.send(stops);
    })
    .catch((err) => {
      next(err);
    });
  //.whereIn('post_id', posts.map(p => p.id))


  // .then((comments) => {
  //   const commentsByPostId = comments.reduce((result, comment) => {
  //     result[comment.post_id] = result[comment.post_id] || []
  //     result[comment.post_id].push(comment)
  //     return result
  //   }, {})
  //   posts.forEach(post => {
  //     post.comments = commentsByPostId[post.id] || []
  //   })
  //   res.json(posts)
  // })


})
//   .catch(err => next(err))
// })

// router.post('/', validate, (req, res, next) => {
//   knex('posts')
//     .insert(params(req))
//     .returning('*')
//     .then(posts => res.json(posts[0]))
//     .catch(err => next(err))
// })

// router.get('/:id', (req, res, next) => {
//
//   console.log("hitting post get with id param");
//
//   knex('posts')
//     .where({
//       id: req.params.id
//     })
//     .first()
//     .then(post => res.json(post))
//     .catch(err => next(err))
// })

// router.patch('/:id', validate, (req, res, next) => {
//   console.log("In the update router");
//
//   knex('posts')
//     .update(params(req))
//     .where({
//       id: req.params.id
//     })
//     .returning('*')
//     .then(posts => res.json(posts[0]))
//     .catch(err => next(err))
// })

// router.delete('/:id', (req, res, next) => {
//   knex('posts')
//     .del()
//     .where({
//       id: req.params.id
//     })
//     .then(() => res.end())
//     .catch(err => next(err))
// })

// router.post('/:id/votes', (req, res, next) => {
//   knex('posts')
//     .update('vote_count', knex.raw('vote_count + 1'))
//     .where({
//       id: req.params.id
//     })
//     .then(() => knex('posts').where({
//       id: req.params.id
//     }).first())
//     .then(post => res.json({
//       vote_count: post.vote_count
//     }))
//     .catch(err => next(err))
// })

// router.delete('/:id/votes', (req, res, next) => {
//   knex('posts')
//     .update('vote_count', knex.raw('vote_count - 1'))
//     .where({
//       id: req.params.id
//     })
//     .then(() => knex('posts').where({
//       id: req.params.id
//     }).first())
//     .then(post => res.json({
//       vote_count: post.vote_count
//     }))
//     .catch(err => next(err))
// })


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
