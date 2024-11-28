'use client'

import { TrendingUp, TrendingDown, MoreHorizontal } from 'lucide-react'

interface StatsCardProps {
  title: string
  amount: number
  change: number
  type: 'income' | 'expense'
}

export default function StatsCard({ title, amount, change, type }: StatsCardProps) {
  const isPositive = change > 0

  return (
    <div className="stat-card">
      <div className="flex justify-between items-center">
        <h3 className="text-gray-400">{title}</h3>
        <button>
          <MoreHorizontal size={20} className="text-gray-400" />
        </button>
      </div>
      <div className="flex justify-between items-end">
        <div>
          <p className="text-2xl font-semibold">${amount.toLocaleString()}</p>
          <p className="text-sm text-gray-400">This week&apos;s income</p>
        </div>
        <div className={`px-2 py-1 rounded-lg flex items-center gap-1 ${
          isPositive ? 'bg-primary/20 text-primary' : 'bg-red-500/20 text-red-500'
        }`}>
          {isPositive ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
          <span className="text-sm">{Math.abs(change)}%</span>
        </div>
      </div>
    </div>
  )
}
