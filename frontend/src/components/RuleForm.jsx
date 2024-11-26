// // // // import React, { useState } from "react";

// // // // const RuleForm = ({ onSubmit }) => {
// // // //   const [ruleName, setRuleName] = useState("");
// // // //   const [ruleAST, setRuleAST] = useState("");

// // // //   const handleSubmit = (e) => {
// // // //     e.preventDefault();
// // // //     onSubmit({ name: ruleName, ast: ruleAST });
// // // //   };

// // // //   return (
// // // //     <form onSubmit={handleSubmit} className="space-y-6 bg-gray-800 p-6 rounded-lg shadow-lg">
// // // //       <input
// // // //         type="text"
// // // //         placeholder="Rule Name"
// // // //         className="p-3 w-full bg-gray-900 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
// // // //         value={ruleName}
// // // //         onChange={(e) => setRuleName(e.target.value)}
// // // //       />
// // // //       <input
// // // //         type="text"
// // // //         placeholder="Rule"
// // // //         className="p-3 w-full bg-gray-900 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
// // // //         value={ruleName}
// // // //         onChange={(e) => setRuleName(e.target.value)}
// // // //       />
// // // //       <textarea
// // // //         placeholder="AST JSON"
// // // //         className="p-3 w-full bg-gray-900 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
// // // //         rows={5}
// // // //         value={ruleAST}
// // // //         onChange={(e) => setRuleAST(e.target.value)}
// // // //       />
// // // //       <button
// // // //         type="submit"
// // // //         className="btn-blue w-full py-3 rounded-lg mt-4 text-lg font-bold"
// // // //       >
// // // //         Create Rule
// // // //       </button>
// // // //     </form>
// // // //   );
// // // // };

// // // // export default RuleForm;

// // // import React, { useState } from 'react';

// // // const RuleForm = ({ setCreatedRule }) => {
// // //   const [ruleName, setRuleName] = useState('');
// // //   const [ruleInput, setRuleInput] = useState('');

// // //   const handleCreateRule = () => {
// // //     // Process the rule input and generate ASCII structure based on operators AND, OR, NOT
// // //     const asciiStructure = generateAsciiStructure(ruleInput);
// // //     setCreatedRule(asciiStructure);
// // //   };

// // //   const generateAsciiStructure = (rule) => {
// // //     // This is a placeholder function to generate an ASCII structure based on the input rule
// // //     const formattedRule = formatRule(rule);
// // //     return formattedRule; // Return the ASCII representation
// // //   };

// // //   const formatRule = (rule) => {
// // //     // This function can be enhanced to properly format the rule based on AND, OR, NOT operators
// // //     let formatted = rule.replace(/\band\b/gi, 'AND')
// // //                         .replace(/\bor\b/gi, 'OR')
// // //                         .replace(/\bnot\b/gi, 'NOT');

// // //     // ASCII structure for operators (this can be customized more)
// // //     return `
// // //     Rule: ${ruleName}
// // //     ├── ${formatted}
// // //     `;
// // //   };

// // //   return (
// // //     <div className="flex space-x-6">
// // //       <div className="w-1/2 bg-white p-6 border border-gray-300 rounded">
// // //         <h2 className="text-xl font-bold mb-4">Create Rule</h2>
// // //         <div className="mb-4">
// // //           <label className="block mb-2">Rule Name</label>
// // //           <input
// // //             type="text"
// // //             value={ruleName}
// // //             onChange={(e) => setRuleName(e.target.value)}
// // //             className="p-2 w-full border border-gray-300 rounded"
// // //           />
// // //         </div>
// // //         <div className="mb-4">
// // //           <label className="block mb-2">Rule</label>
// // //           <input
// // //             type="text"
// // //             value={ruleInput}
// // //             onChange={(e) => setRuleInput(e.target.value)}
// // //             className="p-2 w-full border border-gray-300 rounded"
// // //             placeholder="Example: (age > 30 AND department = 'Sales') OR (age < 25 AND department = 'Marketing')"
// // //           />
// // //         </div>
// // //         <button
// // //           onClick={handleCreateRule}
// // //           className="bg-blue-600 text-white p-2 rounded w-full"
// // //         >
// // //           Create Rule
// // //         </button>
// // //       </div>

