const express = require ('express');
const router = express.Router();
const Fav = require('../models/User');

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



module.exports = router;