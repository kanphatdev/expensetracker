import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <div className="w-full min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* MAIN WRAPPER */}
      <div className="flex-1 flex justify-center xl:ml-[250px] ml-[80px]">
        
        {/* CONTENT PANEL */}
        <div
          className="
            w-full
            max-w-screen-2xl
            bg-white
            min-h-screen
            xl:rounded-2xl
            shadow-sm
            border border-gray-200

            p-4
            sm:p-6
            xl:p-10
            2xl:p-12
          "
        >
          <Dashboard />
        </div>
      </div>
    </div>
  );
};

export default App;
