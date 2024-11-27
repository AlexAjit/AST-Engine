// const Rule = require('../models/Rule');

// // Create Rule
// exports.createRule = async (req, res) => {
//   try {
//     const { ruleString, ruleName } = req.body;

//     // Validate inputs
//     if (!ruleString || !ruleName) {
//       return res.status(400).json({ message: "Rule string and rule name are required." });
//     }

//     // Create and save rule
//     const newRule = new Rule({ ruleString, ruleName });
//     await newRule.save();

//     return res.status(201).json({ message: "Rule created successfully.", rule: newRule });
//   } catch (error) {
//     console.error("Error creating rule:", error);
//     return res.status(500).json({ message: "Failed to create rule.", error: error.message });
//   }
// };

// const Rule = require('../models/rule');  // Import the Rule model
// const { parseRuleString, printTree } = require('../utils/ast'); // Assuming these functions are defined in your utils

// // Function to generate a random 4-letter string
// function generateRandomLetterString(length) {
//   const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
//   let result = '';
//   const charactersLength = characters.length;

//   for (let i = 0; i < length; i++) {
//     const randomIndex = Math.floor(Math.random() * charactersLength);
//     result += characters.charAt(randomIndex);
//   }
//   return result;
// }

// // Controller function for creating a rule
// exports.createRule = async (req, res) => {
//   try {
//     const { ruleName, ruleString } = req.body;

//     // Log the incoming request to see what data is being received
//     console.log('Received Rule Data:', req.body);

//     // Validate the input
//     if (!ruleName || !ruleString) {
//       return res.status(400).json({ error: 'ruleName and ruleString are required' });
//     }

//     // Parse the rule string to Abstract Syntax Tree (AST)
//     const rootNode = parseRuleString(ruleString);
//     if (!rootNode) {
//       return res.status(400).json({ error: 'Invalid rule string format' });
//     }

//     // Create a new Rule object
//     const rule = new Rule({
//       ruleName,
//       ruleAST: rootNode,  // Save the AST
//     });

//     // Save the rule to the database
//     await rule.save();

//     // Log the saved rule for verification
//     console.log('Saved Rule:', rule);

//     // Print the AST for debugging (optional)
//     printTree(rootNode);

//     // Send back the created rule as the response
//     res.status(201).json(rule);
//   } catch (error) {
//     console.error('Error creating rule:', error);  // Log the error
//     res.status(500).json({ error: error.message });
//   }
// };

// const Rule = require('../models/rule');  // Ensure this matches the import in route

// // Controller function for creating a rule
// exports.createRule = async (req, res) => {
//   try {
//     const { ruleName, ruleString } = req.body;

//     // Log the incoming request to see what data is being received
//     console.log('Received Rule Data:', req.body);

//     // Validate the input
//     if (!ruleName || !ruleString) {
//       return res.status(400).json({ error: 'ruleName and ruleString are required' });
//     }

//     // Create a new Rule object
//     const rule = new Rule({
//       ruleName,
//       ruleString,  // Save the ruleString
//     });

//     // Save the rule to the database
//     await rule.save();

//     // Send back the created rule as the response
//     res.status(201).json(rule);
//   } catch (error) {
//     console.error('Error creating rule:', error);  // Log the error
//     res.status(500).json({ error: error.message });
//   }
// };

const { parseRuleString, evaluate } = require('../utils/ast');  // Import parse and evaluate functions
const Rule = require('../models/rule');  // Ensure this matches the import in route

// Controller function for creating a rule
exports.createRule = async (req, res) => {
  try {
    const { ruleName, ruleString } = req.body;

    // Log the incoming request to see what data is being received
    console.log('Received Rule Data:', req.body);

    // Validate the input
    if (!ruleName || !ruleString) {
      return res.status(400).json({ error: 'ruleName and ruleString are required' });
    }

    // Create a new Rule object
    const rule = new Rule({
      ruleName,
      ruleString,  // Save the ruleString
    });

    // Save the rule to the database
    await rule.save();

    // Create AST from the ruleString
    const ast = parseRuleString(ruleString);

    // Send back the created rule along with its AST
    res.status(201).json({ rule, ast });
  } catch (error) {
    console.error('Error creating rule:', error);  // Log the error
    res.status(500).json({ error: error.message });
  }
};

