import React from 'react';
import { CiBoxList } from "react-icons/ci";
import { useState } from 'react';

function Menu({ data }) {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <button
        className="fixed top-4 right-4 p-4 bg-blue-500 text-white rounded-full z-[4] shadow-lg hover:bg-blue-600 transition-all"
        onClick={toggleMenu}
      >
        <CiBoxList size={28} />
      </button>

      {showMenu && (
        <div className="fixed inset-0 z-[5] bg-black bg-opacity-50 flex justify-end">
          <div className="bg-slate-300 p-8 rounded-l-lg shadow-lg w-80 h-full">
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
              onClick={toggleMenu}
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-4">Description</h2>
            <ul className="list-disc list-inside">
              {data.map((data) => (<li className={`text-lg  ${data.done ? 'line-through' : ''}`}>
                {data.desc}
              </li>
              ))}
            </ul>

          </div>
        </div>
      )}
    </>
  );
}


export default Menu;

// import React from 'react';
// import { CiBoxList } from "react-icons/ci";

// function Menu({ onShowModal }) {
//   return (
//     <>
//       <button
//         className="fixed top-4 right-4 p-4 bg-blue-500 text-white rounded-full z-[5] shadow-lg hover:bg-blue-600 transition-all"
//         onClick={onShowModal}
//       >
//         <CiBoxList size={28} />
//       </button>
//     </>
//   );
// }

// export default Menu;
