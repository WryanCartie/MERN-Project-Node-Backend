const{ v4: uuid} = require('uuid');

const HttpError = require('../models/http-error')
const {validationResult} = require('express-validator');

const User = require('../models/user')

const DUMMY_USERS = [
    {
        id: 'u1',
        name: 'Kruyoso of Toya',
        email: 'toyahame@ude.co.id',
        password: 'toyahame'

    }
]

const getUsers = (req,res,next)=>{
    res.json({users: DUMMY_USERS});
}

const signup = async (req,res,next) =>{
    const errorResult = validationResult(req);
    if(!errorResult.isEmpty()){
        return next(new HttpError('Invalid input passed, please check your data !!',422))
    }
    const{name,email,password,places} = req.body;

    let existingUser;
    try{
        existingUser = await User.findOne({email: email})
    }catch(err){
        const error = new HttpError('Signup failed heree, please try again.',500)
        return next(error)
    }

    if(existingUser){
        const error = new HttpError('User already existed, please try again.',422)
        return next(error)
    }


    const createdUser = new User({
        name,
        email,
        image:'https://static.wikia.nocookie.net/beyblade/images/3/33/BBGT_Imperial_Dragon_Ignition%27_Beyblade.png/revision/latest',
        password,
        places
    });
 
    try{
        await createdUser.save();
    }catch(err){
        const error = new HttpError('Signing up failed, please try again.',500)
        return next(error)
    }
    res.status(201).json({user: createdUser.toObject({getters: true}),message:'User Signup Sucessfull !!'})
}

const login = (req,res,next) =>{
 const {email,password} = req.body;

 const identifiedUser = DUMMY_USERS.find(u=> u.email = email);
 if(!identifiedUser && identifiedUser.password ===  password){
     return next(new HttpError('Could not identify user, credentials seems to be wrong !!',401))
 }
    res.json({message:'Logged in sucessfull !!'})
}

exports.login = login;
exports.getUsers = getUsers;
exports.signup = signup;