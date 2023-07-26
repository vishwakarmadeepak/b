const express = require("express");
// router;
const router = express.Router();
//  userSchema
const user = require("../model/userschema");
// controller
const controller = require("../controller/usercontroller");
//multer
const upload = require("../multer/imgconfig");

router.post("/register");

router.get("/", controller.userget);
router.post("/register", upload.single("img"), controller.userRegister);

module.exports = router;
