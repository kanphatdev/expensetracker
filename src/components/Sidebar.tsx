import { CalendarDaysIcon, HomeIcon, DocumentTextIcon, ChartBarIcon, EnvelopeIcon } from "@heroicons/react/24/outline";
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
    <aside className="fixed left-0 top-0 xl:w-[250px] w-[80px] h-full flex flex-col py-8 px-4 border-r border-gray-200 bg-white shadow-sm">
      {/* Logo */}
      <div className="w-full flex items-center justify-center xl:justify-start mb-10">
        <img src={logo} alt="Logo" className="xl:w-[140px] w-12" />
      </div>

      {/* Menu */}
      <nav className="flex flex-col gap-2 w-full">
        {menuItems.map((item, idx) => (
          <div
            key={idx}
            className={`flex items-center xl:justify-start justify-center gap-3 px-3 py-3 rounded-xl cursor-pointer transition-all
              ${item.active ? "bg-blue-100 text-blue-600" : "text-gray-600 hover:bg-gray-100"}
            `}
          >
            <item.icon className={`w-6 h-6 ${item.active ? "text-blue-600" : "text-gray-500"}`} />
            <span
              className={`text-sm font-medium hidden xl:block ${
                item.active ? "text-blue-600" : "text-gray-700"
              }`}
            >
              {item.name}
            </span>
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
