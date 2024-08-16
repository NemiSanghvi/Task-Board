// import React from 'react'
// import { CiBoxList } from "react-icons/ci";
// import { useState } from 'react';


// function Menu() {

//   const [showMenu, setShowMenu] = useState(false);
//   console.log(showMenu)


//   return (
//     <>
//       <button
//         className="fixed top-4 right-4 p-4 bg-blue-500 text-white rounded-full z-[4] shadow-lg hover:bg-blue-600 transition-all"
//         onClick={() => setShowMenu(!showMenu)}
//       >
//         <CiBoxList size={28} />
//       </button>


//     </>
//   )
// }

// export default Menu
import React from 'react';
import { CiBoxList } from "react-icons/ci";
import { useState } from 'react';

function Menu() {
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
        <div className="fixed inset-0 z-[5] flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg relative w-full max-w-md">
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
              onClick={toggleMenu}
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-4">Descriptions</h2>
            <p>

            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default Menu;

