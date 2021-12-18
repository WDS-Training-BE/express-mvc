const router = require("express").Router();

//controllers
const userController = require("../controllers/user.controller");

router.get("/", userController.getUser);

router.get("/a", userController.getUserA);

router.post("/", userController.postUser);

module.exports = router;
