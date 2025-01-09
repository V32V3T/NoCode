import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Wallet, TrendingUp, TrendingDown, DollarSign } from 'lucide-react';

const mockData = [
  { month: 'Jan', income: 4000, expenses: 2400 },
  { month: 'Feb', income: 3000, expenses: 1398 },
  { month: 'Mar', income: 2000, expenses: 9800 },
  { month: 'Apr', income: 2780, expenses: 3908 },
  { month: 'May', income: 1890, expenses: 4800 },
  { month: 'Jun', income: 2390, expenses: 3800 },
];

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <DashboardCard
          title="Total Balance"
          amount="$12,750"
          trend="+2.5%"
          icon={Wallet}
          trendUp={true}
        />
        <DashboardCard
          title="Monthly Income"
          amount="$4,250"
          trend="+1.8%"
          icon={TrendingUp}
          trendUp={true}
        />
        <DashboardCard
          title="Monthly Expenses"
          amount="$3,200"
          trend="-0.5%"
          icon={TrendingDown}
          trendUp={false}
        />
        <DashboardCard
          title="Investments"
          amount="$8,400"
          trend="+4.2%"
          icon={DollarSign}
          trendUp={true}
        />
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-4">Income vs Expenses</h2>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={mockData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="income" fill="#4F46E5" />
              <Bar dataKey="expenses" fill="#EF4444" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

function DashboardCard({ title, amount, trend, icon: Icon, trendUp }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-semibold mt-1">{amount}</p>
        </div>
        <div className={`p-3 rounded-full ${trendUp ? 'bg-green-100' : 'bg-red-100'}`}>
          <Icon className={`h-6 w-6 ${trendUp ? 'text-green-600' : 'text-red-600'}`} />
        </div>
      </div>
      <div className="mt-4">
        <span className={`text-sm ${trendUp ? 'text-green-600' : 'text-red-600'}`}>
          {trend}
        </span>
        <span className="text-sm text-gray-600"> vs last month</span>
      </div>
    </div>
  );
}