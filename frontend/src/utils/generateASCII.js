const generateASCII = (node, depth = 0) => {
    if (!node) return '';
  
    let result = `${'  '.repeat(depth)}${node.type === 'logicalOperator' ? node.operator : `${node.attribute} ${node.operator} ${node.value}`}\n`;
  
    if (node.children && node.children.length) {
      node.children.forEach((child) => {
        result += generateASCII(child, depth + 1);
      });
    }
  
    return result;
  };
  
  export default generateASCII;
  