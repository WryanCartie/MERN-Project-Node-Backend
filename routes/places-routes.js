const express = require('express');



const placesController = require('../controllers/places-controller');


const router = express.Router();

router.post('/',placesController.createPlace);

router.get('/user/:uid',placesController.getPlacesByUserId)

router.get('/:pid',placesController.getPlacesById);



module.exports = router; 