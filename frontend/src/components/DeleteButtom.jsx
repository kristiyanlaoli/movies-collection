// eslint-disable-next-line no-unused-vars
import React from "react";
import { Trash2 } from "lucide-react";

const DeleteButtom = ({ onClick }) => {
  return (
    <Trash2 onClick={onClick} className="w-7 h-7 text-red-600 cursor-pointer" />
  );
};

export default DeleteButtom;
