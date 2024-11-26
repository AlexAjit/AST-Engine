// ruleParser.js

// Function to parse the rule string into an Abstract Syntax Tree (AST)
function parseRuleString(ruleString) {
    const tokens = ruleString.match(/(\(|\)|AND|OR|<=|>=|!=|<|>|=|[^()\s]+)/g);
    const stack = [];
    const operators = [];
  
    function popOperator() {
      const operator = operators.pop();
      const right = stack.pop();
      const left = stack.pop();
      stack.push({ type: 'operator', operator, left, right });
    }
  
    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i].trim();
      if (token === ' ') continue;
  
      if (token === 'AND' || token === 'OR') {
        while (operators.length && operators[operators.length - 1] !== '(') {
          popOperator();
        }
        operators.push(token);
      } else if (token === '(') {
        operators.push(token);
      } else if (token === ')') {
        while (operators.length && operators[operators.length - 1] !== '(') {
          popOperator();
        }
        operators.pop();
      } else {
        let key = null, operator = null, value = null;
        while (i < tokens.length && (key === null || operator === null || value === null)) {
          if (key === null) key = tokens[i];
          else if (operator === null) operator = tokens[i];
          else value = tokens[i];
          i++;
        }
        i--;
        stack.push({ type: 'operand', key, operator, value });
      }
    }
  
    while (operators.length) {
      popOperator();
    }
  
    return stack[0];
  }
  
  // Function to generate ASCII representation from the AST
  function generateAsciiTree(node, prefix = '', isLeft = true) {
    if (!node) return '';
    let ascii = '';
    ascii +=
      prefix +
      (isLeft ? '├── ' : '└── ') +
      (node.type === 'operator' ? node.operator : `${node.key} ${node.operator} ${node.value}`) +
      '\n';
    if (node.left) ascii += generateAsciiTree(node.left, prefix + (isLeft ? '│   ' : '    '), true);
    if (node.right) ascii += generateAsciiTree(node.right, prefix + (isLeft ? '│   ' : '    '), false);
    return ascii;
  }
  
  // Export functions for use in other modules
  export { parseRuleString, generateAsciiTree };
  