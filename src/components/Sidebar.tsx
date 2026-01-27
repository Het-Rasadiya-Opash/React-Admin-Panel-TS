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
  const menu: { label: string; key: Section }[] = [
    { label: "Dashboard", key: "dashboard" },
    { label: "Students", key: "students" },
    { label: "Top Students", key: "top-students" },
    { label: "Add New Student", key: "add-new-student" },
    { label: "Settings", key: "settings" },
  ];

  return (
    <aside className="w-64 bg-gray-900 text-gray-200 min-h-screen flex flex-col px-4 py-6">
      <h2 className="text-2xl font-semibold text-white mb-8 tracking-tight">
        Admin Panel
      </h2>

      <nav className="flex flex-col gap-1">
        {menu.map((item) => (
          <button
            key={item.key}
            onClick={() => onChange(item.key)}
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
  );
};

export default Sidebar;
