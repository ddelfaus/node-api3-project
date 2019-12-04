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

router.post('/:id/posts',validateUserId, (req, res) => {
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
  userDb.get()
  .then(users => {
    res.status(200).json(users);
  })
  .catch(error => {
  
    console.log(error);
    res.status(500).json({
      message: "Error retrieving the users"
    });
  });
});

router.get('/:id', validateUserId, (req, res) => {
  // do your magic!
  const id = req.params.id

  userDb
  .getById(id)

  .then(user => {
      if(user) {
          res.status(200).json(user);
      }
      res.status(404).json({ error: "id not returned" })
    })
    .catch(error => {
   
      console.log(error);
      res.status(500).json({
        message: "Error retrieving the db"
      });
    });


});

router.get('/:id/posts',validateUserId, (req, res) => {
  // do your magic!
  const id = req.params.id

  postDb
  .getById(id)

  .then(user => {
      if(user) {
          res.status(200).json(user);
      }
      res.status(404).json({ error: "id not returned" })
    })
    .catch(error => {
   
      console.log(error);
      res.status(500).json({
        message: "Error retrieving the db"
      });
    });

});

router.delete('/:id',validateUserId, (req, res) => {
  // do your magic!
  const id = req.params.id

    userDb.remove(id)
    .then(count => {
        if (count > 0) {
            res.status(200).json({ message: "The user has been deleted" })  
        }
        res.status(404).json({ message: "user not found" });
    })
    .catch(error => {
        res.status(500).json({
            message: "Error removing the post"
        })
    })
});

router.put('/:id', validateUserId, (req, res) => {
  // do your magic!
  const changes = req.body
  const id = req.params.id
  
    userDb
    .update(id,changes)
    .then(edit => {
        if (edit) {
            res.status(201).json({...changes, id: id});
        }
        res.status(404).json({ error: "user not found" })
      })
      .catch(error => {
        // log error to database
        console.log(error);
        res.status(500).json({
          message: "Error updating the user"
        });
      });
});

//custom middleware

function validateUserId(req, res, next) {
  // do your magic!
  const id = Number(req.params.id || 0);
    if(id){
        req.user = id
        next();
    } else {
    res.status(400).json({ message: "Invalid user ID" })
    }
}

function validateUser(req, res, next) {
  // do your magic!
}

function validatePost(req, res, next) {
  // do your magic!
}

module.exports = router;