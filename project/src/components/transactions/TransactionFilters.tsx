import React from 'react';

export default function TransactionFilters() {
  return (
    <div className="bg-white p-4 rounded-lg shadow space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
      <div className="flex-1">
        <label className="block text-sm font-medium text-gray-700">Date Range</label>
        <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
          <option>Last 7 days</option>
          <option>Last 30 days</option>
          <option>This month</option>
          <option>Last month</option>
          <option>Custom range</option>
        </select>
      </div>

      <div className="flex-1">
        <label className="block text-sm font-medium text-gray-700">Type</label>
        <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
          <option>All</option>
          <option>Income</option>
          <option>Expense</option>
        </select>
      </div>

      <div className="flex-1">
        <label className="block text-sm font-medium text-gray-700">Category</label>
        <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
          <option>All Categories</option>
        </select>
      </div>
    </div>
  );
}