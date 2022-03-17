const express = require("express");
const { registerUser } = require("../controllers/formController");

const router = express.Router();

// router.post("/login", authUser);
// router.post("/", registerUser);

router.route("/register").post(registerUser);

module.exports = router;