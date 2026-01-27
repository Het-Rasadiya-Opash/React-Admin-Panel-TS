import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import { useAuth } from "./auth/AuthContext";
import { type JSX } from "react";
import AdminDashboard from "./pages/AdminDashborad";

const AdminRoute = ({ children }: { children: JSX.Element }) => {
  const { admin } = useAuth();

  if (!admin) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

const App = () => {
  // useEffect(() => {
  //   if (!localStorage.getItem("students")) {
  //     localStorage.setItem("students", JSON.stringify(demoStudents));
  //   }
  // }, []);

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />

      <Route path="/login" element={<Login />} />

      <Route
        path="/dashboard"
        element={
          <AdminRoute>
            <AdminDashboard />
          </AdminRoute>
        }
      />

      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};

export default App;
