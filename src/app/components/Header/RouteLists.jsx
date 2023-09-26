import Link from "next/link";
import React from "react";

const RouteLists = ({ routes }) => {
  return (
    <div className="flex h-12 relative group">
      {routes &&
        routes.map((route, i) => (
          <Link
            href={route.url}
            key={i}
            className="flex px-1 md:px-2 lg:px-3 gap-1 dark:hover:bg-neutral-600 hover:bg-green-600 transition-all h-12 items-center justify-center"
          >
            <div>{route.icon}</div>
            <div className="opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all -translate-x-10">
              {route.name}
            </div>
          </Link>
        ))}
    </div>
  );
};

export default RouteLists;
