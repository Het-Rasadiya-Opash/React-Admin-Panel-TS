import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    const admin = JSON.parse(localStorage.getItem("admin") || "{}");

    if (admin.email === email && admin.password === password) {
      login({ email: admin.email, role: "admin" });
      navigate("/dashboard");
    } else {
      setError("Invalid admin credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-indigo-100 to-blue-100 px-4">
      <form
        onSubmit={handleLogin}
        className="w-full max-w-md bg-white p-6 sm:p-8 rounded-2xl shadow-lg space-y-6"
      >
        <h2 className="text-xl sm:text-2xl font-semibold text-center text-gray-800">
          Admin Login
        </h2>

        <div className="space-y-4">
          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-600">Email Address</label>
            <input
              type="email"
              value={email}
              className={`w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 
    ${error ? "border-red-500 focus:ring-red-500" : "focus:ring-indigo-500"}`}
              onChange={(e) => {
                setEmail(e.target.value);
                setError("");
              }}
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-600">Password</label>
            <input
              type="password"
              value={password}
              className={`w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 
    ${error ? "border-red-500 focus:ring-red-500" : "focus:ring-indigo-500"}`}
              onChange={(e) => {
                setPassword(e.target.value);
                setError("");
              }}
            />
          </div>
        </div>

        {error && (
          <p className="text-sm text-red-500 text-center font-medium">
            {error}
          </p>
        )}

        <button className="w-full bg-indigo-600 text-white py-2.5 rounded-lg font-medium hover:bg-indigo-700 transition">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
