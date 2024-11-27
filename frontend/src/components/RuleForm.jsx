import React, { useState } from 'react';
import { parseRuleString, generateAsciiTree } from '../utils/ruleParser'; // Import the ruleParser utility
import axios from 'axios';

const RuleForm = ({ setCreatedRule }) => {
  const [ruleName, setRuleName] = useState(''); // State for Rule Name
  const [ruleInput, setRuleInput] = useState(''); // State for Rule Input
  const [asciiRepresentation, setAsciiRepresentation] = useState(''); // State for ASCII Tree
  const [loading, setLoading] = useState(false); // Loading state for API calls

  const handleInputChange = (e) => {
    const input = e.target.value;
    setRuleInput(input);
  
    // Check if the input is not null, empty, or just spaces
    if (input && input.trim().length > 0) {
      try {
        // Parse the rule string to an AST only if input is valid
        const ast = parseRuleString(input); // Parse the rule string to an AST
        const ascii = generateAsciiTree(ast); // Generate ASCII representation from AST
        setAsciiRepresentation(ascii); // Update ASCII representation state
      } catch (error) {
        console.error('Error parsing rule:', error);
        setAsciiRepresentation('Error parsing rule'); // Optionally, display an error message in the ASCII representation area
      }
    } else {
      setAsciiRepresentation(''); // Clear the ASCII representation if the input is empty
    }
  };
  

  // Handle form submission to create the rule
  const handleCreateRule = async () => {
    if (!ruleName.trim() || !ruleInput.trim()) {
      alert('Please provide both Rule Name and Rule String.');
      return;
    }

    try {
      setLoading(true); // Show loading state while the request is being processed
      const response = await axios.post('http://localhost:5000/api/rules/createRules', {
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
