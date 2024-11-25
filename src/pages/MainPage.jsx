import React, { useState } from 'react';
import RuleForm from '../components/RuleForm';
import CombineRuleForm from '../components/CombineRuleForm';
import EvaluateRuleForm from '../components/EvaluateRuleForm';

const MainPage = () => {
  const [selectedOption, setSelectedOption] = useState('create'); // To toggle between Create Rule, Combine Rule, and Evaluate Rule
  const [createdRule, setCreatedRule] = useState(null); // To store the created rule logic
  const [combinedRule, setCombinedRule] = useState(null); // To store combined rules

  return (
    <div className="p-8 bg-black text-white">
      <div className="flex justify-between items-center mb-6">
        <div className="w-1/3">
          <select
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
            className="p-2 bg-blue-600 text-white border border-gray-300 rounded"
          >
            <option value="create">Create Rule</option>
            <option value="combine">Combine Rule</option>
            <option value="evaluate">Evaluate Rule</option>
          </select>
        </div>
      </div>

      {/* Show RuleForm based on selected option */}
      {selectedOption === 'create' && <RuleForm setCreatedRule={setCreatedRule} />}
      {selectedOption === 'combine' && <CombineRuleForm setCombinedRule={setCombinedRule} />}
      {selectedOption === 'evaluate' && (
            <div>
              {/* <h2 className="text-2xl font-bold text-blue-500 mb-4">Evaluate Rule</h2> */}
              <EvaluateRuleForm />
            </div>
          )}

      {/* Display ASCII Structure of Combined Rule */}
      {combinedRule && (
        <div className="mt-6 p-4 bg-gray-800 text-white rounded">
          <pre>{combinedRule}</pre>
        </div>
      )}
    </div>
  );
};

export default MainPage;
