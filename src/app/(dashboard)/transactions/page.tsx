'use client'

import { useState } from 'react'
import { Search, Filter, Download, ShoppingBag, MonitorPlay, Wallet } from 'lucide-react'
import { formatDate } from '@/utils/date'

const transactions = [
  {
    id: 1,
    name: 'Netflix Subscription',
    type: 'Entertainment',
    amount: -15.99,
    date: '2024-02-15',
    status: 'Completed',
  },
  {
    id: 2,
    name: 'Salary Deposit',
    type: 'Income',
    amount: 5000.00,
    date: '2024-02-14',
    status: 'Completed',
  },
  {
    id: 3,
    name: 'Grocery Shopping',
    type: 'Shopping',
    amount: -89.50,
    date: '2024-02-13',
    status: 'Completed',
  }
]

export default function TransactionsPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedType, setSelectedType] = useState('All')

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Transactions</h1>
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 rounded-xl transition-colors">
            <Filter size={20} />
            <span>Filter</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary/90 rounded-xl transition-colors">
            <Download size={20} />
            <span>Export</span>
          </button>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search transactions..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full h-12 pl-10 pr-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <select
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
          className="h-12 px-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <option value="All">All Types</option>
          <option value="Income">Income</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Shopping">Shopping</option>
        </select>
      </div>

      {/* Transactions List */}
      <div className="card">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-4 px-4 font-medium">Transaction</th>
                <th className="text-left py-4 px-4 font-medium">Type</th>
                <th className="text-left py-4 px-4 font-medium">Amount</th>
                <th className="text-left py-4 px-4 font-medium">Date</th>
                <th className="text-left py-4 px-4 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction) => (
                <tr 
                  key={transaction.id}
                  className="border-b border-white/5 hover:bg-white/5 transition-colors"
                >
                  <td className="py-4 px-4 flex items-center gap-3">
                    {transaction.type === 'Entertainment' && (
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                        <MonitorPlay className="w-5 h-5 text-primary" />
                      </div>
                    )}
                    {transaction.type === 'Income' && (
                      <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center">
                        <Wallet className="w-5 h-5 text-green-500" />
                      </div>
                    )}
                    {transaction.type === 'Shopping' && (
                      <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center">
                        <ShoppingBag className="w-5 h-5 text-orange-500" />
                      </div>
                    )}
                    <div>
                      <p className="font-medium">{transaction.name}</p>
                      <p className="text-sm text-gray-400">{transaction.type}</p>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <span className="px-3 py-1 rounded-full bg-white/5 text-sm">
                      {transaction.type}
                    </span>
                  </td>
                  <td className={`py-4 px-4 ${
                    transaction.amount > 0 ? 'text-primary' : 'text-red-500'
                  }`}>
                    {transaction.amount > 0 ? '+' : ''}
                    ${Math.abs(transaction.amount).toFixed(2)}
                  </td>
                  <td className="py-4 px-4 text-gray-400">
                    {formatDate(transaction.date)}
                  </td>
                  <td className="py-4 px-4">
                    <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-sm">
                      {transaction.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-6 px-4">
          <span className="text-sm text-gray-400">Showing 1-3 of 24 transactions</span>
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg transition-colors disabled:opacity-50" disabled>
              Previous
            </button>
            <button className="px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg transition-colors">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
