const express = require("express");

const router = express.Router();

const { createUser, loginUser } = require("../controllers/user.controller");

// registion

router.post("/auth/register", createUser);

// login
router.post("/auth/login", loginUser);

// get all uses

module.exports = router;
