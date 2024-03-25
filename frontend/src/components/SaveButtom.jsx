/* eslint-disable react/prop-types */
import { Save } from "lucide-react";

const SaveButtom = ({ onClick }) => {
  return (
    <Save onClick={onClick} className="w-7 h-7 text-red-600 cursor-pointer" />
  );
};

export default SaveButtom;
