import React from 'react';
import { formatCurrency, formatDate } from '../../utils/formatters';
import { Transaction } from '../../lib/types';

interface TransactionListProps {
  transactions: Transaction[];
  onUpdate: () => void;
}

export default function TransactionList({ transactions, onUpdate }: TransactionListProps) {
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-md">
      <ul className="divide-y divide-gray-200">
        {transactions.map((transaction) => (
          <li key={transaction.id}>
            <div className="px-4 py-4 sm:px-6 hover:bg-gray-50">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className={`w-2 h-2 rounded-full mr-3 ${
                    transaction.type === 'income' ? 'bg-green-500' : 'bg-red-500'
                  }`} />
                  <p className="text-sm font-medium text-gray-900">
                    {transaction.description || 'Untitled Transaction'}
                  </p>
                </div>
                <div className="flex items-center">
                  <span className={`text-sm font-semibold ${
                    transaction.type === 'income' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {transaction.type === 'income' ? '+' : '-'}
                    {formatCurrency(transaction.amount)}
                  </span>
                </div>
              </div>
              <div className="mt-2 sm:flex sm:justify-between">
                <div className="sm:flex">
                  <p className="text-sm text-gray-500">
                    {transaction.accounts?.name}
                  </p>
                  <p className="mt-2 text-sm text-gray-500 sm:mt-0 sm:ml-6">
                    {transaction.categories?.name}
                  </p>
                </div>
                <div className="mt-2 text-sm text-gray-500 sm:mt-0">
                  {formatDate(transaction.date)}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}