import React, { ReactNode, isValidElement } from "react";

export default function Step({
  id,
  children,
}: {
  id: string;
  children?: ReactNode;
}) {
  // Determine if we should add the my-5 class
  const shouldAddMargin = !isValidElement(children) || children.type === undefined;
  
  return (
    <div
      className={`flex items-center gap-3 ${shouldAddMargin && "my-5"}`}
    >
      <div className="flex items-center justify-center w-10 h-10 p-5 font-bold text-black bg-gray-300 rounded-full dark:border-gray-800 g-gray-300 ring dark:bg-darkSecondary dark:text-white ">
        {id}
      </div>
      <div className="flex-grow-0 text-lg font-semibold tracking-tight text-black dark:text-white w-fit">
        {children}
      </div>
    </div>
  );
}
