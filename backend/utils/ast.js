// const parseRuleString = (ruleString) => {
//     // Logic to parse the rule string into AST
//   };
  
//   module.exports = { parseRuleString };
  
// Parse rule string to AST
const parseRuleString = (ruleString) => {
  // Simplified parser for demo purposes
  // Use a real parser like PEG.js or manual parsing for production
  const node = {
    type: 'operator',
    left: { type: 'operand', value: 'age > 30' },
    right: { type: 'operand', value: 'salary > 50000' },
    operator: 'AND',
  };
  return node;
};

// Evaluate AST against JSON data
const evaluate = (node, data) => {
  if (node.type === 'operand') {
    const [key, operator, value] = node.value.split(' ');
    switch (operator) {
      case '>': return data[key] > parseInt(value, 10);
      case '<': return data[key] < parseInt(value, 10);
      case '=': return data[key] === value;
      default: throw new Error('Unsupported operator');
    }
  }

  if (node.type === 'operator') {
    const leftResult = evaluate(node.left, data);
    const rightResult = evaluate(node.right, data);
    return node.operator === 'AND' ? leftResult && rightResult : leftResult || rightResult;
  }

  throw new Error('Invalid node type');
};

module.exports = { parseRuleString, evaluate };
