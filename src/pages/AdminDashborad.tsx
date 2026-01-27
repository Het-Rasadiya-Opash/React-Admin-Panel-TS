import { useEffect, useState } from "react";
import { getStudents, saveStudents, type Student } from "../utils/localStorage";
import StudentForm from "../components/StudentForm";
import StudentTable from "../components/StudentTable";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

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
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar active={section} onChange={setSection} />

      <div className="flex-1 flex flex-col">
        <Header />

        <main className="p-6 space-y-6">
          {section === "dashboard" && (
            <>
              <h2 className="text-2xl font-bold">Dashboard</h2>

              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded shadow">
                  Total Students
                  <p className="text-2xl font-bold">{students.length}</p>
                </div>
                <div className="bg-white p-4 rounded shadow">
                  Passed
                  <p className="text-2xl font-bold">
                    {students.filter((s) => s.result === "Pass").length}
                  </p>
                </div>
                <div className="bg-white p-4 rounded shadow">
                  Failed
                  <p className="text-2xl font-bold">
                    {students.filter((s) => s.result === "Fail").length}
                  </p>
                </div>
              </div>
            </>
          )}

          {section === "students" && (
            <>
              <h2 className="text-2xl font-bold">Students</h2>

              <input
                placeholder="Search by enrollment or marks"
                className="border p-2 w-full rounded"
                onChange={(e) => setSearch(e.target.value)}
              />

              <StudentTable
                students={filteredStudents}
                editable
                setStudents={updateStudents}
              />
            </>
          )}

          {section === "top-students" && (
            <>
              <h2 className="text-2xl font-bold">Top 5 Students</h2>
              <StudentTable students={topStudents} />
            </>
          )}
          
          {section === "add-new-student" && (
            <>
              <h2 className="text-2xl font-bold">Add New Student Data</h2>
              <StudentForm students={students} setStudents={updateStudents} />
            </>
          )}

          {section === "settings" && (
            <>
              <h2 className="text-2xl font-bold">Settings</h2>
              <p className="text-gray-600">Coming soon…</p>
            </>
          )}
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
