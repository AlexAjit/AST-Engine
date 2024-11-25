import React, { useState } from 'react';

const CombineRuleForm = ({ setCombinedRule }) => {
  const [rule1, setRule1] = useState('');
  const [rule2, setRule2] = useState('');
  const [operator, setOperator] = useState('AND'); // Operator for combining rules

  const handleCombineRules = () => {
    const combinedRuleString = combineRules(rule1, rule2, operator);
    const asciiStructure = generateAsciiStructure(combinedRuleString);
    setCombinedRule(asciiStructure);
  };

  const combineRules = (rule1, rule2, operator) => {
    // Combine rules based on the selected operator
    return `(${rule1}) ${operator} (${rule2})`;
  };

  const generateAsciiStructure = (rule) => {
    // This function can generate an ASCII structure for the combined rule
    return `
    Combined Rule:
    ├── ${rule}
    `;
  };

  return (
    <div className="flex space-x-6">
      <div className="w-1/2 bg-gray-900 p-6 border border-blue-600 rounded">
        {/* <h2 className="text-xl font-bold mb-4 text-blue-600">Combine Rules</h2> */}
        <div className="mb-4">
          <label className="block mb-2 text-white">Rule 1</label>
          <input
            type="text"
            value={rule1}
            onChange={(e) => setRule1(e.target.value)}
            className="p-2 w-full border border-gray-300 rounded"
            placeholder="Enter Rule 1"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-white">Operator</label>
          <select
            value={operator}
            onChange={(e) => setOperator(e.target.value)}
            className="p-2 w-full border border-gray-300 rounded"
          >
            <option value="AND">AND</option>
            <option value="OR">OR</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-white">Rule 2</label>
          <input
            type="text"
            value={rule2}
            onChange={(e) => setRule2(e.target.value)}
            className="p-2 w-full border border-gray-300 rounded"
            placeholder="Enter Rule 2"
          />
        </div>
        <button
          onClick={handleCombineRules}
          className="bg-blue-600 text-white p-2 rounded w-full hover:bg-blue-700"
        >
          Combine Rules
        </button>
      </div>

      {/* ASCII structure display */}
      <div className="w-1/2 p-6 bg-gray-800 text-white rounded">
        <h3 className="text-xl font-bold mb-4 text-blue-600">Combined Rule Structure</h3>
        <pre className="whitespace-pre-wrap">{/* Dynamic ASCII output here */}</pre>
      </div>
    </div>
  );
};

export default CombineRuleForm;
