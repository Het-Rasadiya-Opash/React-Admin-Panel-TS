import { useAuth } from "../auth/AuthContext";
import { useNavigate } from "react-router-dom";
import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/outline";

const Header = () => {
  const { admin, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header className="sticky top-0 z-40 h-16 bg-white border-b flex items-center justify-between px-4 sm:px-6">
      <h1 className="hidden sm:block text-xl font-semibold text-gray-800 tracking-tight">
        Admin Panel
      </h1>

      <div className="flex items-center gap-3 ml-auto">
        <div className="h-9 w-9 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-semibold cursor-pointer">
          {admin?.email?.charAt(0).toUpperCase()}
        </div>

        <span className="hidden md:block text-sm text-gray-600">
          {admin?.email}
        </span>

        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-3 py-2 rounded-lg hover:bg-red-600 transition flex items-center gap-2"
        >
          <ArrowRightOnRectangleIcon className="h-5 w-5" />
          <span className="hidden sm:inline text-sm font-medium">Logout</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
