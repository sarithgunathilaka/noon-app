const express = require ('express');

const router = express.Router();
const Fav = require('../models/User');

// @route   POST api/favourites
// @desc    New Favourite
// @access  Public
router.post('/favourites', (req, res, next) => {
    const { body } = req;
    const {
        userName,
        userImage,
        coverImage,
        title,
        price,
        description,
        likes,
        tags,
        comments
    } = body;

    
const newFav = new Fav();
      newFav.userName = userName;
      newFav.userImage = userImage;
      newFav.coverImage = coverImage;
      newFav.title = title;
      newFav.price = price;
      newFav.description = description;
      newFav.likes = likes;
      newFav.tags = tags;
      newFav.comments = comments;
      
      
      newFav.save((err, user) => {
      res.send({
        success: true,
        message: 'Account created'
      })
    })
});

// @route   GET api/favourites
// @desc    View Favourites
// @access  Public
router.get('/favourites', (req,res) => {
    
    Fav.find({}, (err, users) => {
        if(err) {
          return res.send({
            succes: false,
            message: 'server error'
          })
        }
        return res.send({
          success: true,
          message: users
        })
     });
    
    
})


router.post('/remove', (req, res, next) => {
    Fav.find({
    id: 333
}, function (err, docs) {
    docs.remove(); //Remove all the documents that match!
});
})

module.exports = router;