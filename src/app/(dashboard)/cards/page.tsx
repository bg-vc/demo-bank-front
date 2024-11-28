'use client'

import { Plus } from 'lucide-react'
import CardPreview from '@/components/features/CardPreview'

const cards = [
  {
    id: 1,
    type: 'Visa',
    number: '4358 4445 0988 2373',
    expiry: '08/24',
    balance: 22350.50,
    color: 'from-primary to-primary/80'
  },
  {
    id: 2,
    type: 'Mastercard',
    number: '5236 8647 1276 9083',
    expiry: '11/25',
    balance: 15780.25,
    color: 'from-secondary to-secondary/80'
  }
]

export default function CardsPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">My Cards</h1>
        <button className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary/90 rounded-xl transition-colors">
          <Plus size={20} />
          <span>Add New Card</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card) => (
          <div key={card.id} className="card p-0">
            <div className={`p-6 rounded-xl bg-gradient-to-br ${card.color}`}>
              <div className="flex flex-col justify-between h-48">
                <div>
                  <p className="text-sm text-white/60">Total Balance</p>
                  <p className="text-2xl font-semibold mt-1">
                    ${card.balance.toLocaleString()}
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="text-lg tracking-widest">{card.number}</p>
                  <div className="flex justify-between items-center">
                    <p className="text-sm text-white/60">{card.expiry}</p>
                    <p className="text-sm font-medium">{card.type}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        <button className="card flex flex-col items-center justify-center gap-4 hover:bg-white/10 transition-colors group">
          <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
            <Plus size={24} className="text-primary" />
          </div>
          <div className="text-center">
            <p className="font-medium">Add New Card</p>
            <p className="text-sm text-gray-400">Connect your bank card</p>
          </div>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card space-y-4">
          <h2 className="text-xl font-semibold">Card Settings</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <p>Card Lock</p>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
              </label>
            </div>
            <div className="flex justify-between items-center">
              <p>Online Payments</p>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
              </label>
            </div>
            <div className="flex justify-between items-center">
              <p>ATM Withdrawals</p>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
              </label>
            </div>
          </div>
        </div>

        <div className="card space-y-4">
          <h2 className="text-xl font-semibold">Spending Limits</h2>
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="flex justify-between">
                <p className="text-sm">Daily Limit</p>
                <p className="text-sm text-primary">$850 / $1,000</p>
              </div>
              <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-primary" style={{ width: '85%' }} />
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <p className="text-sm">Monthly Limit</p>
                <p className="text-sm text-secondary">$15,500 / $20,000</p>
              </div>
              <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-secondary" style={{ width: '77.5%' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
