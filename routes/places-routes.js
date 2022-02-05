const express = require('express');
const {check} = require('express-validator')



const placesController = require('../controllers/places-controller');


const router = express.Router();

router.post('/',
[
    check('title').not().isEmpty(),
    check('description').isLength({min: 5}),
    check('address').not().isEmpty()
],
placesController.createPlace);

router.get('/user/:uid',placesController.getPlacesByUserId)

router.get('/:pid',placesController.getPlacesById);

router.delete('/:pid',placesController.deletePlace);

router.patch('/:pid',[
    check('title').not().isEmpty(),
    check('description').isLength({min: 5}),
],placesController.updatePlace)



module.exports = router; 