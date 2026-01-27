localStorage.setItem(
  "admin",
  JSON.stringify({
    email: "admin@mail.com",
    password: "Admin@123",
    role: "admin",
  }),
);

export type Student = {
  id: string;
  name: string;
  enrollmentNo: string;
  std: string;
  subject: string;
  marks: number;
  result: "Pass" | "Fail";
  attendanceAvg: number;
};

const KEY = "students";

export const getStudents = (): Student[] =>
  JSON.parse(localStorage.getItem(KEY) || "[]");

export const saveStudents = (students: Student[]) =>
  localStorage.setItem(KEY, JSON.stringify(students));




