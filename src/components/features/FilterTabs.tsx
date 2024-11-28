'use client'

import { useState } from 'react'

const tabs = [
  { id: 'all', label: 'All' },
  { id: 'withdrawal', label: 'Withdrawal' },
  { id: 'savings', label: 'Savings' },
  { id: 'deposit', label: 'Deposit' }
]

export default function FilterTabs() {
  const [activeTab, setActiveTab] = useState('all')

  return (
    <div className="flex gap-3">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`
            px-6 py-2 rounded-xl text-sm font-medium transition-all duration-200
            ${activeTab === tab.id
              ? 'bg-primary text-white shadow-lg shadow-primary/25'
              : 'bg-white/5 text-gray-400 hover:bg-white/10'
            }
          `}
        >
          {tab.label}
        </button>
      ))}
    </div>
  )
}
