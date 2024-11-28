'use client'

import { ArrowUpRight, ArrowDownRight } from 'lucide-react'

export default function BalanceCard() {
  return (
    <div className="card p-6 space-y-6">
      <div className="space-y-1">
        <p className="text-sm text-gray-400">Total Balance</p>
        <h2 className="text-3xl font-semibold">$12,345.67</h2>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-1 text-green-500">
            <ArrowUpRight size={20} />
            <span className="text-sm">Income</span>
          </div>
          <p className="text-xl font-medium">$4,567.89</p>
          <p className="text-xs text-gray-400">+12.5% from last month</p>
        </div>

        <div className="space-y-1">
          <div className="flex items-center gap-1 text-red-500">
            <ArrowDownRight size={20} />
            <span className="text-sm">Expenses</span>
          </div>
          <p className="text-xl font-medium">$2,345.67</p>
          <p className="text-xs text-gray-400">-8.3% from last month</p>
        </div>
      </div>

      <div className="h-2 bg-white/5 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-primary to-primary/50 rounded-full"
          style={{ width: '65%' }}
        />
      </div>

      <div className="flex justify-between text-xs text-gray-400">
        <span>Monthly Goal: $5,000</span>
        <span>65% achieved</span>
      </div>
    </div>
  )
}
