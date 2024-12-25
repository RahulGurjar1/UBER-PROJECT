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

router.post('/login',[
    body('email').isEmail().withMessage("Invalid Email"),
    body('password').isLength({min: 6}).withMessage('Password must be atlest 6 character long')
    ],
    userController.loginUser
)


module.exports = router;