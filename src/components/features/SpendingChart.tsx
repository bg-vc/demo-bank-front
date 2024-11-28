'use client'

import { LineChart, Line, ResponsiveContainer } from 'recharts'

const data = [
  { value: 40 },
  { value: 30 },
  { value: 60 },
  { value: 45 },
  { value: 75 },
  { value: 55 },
  { value: 80 },
]

export default function SpendingChart() {
  return (
    <div className="h-16">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <defs>
            <linearGradient id="colorSpending" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#1ED69E" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#1ED69E" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <Line
            type="monotone"
            dataKey="value"
            stroke="#1ED69E"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
