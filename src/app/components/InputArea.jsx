"use client";
import { useEffect, useState } from "react";
import { MdAddTask } from "react-icons/md";
import sorter from "./sorter";
const InputArea = ({ todolist, setTodoList, autoID, setAutoID, sortOrder }) => {
  const [inputText, setInputText] = useState("");

  const handleSubmitBtn = (e) => {
    if (inputText !== "" && (e.key === "Enter" || e.key === undefined)) {
      var tempList = [
        ...todolist,
        { id: autoID, task: inputText, complete: false },
      ];

      console.log("makeing with: ", sortOrder);

      setTodoList(sorter(tempList, sortOrder));

      setAutoID(autoID + 1);
      setInputText("");
    }
  };

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <div className="flex items-center justify-center border border-gray-300 dark:bg-neutral-900 dark:border-gray-800 rounded-full w-full h-full">
      <input
        placeholder="type here ..."
        className="flex h-full w-full rounded-full px-4 outline-none dark:bg-neutral-900"
        value={inputText}
        onChange={handleInputChange}
        required
        onKeyDown={handleSubmitBtn}
      />
      <button
        className={`flex items-center justify-center p-1 px-2 ${
          inputText === "" ? "text-gray-500" : "text-green-500"
        }`}
        onClick={handleSubmitBtn}
      >
        <MdAddTask />
      </button>
    </div>
  );
};

export default InputArea;
