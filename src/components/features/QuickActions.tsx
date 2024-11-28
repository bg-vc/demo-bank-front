'use client'

import { Send, Wallet, ArrowDownToLine, CreditCard } from 'lucide-react'

const actions = [
  {
    id: 1,
    name: 'Send',
    icon: Send,
    color: 'bg-blue-500/20 text-blue-500',
    description: 'Send money to friends'
  },
  {
    id: 2,
    name: 'Deposit',
    icon: ArrowDownToLine,
    color: 'bg-primary/20 text-primary',
    description: 'Add money to wallet'
  },
  {
    id: 3,
    name: 'Cards',
    icon: CreditCard,
    color: 'bg-purple-500/20 text-purple-500',
    description: 'Manage your cards'
  },
  {
    id: 4,
    name: 'Wallet',
    icon: Wallet,
    color: 'bg-orange-500/20 text-orange-500',
    description: 'View your balance'
  }
]

export default function QuickActions() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
      {actions.map((action) => (
        <button
          key={action.id}
          className="group p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-200 hover:scale-[1.02]"
        >
          <div className="flex flex-col items-center text-center gap-2">
            <div className={`w-12 h-12 rounded-xl ${action.color} flex items-center justify-center`}>
              <action.icon size={24} />
            </div>
            <div>
              <p className="font-medium group-hover:text-white transition-colors">{action.name}</p>
              <p className="text-xs text-gray-400">{action.description}</p>
            </div>
          </div>
        </button>
      ))}
    </div>
  )
}
