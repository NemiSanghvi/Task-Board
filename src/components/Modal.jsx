// import React from 'react';
// import { useSelector } from 'react-redux';

// function Modal({ showModal, onClose }) {
//   const task = useSelector((state) => state.task);

//   if (!showModal) return null;

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
//       <div className="bg-white p-6 rounded-lg shadow-lg relative w-full max-w-md">
//         <button
//           className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
//           onClick={onClose}
//         >
//           &times;
//         </button>
//         <h2 className="text-2xl font-bold mb-4">Task Details</h2>
//         <p className={`text-lg ${task.done ? 'line-through' : ''}`}>
//           {task.description}
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Modal;

import React from 'react';
import { useSelector } from 'react-redux';

function Modal({ showModal, onClose }) {
  const selectedTask = useSelector((state) => state.task.selectedTask);
  if (!showModal || !selectedTask) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[4] bg-black bg-opacity-50 flex justify-end">
      <div className="bg-green-500 p-8 rounded-l-lg shadow-lg w-80 h-full">
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-4">Task Details</h2>

      </div>
    </div>
  );
}

export default Modal;
