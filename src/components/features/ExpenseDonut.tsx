'use client'

import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'
import { ChevronRight } from 'lucide-react'

const data = [
  { name: 'Food', value: 950, color: '#1ED69E' },
  { name: 'Clothes', value: 420, color: '#7B61FF' },
  { name: 'Other', value: 380, color: '#FFD700' },
]

export default function ExpenseDonut() {
  return (
    <div className="card">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Available</h2>
        <button className="flex items-center text-sm text-gray-400 hover:text-white">
          View All <ChevronRight size={16} />
        </button>
      </div>
      <div className="flex items-center justify-between">
        <div className="h-48 w-48">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="space-y-4">
          {data.map((item, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
              <div>
                <p className="text-sm text-gray-400">{item.name}</p>
                <p className="font-medium">${item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
