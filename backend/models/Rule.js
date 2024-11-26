// const mongoose = require('mongoose');

// const ruleSchema = new mongoose.Schema({
//   ruleName: { type: String, required: true, unique: true },
//   ruleAST: { type: Object, required: true }, // Store the AST structure
// });

// const Rule = mongoose.model('Rule', ruleSchema);
// module.exports = Rule;
// const mongoose = require('mongoose');

// const nodeSchema = new mongoose.Schema({
//   type: { type: String, required: true }, // operator or operand
//   left: { type: mongoose.Schema.Types.Mixed, required: false }, // left child
//   right: { type: mongoose.Schema.Types.Mixed, required: false }, // right child
//   value: { type: mongoose.Schema.Types.Mixed, required: false }, // value for operand
// });

// const ruleSchema = new mongoose.Schema({
//   ruleName: { type: String, required: true, unique: true },
//   ruleAST: { type: nodeSchema, required: true }, // Root node of the AST
// });

// module.exports = mongoose.model('Rule', ruleSchema);


// const mongoose = require('mongoose');

// // Define schema for rules
// const ruleSchema = new mongoose.Schema({
//   ruleString: {
//     type: String,
//     required: true,
//   },
// });

// // Export the model
// module.exports = mongoose.model('Rule', ruleSchema);

const mongoose = require('mongoose');

const ruleSchema = new mongoose.Schema({
  ruleName: {
    type: String,
    required: true,
  },
  ruleString: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Rule', ruleSchema);

