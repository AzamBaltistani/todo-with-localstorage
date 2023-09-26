"use client";
import { useEffect, useState } from "react";
import DisplayArea from "./components/DisplayArea";
import InputArea from "./components/InputArea";
import SortingArea from "./components/SortingArea";
import { useRouter, useSearchParams } from "next/navigation";

export default function Home() {
  const [todolist, setTodoList] = useState([]);
  const [autoID, setAutoID] = useState(1);
  const [report, setReport] = useState("");
  const [sort, setSort] = useState(11);

  useEffect(() => {
    const todo = window.localStorage.getItem("TODO_LIST");
    if (todo) {
      // console.log("found", JSON.parse(todo));
      setTodoList(JSON.parse(todo));
    }
  }, []);

  useEffect(() => {
    const sortOrder = window.localStorage.getItem("SORT_ORDER");
    // console.log("FOUND sort", sortOrder);
    if (sortOrder !== null) {
      window.localStorage.setItem("SORT_ORDER", sortOrder);
      setSort(Number(sortOrder));
    }
  }, []);

  useEffect(() => {
    // console.log("todo updated", todolist);
    if (todolist.length >= 1) {
      // console.log("Has value: ", todolist);
      window.localStorage.setItem("TODO_LIST", JSON.stringify(todolist));

      // find last element and set its id+1 as current autoID

      // sorted so we get the last the element
      var tempList = [...todolist];
      tempList.sort((a, b) => {
        let idA = Number(a.id);
        let idB = Number(b.id);

        return idA - idB;
      });

      let lastElement = tempList[tempList.length - 1];
      setAutoID(lastElement.id + 1);
    } else {
      window.localStorage.removeItem("TODO_LIST");
      setAutoID(1);
    }
  }, [todolist]);

  return (
    <main className="flex flex-col dark:bg-black bg-gray-50 min-h-screen h-auto">
      <div className="h-10 transition-all w-full md:w-4/5 lg:w-3/5 xl:w-2/5 mx-auto mt-6">
        <InputArea
          todolist={todolist}
          setTodoList={setTodoList}
          autoID={autoID}
          setAutoID={setAutoID}
          sortOrder={sort}
        />
      </div>
      <div className="h-20 md:h-8 transition-all w-full md:w-4/5 lg:w-3/5 xl:w-2/5 mx-auto mt-6">
        <SortingArea
          todolist={todolist}
          setTodoList={setTodoList}
          autoID={autoID}
          setAutoID={setAutoID}
          sort={sort}
          setSort={setSort}
        />
      </div>
      <div className="transition-all w-full md:w-4/5 lg:w-3/5 xl:w-2/5 mx-auto mt-1">
        <DisplayArea
          todolist={todolist}
          setTodoList={setTodoList}
          sortOrder={sort}
        />
      </div>
      <div className="h-10 w-full flex mt-10 flex-col transition-all items-center justify-center md:w-4/5 lg:w-3/5 xl:w-2/5 mx-auto">
        <h1 className="text-sm">Locally Stored </h1>
        <p className="text-green-700">
          Data will not delete on close or refresh
        </p>
      </div>
    </main>
  );
}
