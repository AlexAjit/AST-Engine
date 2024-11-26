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

    // Send back the created rule as the response
    res.status(201).json(rule);
  } catch (error) {
    console.error('Error creating rule:', error);  // Log the error
    res.status(500).json({ error: error.message });
  }
};
