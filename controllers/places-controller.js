const{ v4: uuid} = require('uuid');
const {validationResult} = require('express-validator')
const getCoordsForAddress = require('../util/location')
const Place = require('../models/place');


const HttpError = require('../models/http-error')

let DUMMY_PLACES = [
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
const getPlacesById = (req,res,next) =>{
    const placeId = req.params.pid;
    const place = DUMMY_PLACES.find(p=>{
        return p.id == placeId
    })

    if(!place){
        const error = new HttpError('Could not find the place for the selected id.',404)
  
        return next(error)
    }
    res.json({place});
}

const getPlacesByUserId = (req,res,next) =>{
    const userId = req.params.uid;
    const places = DUMMY_PLACES.filter(p=>p.creator == userId);
    if(places.length == 0){
        const error = HttpError('Could not find places for the selected user id.',404)
    
        return next(error)
    }

    res.json({places})
}

const createPlace = async (req,res,next) =>{

    const errorResult = validationResult(req);
    if(!errorResult.isEmpty()){
        return next(new HttpError('Invalid input passed, please check your data !!',422))
    }

    
    console.log(req.body);  
    const {title,description,address,creator} = req.body;
    const coordinates = getCoordsForAddress(address);
  
    
    const createdPlace = new Place({
        title,
        description,
        address,
        location: coordinates,
        image:'https://staticdelivery.nexusmods.com/mods/3174/images/thumbnails/1326/1326-1588792092-849606496.png',
        creator
    })

    try{    
        await createdPlace.save();
     
    } catch(err){
        const error = new HttpError(
            'Creating place failed, please try again.',
            500
        )
        return next(error);
    }

 

     res.status(201).json({place:createdPlace});
}

const updatePlace = (req,res,next) =>{
    const errorResult = validationResult(req);
    if(!errorResult.isEmpty()){
        return next(new HttpError('Invalid input passed, please check your data !!',422))
    }
    const placeId = req.params.pid;
    const {title,description} = req.body;

    
    const updatedPlace = {...DUMMY_PLACES.find(p=>{
        return p.id == placeId
    })}

    const targetIndex = DUMMY_PLACES.findIndex(p=> p.id == placeId);

    updatedPlace.title = title;
    updatedPlace.description = description;

    DUMMY_PLACES[targetIndex] = updatedPlace

    res.status(201).json({place:updatedPlace});

}

const deletePlace = (req,res,next) =>{
    const placeId = req.params.pid;
    if(!DUMMY_PLACES.find(p=> p.id == placeId)){
        return next(new HttpError('Could not find a place with that id !!',404))
    }
   DUMMY_PLACES = DUMMY_PLACES.filter(p=>p.id != placeId);
 

   res.status(200).json({message: `Places with the id ${placeId} has been deleted !!`});
}

exports.createPlace = createPlace;
exports.getPlacesById = getPlacesById;
exports.getPlacesByUserId = getPlacesByUserId;
exports.deletePlace = deletePlace;
exports.updatePlace = updatePlace;