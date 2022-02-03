const{ v4: uuid} = require('uuid');

const HttpError = require('../models/http-error')

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

const signup = (req,res,next) =>{
    const{name,email,password} = req.body;

    const hasUser = DUMMY_USERS.find(u=> u.email == email);
    if(hasUser){
        
    }

    const createdUser = {
        name,
        email,
        password,
        id:uuid()
    }
    DUMMY_USERS.push(createdUser);
    res.status(201).json({user: createdUser})
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