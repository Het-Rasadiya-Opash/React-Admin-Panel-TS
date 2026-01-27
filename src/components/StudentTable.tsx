import { type Student } from "../utils/localStorage";

const StudentTable = ({
  students,
  editable,
  setStudents,
}: {
  students: Student[];
  editable?: boolean;
  setStudents?: (s: Student[]) => void;
}) => {
  const deleteStudent = (id: string) => {
    if (!setStudents) return;
    setStudents(students.filter((s) => s.id !== id));
  };

  return (
    <div className="bg-white rounded-xl border shadow-sm w-full overflow-hidden">
      <div className="hidden md:block overflow-x-auto">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-100 text-gray-600 uppercase text-xs">
            <tr>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Enrollment No</th>
              <th className="px-4 py-3">Marks</th>
              <th className="px-4 py-3">Result</th>
              {editable && <th className="px-4 py-3 text-right">Action</th>}
            </tr>
          </thead>

          <tbody className="divide-y">
            {students.map((s) => (
              <tr key={s.id} className="hover:bg-gray-50 transition">
                <td className="px-4 py-3 font-medium text-gray-800">
                  {s.name}
                </td>
                <td className="px-4 py-3 text-gray-600">
                  {s.enrollmentNo}
                </td>
                <td className="px-4 py-3 font-semibold">{s.marks}</td>
                <td className="px-4 py-3">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      s.result === "Pass"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {s.result}
                  </span>
                </td>
                {editable && (
                  <td className="px-4 py-3 text-right">
                    <button
                      onClick={() => deleteStudent(s.id)}
                      className="text-red-600 hover:text-red-800 font-medium"
                    >
                      Delete
                    </button>
                  </td>
                )}
              </tr>
            ))}

            {students.length === 0 && (
              <tr>
                <td
                  colSpan={editable ? 5 : 4}
                  className="px-4 py-6 text-center text-gray-500"
                >
                  No students found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="md:hidden divide-y">
        {students.map((s) => (
          <div key={s.id} className="p-4 space-y-2">
            <div className="flex justify-between">
              <span className="text-sm text-gray-500">Name</span>
              <span className="font-medium text-gray-800">{s.name}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-sm text-gray-500">Enrollment</span>
              <span className="text-gray-700">{s.enrollmentNo}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-sm text-gray-500">Marks</span>
              <span className="font-semibold">{s.marks}</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">Result</span>
              <span
                className={`px-2 py-1 rounded-full text-xs font-medium ${
                  s.result === "Pass"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {s.result}
              </span>
            </div>

            {editable && (
              <div className="pt-2 text-right">
                <button
                  onClick={() => deleteStudent(s.id)}
                  className="text-sm text-red-600 font-medium"
                >
                  Delete
                </button>
              </div>
            )}
          </div>
        ))}

        {students.length === 0 && (
          <div className="p-6 text-center text-gray-500">
            No students found
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentTable;
