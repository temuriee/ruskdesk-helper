const express = require("express");
const router = express.Router();

const { createGroup, getGroups } = require("./group.controller");

const { protectAdmin } = require("../auth/auth.middleware");

// 🔐 only admin can create group
router.post("/", protectAdmin, createGroup);

// 🔐 only admin can see groups
router.get("/", protectAdmin, getGroups);

module.exports = router;
