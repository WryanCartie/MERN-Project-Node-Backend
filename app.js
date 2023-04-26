const express = require("express");
const mongoose = require("mongoose");
const fs = require('fs')
const path = require('path')

const bodyParser = require("body-parser");

const placesRoutes = require("./routes/places-routes");
const usersRoutes = require("./routes/user-routes");
const HttpError = require("./models/http-error");

const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: 'dnljmubda',
  api_key: '966564657964463',
  api_secret: 'OVRAX3WrfccStYBziZ2bVZf7y8k'
});

const app = express();

app.use(bodyParser.json());

app.use('/uploads/images', (req, res, next) => {
  const imageUrl = req.url;

  // Check if the URL matches a Cloudinary URL
  if (imageUrl.startsWith('/uploads/images/')) {
    const publicId = imageUrl.replace('/uploads/images/', '');

    // Retrieve the image from Cloudinary
    cloudinary.api.resource(publicId, function(error, result) {
      if (error) {
        console.log(error);
        res.status(404).json({ message: 'Image not found.' });
      } else {
        // Serve the image to the client
        res.redirect(result.url);
      }
    });
  } else {
    // The URL doesn't match a Cloudinary URL, so pass the request to the next middleware
    next();
  }
});

app.use(express.static(path.join('public')))

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  next();
});

app.use('/api/places', placesRoutes);
app.use('/api/users', usersRoutes);

app.use((req,res,next)=>{
  res.sendFile(path.resolve(__dirname,'public','index.html'))
})


app.use((error, req, res, next) => {
  if (req.file) {
    fs.unlink(req.file.path, err => {
      console.log(error)
    });
  }
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || 'An unknown error occurred!' });
});

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.cx4p6z3.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
  )
  .then((err) => {
    app.listen(process.env.PORT);
  })
  .catch((err) => {
    console.log(err);
  });
