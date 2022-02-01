

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
    const place = DUMMY_PLACES.find(p=>p.creator == userId);
    if(!place){
        const error = HttpError('Could not find the place for the selected user id.',404)
    
        return next(error)
    }

    res.json({place})
}
exports.getPlacesById = getPlacesById;
exports.getPlacesByUserId = getPlacesByUserId;