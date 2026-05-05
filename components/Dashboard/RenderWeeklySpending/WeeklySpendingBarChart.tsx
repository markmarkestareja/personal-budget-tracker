"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";

// Sample data
const data = [
  { name: "Mon", spent: 4000, budget: 2400 },
  { name: "Tue", spent: 3000, budget: 1398 },
  { name: "Wed", spent: 2000, budget: 5000 },
  { name: "Thu", spent: 2780, budget: 3908 },
  { name: "Fri", spent: 1890, budget: 4800 },
  { name: "Sat", spent: 2390, budget: 3800 },
  { name: "Sun", spent: 3490, budget: 4300 },
];

export default function BarChartCard() {
  return (
    <Card className="w-full max-w-3xl ring-0">

      <CardContent className="h-[350px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            barGap={4}
            margin={{ top: 0, right: 10, left: 0, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar
              dataKey="spent"
              fill="var(--primary)"
              barSize={8}
              radius={[6, 6, 6, 6]}
            />
            <Bar
              dataKey="budget"
              fill="var(--primary-muted)"
              barSize={8}
              radius={[6, 6, 6, 6]}
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}