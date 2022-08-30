const jwt = require('jsonwebtoken');

const HttpError = require('../models/http-error')

module.exports = (req,res,next) =>{
    if(req.method === 'OPTIONS'){
        return next()
    }
    try{
        const token= req.headers. authorization.split(' ')[1];
        if(!token){
            throw new Error('Authenthication failed');
        }
        const decodedToken = jwt.verify(token,"hidden_code_dont_share")
        req.userData = {userId: decodedToken.userId}
        next()
    }catch(err){
        const error = new HttpError('Authenthication failed',401)
        return next(error)
    }
}