const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const { isLoggedIn,isOwner, validateListing } = require("../middleware.js");
const listingController = require("../controllers/listings.js");
const multer = require("multer");
const { storage } = require("../cloudConfig.js");
const upload = multer({ storage });

router.route("/")
    .get(wrapAsync(listingController.index))
    .post(isLoggedIn,
        upload.single('listing[image]'),
        validateListing,
        wrapAsync(listingController.createListing));

//New list Route
router.get("/new",isLoggedIn,listingController.renderNewForm);


router.route("/:id")
.get(wrapAsync(listingController.showListing)
)
.delete(isLoggedIn,isOwner,wrapAsync(listingController.destroyListing))
    
router.route("/:id/edit")
.get(isLoggedIn,isOwner, wrapAsync(listingController.renderEditForm))
.put(isLoggedIn, isOwner,upload.single('listing[image]'),wrapAsync(listingController.updateListing));


module.exports = router;