// controllers/ruleController.js

// const Rule = require('../models/rule');  // Assuming the Rule model is imported

// Controller to fetch rule by rule name
exports.getRuleByName = async (req, res) => {
  try {
    const { ruleName } = req.params;
    const rule = await Rule.findOne({ ruleName });

    if (!rule) {
      return res.status(404).json({ error: 'Rule not found' });
    }

    res.status(200).json({ ruleString: rule.ruleString });
  } catch (error) {
    console.error('Error fetching rule:', error);
    res.status(500).json({ error: error.message });
  }
};

exports.createCombinedRule = async (req, res) => {
  try {
    const { rule1, rule2, operator } = req.body;
    
    if (!rule1 || !rule2 || !operator) {
      return res.status(400).json({ error: 'rule1, rule2, and operator are required' });
    }

    // Combine the rule strings
    const combinedRuleString = `(${rule1}) ${operator} (${rule2})`;

    // Create and save the combined rule
    const combinedRule = new Rule({
      ruleName: `Combined Rule - ${Date.now()}`,
      ruleString: combinedRuleString,
    });

    await combinedRule.save();

    res.status(201).json({ combinedRule, combinedRuleString });
  } catch (error) {
    console.error('Error creating combined rule:', error);
    res.status(500).json({ error: error.message });
  }
};

// Create combined rule
// exports.createCombinedRule = async (req, res) => {
//   try {
//     const { rule1, rule2, operator } = req.body;

//     // Combine the rules
//     const combinedRuleString = `(${rule1}) ${operator} (${rule2})`;

//     // Save the combined rule to the database
//     const combinedRule = new Rule({
//       ruleName: `Combined Rule - ${Date.now()}`,
//       ruleString: combinedRuleString,
//     });

//     await combinedRule.save();

//     res.status(201).json(combinedRule);
//   } catch (error) {
//     console.error('Error creating combined rule:', error);
//     res.status(500).json({ error: error.message });
//   }
// };

// Combine multiple rules into a single AST
// exports.combineRules = async (req, res) => {
//   try {
//     const { rules } = req.body;

//     // Validate the input
//     if (!Array.isArray(rules) || rules.length < 2) {
//       return res.status(400).json({ error: 'At least two rules are required' });
//     }

//     // Parse all rule strings into ASTs
//     const asts = rules.map(ruleString => parseRuleString(ruleString));

//     // Combine the ASTs (implement your own combination logic here)
//     const combinedAst = combineAst(asts);

//     // Send back the combined AST
//     res.status(200).json({ combinedAst });
//   } catch (error) {
//     console.error('Error combining rules:', error);  // Log the error
//     res.status(500).json({ error: error.message });
//   }
// };

// Evaluate a rule against the provided data
exports.evaluateRule = async (req, res) => {
  try {
    const { ast, data } = req.body;

    // Validate the input
    if (!ast || !data) {
      return res.status(400).json({ error: 'AST and data are required' });
    }

    // Evaluate the rule using the AST and provided data
    const result = evaluate(ast, data);

    // Return the evaluation result
    res.status(200).json({ result });
  } catch (error) {
    console.error('Error evaluating rule:', error);  // Log the error
    res.status(500).json({ error: error.message });
  }
};

// Utility function to combine multiple ASTs
const combineAst = (asts) => {
  if (asts.length === 1) return asts[0];

  let combinedAst = asts[0];
  for (let i = 1; i < asts.length; i++) {
    // Heuristic: Most frequent operator strategy
    const operator = 'AND';  // You can optimize this based on the most frequent operator
    combinedAst = {
      type: 'operator',
      operator: operator,
      left: combinedAst,
      right: asts[i],
    };
  }
  return combinedAst;
};