// // //       {/* ASCII structure display */}
// // //       <div className="w-1/2 p-6 bg-gray-800 text-white rounded">
// // //         <h3 className="text-xl font-bold mb-4">ASCII Rule Structure</h3>
// // //         <pre className="whitespace-pre-wrap">{/* Dynamic ASCII output here */}</pre>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default RuleForm;


// // import React, { useState } from 'react';

// // const RuleForm = ({ setCreatedRule }) => {
// //   const [ruleName, setRuleName] = useState('');
// //   const [ruleInput, setRuleInput] = useState('');

// //   const handleCreateRule = () => {
// //     // Process the rule input and generate ASCII structure based on operators AND, OR, NOT
// //     const asciiStructure = generateAsciiStructure(ruleInput);
// //     setCreatedRule(asciiStructure);
// //   };

// //   const generateAsciiStructure = (rule) => {
// //     // This is a placeholder function to generate an ASCII structure based on the input rule
// //     const formattedRule = formatRule(rule);
// //     return formattedRule; // Return the ASCII representation
// //   };

// //   const formatRule = (rule) => {
// //     // This function can be enhanced to properly format the rule based on AND, OR, NOT operators
// //     let formatted = rule.replace(/\band\b/gi, 'AND')
// //                         .replace(/\bor\b/gi, 'OR')
// //                         .replace(/\bnot\b/gi, 'NOT');

// //     // ASCII structure for operators (this can be customized more)
// //     return `
// //     Rule: ${ruleName}
// //     ├── ${formatted}
// //     `;
// //   };

// //   return (
// //     <div className="flex space-x-6">
// //       <div className="w-1/2 bg-gray-900 p-6 border border-blue-600 rounded">
// //         {/* <h2 className="text-xl font-bold mb-4 text-gray-600">Create Rule</h2> */}
// //         <div className="mb-4">
// //           <label className="block mb-2 text-white">Rule Name</label>
// //           <input
// //             type="text"
// //             value={ruleName}
// //             onChange={(e) => setRuleName(e.target.value)}
// //             className="p-2 w-full border border-gray-300 rounded text-black"
// //           />
// //         </div>
// //         <div className="mb-4">
// //           <label className="block mb-2 text-white">Rule</label>
// //           <input
// //             type="text"
// //             value={ruleInput}
// //             onChange={(e) => setRuleInput(e.target.value)}
// //             className="p-2 w-full border border-gray-300 rounded text-black"
// //             placeholder="Example: (age > 30 AND department = 'Sales') OR (age < 25 AND department = 'Marketing')"
// //           />
// //         </div>
// //         <button
// //           onClick={handleCreateRule}
// //           className="bg-blue-600 text-white p-2 rounded w-full hover:bg-blue-700"
// //         >
// //           Create Rule
// //         </button>
// //       </div>

// //       {/* ASCII structure display */}
// //       <div className="w-1/2 p-6 bg-gray-800 text-white rounded">
// //         <h3 className="text-xl font-bold mb-4 text-gray-400">Tree Representation</h3>
// //         <pre className="whitespace-pre-wrap">{/* Dynamic ASCII output here */}</pre>
// //       </div>
// //     </div>
// //   );
// // };

// // export default RuleForm;

// import React, { useState } from 'react';
// import axios from 'axios';

// const RuleForm = ({ setCreatedRule }) => {
//   const [ruleName, setRuleName] = useState('');
//   const [ruleInput, setRuleInput] = useState('');

//   const handleCreateRule = async () => {
//     // Process the rule input and generate ASCII structure based on operators AND, OR, NOT
//     const asciiStructure = generateAsciiStructure(ruleInput);
//     setCreatedRule(asciiStructure);

