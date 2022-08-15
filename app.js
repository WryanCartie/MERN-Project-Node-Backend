const express = require("express");
const mongoose = require("mongoose");
const fs = require('fs')
const path = require('path')

const bodyParser = require("body-parser");

const placesRoutes = require("./routes/places-routes");
const userRoutes = require("./routes/user-routes");
const HttpError = require("./models/http-error");

const app = express();

app.use(bodyParser.json());

app.use('/uploads/images',express.static(path.join('uploads','images')))

app.use((req,res,next)=>{
  res.setHeader('Access-Control-Allow-Origin','*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin,X-Requested-With,Content-Type,Accept,Authorization'
  )
  res.setHeader('Access-Control-Allow-Methods','GET,POST,PATCH,DELETE')
  next();
})

app.use("/api/places", placesRoutes);

app.use("/api/users", userRoutes);

app.use((req, res, next) => {
  const error = new HttpError("Could not find this route.", 404);
  next(error);
});

app.use((error, req, res, next) => {
  if(req.file){
    fs.unlink(req,file,path,(error)=>{
      console.log(error)
    })
  }
  if (res.headerSent) {
    return next(error);
  }

  res.status(error.code || 500);
  res.json({ message: error.message });
});

mongoose
  .connect(
    "mongodb+srv://Kruyoso:Anastasia15@cluster0.cx4p6z3.mongodb.net/mern?retryWrites=true&w=majority"
  )
  .then((err) => {
    app.listen(5000);
  })
  .catch((err) => {
    console.log(err);
  });
