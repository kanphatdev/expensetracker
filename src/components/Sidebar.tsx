import {
  CalendarDaysIcon,
  HomeIcon,
  DocumentTextIcon,
  ChartBarIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";
import logo from "../assets/images/logo.png";

const Sidebar = () => {
  const menuItems = [
    { name: "Overview", icon: HomeIcon, active: true },
    { name: "Schedule", icon: CalendarDaysIcon, active: false },
    { name: "Legal", icon: DocumentTextIcon, active: false },
    { name: "Insights", icon: ChartBarIcon, active: false },
    { name: "Inbox", icon: EnvelopeIcon, active: false },
  ];

  return (
    <div
      className="
      fixed left-0 top-0 
      xl:w-[250px] w-[80px] 
      h-full 
      flex flex-col 
      py-10 px-5 
      bg-[#111827] 
      text-white 
      shadow-lg
      transition-all
      "
    >
      {/* Logo */}
      <div className="w-full flex items-center justify-center xl:justify-start">
        <img src={logo} className="xl:w-[55%] w-[60%]" />
      </div>

      {/* Menu */}
      <div className="w-full flex flex-col gap-2 mt-10">
        {menuItems.map((item) => (
          <div
            className={`
              w-full flex items-center 
              gap-4 px-3 py-3
              rounded-xl cursor-pointer
              transition-all duration-200
              ${
                item.active
                  ? "bg-indigo-600 text-white"
                  : "hover:bg-gray-700 text-gray-300"
              }
            `}
          >
            <item.icon className="w-6 h-6" />
            <span className="font-medium text-base xl:block hidden">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
