// const Rule = require("../models/Rule");

// // Parse Rule String to AST
// const parseRuleToAST = (ruleString) => {
//   // Simplified parsing logic for demonstration
//   const buildNode = (expression) => {
//     if (expression.includes("AND") || expression.includes("OR")) {
//       const operator = expression.includes("AND") ? "AND" : "OR";
//       const [left, right] = expression.split(operator).map((s) => s.trim());
//       return { type: "operator", value: operator, left: buildNode(left), right: buildNode(right) };
//     } else {
//       return { type: "operand", value: expression };
//     }
//   };
//   return buildNode(ruleString);
// };

// // Create Rule
// exports.createRule = async (req, res) => {
//   const { name, ruleString } = req.body;
//   try {
//     const ast = parseRuleToAST(ruleString);
//     const rule = await Rule.create({ name, tree: ast });
//     res.status(201).json(rule);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // Combine Rules
// exports.combineRules = async (req, res) => {
//   const { name, rules, operator } = req.body;
//   try {
//     const combinedTree = {
//       type: "operator",
//       value: operator,
//       left: rules[0].tree,
//       right: rules[1].tree,
//     };
//     const rule = await Rule.create({ name, tree: combinedTree });
//     res.status(201).json(rule);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // Get All Rules
// exports.getAllRules = async (req, res) => {
//   try {
//     const rules = await Rule.find();
//     res.json(rules);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

const Rule = require('../models/Rule');

const createRule = async (req, res) => {
  const { ruleName, ruleInput, asciiStructure } = req.body;

  try {
    const newRule = new Rule({
      ruleName,
      ruleInput,
      asciiStructure,
    });

    await newRule.save();
    res.status(201).json({ message: 'Rule created successfully', rule: newRule });
  } catch (error) {
    res.status(500).json({ message: 'Error creating rule', error: error.message });
  }
};

module.exports = { createRule };
