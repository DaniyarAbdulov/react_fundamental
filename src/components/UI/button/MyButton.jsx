import React from "react";

const MyButton = ({children, ...props}) => {
  return (
    <button 
    {...props} 
    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded-full text-sm">
    {children}
    </button>
  )
};

export default MyButton;
