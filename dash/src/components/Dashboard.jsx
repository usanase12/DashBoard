import React from 'react';
import { Link } from 'react-router-dom';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend } from 'recharts';

// Sample data for the pie chart
const pieChartData = [
  { name: 'Activity A', students: 400 },
  { name: 'Activity B', students: 700 },
  { name: 'Activity C', students: 200 },
  { name: 'Activity D', students: 1000 },
];

// Colors for the pie chart
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

// Sample data for the bar chart
const barChartData = [
  { activity: 'A', count: 120 },
  { activity: 'B', count: 95 },
  { activity: 'C', count: 85 },
  { activity: 'D', count: 75 },
];

function Dashboard() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={pieChartData}
            dataKey="students"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          >
            {pieChartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart width={500} height={300} data={barChartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="activity" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
      <Link to="/product" className="underline">
        go to product
      </Link>
    </div>
  );
}

export default Dashboard;
