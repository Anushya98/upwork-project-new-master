const express = require("express");
const router = express.Router();
const eventController = require("../controller/eventcontroller.js");
const { protect, authorize } = require("../middleware/aauth.js");

router
  .route("/")
  .get(eventController.getAllEvents)
  .post(protect, authorize("user"), eventController.addEvent);

router
  .route("/:id")
  .get(eventController.getById)
  .put(protect, authorize("superadmin"), eventController.updateEvent)
  .delete(protect, authorize("superadmin"), eventController.deleteEvent);

module.exports = router;
