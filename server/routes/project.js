const express = require("express");
const router = express.Router();
const projectController = require("../controller/projectcontroller.js");
const addFileToStroage = require("../controller/addFileToStroage.js");
const { protect, authorize } = require("../middleware/aauth.js");
const Multer = require("multer");

const multer = Multer({
  storage: Multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024, // No larger than 5mb, change as you need
  },
});

router
  .route("/")
  .get(
    // protect,
    // authorize(
    //   "user",
    //   "superadmin",
    //   "admin",
    //   "statelevel",
    //   "districtlevel",
    //   "localarea",
    //   "designers",
    //   "proofchecker",
    //   "designchecker"
    // ),
    projectController.getAllProjects
  )
  .post(protect, authorize("user"), projectController.addProject);

router.route("/upload").post(multer.single("file"), addFileToStroage.upload);
router
  .route("/buttons/approve/:id")
  .post(
    protect,
    authorize(
      "user",
      "superadmin",
      "admin",
      "statelevel",
      "districtlevel",
      "localarea",
      "designers",
      "designchecker",
      "proofchecker"
    ),
    projectController.updateFieldForSubmitting
  );

router
  .route("/buttons/modification/:id")
  .post(
    protect,
    authorize(
      "user",
      "superadmin",
      "admin",
      "statelevel",
      "districtlevel",
      "localarea",
      "designers",
      "designchecker",
      "proofchecker"
    ),
    projectController.askForModification
  );

router
  .route("/:id")
  .get(projectController.getById)
  .put(protect, authorize("superadmin"), projectController.updateProject)
  .delete(
    protect,
    authorize(
      "superadmin",
      "districtlevel",
      "statelevelhead",
      "statelevelcoordinators"
    ),
    projectController.deleteProject
  );

router
  .route("/cancel/:id")
  .put(
    protect,
    authorize("superadmin", "districtlevel", "admin", "statelevel", "user"),
    projectController.cancelProject
  );

// router.route("/project/alloted").put(projectController.createAllotedFile);
router.route("/alloted").get(projectController.createAllotedFile);
router.route("/").get(projectController.getAllProject);


module.exports = router;
