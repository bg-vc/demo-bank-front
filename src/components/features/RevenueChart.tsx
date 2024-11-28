'use client'

import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { format, subDays } from 'date-fns'

interface RevenueChartProps {
  timeRange: '7d' | '30d' | '90d';
}

const formatYAxis = (value: number): string => {
  if (value >= 1000000) {
    return `${(value / 1000000)}M`
  }
  if (value >= 1000) {
    return `${(value / 1000)}k`
  }
  return value.toString()
}

export default function RevenueChart({ timeRange }: RevenueChartProps) {
  // 根据不同时间范围生成模拟数据
  const generateData = () => {
    const baseValue = 1500000;
    const variance = 200000;
    
    switch (timeRange) {
      case '7d':
        return Array.from({ length: 7 }, (_, i) => ({
          date: subDays(new Date(), 6 - i),
          value: baseValue + Math.random() * variance
        }));
      case '30d':
        return Array.from({ length: 30 }, (_, i) => ({
          date: subDays(new Date(), 29 - i),
          value: baseValue + (i * 30000) + Math.random() * variance
        }));
      case '90d':
        return Array.from({ length: 90 }, (_, i) => ({
          date: subDays(new Date(), 89 - i),
          value: baseValue + (i * 50000) + Math.random() * variance
        }));
      default:
        return [];
    }
  };

  const data = generateData();

  return (
    <div className="card">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-xl font-semibold">Revenue</h3>
      </div>
      <div className="h-[340px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#22C55E" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#22C55E" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis
              dataKey={(item) => format(item.date, 'MMM d')}
              axisLine={false}
              tickLine={false}
              tick={{ fill: 'rgba(255, 255, 255, 0.5)', fontSize: 12 }}
              interval="preserveStartEnd"
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: 'rgba(255, 255, 255, 0.5)', fontSize: 12 }}
              tickFormatter={formatYAxis}
            />
            <Tooltip
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  const data = payload[0].payload;
                  return (
                    <div className="bg-[#152115]/95 backdrop-blur-sm px-4 py-2 rounded-lg shadow-xl">
                      <p className="text-gray-400 text-sm">{format(data.date, 'MMM d')}</p>
                      <p className="text-white font-medium">
                        ${new Intl.NumberFormat('en-US').format(Math.round(data.value))}
                      </p>
                    </div>
                  );
                }
                return null;
              }}
            />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#22C55E"
              fillOpacity={1}
              fill="url(#colorRevenue)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
