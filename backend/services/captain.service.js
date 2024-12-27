const captainModel =require('../models/captain.model');

module.exports.createCaptain = async ({
    email,
    firstname,
    lastname,
    password,
    color,
    plate,
    capacity,
    vehicleType
}) => {
    const requiredFields = { email, firstname, lastname, password, color, plate, capacity, vehicleType };
    for (const [field, value] of Object.entries(requiredFields)) {
        if (!value) {
            throw new Error(`Field ${field} is missing. Complete all required fields.`);
        }
    }

    const captain = captainModel.create({
        fullname:{
            firstname,
            lastname
        },
        email,
        password,
        vehicle: {
            color,
            plate,
            capacity,
            vehicleType
        }
    })

    return captain;
}