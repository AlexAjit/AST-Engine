// // import React, { useState } from "react";

// // const RuleForm = ({ onSubmit }) => {
// //   const [ruleName, setRuleName] = useState("");
// //   const [ruleAST, setRuleAST] = useState("");

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     onSubmit({ name: ruleName, ast: ruleAST });
// //   };

// //   return (
// //     <form onSubmit={handleSubmit} className="space-y-6 bg-gray-800 p-6 rounded-lg shadow-lg">
// //       <input
// //         type="text"
// //         placeholder="Rule Name"
// //         className="p-3 w-full bg-gray-900 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
// //         value={ruleName}
// //         onChange={(e) => setRuleName(e.target.value)}
// //       />
// //       <input
// //         type="text"
// //         placeholder="Rule"
// //         className="p-3 w-full bg-gray-900 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
// //         value={ruleName}
// //         onChange={(e) => setRuleName(e.target.value)}
// //       />
// //       <textarea
// //         placeholder="AST JSON"
// //         className="p-3 w-full bg-gray-900 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
// //         rows={5}
// //         value={ruleAST}
// //         onChange={(e) => setRuleAST(e.target.value)}
// //       />
// //       <button
// //         type="submit"
// //         className="btn-blue w-full py-3 rounded-lg mt-4 text-lg font-bold"
// //       >
// //         Create Rule
// //       </button>
// //     </form>
// //   );
// // };

// // export default RuleForm;

// import React, { useState } from 'react';

// const RuleForm = ({ setCreatedRule }) => {
//   const [ruleName, setRuleName] = useState('');
//   const [ruleInput, setRuleInput] = useState('');

//   const handleCreateRule = () => {
//     // Process the rule input and generate ASCII structure based on operators AND, OR, NOT
//     const asciiStructure = generateAsciiStructure(ruleInput);
//     setCreatedRule(asciiStructure);
//   };

//   const generateAsciiStructure = (rule) => {
//     // This is a placeholder function to generate an ASCII structure based on the input rule
//     const formattedRule = formatRule(rule);
//     return formattedRule; // Return the ASCII representation
//   };

//   const formatRule = (rule) => {
//     // This function can be enhanced to properly format the rule based on AND, OR, NOT operators
//     let formatted = rule.replace(/\band\b/gi, 'AND')
//                         .replace(/\bor\b/gi, 'OR')
//                         .replace(/\bnot\b/gi, 'NOT');

//     // ASCII structure for operators (this can be customized more)
//     return `
//     Rule: ${ruleName}
//     ├── ${formatted}
//     `;
//   };

//   return (
//     <div className="flex space-x-6">
//       <div className="w-1/2 bg-white p-6 border border-gray-300 rounded">
//         <h2 className="text-xl font-bold mb-4">Create Rule</h2>
//         <div className="mb-4">
//           <label className="block mb-2">Rule Name</label>
//           <input
//             type="text"
//             value={ruleName}
//             onChange={(e) => setRuleName(e.target.value)}
//             className="p-2 w-full border border-gray-300 rounded"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block mb-2">Rule</label>
//           <input
//             type="text"
//             value={ruleInput}
//             onChange={(e) => setRuleInput(e.target.value)}
//             className="p-2 w-full border border-gray-300 rounded"
//             placeholder="Example: (age > 30 AND department = 'Sales') OR (age < 25 AND department = 'Marketing')"
//           />
//         </div>
//         <button
//           onClick={handleCreateRule}
//           className="bg-blue-600 text-white p-2 rounded w-full"
//         >
//           Create Rule
//         </button>
//       </div>

//       {/* ASCII structure display */}
//       <div className="w-1/2 p-6 bg-gray-800 text-white rounded">
//         <h3 className="text-xl font-bold mb-4">ASCII Rule Structure</h3>
//         <pre className="whitespace-pre-wrap">{/* Dynamic ASCII output here */}</pre>
//       </div>
//     </div>
//   );
// };

// export default RuleForm;


import React, { useState } from 'react';

const RuleForm = ({ setCreatedRule }) => {
  const [ruleName, setRuleName] = useState('');
  const [ruleInput, setRuleInput] = useState('');

  const handleCreateRule = () => {
    // Process the rule input and generate ASCII structure based on operators AND, OR, NOT
    const asciiStructure = generateAsciiStructure(ruleInput);
    setCreatedRule(asciiStructure);
  };

  const generateAsciiStructure = (rule) => {
    // This is a placeholder function to generate an ASCII structure based on the input rule
    const formattedRule = formatRule(rule);
    return formattedRule; // Return the ASCII representation
  };

  const formatRule = (rule) => {
    // This function can be enhanced to properly format the rule based on AND, OR, NOT operators
    let formatted = rule.replace(/\band\b/gi, 'AND')
                        .replace(/\bor\b/gi, 'OR')
                        .replace(/\bnot\b/gi, 'NOT');

    // ASCII structure for operators (this can be customized more)
    return `
    Rule: ${ruleName}
    ├── ${formatted}
    `;
  };

  return (
    <div className="flex space-x-6">
      <div className="w-1/2 bg-gray-900 p-6 border border-blue-600 rounded">
        {/* <h2 className="text-xl font-bold mb-4 text-gray-600">Create Rule</h2> */}
        <div className="mb-4">
          <label className="block mb-2 text-white">Rule Name</label>
          <input
            type="text"
            value={ruleName}
            onChange={(e) => setRuleName(e.target.value)}
            className="p-2 w-full border border-gray-300 rounded text-black"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-white">Rule</label>
          <input
            type="text"
            value={ruleInput}
            onChange={(e) => setRuleInput(e.target.value)}
            className="p-2 w-full border border-gray-300 rounded text-black"
            placeholder="Example: (age > 30 AND department = 'Sales') OR (age < 25 AND department = 'Marketing')"
          />
        </div>
        <button
          onClick={handleCreateRule}
          className="bg-blue-600 text-white p-2 rounded w-full hover:bg-blue-700"
        >
          Create Rule
        </button>
      </div>

      {/* ASCII structure display */}
      <div className="w-1/2 p-6 bg-gray-800 text-white rounded">
        <h3 className="text-xl font-bold mb-4 text-gray-400">Tree Representation</h3>
        <pre className="whitespace-pre-wrap">{/* Dynamic ASCII output here */}</pre>
      </div>
    </div>
  );
};

export default RuleForm;
