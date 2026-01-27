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
    <table className="w-full border">
      <thead>
        <tr className="bg-gray-200">
          <th>Name</th>
          <th>EN No</th>
          <th>Marks</th>
        </tr>
      </thead>
      <tbody>
        {students.map((s) => (
          <tr key={s.id} className="border">
            <td>{s.name}</td>
            <td>{s.enrollmentNo}</td>
            <td>{s.marks}</td>
            {editable && (
              <td>
                <button
                  onClick={() => deleteStudent(s.id)}
                  className="text-red-600"
                >
                  Delete
                </button>
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default StudentTable;
