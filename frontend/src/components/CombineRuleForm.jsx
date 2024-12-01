import React, { useState } from 'react';
import axios from 'axios';

const CombineRuleForm = ({ setCombinedRule }) => {
  const [ruleName, setRuleName] = useState('');
  const [rule1, setRule1] = useState('');
  const [rule2, setRule2] = useState('');
  const [operator, setOperator] = useState('AND');
  const [asciiStructure, setAsciiStructure] = useState('');
  
  // Fetch Rule from Database based on Rule Name
  const fetchRuleByName = async (ruleName) => {
    try {
      const response = await axios.get(`/api/rules/getRule/${ruleName}`);
      return response.data.ruleString;
    } catch (error) {
      console.error('Error fetching rule:', error);
      return '';
    }
  };

  const handleCombineRules = async () => {
    const rule1FromDb = await fetchRuleByName(ruleName);  // Fetch Rule 1 from DB
    const combinedRuleString = combineRules(rule1FromDb, rule2, operator);
    const asciiStructure = generateAsciiStructure(combinedRuleString);
    
    setAsciiStructure(asciiStructure);
    setCombinedRule(combinedRuleString); // Set combined rule for further processing
  };

  const combineRules = (rule1, rule2, operator) => {
    // Combine rules based on the selected operator
    return `(${rule1}) ${operator} (${rule2})`;
  };

  const generateAsciiStructure = (rule) => {
    // This function generates a basic ASCII structure for the combined rule
    return `Combined Rule:
    ├── ${rule}
    `;
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post('/api/rules/createCombinedRule', {
        rule1,
        rule2,
        operator,
      });
      console.log('Combined Rule Created:', response.data);
    } catch (error) {
      console.error('Error saving combined rule:', error);
    }
  };

  return (
    <div className="flex space-x-6">
      <div className="w-1/2 bg-gray-900 p-6 border border-blue-600 rounded">
        <div className="mb-4">
          <label className="block mb-2 text-white">Search Rule</label>
          <input
            type="text"
            value={ruleName}
            onChange={(e) => setRuleName(e.target.value)}
            className="p-2 w-full border border-gray-300 rounded text-black"
            placeholder="Enter Rule Name"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-white">Operator</label>
          <select
            value={operator}
            onChange={(e) => setOperator(e.target.value)}
            className="p-2 w-full border border-gray-300 rounded text-black"
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
            className="p-2 w-full border border-gray-300 rounded text-black"
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
        <pre className="whitespace-pre-wrap">{asciiStructure}</pre>
        <button
          onClick={handleSubmit}
          className="bg-green-600 text-white p-2 rounded w-full hover:bg-green-700 mt-4"
        >
          Save Combined Rule
        </button>
      </div>
    </div>
  );
};

export default CombineRuleForm;
