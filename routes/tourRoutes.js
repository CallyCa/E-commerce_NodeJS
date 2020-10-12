const express = require("express");
const router = express.Router();
const tourController = require("./../controllers/tourController");

// Router tour

router
    .route("/")
    .get(tourController.getAllTours)
    .post(tourController.createTour);

router
    .route('/:id')
    .get(tourController.getTour)
    .patch(tourController.updateTour)
    .delete(tourController.deleteTour);


// Export module router
module.exports = router;