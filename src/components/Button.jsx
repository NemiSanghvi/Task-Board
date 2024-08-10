import React, { useState } from 'react';
import { FaPlus } from "react-icons/fa";

function Button({ setData, data }) {
  const [showForm, setShowForm] = useState(false);
  const [desc, setDesc] = useState('');
  const [relevance, setRelevance] = useState('Low');

  const handleAddTask = () => {
    if (!desc.trim()) {
      console.error('Description cannot be empty');
      return;
    }

    setData([...data, { desc, relevance, done: false }]);
    setDesc(''); // Clear input field
    setRelevance('Low'); // Reset relevance to default
    setShowForm(false); // Hide the form
  };

  return (
    <>
      <button
        onClick={() => setShowForm(true)}
        className="fixed bottom-4 right-4 p-4 bg-blue-500 text-white rounded-full z-[4] shadow-lg hover:bg-blue-600 transition-all"
      >
        <FaPlus size={28} />
      </button>

      {showForm && (
        <div className="fixed bottom-20 right-4 p-4 bg-white shadow-lg rounded-lg z-[5]">
          <h3 className="text-lg font-semibold mb-2">Add New Task</h3>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleAddTask();
            }}
          >
            <div className="mb-2">
              <label className="block text-sm font-medium mb-1">Description:</label>
              <input
                type="text"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                className="border border-gray-300 rounded p-2 w-full"
              />
            </div>
            <div className="mb-2">
              <label className="block text-sm font-medium mb-1">Relevance:</label>
              <select
                value={relevance}
                onChange={(e) => setRelevance(e.target.value)}
                className="border border-gray-300 rounded p-2 w-full"
              >
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="Important">Important</option>
              </select>
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded mr-2 hover:bg-blue-600 transition-all"
            >
              Add Task
            </button>
            <button
              type="button"
              onClick={() => setShowForm(false)}
              className="bg-gray-300 text-gray-700 p-2 rounded hover:bg-gray-400 transition-all"
            >
              Cancel
            </button>
          </form>
        </div>
      )}
    </>
  );
}

export default Button;


// import React from 'react'
// import { FaPlus } from "react-icons/fa";

// function Button({ setData, data }) {

//   const handleAddTask = () => {
//     if (!Array.isArray(data)) {
//       console.error('Data is not an array:', data);
//       return;
//     }

//     setData([...data, { desc: "New Task", relevance: "Low", done: false }]);
//     console.log("New task added");
//   }
//   return (
//     <button
//       onClick={() => handleAddTask()}
//       className="fixed bottom-4 right-4 p-4 bg-blue-500 text-white rounded-full z-[4] shadow-lg hover:bg-blue-600 transition-all"
//     >
//       <FaPlus size={28} />
//     </button>
//   )
// }

// export default Button
