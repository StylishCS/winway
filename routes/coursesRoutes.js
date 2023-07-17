var express = require("express");
var router = express.Router();
const upload = require("../middleware/uploadFiles");
const {
  update,
  create,
  deleteC,
  showCourse,
  showCourses,
  getCollectioName
} = require("../controllers/coursesController");
const { validate } = require("../validation/coursesValidation");

router.post(
  "/createCourse",
  upload.fields([
    { name: "image", maxCount: 1 },
    { name: "videos", maxCount: 1 },
  ]),
  validate(),
  create
);

router.put(
  "/update/:id",
  upload.fields([
    { name: "image", maxCount: 1 },
    { name: "videos", maxCount: 1 },
  ]),
  validate(),
  update
);

router.delete("/deleteCourse/:id", validate(), deleteC);

router.get("/getCourse/:id", validate(), showCourse);

router.get("/getCourses", validate(), showCourses);

router.get("/:collectionName", validate(), getCollectioName);

module.exports = router;