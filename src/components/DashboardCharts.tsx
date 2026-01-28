import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const COLORS = {
  total: "#6366f1", // purple
  pass: "#22c55e",  // green
  fail: "#ef4444",  // red
};

const DashboardCharts = ({
  total,
  pass,
  fail,
}: {
  total: number;
  pass: number;
  fail: number;
}) => {
  const barData = [
    { name: "Total", value: total, color: COLORS.total },
    { name: "Pass", value: pass, color: COLORS.pass },
    { name: "Fail", value: fail, color: COLORS.fail },
  ];

  const pieData = [
    { name: "Pass", value: pass, color: COLORS.pass },
    { name: "Fail", value: fail, color: COLORS.fail },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="bg-white border rounded-2xl shadow-sm p-4 h-64">
        <p className="text-sm font-medium text-gray-600 mb-2">
          Students Overview
        </p>

        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={barData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" radius={[6, 6, 0, 0]}>
              {barData.map((entry, index) => (
                <Cell key={index} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="rounded-2xl  p-4 h-64 bg-white/70 backdrop-blur border  shadow-lg">
        <p className="text-sm font-medium text-gray-700 mb-2">
          Result Distribution
        </p>

        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={pieData}
              dataKey="value"
              cx="50%"
              cy="50%"
              outerRadius={80}
              label
            >
              {pieData.map((entry, index) => (
                <Cell key={index} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default DashboardCharts;
