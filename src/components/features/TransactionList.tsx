'use client'

import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import AddFriends from './AddFriends'

const transactions = [
  { 
    id: 1, 
    name: 'Sarah Johnson', 
    amount: -1200.00,
    avatar: '/avatar.svg',
    time: '2:30 PM',
    category: 'Housing'
  },
  { 
    id: 2, 
    name: 'Michael Chen', 
    amount: +850.00,
    avatar: '/avatar.svg',
    time: '11:45 AM',
    category: 'Work'
  },
  { 
    id: 3, 
    name: 'Emma Wilson', 
    amount: -25.00,
    avatar: '/avatar.svg',
    time: '9:20 AM',
    category: 'Food & Drinks'
  },
  { 
    id: 4, 
    name: 'David Martinez', 
    amount: -85.00,
    avatar: '/avatar.svg',
    time: '8:45 AM',
    category: 'Food & Drinks'
  }
]

export default function TransactionList() {
  return (
    <div className="space-y-6">
      <div className="card space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">Recent Transactions</h2>
          <button className="flex items-center text-sm text-gray-400 hover:text-white group">
            View All 
            <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        <div className="space-y-4">
          {transactions.map((transaction) => (
            <div 
              key={transaction.id} 
              className="flex items-center justify-between p-2 rounded-xl hover:bg-white/5 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl overflow-hidden">
                  <Image
                    src={transaction.avatar}
                    alt={transaction.name}
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span>{transaction.name}</span>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-white/10 text-gray-400">
                      {transaction.category}
                    </span>
                  </div>
                  <div className="text-sm text-gray-400">
                    {transaction.time}
                  </div>
                </div>
              </div>
              <span className={transaction.amount < 0 ? 'text-red-500' : 'text-primary'}>
                {transaction.amount > 0 ? '+' : ''}${Math.abs(transaction.amount).toFixed(2)}
              </span>
            </div>
          ))}
        </div>
      </div>

      <AddFriends />
    </div>
  )
}
