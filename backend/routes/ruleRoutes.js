// const express = require('express');
// const { createRule } = require('../controllers/ruleController');

// const router = express.Router();

// // Route for creating a rule
// router.post('/create_rule', createRule);

// module.exports = router;

// const express = require('express');
// const { createRule } = require('../controllers/ruleController');

// const router = express.Router();

// // POST /api/rules/create
// router.post('/create', createRule);

// module.exports = router;

// const express = require('express');
// const router = express.Router();
// const Rule = require('../models/ruleModel'); // Import your Mongoose model

// // POST /api/rules - Save rule to database
// router.post('/api/rules/createRules', async (req, res) => {
//   try {
//     const { ruleString } = req.body;

//     // Create a new rule document
//     const newRule = new Rule({
//       ruleString, // Only store the ruleString
//     });

//     // Save to MongoDB
//     await newRule.save();
//     res.status(201).json({ message: 'Rule saved successfully!' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Failed to save rule.' });
//   }
// });

// module.exports = router;

// const express = require('express');
// const router = express.Router();
// const { createRule } = require('../controllers/ruleController');

// // POST /api/rules/createRules - Create a new rule
// router.post('/createRules', createRule);

// module.exports = router;

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

