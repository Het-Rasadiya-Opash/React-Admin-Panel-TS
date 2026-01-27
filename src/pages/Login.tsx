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
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-indigo-100 to-blue-100">
      <form
        onSubmit={handleLogin}
        className="w-full max-w-sm bg-white p-8 rounded-xl shadow-lg space-y-5"
      >
        <h2 className="text-2xl font-semibold text-center text-gray-800">
          Admin Login
        </h2>

        <div className="space-y-3">
          <input
            type="email"
            placeholder="Email address"
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {error && (
          <p className="text-sm text-red-500 text-center">
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