//     try {
//       // Send the rule data to the backend via POST request
//       const response = await axios.post('http://localhost:5000/api/rules', {
//         ruleName,
//         ruleInput,
//         asciiStructure,
//       });

//       if (response.status === 200) {
//         console.log('Rule created successfully:', response.data);
//       }
//     } catch (error) {
//       console.error('Error creating rule:', error);
//     }
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
//       <div className="w-1/2 bg-gray-900 p-6 border border-blue-600 rounded">
//         <div className="mb-4">
//           <label className="block mb-2 text-white">Rule Name</label>
//           <input
//             type="text"
//             value={ruleName}
//             onChange={(e) => setRuleName(e.target.value)}
//             className="p-2 w-full border border-gray-300 rounded text-black"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block mb-2 text-white">Rule</label>
//           <input
//             type="text"
//             value={ruleInput}
//             onChange={(e) => setRuleInput(e.target.value)}
//             className="p-2 w-full border border-gray-300 rounded text-black"
//             placeholder="Example: (age > 30 AND department = 'Sales') OR (age < 25 AND department = 'Marketing')"
//           />
//         </div>
//         <button
//           onClick={handleCreateRule}
//           className="bg-blue-600 text-white p-2 rounded w-full hover:bg-blue-700"
//         >
//           Create Rule
//         </button>
//       </div>

//       {/* ASCII structure display */}
//       <div className="w-1/2 p-6 bg-gray-800 text-white rounded">
//         <h3 className="text-xl font-bold mb-4 text-gray-400">Tree Representation</h3>
//         {/* <pre className="whitespace-pre-wrap">{asciiStructure}</pre> */}
//       </div>
//     </div>
//   );
// };

// export default RuleForm;

// import React, { useState } from 'react';
// import axios from 'axios';

// const RuleForm = ({ setCreatedRule }) => {
//   const [ruleName, setRuleName] = useState('');
//   const [ruleInput, setRuleInput] = useState('');

//   const handleCreateRule = async () => {
//     try {
//       const response = await axios.post('http://localhost:5000/api/create_rule', {
//         ruleString: ruleInput,
//         ruleName,
//       });

//       if (response.status === 200) {
//         setCreatedRule(response.data);
//         alert('Rule created successfully!');
//       }
//     } catch (error) {
//       console.error('Error creating rule:', error);
//       alert('Failed to create rule');
//     }
//   };

//   return (
//     <div className="flex space-x-6">
//       <div className="w-1/2 bg-gray-900 p-6 border border-blue-600 rounded">
//         <div className="mb-4">
//           <label className="block mb-2 text-white">Rule Name</label>
//           <input
//             type="text"
//             value={ruleName}
//             onChange={(e) => setRuleName(e.target.value)}
//             className="p-2 w-full border border-gray-300 rounded text-black"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block mb-2 text-white">Rule</label>
//           <input
//             type="text"
//             value={ruleInput}
//             onChange={(e) => setRuleInput(e.target.value)}
//             className="p-2 w-full border border-gray-300 rounded text-black"
//             placeholder="Example: (age > 30 AND department = 'Sales') OR (age < 25 AND department = 'Marketing')"
//           />
//         </div>
//         <button
//           onClick={handleCreateRule}
//           className="bg-blue-600 text-white p-2 rounded w-full hover:bg-blue-700"
//         >
//           Create Rule
//         </button>
//       </div>
//       {/* ASCII structure display */}
//       <div className="w-1/2 p-6 bg-gray-800 text-white rounded">
//  <h3 className="text-xl font-bold mb-4 text-gray-400">Tree Representation</h3>
// {/* <pre className="whitespace-pre-wrap">{asciiStructure}</pre> */}
// </div>
//     </div>
//   );
// };

// export default RuleForm;

// import React, { useState } from 'react';
// import axios from 'axios';

// const RuleForm = ({ setCreatedRule }) => {
//   const [ruleName, setRuleName] = useState('');
//   const [ruleInput, setRuleInput] = useState('');
//   const [loading, setLoading] = useState(false);

