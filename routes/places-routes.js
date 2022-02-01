const express = require('express');

const HttpError = require('../models/http-error')

const placesController = require('../controllers/places-controller');

const DUMMY_PLACES = [
    {
        id: 'p1',
        title: 'Stockholm Royal Palace',
        description: 'The Grand Palace of the Swedish Empire !!',
        location : {
            lat: 59.3268,
            lng: 18.0717
        },
        address: 'Kungliga slottet, 107 70 Stockholm, Sweden',
        creator: 'u1'
    }
]

const router = express.Router();

router.get('/user/:uid',placesController.getPlacesByUserId)

router.get('/:pid',placesController.getPlacesById);

module.exports = router; 