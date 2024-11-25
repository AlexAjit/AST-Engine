import React, { useState } from 'react';

const EvaluateRuleForm = () => {
  const [rule, setRule] = useState('');
  const [jsonData, setJsonData] = useState('');

  const handleEvaluateRule = () => {
    // Placeholder action for the evaluate button
    console.log("Rule:", rule);
    console.log("JSON Data:", jsonData);
  };

  return (
    <div className="flex space-x-6">
      {/* Form Section */}
      <div className="w-1/2 bg-gray-900 p-6 border border-blue-600 rounded">
        {/* <h2 className="text-xl font-bold mb-4 text-blue-600">Evaluate Rule</h2> */}
        <div className="mb-4">
          <label className="block mb-2 text-white">Rule</label>
          <input
            type="text"
            value={rule}
            onChange={(e) => setRule(e.target.value)}
            className="p-2 w-full border border-gray-300 rounded"
            placeholder="Enter Rule (e.g., age > 30 AND department = 'Sales')"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-white">JSON Data</label>
          <textarea
            value={jsonData}
            onChange={(e) => setJsonData(e.target.value)}
            className="p-2 w-full border border-gray-300 rounded"
            rows="6"
            placeholder='Enter JSON data (e.g., {"age": 35, "department": "Sales", "salary": 60000})'
          ></textarea>
        </div>
        <button
          onClick={handleEvaluateRule}
          className="bg-blue-600 text-white p-2 rounded w-full hover:bg-blue-700"
        >
          Evaluate Rule
        </button>
      </div>

      {/* Placeholder Section for Results */}
      <div className="w-1/2 p-6 bg-gray-800 text-white rounded">
        <h3 className="text-xl font-bold mb-4 text-blue-600">Evaluation Result</h3>
        <div className="text-lg italic">This section will display results from the API</div>
      </div>
    </div>
  );
};

export default EvaluateRuleForm;
