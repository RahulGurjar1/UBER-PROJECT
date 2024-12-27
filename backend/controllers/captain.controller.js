const captainModel = require('../models/captain.model');
const userModel = require('../models/user.model');
const captainService = require('../services/captain.service');
const {validationResult} = require('express-validator');
const BlacklistTokenModel = require('../models/blacklistToken.model');


module.exports.registerCaptain = async (req,res,next) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        res.status(400).json({message: errors.array()});
    }

    const {fullname,email,password,vehicle} = req.body;

    const isUserAlreadyExist = await userModel.findOne({email});

    if(isUserAlreadyExist){
        return res.status(400).json({message: 'User Already Exist.'});
    }

    const isCaptainAlreadyExist = await captainModel.findOne({email});

    if(isCaptainAlreadyExist){
        return res.status(400).json({message: 'Captain Already Exist.'});
    }

    const hashPassword = await captainModel.hashPassword(password);

    const captain = await captainService.createCaptain({
        firstname: fullname.firstname,
        lastname: fullname.lastname,
        password: hashPassword,
        email,
        color: vehicle.color,
        vehicleType: vehicle.vehicleType,
        plate: vehicle.plate,
        capacity: vehicle.capacity
    });

    const token = captain.generateAuthToken();

    res.status(201).json({token, captain});

}


module.exports.loginCaptain = async (req,res,next) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        res.status(400).json({message: errors.array()});
    }

    const {email, password} = req.body;

    const captain = await captainModel.findOne({email}).select('+password');

    if(!captain){
        return res.status(401).json({message: 'Invalid email or password'});
    }

    const isMatch = await captain.comparePassword(password);

    if(!isMatch){
        return res.status(401).json({message: 'Invalid email or password'});
    }

    const token = captain.generateAuthToken();

    res.cookie('token',token);
    res.status(200).json({token, captain});
}

module.exports.profileCaptain = async (req,res,next) => {
    res.status(200).json({captain: req.captain});
}

module.exports.logoutCaptain = async (req,res,next) => {
    const token = req.cookies.token || req.headers.authorization.split(' ')[1];
    
    await BlacklistTokenModel.create({token});

    res.clearCookie('token');
    res.status(200).json({message:'Captain logout successfully'});
}