//   const handleCreateRule = async () => {
//     if (!ruleName.trim() || !ruleInput.trim()) {
//       alert('Please provide both Rule Name and Rule String.');
//       return;
//     }

//     try {
//       setLoading(true); // Show loading state
//       const response = await axios.post('http://localhost:5000/api/create_rule', {
//         ruleString: ruleInput,
//         ruleName,
//       });

//       if (response.status === 201) { // Use the correct status code
//         setCreatedRule(response.data.rule);
//         alert('Rule created successfully!');
//         setRuleName(''); // Reset inputs after successful creation
//         setRuleInput('');
//       } else {
//         alert('Unexpected response from the server.');
//       }
//     } catch (error) {
//       console.error('Error creating rule:', error);
//       alert(error.response?.data?.message || 'Failed to create rule.');
//     } finally {
//       setLoading(false); // Hide loading state
//     }
//   };

//   return (
//     <div className="flex space-x-6">
//       <div className="w-1/2 bg-gray-900 p-6 border border-blue-600 rounded">
//         <div className="mb-4">
//           <label className="block mb-2 text-white">Rule Name</label>
//           <input
//             type="text"
//             value={ruleName}
//             onChange={(e) => setRuleName(e.target.value)}
//             className="p-2 w-full border border-gray-300 rounded text-black"
//             placeholder="Enter a unique rule name"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block mb-2 text-white">Rule</label>
//           <textarea
//             value={ruleInput}
//             onChange={(e) => setRuleInput(e.target.value)}
//             className="p-2 w-full border border-gray-300 rounded text-black"
//             placeholder="Example: (age > 30 AND department = 'Sales') OR (age < 25 AND department = 'Marketing')"
//             rows="4"
//           />
//         </div>
//         <button
//           onClick={handleCreateRule}
//           disabled={loading} // Disable button when loading
//           className={`p-2 rounded w-full text-white ${
//             loading ? 'bg-gray-600' : 'bg-blue-600 hover:bg-blue-700'
//           }`}
//         >
//           {loading ? 'Creating...' : 'Create Rule'}
//         </button>
//       </div>

//       {/* ASCII structure display */}
//       <div className="w-1/2 p-6 bg-gray-800 text-white rounded">
//         <h3 className="text-xl font-bold mb-4 text-gray-400">Tree Representation</h3>
//         {/* Add ASCII tree structure or additional visualization here if needed */}
//       </div>
//     </div>
//   );
// };

// export default RuleForm;

// import React, { useState } from 'react';
// import axios from 'axios';

// const RuleForm = ({ setCreatedRule }) => {
//   const [ruleName, setRuleName] = useState('');
//   const [ruleInput, setRuleInput] = useState('');
//   const [loading, setLoading] = useState(false);

//   const handleCreateRule = async () => {
//     if (!ruleName.trim() || !ruleInput.trim()) {
//       alert('Please provide both Rule Name and Rule String.');
//       return;
//     }

//     try {
//       setLoading(true); // Show loading state
//       const response = await axios.post('http://localhost:5000/api/create_rule', {
//         ruleName,
//         ruleString: ruleInput,
//       });

//       if (response.status === 201) { // Check for success
//         setCreatedRule(response.data);
//         alert('Rule created successfully!');
//         setRuleName(''); // Reset inputs after successful creation
//         setRuleInput('');
//       } else {
//         alert('Unexpected response from the server.');
//       }
//     } catch (error) {
//       console.error('Error creating rule:', error);
//       alert(error.response?.data?.message || 'Failed to create rule.');
//     } finally {
//       setLoading(false); // Hide loading state
//     }
//   };

