const userModel = require('../models/user.model');
const userService = require('../services/user.service');
const {validationResult} = require('express-validator');
const BlacklistTokenModel = require('../models/blacklistToken.model');


module.exports.registerUser = async (req, res, next) => {
    const errors = validationResult(req);
    
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }
    // console.log(req.body);

    const {fullname,email,password} = req.body;

    // console.log(fullname);
    // console.log(fullname.firstname);
    const firstname = fullname.firstname;
    const lastname = fullname.lastname;
    const hashPassword = await userModel.hashPassword(password);
    
    const user = await userService.createUser({
        firstname,
        lastname,
        email,
        password: hashPassword
    });

    const token = user.generateAuthToken();

    res.status(201).json({token,user});
}

module.exports.loginUser = async (req, res, next) => {

    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }

    const {email, password} = req.body;

    const user = await userModel.findOne({email}).select('+password');

    if(!user){
        res.status(401).json({message: 'Invalid email or password'});
    }

    const isMatch = await user.comparePassword(password);

    if(!isMatch){
        res.status(401).json({message: "Invalid email or password"});
    }

    const token = user.generateAuthToken();

    res.cookie('token',token);
    res.status(200).json({token,user});
}

module.exports.profileUser = (req,res,next) => {
    res.status(200).json(req.user);
}

module.exports.logoutUser = async (req,res,next) => {
    res.clearCookie('token');

    const token = req.cookies.token || req.headers.authorization.split(' ')[1];

    await BlacklistTokenModel.create({token});
    res.status(200).json({message: 'Logged out successfully'});
}
