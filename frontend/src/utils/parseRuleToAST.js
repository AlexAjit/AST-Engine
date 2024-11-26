const parseRuleToAST = (ruleString) => {
    // Mock parser for example
    // Replace with a proper parser as needed
    return {
      type: 'logicalOperator',
      operator: 'AND',
      children: [
        {
          type: 'logicalOperator',
          operator: 'OR',
          children: [
            {
              type: 'logicalOperator',
              operator: 'AND',
              children: [
                { type: 'condition', attribute: 'age', operator: '>', value: '30' },
                { type: 'condition', attribute: 'department', operator: '=', value: "'Sales'" },
              ],
            },
            {
              type: 'logicalOperator',
              operator: 'AND',
              children: [
                { type: 'condition', attribute: 'age', operator: '<', value: '25' },
                { type: 'condition', attribute: 'department', operator: '=', value: "'Marketing'" },
              ],
            },
          ],
        },
        {
          type: 'logicalOperator',
          operator: 'OR',
          children: [
            { type: 'condition', attribute: 'salary', operator: '>', value: '50000' },
            { type: 'condition', attribute: 'experience', operator: '>', value: '5' },
          ],
        },
      ],
    };
  };
  
  export default parseRuleToAST;
  