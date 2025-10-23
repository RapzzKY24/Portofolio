import React from "react";

const BoxText = ({ children }) => {
  return (
    <div>
      <h2 className="border-2 px-4 w-fit rounded-lg bg-gray-100 py-1 text-indigo-400 font-bold">
        {children}
      </h2>
    </div>
  );
};

export default BoxText;
