const express = require("express");

const router = express.Router();

const {
  createUser,
  loginUser,
  getAllUsers,
} = require("../controllers/user.controller");
const { isAuthenticated } = require("../middlewares/auth.middleware");
const { isAdmin } = require("../middlewares/admin.middleware");

// registion

router.post("/auth/register", createUser);

// login
router.post("/auth/login", loginUser);

// get all uses

router.get("/", isAuthenticated, isAdmin, getAllUsers);

module.exports = router;
