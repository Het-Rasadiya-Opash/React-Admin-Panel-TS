import { useAuth } from "../auth/AuthContext";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { admin, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header className="h-16 bg-white border-b flex items-center justify-between px-6">
      <h1 className="text-xl font-semibold text-gray-800 tracking-tight">
        Admin Panel
      </h1>

      <div className="flex items-center gap-4">
        <div className="hidden sm:flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-semibold">
            {admin?.email?.charAt(0).toUpperCase()}
          </div>
          <span className="text-sm text-gray-600">
            {admin?.email}
          </span>
        </div>

        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-1.5 rounded-lg text-sm font-medium hover:bg-red-600 transition"
        >
          Logout
        </button>
      </div>
    </header>
  );
};

export default Header;
