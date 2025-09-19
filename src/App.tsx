import React from "react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";

const App = () => {
  return (
    <div className="w-full xl:h-screen flex items-center relative xl:p-7 py-0 px-2">
      <Sidebar />
      <div
        className="
    h-screen
    xl:w-[calc(100%-250px)] 
    w-[calc(100%-80px)]
    bg-white 
    xl:ml-[250px] 
    ml-[80px] 
    rounded-none 
    xl:rounded-2xl 
    flex 
    flex-col 
    xl:flex-row 
    items-start 
    border 
    border-gray-200 
    shadow-sm
    p-6
  "
      >
        {/* Content goes here */}
        <Dashboard/>
        
      </div>
    </div>
  );
};

export default App;
