'use client'

import RevenueChart from '@/components/features/RevenueChart'
import ExpenseDonut from '@/components/features/ExpenseDonut'
import { ArrowUp, ArrowDown, TrendingUp } from 'lucide-react'

const stats = [
  {
    title: 'Total Revenue',
    value: '$48,574',
    change: '+12.5%',
    isPositive: true
  },
  {
    title: 'Total Expenses',
    value: '$21,789',
    change: '-8.3%',
    isPositive: false
  },
  {
    title: 'Net Profit',
    value: '$26,785',
    change: '+15.2%',
    isPositive: true
  }
]

export default function AnalyticsPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Analytics</h1>
        <select className="bg-white/5 border border-white/10 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary">
          <option value="7d">Last 7 days</option>
          <option value="30d">Last 30 days</option>
          <option value="90d">Last 90 days</option>
          <option value="12m">Last 12 months</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="card">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-400">{stat.title}</p>
                <p className="text-2xl font-semibold mt-1">{stat.value}</p>
              </div>
              <div className={`flex items-center gap-1 ${
                stat.isPositive ? 'text-primary' : 'text-red-500'
              }`}>
                {stat.isPositive ? <ArrowUp size={20} /> : <ArrowDown size={20} />}
                <span>{stat.change}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RevenueChart timeRange="7d" />
        <ExpenseDonut />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Top Categories</h2>
            <button className="text-sm text-gray-400 hover:text-white">View All</button>
          </div>
          <div className="space-y-4">
            {[
              { name: 'Shopping', amount: 2450, percentage: 35 },
              { name: 'Bills & Utilities', amount: 1890, percentage: 27 },
              { name: 'Entertainment', amount: 1240, percentage: 18 },
              { name: 'Travel', amount: 980, percentage: 14 }
            ].map((category, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span>{category.name}</span>
                  <span>${category.amount}</span>
                </div>
                <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-primary to-primary/50"
                    style={{ width: `${category.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Growth Trends</h2>
            <button className="text-sm text-gray-400 hover:text-white">View Report</button>
          </div>
          <div className="space-y-6">
            {[
              { title: 'Monthly Growth', value: '+12.5%', trend: '+2.3%' },
              { title: 'Yearly Growth', value: '+85.2%', trend: '+14.2%' },
              { title: 'Average Transaction', value: '$324.20', trend: '+5.7%' }
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400">{item.title}</p>
                  <p className="text-xl font-semibold">{item.value}</p>
                </div>
                <div className="flex items-center gap-1 text-primary">
                  <TrendingUp size={20} />
                  <span>{item.trend}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
