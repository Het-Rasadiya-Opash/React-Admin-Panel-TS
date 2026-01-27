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
    <div className="overflow-x-auto bg-white rounded-xl border shadow-sm">
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
            <tr
              key={s.id}
              className="hover:bg-gray-50 transition"
            >
              <td className="px-4 py-3 font-medium text-gray-800">
                {s.name}
              </td>
              <td className="px-4 py-3 text-gray-600">
                {s.enrollmentNo}
              </td>
              <td className="px-4 py-3 font-semibold">
                {s.marks}
              </td>
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
  );
};

export default StudentTable;
