const express = require('express');
const router = express.Router();
// const { createRule, combineRules, evaluateRule } = require('../controllers/ruleController');
const { getRuleByName, createCombinedRule } = require('../controllers/ruleController');

// POST /api/rules/createRules - Create a new rule
router.post('/createRules', createRule);

// Fetch rule by name
router.get('/getRule/:ruleName', getRuleByName);

// Save combined rule
router.post('/createCombinedRule', createCombinedRule);

// POST /api/rules/combineRules - Combine multiple rules into one AST
// router.post('/combineRules', combineRules);

// POST /api/rules/evaluateRule - Evaluate a rule's AST against data
router.post('/evaluateRule', evaluateRule);

module.exports = router;

