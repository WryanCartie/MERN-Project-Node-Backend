const express = require('express');

const HttpError = require('../models/http-error')

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

router.get('/user/:uid',(req,res,next)=>{
    const userId = req.params.uid;
    const place = DUMMY_PLACES.find(p=>p.creator == userId);
    if(!place){
        const error = HttpError('Could not find the place for the selected user id.',404)
    
        return next(error)
    }

    res.json({place})
})

router.get('/:pid',(req,res,next)=>{
    const placeId = req.params.pid;
    const place = DUMMY_PLACES.find(p=>{
        return p.id == placeId
    })

    if(!place){
        const error = new HttpError('Could not find the place for the selected id.',404)
      
        return next(error)
    }
    res.json({place});
})

module.exports = router; 