//   return (
//     <div className="flex space-x-6">
//       <div className="w-1/2 bg-gray-900 p-6 border border-blue-600 rounded">
//         <div className="mb-4">
//           <label className="block mb-2 text-white">Rule Name</label>
//           <input
//             type="text"
//             value={ruleName}
//             onChange={(e) => setRuleName(e.target.value)}
//             className="p-2 w-full border border-gray-300 rounded text-black"
//             placeholder="Enter a unique rule name"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block mb-2 text-white">Rule</label>
//           <textarea
//             value={ruleInput}
//             onChange={(e) => setRuleInput(e.target.value)}
//             className="p-2 w-full border border-gray-300 rounded text-black"
//             placeholder="Example: (age > 30 AND department = 'Sales') OR (age < 25 AND department = 'Marketing')"
//             rows="4"
//           />
//         </div>
//         <button
//           onClick={handleCreateRule}
//           disabled={loading} // Disable button when loading
//           className={`p-2 rounded w-full text-white ${
//             loading ? 'bg-gray-600' : 'bg-blue-600 hover:bg-blue-700'
//           }`}
//         >
//           {loading ? 'Creating...' : 'Create Rule'}
//         </button>
//       </div>

//       {/* ASCII structure display */}
//       <div className="w-1/2 p-6 bg-gray-800 text-white rounded">
//         <h3 className="text-xl font-bold mb-4 text-gray-400">Tree Representation</h3>
//         {/* Here you can display the ASCII structure if needed */}
//       </div>
//     </div>
//   );
// };

// export default RuleForm;

// import React, { useState } from 'react';
// import parseRuleToAST from '../utils/parseRuleToAST';
// import generateASCII from '../utils/generateASCII'; // Import the ASCII generator
// import axios from 'axios';


// const RuleForm = ({ setCreatedRule }) => {
//   const [ruleName, setRuleName] = useState('');
//   const [ruleInput, setRuleInput] = useState('');
//   const [ruleAST, setRuleAST] = useState(null); // State for holding AST
//   const [asciiRepresentation, setAsciiRepresentation] = useState(''); // State for ASCII
//   const [loading, setLoading] = useState(false);

//   const handleInputChange = (e) => {
//     const input = e.target.value;
//     setRuleInput(input);

//     // Parse the rule and generate ASCII dynamically
//     const ast = parseRuleToAST(input);
//     setRuleAST(ast);
//     setAsciiRepresentation(generateASCII(ast));
//   };

//   const handleCreateRule = async () => {
//     if (!ruleName.trim() || !ruleInput.trim()) {
//       alert('Please provide both Rule Name and Rule String.');
//       return;
//     }

//     try {
//       setLoading(true); // Show loading state
//       const response = await axios.post('http://localhost:5000/api/create_rule', {
//         ruleName,
//         ruleString: ruleInput,
//       });

//       if (response.status === 201) { // Check for success
//         setCreatedRule(response.data);
//         alert('Rule created successfully!');
//         setRuleName(''); // Reset inputs
//         setRuleInput('');
//         setRuleAST(null);
//         setAsciiRepresentation('');
//       } else {
//         alert('Unexpected response from the server.');
//       }
//     } catch (error) {
//       console.error('Error creating rule:', error);
//       alert(error.response?.data?.message || 'Failed to create rule.');
//     } finally {
//       setLoading(false); // Hide loading state
//     }
//   };

//   return (
//     <div className="flex space-x-6">
//       <div className="w-1/2 bg-gray-900 p-6 border border-blue-600 rounded">
//         <div className="mb-4">
//           <label className="block mb-2 text-white">Rule Name</label>
//           <input
//             type="text"
//             value={ruleName}
//             onChange={(e) => setRuleName(e.target.value)}
//             className="p-2 w-full border border-gray-300 rounded text-black"
//             placeholder="Enter a unique rule name"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block mb-2 text-white">Rule</label>
//           <textarea
//             value={ruleInput}
//             onChange={handleInputChange} // Dynamically update AST and ASCII
//             className="p-2 w-full border border-gray-300 rounded text-black"
//             placeholder="Example: (age > 30 AND department = 'Sales') OR (age < 25 AND department = 'Marketing')"
//             rows="4"
//           />
//         </div>
//         <button
//           onClick={handleCreateRule}
//           disabled={loading} // Disable button when loading
//           className={`p-2 rounded w-full text-white ${
//             loading ? 'bg-gray-600' : 'bg-blue-600 hover:bg-blue-700'
//           }`}
//         >
//           {loading ? 'Creating...' : 'Create Rule'}
//         </button>
//       </div>

