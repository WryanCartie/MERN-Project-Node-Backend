const express = require('express');
const mongoose = require('mongoose');

const bodyParser = require('body-parser');

const placesRoutes = require('./routes/places-routes');
const userRoutes = require('./routes/user-routes')
const HttpError = require('./models/http-error');

const app = express();

app.use(bodyParser.json());

app.use('/api/places',placesRoutes);

app.use('/api/users',userRoutes);

app.use((req,res,next)=>{
    const error = new HttpError('Could not find this route.',404);
    next(error);
})

app.use((error,req,res,next)=>{
    if(res.headerSent){
        return next(error)
    }

    res.status(error.code || 500 )
    res.json({message: error.message})
})

mongoose.connect('mongodb+srv://Kruyoso:Anastasia15@cluster0.cx4p6z3.mongodb.net/places?retryWrites=true&w=majority')
.then(err=>{
    app.listen(5000);
})
.catch((err)=>{
    console.log(err)
});
