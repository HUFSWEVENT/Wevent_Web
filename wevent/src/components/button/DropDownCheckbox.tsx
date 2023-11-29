import React, { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-right: 25px;
`;

interface DropDownCheckboxProps {
  updatePosts: (sortedPosts: any[]) => void;
}

const DropDownCheckbox = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Wrapper className="relative inline-block text-left">
      <button
        id="dropdownCheckboxButton"
        data-dropdown-toggle="dropdownDefaultCheckbox"
        className="text-gray-500 bg-white font-extrabold rounded-full text-1g px-5 py-2.5 w-42 text-center inline-flex items-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-blue-800 border border-gray-500 relative z-10"
        type="button"
        onClick={() => setIsOpen(!isOpen)}
      >
        협찬 종류 선택
        <svg
          className="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      {isOpen && (
        <div
          id="dropdownDefaultCheckbox"
          className="absolute top-full left-0 z-20 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600 w-42"
        >
          <ul
            className="p-3 space-y-3 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownCheckboxButton"
          >
            <li>
              <div className="flex items-center">
                <input
                  id="checkbox-item-1"
                  type="checkbox"
                  value="현금"
                  className="w-3 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <label
                  htmlFor="checkbox-item-1"
                  className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  현금
                </label>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <input
                  id="checkbox-item-3"
                  type="checkbox"
                  value="다과"
                  className="w-3 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <label
                  htmlFor="checkbox-item-3"
                  className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  다과
                </label>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <input
                  id="checkbox-item-3"
                  type="checkbox"
                  value="의자/책상"
                  className="w-3 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <label
                  htmlFor="checkbox-item-3"
                  className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  의자/책상
                </label>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <input
                  id="checkbox-item-4"
                  type="checkbox"
                  value="음료"
                  className="w-3 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <label
                  htmlFor="checkbox-item-4"
                  className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  음료
                </label>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <input
                  id="checkbox-item-5"
                  type="checkbox"
                  value="네트워크 장비"
                  className="w-3 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <label
                  htmlFor="checkbox-item-5"
                  className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  네트워크 장비
                </label>
              </div>
            </li>
          </ul>
        </div>
      )}
    </Wrapper>
  );
};

export default DropDownCheckbox;
