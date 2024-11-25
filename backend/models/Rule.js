// const mongoose = require("mongoose");

// const NodeSchema = new mongoose.Schema({
//   type: { type: String, required: true }, // "operator" or "operand"
//   value: { type: String, required: false }, // For operand nodes
//   left: { type: mongoose.Schema.Types.Mixed, required: false },
//   right: { type: mongoose.Schema.Types.Mixed, required: false },
// });

// const RuleSchema = new mongoose.Schema({
//   name: { type: String, required: true, unique: true },
//   tree: { type: NodeSchema, required: true },
// });

// module.exports = mongoose.model("Rule", RuleSchema);\

const mongoose = require('mongoose');

const RuleSchema = new mongoose.Schema({
  ruleName: { type: String, required: true },
  ruleInput: { type: String, required: true },
  asciiStructure: { type: String, required: true },
});

const Rule = mongoose.model('Rule', RuleSchema);
module.exports = Rule;
