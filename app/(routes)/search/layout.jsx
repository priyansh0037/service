import React from "react";
import CategorySideBar from "./_components/CategorySideBar"

const layout = ({ children }) => {
  return (
    <div>
      <div className="grid grid-cols-0 md:grid-cols-4 mt-8 ">
        <div className="hidden md:block">
    <CategorySideBar/>
        </div>
        <div className="md:col-span-3 col-span-0">{children}</div>
      </div>
    </div>
  );
};

export default layout;
