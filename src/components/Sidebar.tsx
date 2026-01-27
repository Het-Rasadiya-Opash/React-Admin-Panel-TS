import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";



type Section =
  | "dashboard"
  | "students"
  | "top-students"
  | "settings"
  | "add-new-student";

const Sidebar = ({
  active,
  onChange,
}: {
  active: Section;
  onChange: (section: Section) => void;
}) => {
  const [open, setOpen] = useState(false);

  const menu: { label: string; key: Section }[] = [
    { label: "Dashboard", key: "dashboard" },
    { label: "Students", key: "students" },
    { label: "Top Students", key: "top-students" },
    { label: "Add New Student", key: "add-new-student" },
    { label: "Settings", key: "settings" },
  ];

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="md:hidden fixed top-4 left-4 z-50 bg-indigo-600 text-white p-2 rounded-lg"
      >
        <Bars3Icon className="h-6 w-6" />
      </button>

      <div
        className={`fixed inset-0 bg-black/40 z-40 md:hidden ${
          open ? "block" : "hidden"
        }`}
        onClick={() => setOpen(false)}
      />

      <aside
        className={`fixed md:static z-50 top-0 left-0 w-64 bg-gray-900 text-gray-200 min-h-screen flex flex-col px-4 py-6 transform transition-transform
        ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
      >
        <h2 className="text-2xl font-semibold text-white mb-8 tracking-tight">
          Admin Panel
        </h2>

        <nav className="flex flex-col gap-1">
          {menu.map((item) => (
            <button
              key={item.key}
              onClick={() => {
                onChange(item.key);
                setOpen(false);
              }}
              className={`flex items-center px-4 py-2.5 rounded-lg text-sm font-medium transition
                ${
                  active === item.key
                    ? "bg-indigo-600 text-white shadow"
                    : "hover:bg-gray-800 hover:text-white"
                }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
