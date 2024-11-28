'use client'

import { Plus, Plane, Car, Home } from 'lucide-react'

const goals = [
  {
    id: 1,
    name: 'Vacation Fund',
    icon: Plane,
    target: 5000,
    current: 3250,
    color: 'from-blue-500 to-blue-600',
    iconBg: 'bg-blue-500/20 text-blue-500'
  },
  {
    id: 2,
    name: 'New Car',
    icon: Car,
    target: 25000,
    current: 15000,
    color: 'from-primary to-primary/80',
    iconBg: 'bg-primary/20 text-primary'
  },
  {
    id: 3,
    name: 'House Down Payment',
    icon: Home,
    target: 50000,
    current: 20000,
    color: 'from-purple-500 to-purple-600',
    iconBg: 'bg-purple-500/20 text-purple-500'
  }
]

export default function SavingsGoals() {
  return (
    <div className="card space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Savings Goals</h2>
        <button className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors">
          <Plus size={20} />
        </button>
      </div>

      <div className="space-y-4">
        {goals.map((goal) => (
          <div key={goal.id} className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl ${goal.iconBg} flex items-center justify-center`}>
                  <goal.icon size={20} />
                </div>
                <div>
                  <p className="font-medium">{goal.name}</p>
                  <p className="text-sm text-gray-400">
                    ${goal.current.toLocaleString()} / ${goal.target.toLocaleString()}
                  </p>
                </div>
              </div>
              <span className="text-sm text-gray-400">
                {Math.round((goal.current / goal.target) * 100)}%
              </span>
            </div>

            <div className="h-2 bg-white/5 rounded-full overflow-hidden">
              <div 
                className={`h-full bg-gradient-to-r ${goal.color} rounded-full transition-all duration-500`}
                style={{ width: `${(goal.current / goal.target) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      <button className="w-full py-3 rounded-xl border border-white/10 hover:bg-white/5 transition-colors text-sm">
        View All Goals
      </button>
    </div>
  )
}
