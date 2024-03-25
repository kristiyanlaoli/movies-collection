/* eslint-disable no-unused-vars */
import React from "react";
import { Plus } from "lucide-react";

// eslint-disable-next-line react/prop-types
const AddButton = ({ onClick }) => {
  return (
    <Plus
      onClick={onClick}
      className="fixed bottom-5 right-5 w-7 h-7 text-red-600 cursor-pointer border-2 rounded-full border-red-500"
    />
  );
};

export default AddButton;
