const { v4: uuid } = require("uuid");

const HttpError = require("../models/http-error");
const { validationResult } = require("express-validator");
const bcrypt = require('bcryptjs');

const User = require("../models/user");

const getUsers = async (req, res, next) => {
  let users;
  try {
    users = await User.find({}, "-password");
  } catch (err) {
    const Error = new HttpError(
      "Could not fetch users, please try again.",
      500
    );
  }
  res.json({ users: users.map((user) => user.toObject({ getters: true })) });
};

const signup = async (req, res, next) => {
  const errorResult = validationResult(req);
  if (!errorResult.isEmpty()) {
    return next(
      new HttpError("Invalid input passed, please check your data !!", 422)
    );
  }
  const { name, email, password} = req.body;

  let existingUser;
  try {
    existingUser = await User.findOne({ email: email });
  } catch (err) {
    const error = new HttpError("Signing up, please try again.", 500);
    return next(error);
  }

  if (existingUser) {
    const error = new HttpError("User already existed, please try again.", 422);
    return next(error);
  }
  let hashedPassword;
  try{
    hashedPassword = await brcypt.hash(password,12)
  }catch(err){
    const error = new HttpError("User creation failed, please try again",500)
    return next(error)
  }

  const createdUser = new User({
    name,
    email,
    image: req.file.path,
    password : hashedPassword,
    places : [],
  });

  try {
    await createdUser.save();
  } catch (err) {
    const error = new HttpError("Signing up failed, please try again.", 500);
    return next(error);
  }
  res
    .status(201)
    .json({
      user: createdUser.toObject({ getters: true }),
      message: "User Signup Sucessfull !!",
    });
};

const login = async (req, res, next) => {
  const { email, password } = req.body;


  let existingUser;
  try {
    existingUser = await User.findOne({ email: email });
  } catch (err) {
    const error = new HttpError("Login in Failed, please try again.", 500);
    return next(error);
  }
  if (!existingUser) {
    const error = new HttpError("Invalid Login, please try again.", 401);
    return next(error);
  }

  let isValidPassword = false;
  try{
    isValidPassword = await bcrypt.compare(password,existingUser.password)
  }catch(err){
    const error = new HttpError("Login in Failed, please try again.", 500);
    return next(error);
  }

  if(!isValidPassword){
    const error = new HttpError("Invalid Login, please try again.", 401);
    return next(error);
  }

  res.json({ message: "Logged in sucessfully !!" ,
  user: existingUser.toObject({ getters: true }),});
};

exports.login = login;
exports.getUsers = getUsers;
exports.signup = signup;
