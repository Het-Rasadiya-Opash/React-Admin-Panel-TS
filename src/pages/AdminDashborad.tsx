import { useEffect, useState } from "react";
import { getStudents, saveStudents, type Student } from "../utils/localStorage";
import StudentForm from "../components/StudentForm";
import StudentTable from "../components/StudentTable";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
// import DashboardCharts from "../components/DashboardCharts";

type Section =
  | "dashboard"
  | "students"
  | "top-students"
  | "settings"
  | "add-new-student";

const AdminDashboard = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [search, setSearch] = useState("");
  const [section, setSection] = useState<Section>("dashboard");

  useEffect(() => {
    setStudents(getStudents());
  }, []);

  const updateStudents = (data: Student[]) => {
    setStudents(data);
    saveStudents(data);
  };

  const filteredStudents = students.filter(
    (s) =>
      s.enrollmentNo.toLowerCase().includes(search.toLowerCase()) ||
      s.marks.toString().includes(search),
  );

  const topStudents = [...students]
    .sort((a, b) => b.marks - a.marks)
    .slice(0, 5);

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      <Sidebar active={section} onChange={setSection} />

      <div className="flex-1 flex flex-col">
        <Header />

        <main className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
          {section === "dashboard" && (
            <>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-800">
                Dashboard Overview
              </h2>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm border">
                  <p className="text-sm text-gray-500">Total Students</p>
                  <p className="text-2xl sm:text-3xl font-bold text-indigo-600">
                    {students.length}
                  </p>
                </div>

                <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm border">
                  <p className="text-sm text-gray-500">Passed</p>
                  <p className="text-2xl sm:text-3xl font-bold text-green-600">
                    {students.filter((s) => s.result === "Pass").length}
                  </p>
                </div>

                <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm border">
                  <p className="text-sm text-gray-500">Failed</p>
                  <p className="text-2xl sm:text-3xl font-bold text-red-600">
                    {students.filter((s) => s.result === "Fail").length}
                  </p>
                </div>
              </div>
              {/* <DashboardCharts
                total={students.length}
                pass={students.filter((s) => s.result === "Pass").length}
                fail={students.filter((s) => s.result === "Fail").length}
              /> */}
            </>
          )}

          {section === "students" && (
            <div className="bg-white rounded-xl shadow-sm border p-4 sm:p-6 space-y-4">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
                Students List
              </h2>

              <input
                placeholder="Search by enrollment no or marks"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                onChange={(e) => setSearch(e.target.value)}
              />

              <StudentTable
                students={filteredStudents}
                editable
                setStudents={updateStudents}
              />
            </div>
          )}

          {section === "top-students" && (
            <div className="bg-white rounded-xl shadow-sm border p-4 sm:p-6 space-y-4">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
                Top 5 Students
              </h2>

              <StudentTable students={topStudents} />
            </div>
          )}

          {section === "add-new-student" && (
            <div className="bg-white rounded-xl shadow-sm border p-4 sm:p-6 space-y-4">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
                Add New Student
              </h2>

              <StudentForm students={students} setStudents={updateStudents} />
            </div>
          )}

          {section === "settings" && (
            <div className="bg-white rounded-xl shadow-sm border p-4 sm:p-6">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
                Settings
              </h2>
              <p className="text-gray-500 mt-2">Coming soon…</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