//       {/* ASCII Representation */}
//       <div className="w-1/2 bg-gray-800 p-4 rounded">
//         <h3 className="text-gray-400 text-lg font-bold mb-4">ASCII Representation</h3>
//         <pre className="text-white">{asciiRepresentation || 'No rule entered.'}</pre>
//       </div>
//     </div>
//   );
// };

// export default RuleForm;

import React, { useState } from 'react';
import { parseRuleString, generateAsciiTree } from '../utils/ruleParser'; // Import the ruleParser utility
import axios from 'axios';

const RuleForm = ({ setCreatedRule }) => {
  const [ruleName, setRuleName] = useState(''); // State for Rule Name
  const [ruleInput, setRuleInput] = useState(''); // State for Rule Input
  const [asciiRepresentation, setAsciiRepresentation] = useState(''); // State for ASCII Tree
  const [loading, setLoading] = useState(false); // Loading state for API calls

  // Handle real-time changes to the rule input
  const handleInputChange = (e) => {
    const input = e.target.value;
    setRuleInput(input);

    // Parse the rule and generate ASCII dynamically as user types
    const ast = parseRuleString(input); // Parse the rule string to an AST
    const ascii = generateAsciiTree(ast); // Generate ASCII representation from AST
    setAsciiRepresentation(ascii); // Update ASCII representation state
  };

  // Handle form submission to create the rule
  const handleCreateRule = async () => {
    if (!ruleName.trim() || !ruleInput.trim()) {
      alert('Please provide both Rule Name and Rule String.');
      return;
    }

    try {
      setLoading(true); // Show loading state while the request is being processed
      const response = await axios.post('http://localhost:5000/api/create_rule', {
        ruleName,
        ruleString: ruleInput, // Only send the rule name and rule input, not the ASCII tree
      });

      if (response.status === 201) {
        setCreatedRule(response.data); // Update parent state with created rule
        alert('Rule created successfully!');
        setRuleName(''); // Reset the form inputs
        setRuleInput('');
        setAsciiRepresentation(''); // Reset ASCII representation
      } else {
        alert('Unexpected response from the server.');
      }
    } catch (error) {
      console.error('Error creating rule:', error);
      alert(error.response?.data?.message || 'Failed to create rule.');
    } finally {
      setLoading(false); // Hide loading state
    }
  };

  return (
    <div className="flex space-x-6">
      {/* Left Panel: Rule Name and Rule Input */}
      <div className="w-1/2 bg-gray-900 p-6 border border-blue-600 rounded">
        <div className="mb-4">
          <label className="block mb-2 text-white">Rule Name</label>
          <input
            type="text"
            value={ruleName}
            onChange={(e) => setRuleName(e.target.value)}
            className="p-2 w-full border border-gray-300 rounded text-black"
            placeholder="Enter a unique rule name"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-white">Rule</label>
          <textarea
            value={ruleInput}
            onChange={handleInputChange} // Dynamically update AST and ASCII on input change
            className="p-2 w-full border border-gray-300 rounded text-black"
            placeholder="Example: (age > 30 AND department = 'Sales') OR (age < 25 AND department = 'Marketing')"
            rows="4"
          />
        </div>
        <button
          onClick={handleCreateRule}
          disabled={loading} // Disable the button while the request is loading
          className={`p-2 rounded w-full text-white ${
            loading ? 'bg-gray-600' : 'bg-blue-600 hover:bg-blue-700'
          }`}
        >
          {loading ? 'Creating...' : 'Create Rule'}
        </button>
      </div>

      {/* Right Panel: ASCII Representation */}
      <div className="w-1/2 bg-gray-800 p-4 rounded">
        <h3 className="text-gray-400 text-lg font-bold mb-4">ASCII Representation</h3>
        <pre className="text-white">{asciiRepresentation || 'No rule entered.'}</pre>
      </div>
    </div>
  );
};

export default RuleForm;
