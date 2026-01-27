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
    {
      label: "Add New Student Data",
      key: "add-new-student",
    },
    { label: "Settings", key: "settings" },
  ];

  return (
    <aside className="w-60 bg-gray-900 text-white min-h-screen p-4">
      <h2 className="text-xl font-bold mb-6">Admin</h2>

      <nav className="space-y-2">
        {menu.map((item) => (
          <button
            key={item.key}
            onClick={() => onChange(item.key)}
            className={`w-full text-left p-2 rounded transition
              ${active === item.key ? "bg-blue-600" : "hover:bg-gray-800"}`}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
