"use client";
import React, { useEffect, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import sorter from "./sorter";

const DisplayArea = ({ todolist, setTodoList, sortOrder }) => {
  const handleCheckedBtn = (e) => {
    // console.log("chekced index: ", e);
    var tempList = [];

    for (const t of todolist) {
      if (Number(e) === t.id) {
        // console.log("found ", t);
        tempList = [
          ...tempList,
          { id: t.id, task: t.task, complete: !t.complete },
        ];
      } else {
        tempList = [...tempList, t];
      }
    }

    setTodoList(sorter(tempList, sortOrder));
  };
  const handleDeleteBtn = (e) => {
    // console.log("chekced index: ", e);

    if (todolist.length <= 1) {
      setTodoList([]);
      return;
    }

    var tempList = [...todolist];
    setTodoList([]);

    for (const t of tempList) {
      if (Number(e) !== t.id) {
        setTodoList((todolist) => [...todolist, t]);
      }
    }
  };

  const transitionClass = "transition-all duration-500";

  return (
    <>
      {todolist &&
        todolist.map((li, ind) => (
          <div
            key={ind}
            className={`border  dark:border-gray-800 ${transitionClass} border-gray-300 dark:bg-neutral-950 hover:dark:bg-neutral-900  p-2 flex items-center justify-between gap-2 my-1 rounded`}
          >
            <input
              type="checkbox"
              className={`h-5 w-5 p-2 checked:opacity-50 ${transitionClass}`}
              checked={li.complete}
              onChange={() => handleCheckedBtn(li.id)}
            />
            <p
              className={`h-5 w-5 p-1 border rounded-full border-gray-500 flex items-center justify-center text-xs text-center text-gray-500 ${transitionClass}`}
            >
              {li.id}
            </p>

            <div
              className={`
            ${li.complete ? "line-through text-gray-500" : ""}
            flex justify-self-start items-center w-full ${transitionClass}`}
            >
              {li.task}
            </div>
            <button onClick={() => handleDeleteBtn(li.id)}>
              <AiOutlineDelete />
            </button>
          </div>
        ))}
    </>
  );
};

export default DisplayArea;
