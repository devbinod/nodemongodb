

let express = require('express');
let router = express.Router();
let tourController = require('../controller/tourController')


router.route("/")
    .get(tourController.getAllTour)
    .post(tourController.saveTour);

router.route("/:id")
    .get(tourController.getSingleTour)
    .put(tourController.updateTour)
    .delete(tourController.deletedTour)
module.exports  = router

