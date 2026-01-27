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

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: type === "number" ? Number(value) : value,
    }));
  };

  const addStudent = () => {
    setStudents([...students, { ...form, id: uuid() }]);
    setForm({
      name: "",
      enrollmentNo: "",
      std: "",
      subject: "",
      marks: 0,
      result: "Pass",
      attendanceAvg: 0,
    });
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border max-w-3xl">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">
        Student Details
      </h3>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-sm text-gray-600 mb-1">Name</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
            placeholder="Enter student name"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-600 mb-1">
            Enrollment No
          </label>
          <input
            name="enrollmentNo"
            value={form.enrollmentNo}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
            placeholder="ENR12345"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-600 mb-1">Class</label>
          <input
            name="std"
            value={form.std}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
            placeholder="10th / 12th"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-600 mb-1">Subject</label>
          <input
            name="subject"
            value={form.subject}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
            placeholder="Mathematics"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-600 mb-1">Marks</label>
          <input
            type="number"
            name="marks"
            value={form.marks}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
            placeholder="0 - 100"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-600 mb-1">Result</label>
          <select
            name="result"
            value={form.result}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2 bg-white focus:ring-2 focus:ring-indigo-500 outline-none"
          >
            <option value="Pass">Pass</option>
            <option value="Fail">Fail</option>
          </select>
        </div>
      </div>

      <button
        onClick={addStudent}
        className="mt-6 w-full bg-indigo-600 text-white py-2.5 rounded-lg font-medium hover:bg-indigo-700 transition"
      >
        Add Student
      </button>
    </div>
  );
};

export default StudentForm;
