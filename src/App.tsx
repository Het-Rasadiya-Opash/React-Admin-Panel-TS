import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import { useAuth } from "./auth/AuthContext";
import {  type JSX } from "react";
import AdminDashboard from "./pages/AdminDashborad";
// import type { Student } from "./utils/localStorage";

// const demoStudents: Student[] = [
//   {
//     id: "1",
//     name: "Aarav Patel",
//     enrollmentNo: "EN001",
//     std: "10",
//     subject: "Maths",
//     marks: 92,
//     result: "Pass",
//     attendanceAvg: 95,
//   },
//   {
//     id: "2",
//     name: "Diya Shah",
//     enrollmentNo: "EN002",
//     std: "10",
//     subject: "Science",
//     marks: 88,
//     result: "Pass",
//     attendanceAvg: 90,
//   },
//   {
//     id: "3",
//     name: "Rohan Mehta",
//     enrollmentNo: "EN003",
//     std: "9",
//     subject: "English",
//     marks: 76,
//     result: "Pass",
//     attendanceAvg: 85,
//   },
//   {
//     id: "4",
//     name: "Kavya Joshi",
//     enrollmentNo: "EN004",
//     std: "9",
//     subject: "Maths",
//     marks: 81,
//     result: "Pass",
//     attendanceAvg: 88,
//   },
//   {
//     id: "5",
//     name: "Arjun Verma",
//     enrollmentNo: "EN005",
//     std: "8",
//     subject: "Science",
//     marks: 69,
//     result: "Pass",
//     attendanceAvg: 80,
//   },
//   {
//     id: "6",
//     name: "Neha Singh",
//     enrollmentNo: "EN006",
//     std: "8",
//     subject: "English",
//     marks: 55,
//     result: "Pass",
//     attendanceAvg: 72,
//   },
//   {
//     id: "7",
//     name: "Rahul Kumar",
//     enrollmentNo: "EN007",
//     std: "10",
//     subject: "Maths",
//     marks: 47,
//     result: "Fail",
//     attendanceAvg: 60,
//   },
//   {
//     id: "8",
//     name: "Sneha Iyer",
//     enrollmentNo: "EN008",
//     std: "9",
//     subject: "Science",
//     marks: 91,
//     result: "Pass",
//     attendanceAvg: 94,
//   },
//   {
//     id: "9",
//     name: "Vikram Rao",
//     enrollmentNo: "EN009",
//     std: "8",
//     subject: "Maths",
//     marks: 73,
//     result: "Pass",
//     attendanceAvg: 82,
//   },
//   {
//     id: "10",
//     name: "Pooja Nair",
//     enrollmentNo: "EN010",
//     std: "10",
//     subject: "English",
//     marks: 85,
//     result: "Pass",
//     attendanceAvg: 89,
//   },
// ];

// localStorage.setItem("students", JSON.stringify(demoStudents));

const AdminRoute = ({ children }: { children: JSX.Element }) => {
  const { admin } = useAuth();

  if (!admin) {
    return <Navigate to="/login"  />;
  }

  return children;
};

const App = () => {
 
//  useEffect(() => {
//     if (!localStorage.getItem("students")) {
//       localStorage.setItem("students", JSON.stringify(demoStudents));
//     }
//   }, []);
  return (
    <Routes>

      <Route path="/login" element={<Login />} />

      <Route
        path="/dashboard"
        element={
          <AdminRoute>
            <AdminDashboard />
          </AdminRoute>
        }
      />

      <Route path="*" element={<Navigate to="/login"  />} />
    </Routes>
  );
};

export default App;
