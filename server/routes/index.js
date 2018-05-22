const express = require('express');
const router = express.Router();
const userCntrl =  require('../controllers/userController');
// Do work here

//sign in
router.post('/signin',userCntrl.signin);
router.post('/register',userCntrl.register);

// user
router.get('/users',userCntrl.users);

module.exports = router;
