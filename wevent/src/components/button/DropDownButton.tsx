import React, { useState } from 'react';

interface DropDownButtonProps {
  updatePosts: (sortedPosts: any[]) => void;
}

const DropDownButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('정렬 방식');

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        type="button"
        className="text-black bg-white focus:ring-0 focus:outline-none font-extrabold rounded-lg text-lg px-5 py-2.5 text-center inline-flex items-center dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-blue-800"
        onClick={handleMenuClick}
        data-dropdown-toggle="dropdown"
        id="dropdownDefaultButton"
      >
        {selectedOption}
        <svg
          className="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-max bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700">
          <ul
            aria-labelledby="dropdownDefaultButton"
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
          >
            <li>
              <button
                type="button"
                onClick={() => handleOptionClick('인기순')}
                className="hover:bg-gray-100 block w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white focus:outline-none focus-visible:ring focus-visible:border-blue-300"
              >
                인기순
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => handleOptionClick('최신순')}
                className="hover:bg-gray-100 block w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white focus:outline-none focus-visible:ring focus-visible:border-blue-300"
              >
                최신순
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => handleOptionClick('모집 마감일순')}
                className="hover:bg-gray-100 block w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white focus:outline-none focus-visible:ring focus-visible:border-blue-300"
              >
                모집 마감일순
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => handleOptionClick('추천순')}
                className="hover:bg-gray-100 block w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white focus:outline-none focus-visible:ring focus-visible:border-blue-300"
              >
                추천순
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropDownButton;
