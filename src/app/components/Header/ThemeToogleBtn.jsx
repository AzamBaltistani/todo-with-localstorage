"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { BsFillMoonStarsFill, BsSun } from "react-icons/bs";
import { FiMonitor } from "react-icons/fi";

const ThemeToogleBtn = () => {
  const { resolvedTheme, systemTheme, setTheme } = useTheme("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex items-center justify-center gap-1 h-12 ">
      <button
        className="text-yellow-300 font-bold transition-all bg-green-700 dark:bg-black hover:text-yellow-600  p-1 hover:rotate-90 rounded-full hover:scale-110"
        onClick={() => setTheme("light")}
      >
        <BsSun />
      </button>
      <button
        className="text-black dark:text-gray-300 transition-all bg-green-700 dark:bg-black dark:bg-blac  p-1 hover:-rotate-90 rounded-full hover:scale-110"
        onClick={() => setTheme("dark")}
      >
        <BsFillMoonStarsFill />
      </button>
      <button
        onClick={() => setTheme(systemTheme)}
        className="text-black dark:text-gray-300 transition-all bg-green-700 dark:bg-black dark:bg-blac  p-1 rounded-full hover:scale-110"
      >
        <FiMonitor />
      </button>
    </div>
  );
};

export default ThemeToogleBtn;
