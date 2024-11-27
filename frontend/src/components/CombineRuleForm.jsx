// import React, { useState } from 'react';

// const CombineRuleForm = ({ setCombinedRule }) => {
//   const [rule1, setRule1] = useState('');
//   const [rule2, setRule2] = useState('');
//   const [operator, setOperator] = useState('AND'); // Operator for combining rules

//   const handleCombineRules = () => {
//     const combinedRuleString = combineRules(rule1, rule2, operator);
//     const asciiStructure = generateAsciiStructure(combinedRuleString);
//     setCombinedRule(asciiStructure);
//   };

//   const combineRules = (rule1, rule2, operator) => {
//     // Combine rules based on the selected operator
//     return `(${rule1}) ${operator} (${rule2})`;
//   };

//   const generateAsciiStructure = (rule) => {
//     // This function can generate an ASCII structure for the combined rule
//     return `
//     Combined Rule:
//     ├── ${rule}
//     `;
//   };

//   return (
//     <div className="flex space-x-6">
//       <div className="w-1/2 bg-gray-900 p-6 border border-blue-600 rounded">
//         {/* <h2 className="text-xl font-bold mb-4 text-blue-600">Combine Rules</h2> */}
//         <div className="mb-4">
//           <label className="block mb-2 text-white">Search Rules</label>
//           <input
//             type="text"
//             value={rule1}
//             onChange={(e) => setRule1(e.target.value)}
//             className="p-2 w-full border border-gray-300 rounded text-black"
//             placeholder="Enter Rule 1"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block mb-2 text-white">Operator</label>
//           <select
//             value={operator}
//             onChange={(e) => setOperator(e.target.value)}
//             className="p-2 w-full border border-gray-300 rounded text-black"
//           >
//             <option value="SELECT">SELECT</option>
//             <option value="AND">AND</option>
//             <option value="OR">OR</option>
//           </select>
//         </div>
//         <div className="mb-4">
//           <label className="block mb-2 text-white">New Rule</label>
//           <input
//             type="text"
//             value={rule2}
//             onChange={(e) => setRule2(e.target.value)}
//             className="p-2 w-full border border-gray-300 rounded text-black"
//             placeholder="Enter Rule 2"
//           />
//         </div>
//         <button
//           onClick={handleCombineRules}
//           className="bg-blue-600 text-white p-2 rounded w-full hover:bg-blue-700"
//         >
//           Combine Rules
//         </button>
//       </div>

//       {/* ASCII structure display */}
//       <div className="w-1/2 p-6 bg-gray-800 text-white rounded">
//         <h3 className="text-xl font-bold mb-4 text-blue-600">Combined Rule Structure</h3>
//         <pre className="whitespace-pre-wrap">{/* Dynamic ASCII output here */}</pre>
//       </div>
//     </div>
//   );
// };

// export default CombineRuleForm;

// import React, { useState } from 'react';
// import axios from 'axios';

// const CombineRuleForm = () => {
//   const [searchRuleName, setSearchRuleName] = useState(''); // For searching the rule
//   const [operator, setOperator] = useState('AND'); // Operator
//   const [newRule, setNewRule] = useState(''); // User-entered rule
//   const [combinedRule, setCombinedRule] = useState(''); // Combined rule output
//   const [errorMessage, setErrorMessage] = useState('');

//   const handleCombineRules = async () => {
//     try {
//       // Fetch the existing rule from backend
//       const response = await axios.get(`http://localhost:5000/api/rules/${searchRuleName}`);
//       const existingRule = response.data.content;

//       // Send the combined rule to the backend
//       const response2 = await axios.post('http://localhost:5000/api/rules/combine_ast', {
//         existingRule,
//         operator,
//         newRule,
//       });

//       setCombinedRule(response2.data.combinedRuleAst); // Display combined rule
//       setErrorMessage('');
//     } catch (error) {
//       setErrorMessage(
//         error.response?.data?.error || 'Error fetching or combining rules. Please check the rule name.'
//       );
//       console.error(error);
//     }
//   };

//   return (
//     <div className="flex flex-col space-y-4 p-4 bg-gray-900 text-white rounded">
//       <h2 className="text-xl font-bold mb-4">Combine Rules</h2>

//       {/* Search Rule */}
//       <div>
//         <label className="block mb-2">Search Rule (Existing Rule Name)</label>
//         <input
//           type="text"
//           value={searchRuleName}
//           onChange={(e) => setSearchRuleName(e.target.value)}
//           className="p-2 w-full border border-gray-300 rounded text-black"
//           placeholder="Enter Rule Name"
//         />
//       </div>

//       {/* Operator */}
//       <div>
//         <label className="block mb-2">Operator</label>
//         <select
//           value={operator}
//           onChange={(e) => setOperator(e.target.value)}
//           className="p-2 w-full border border-gray-300 rounded text-black"
//         >
//           <option value="AND">AND</option>
//           <option value="OR">OR</option>
//         </select>
//       </div>

//       {/* New Rule */}
//       <div>
//         <label className="block mb-2">Enter New Rule</label>
//         <input
//           type="text"
//           value={newRule}
//           onChange={(e) => setNewRule(e.target.value)}
//           className="p-2 w-full border border-gray-300 rounded text-black"
//           placeholder="Enter Rule (e.g., salary > 20000 OR experience > 5)"
//         />
//       </div>

//       {/* Combine Rules Button */}
//       <button
//         onClick={handleCombineRules}
//         className="bg-blue-600 p-2 rounded hover:bg-blue-700"
//       >
//         Combine Rules
//       </button>

//       {/* Error Message */}
//       {errorMessage && <p className="text-red-500">{errorMessage}</p>}

//       {/* Combined Rule Output */}
//       {combinedRule && (
//         <div className="mt-4 bg-gray-800 p-4 rounded">
//           <h3 className="font-bold text-blue-400">Combined Rule</h3>
//           <pre className="whitespace-pre-wrap">{combinedRule}</pre>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CombineRuleForm;


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
          <label className="block mb-2 text-white">Rule Name</label>
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
