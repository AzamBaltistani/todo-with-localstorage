"use client";
import React, { useEffect, useState } from "react";
import sorter from "./sorter";
import { AiFillDelete } from "react-icons/ai";
import { GrPowerCycle } from "react-icons/gr";
import { FaRegSquareCheck, FaSquareCheck } from "react-icons/fa6";

const ToolTip = ({ message }) => {
  return (
    <div className="translate-y-12 group-hover:block hidden transition-all   group-hover:opacity-100 opacity-0 absolute w-16">
      <p className="bg-gray-300 text-xs p-1 text-center font-light dark:bg-gray-800 rounded">
        {message}
      </p>
    </div>
  );
};

const ButtonBox = ({ handleClick, message, icon, disabled }) => {
  return (
    <div className="dark:bg-neutral-900 relative group flex flex-col items-center justify-center hover:dark:bg-neutral-800 hover:bg-gray-300 bg-gray-200   px-2 outline-none border rounded dark:border-gray-800  border-slate-300 h-8">
      <button onClick={handleClick}>{icon}</button>
      <ToolTip message={message} />
    </div>
  );
};

const SortingArea = ({ todolist, setTodoList, sort, setSort }) => {
  const [mounted, setMounted] = useState(false);
  const [tempSort1, setTempSort1] = useState(1);
  const [tempSort2, setTempSort2] = useState(1);

  useEffect(() => {
    setTempSort1(Number(String(sort)[0]));
    setTempSort2(Number(String(sort)[1]));
    // console.log("hi temp2 : ", String(sort)[1]);
  }, [sort]);

  const handleSortButton = (e, number) => {
    // console.log("we have event: ", e.target.value);
    // console.log("we number: ", number);
    // console.log("s1; ", tempSort1);
    // console.log("s2; ", tempSort2);

    var newSortOrder = sort;

    if (number === 1) {
      newSortOrder = Number(String(e.target.value) + String(tempSort2));
    }
    if (number === 2) {
      newSortOrder = Number(String(tempSort1) + String(e.target.value));
    }

    console.log("new sor: ", newSortOrder);

    window.localStorage.setItem("SORT_ORDER", newSortOrder);
    setSort(Number(newSortOrder));

    var tempList = [...todolist];
    setTodoList(sorter(tempList, Number(newSortOrder)));
  };

  const deleteAll = () => {
    if (todolist.length !== 0) {
      const res = confirm("Are you sure ! ");
      if (res) setTodoList([]);
    }
  };
  const markAll = () => {
    var tempList = [];
    for (const li of todolist) {
      tempList = [...tempList, { id: li.id, task: li.task, complete: true }];
    }

    setTodoList(sorter(tempList, sort));
  };
  const UnmarkAll = () => {
    var tempList = [];
    for (const li of todolist) {
      tempList = [...tempList, { id: li.id, task: li.task, complete: false }];
    }

    setTodoList(sorter(tempList, sort));
  };
  const InverseMark = () => {
    var tempList = [];
    for (const li of todolist) {
      tempList = [
        ...tempList,
        { id: li.id, task: li.task, complete: !li.complete },
      ];
    }

    setTodoList(sorter(tempList, sort));
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex flex-col md:flex-row items-center justify-between border border-gray-300 dark:bg-neutral-900 dark:border-gray-800 rounded w-full h-full">
      <div className="flex gap-2">
        <select
          className="dark:bg-neutral-900 text-xs md:text-lg  bg-gray-200 hover:dark:bg-neutral-800 hover:bg-gray-300 hover:cursor-pointer  px-1 outline-none border rounded dark:border-gray-800  border-slate-300 h-8"
          onChange={(e) => handleSortButton(e, 1)}
          defaultValue={tempSort1}
        >
          <option value={1}>Sort Input Order </option>
          <option value={2}>Sort Last First</option>

          {/* <option value={3}>Completes First</option> */}
        </select>
        <select
          className="dark:bg-neutral-900 text-xs md:text-lg  bg-gray-200 hover:dark:bg-neutral-800 hover:bg-gray-300 hover:cursor-pointer  px-1 outline-none border rounded dark:border-gray-800  border-slate-300 h-8"
          onChange={(e) => handleSortButton(e, 2)}
          defaultValue={tempSort2}
        >
          <option value={1}>Marks Default </option>
          <option value={2}>Marks End</option>
          <option value={3}>Marks Start</option>

          {/* <option value={3}>Completes First</option> */}
        </select>
      </div>
      <div className="flex gap-1">
        <ButtonBox
          handleClick={InverseMark}
          message={"Inverse Mark"}
          icon={<GrPowerCycle />}
        />
        <ButtonBox
          handleClick={UnmarkAll}
          message={"UnMark  All"}
          icon={<FaRegSquareCheck />}
        />
        <ButtonBox
          handleClick={markAll}
          message={"Mark  All"}
          icon={<FaSquareCheck />}
        />
        <ButtonBox
          handleClick={deleteAll}
          message={"Delete  All"}
          icon={<AiFillDelete />}
        />
      </div>
    </div>
  );
};

export default SortingArea;
