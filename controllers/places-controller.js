const { v4: uuid } = require("uuid");
const { validationResult } = require("express-validator");
const mongoose = require("mongoose");
const getCoordsForAddress = require("../util/location");
const Place = require("../models/place");
const User = require("../models/user");

const HttpError = require("../models/http-error");

const getPlacesById = async (req, res, next) => {
  const placeId = req.params.pid;
  let place;
  try {
    place = await Place.findById(placeId);
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not find the place.",
      500
    );
    return next(error);
  }

  if (!place) {
    const error = new HttpError(
      "Could not find the place for the selected id.",
      404
    );

    return next(error);
  }
  res.json({ place: place.toObject({ getters: true }) });
};

const getPlacesByUserId = async (req, res, next) => {
  const userId = req.params.uid;
  let userWithPlaces;
  try {
    userWithPlaces = await User.findById(userId).populate("places");
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not find the place.",
      500
    );
    return next(error);
  }
  if (!userWithPlaces || userWithPlaces.places.length == 0) {
    const error = new HttpError(
      "Could not find places for the selected user id.",
      404
    );

    return next(error);
  }

  res.json({
    places: userWithPlaces.places.map((place) =>
      place.toObject({ getters: true })
    ),
  });
};

const createPlace = async (req, res, next) => {
  const errorResult = validationResult(req);
  if (!errorResult.isEmpty()) {
    return next(
      new HttpError("Invalid input passed, please check your data !!", 422)
    );
  }

  console.log(req.body);
  const { title, description, address, creator } = req.body;
  const coordinates = getCoordsForAddress(address);

  const createdPlace = new Place({
    title,
    description,
    address,
    location: coordinates,
    image:
      "https://staticdelivery.nexusmods.com/mods/3174/images/thumbnails/1326/1326-1588792092-849606496.png",
    creator,
  });
  let user;

  try {
    user = await User.findById(creator);
  } catch (err) {
    const error = new HttpError("Finding user failed, please try again.", 500);
    return next(error);
  }
  if (!user) {
    const error = new HttpError("User doesnt exist, please try again.", 500);
    return next(error);
  }

  console.log(user);
  try {
    const sess = await mongoose.startSession();
    sess.startTransaction();
    await createdPlace.save({ session: sess });
    user.places.push(createdPlace);
    await user.save({ session: sess });
    await sess.commitTransaction();
  } catch (err) {
    const error = new HttpError(
      "Creating place failed, please try again.",
      500
    );
    return next(error);
  }

  res.status(201).json({ place: createdPlace });
};

const updatePlace = async (req, res, next) => {
  const errorResult = validationResult(req);
  if (!errorResult.isEmpty()) {
    return next(
      new HttpError("Invalid input passed, please check your data !!", 422)
    );
  }
  const placeId = req.params.pid;
  const { title, description } = req.body;
  let updatedPlace;
  try {
    updatedPlace = await Place.findById(placeId);
  } catch (err) {
    const error = new HttpError("Could not find place, please try again", 500);
    return next(error);
  }

  updatedPlace.title = title;
  updatedPlace.description = description;

  try {
    await updatedPlace.save();
  } catch (err) {
    const error = new HttpError(
      "Could not update place, please try again.",
      500
    );
    return next(error);
  }

  res.status(201).json({ place: updatedPlace.toObject({ getters: true }) });
};

const deletePlace = async (req, res, next) => {
  const placeId = req.params.pid;
  let place;
  try {
    place = await Place.findById(placeId).populate("creator");
  } catch (err) {
    const error = new HttpError(
      "Could not find the place, please try again.",
      500
    );
    return next(error);
  }

  if (!place) {
    const error = new HttpError(
      "Could not find the place, please try again.",
      500
    );
    return next(error);
  }

  try {
    const sess = await mongoose.startSession();
    sess.startTransaction();
    await place.remove({ session: sess });
    place.creator.places.pull(place);
    await place.creator.save({ session: sess });
    await sess.commitTransaction();
  } catch (err) {
    const error = new HttpError("Could not delete place, please try again.");
    return next(error);
  }

  res
    .status(200)
    .json({ message: `Places with the id ${placeId} has been deleted !!` });
};

exports.createPlace = createPlace;
exports.getPlacesById = getPlacesById;
exports.getPlacesByUserId = getPlacesByUserId;
exports.deletePlace = deletePlace;
exports.updatePlace = updatePlace;
