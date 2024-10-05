const express = require("express");
const router = express.Router();

const postController = require("../controllers/postController");

router.get("/", postController.index);
router.get("/create", postController.create);
router.post("/", postController.store);
router.get("/:id", postController.show);
router.post("/:id/destroy", postController.destroy);

module.exports = router;
