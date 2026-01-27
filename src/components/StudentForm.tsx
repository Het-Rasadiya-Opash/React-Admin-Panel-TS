import { useState, type ChangeEvent } from "react";
import { v4 as uuid } from "uuid";
import { type Student } from "../utils/localStorage";

const StudentForm = ({
  students,
  setStudents,
}: {
  students: Student[];
  setStudents: (s: Student[]) => void;
}) => {
  const [form, setForm] = useState<Omit<Student, "id">>({
    name: "",
    enrollmentNo: "",
    std: "",
    subject: "",
    marks: 0,
    result: "Pass",
    attendanceAvg: 0,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: type === "number" ? Number(value) : value,
    }));
    };

  const addStudent = () => {
    setStudents([...students, { ...form, id: uuid() }]);
  };

  return (
    <div className="grid grid-cols-2 gap-2">
      <input
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
        className="border p-2"
      />

      <input
        name="enrollmentNo"
        placeholder="Enrollment No"
        value={form.enrollmentNo}
        onChange={handleChange}
        className="border p-2"
      />

      <input
        name="std"
        placeholder="Class"
        value={form.std}
        onChange={handleChange}
        className="border p-2"
      />

      <input
        name="subject"
        placeholder="Subject"
        value={form.subject}
        onChange={handleChange}
        className="border p-2"
      />

      <input
        type="number"
        name="marks"
        placeholder="Marks"
        value={form.marks}
        onChange={handleChange}
        className="border p-2"
      />

      {/* <input
        type="number"
        name="attendanceAvg"
        placeholder="Attendance %"
        value={form.attendanceAvg}
        onChange={handleChange}
        className="border p-2"
      /> */}

      <input
        name="result"
        placeholder="Result (Pass/Fail)"
        value={form.result}
        onChange={handleChange}
        className="border p-2"
      />

      <button
        onClick={addStudent}
        className="col-span-2 bg-green-600 text-white py-2 rounded"
      >
        Add Student
      </button>
    </div>
  );
};

export default StudentForm;
