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

  const [error, setError] = useState("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value, type } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: type === "number" ? Number(value) : value,
    }));

    setError("");
  };

  const isFormValid =
    form.name.trim() &&
    form.enrollmentNo.trim() &&
    form.std.trim() &&
    form.subject.trim() &&
    form.marks > 0 &&
    form.attendanceAvg >= 0;

  const addStudent = () => {
    if (!isFormValid) {
      setError("All fields are required");
      return;
    }

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
    <div className="bg-white border rounded-xl shadow-sm w-full max-w-5xl p-4 sm:p-6 lg:p-8">
      <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-6">
        Student Details
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="flex flex-col gap-1">
          <label className="text-sm text-gray-600">Name</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm text-gray-600">Enrollment No</label>
          <input
            name="enrollmentNo"
            value={form.enrollmentNo}
            onChange={handleChange}
            className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm text-gray-600">Class</label>
          <input
            name="std"
            value={form.std}
            onChange={handleChange}
            className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm text-gray-600">Subject</label>
          <input
            name="subject"
            value={form.subject}
            onChange={handleChange}
            className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm text-gray-600">Marks</label>
          <input
            type="number"
            name="marks"
            value={form.marks}
            onChange={handleChange}
            min={0}
            max={100}
            className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm text-gray-600">Attendance %</label>
          <input
            type="number"
            name="attendanceAvg"
            value={form.attendanceAvg}
            onChange={handleChange}
            min={0}
            max={100}
            className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm text-gray-600">Result</label>
          <select
            name="result"
            value={form.result}
            onChange={handleChange}
            className="border rounded-lg px-3 py-2 bg-white focus:ring-2 focus:ring-indigo-500 outline-none"
          >
            <option value="Pass">Pass</option>
            <option value="Fail">Fail</option>
          </select>
        </div>
      </div>

      {error && (
        <p className="text-red-500 text-sm mt-4 font-medium">{error}</p>
      )}

      <div className="mt-6 flex justify-end">
        <button
          onClick={addStudent}
          disabled={!isFormValid}
          className={`w-full sm:w-auto px-8 py-2.5 rounded-lg font-medium transition
            ${
              isFormValid
                ? "bg-indigo-600 text-white hover:bg-indigo-700"
                : "bg-gray-300 text-gray-600 cursor-not-allowed"
            }`}
        >
          Add Student
        </button>
      </div>
    </div>
  );
};

export default StudentForm;
