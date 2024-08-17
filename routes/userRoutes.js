const express = require('express');
const {userSignup,logout}=require('../controller/userController')
const router = express.Router();

router.post('/signup', userSignup)
router.post('/logout', logout)

module.exports=router