// const express = require("express");
// const {
//   createRule,
//   combineRules,
//   getAllRules,
// } = require("../controllers/ruleController");

// const router = express.Router();

// router.post("/create", createRule);
// router.post("/combine", combineRules);
// router.get("/", getAllRules);

// module.exports = router;

const express = require('express');
const { createRule } = require('../controllers/ruleController');
const router = express.Router();

// Create a rule
router.post('/api/rules', createRule);

module.exports = router;
