const router = require("express").Router();
const passport = require('passport');

router.get('/', passport.authenticate('facebook'),(req,res)=>{
    res.redirect('/');
})

module.exports = router;

