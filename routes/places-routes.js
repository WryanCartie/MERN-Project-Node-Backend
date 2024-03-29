const express = require("express");
const { check } = require("express-validator");

const placesController = require("../controllers/places-controller");
const fileUpload = require("../middleware/file-upload");

const router = express.Router();

const checkAuth = require('../middleware/check-auth')



router.get("/user/:uid", placesController.getPlacesByUserId);

router.get("/:pid", placesController.getPlacesById);

router.use(checkAuth);
router.post(
  "/",
  fileUpload.single('image'),
  [
    check("title").not().isEmpty(),
    check("description").isLength({ min: 5 }),
    check("address").not().isEmpty(),
  ],
  placesController.createPlace
);

router.delete("/:pid", placesController.deletePlace);

router.patch(
  "/:pid",
  [check("title").not().isEmpty(), check("description").isLength({ min: 5 })],
  placesController.updatePlace
);

module.exports = router;
