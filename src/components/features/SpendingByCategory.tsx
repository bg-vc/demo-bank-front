'use client'

import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts'

const data = [
  { name: 'Shopping', value: 400, color: '#1ED69E' },
  { name: 'Bills', value: 300, color: '#7B61FF' },
  { name: 'Food', value: 200, color: '#FFD700' },
  { name: 'Entertainment', value: 100, color: '#FF6B6B' },
]

export default function SpendingByCategory() {
  return (
    <div className="card space-y-4">
      <h2 className="text-xl font-semibold">Spending by Category</h2>
      
      <div className="h-[300px]">
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
            <Legend 
              verticalAlign="middle" 
              align="right"
              layout="vertical"
              iconType="circle"
              iconSize={8}
              formatter={(value, entry) => (
                <span className="text-sm text-gray-300">{value}</span>
              )}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {data.map((item) => (
          <div key={item.name} className="space-y-1">
            <div className="flex items-center gap-2">
              <div 
                className="w-3 h-3 rounded-full" 
                style={{ backgroundColor: item.color }}
              />
              <span className="text-sm">{item.name}</span>
            </div>
            <p className="text-lg font-medium">${item.value}</p>
            <p className="text-xs text-gray-400">
              {Math.round((item.value / data.reduce((a, b) => a + b.value, 0)) * 100)}% of total
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
