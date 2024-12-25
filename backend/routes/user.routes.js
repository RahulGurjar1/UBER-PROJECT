const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller')

const {body} = require('express-validator');

router.post('/register',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({min: 3}).withMessage('First Name must be atleast 3 character long'),
    body('fullname.lastname').isLength({min: 3}).withMessage('Last Name must be atleast 3 character long.')
], 
    userController.registerUser
)

module.exports = router;