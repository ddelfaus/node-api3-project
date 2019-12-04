const express = require('express');


const userDb = require("./userDb")
const postDb = require("../posts/postDb")
const router = express.Router();


router.use(express.json())


router.post('/', (req, res) => {
  // do your magic!

  const user = req.body
  if(!user){
    res.status(400).json({error: "Please provide username."})
  }
  userDb
  .insert(user)
  .then(user => {
      res.status(201).json(user)
    })
    .catch(error => {
      // log error to database
      console.log(error);
      res.status(500).json({
        message: "Error adding the user"
      });
  });

});

router.post('/:id/posts', (req, res) => {
  // do your magic!
  const post = req.body
  if(!post){
    res.status(400).json({error: "Please provide post."})
  }
  postDb
  .insert(post)
  .then(post => {
      res.status(201).json(post)
    })
    .catch(error => {
      // log error to database
      console.log(error);
      res.status(500).json({
        message: "Error adding the user"
      });
  });

});

router.get('/', (req, res) => {
  // do your magic!
});

router.get('/:id', (req, res) => {
  // do your magic!
});

router.get('/:id/posts', (req, res) => {
  // do your magic!
});

router.delete('/:id', (req, res) => {
  // do your magic!
});

router.put('/:id', (req, res) => {
  // do your magic!
});

//custom middleware

function validateUserId(req, res, next) {
  // do your magic!
}

function validateUser(req, res, next) {
  // do your magic!
}

function validatePost(req, res, next) {
  // do your magic!
}

module.exports = router;
