'use client'

import Image from 'next/image'
import { Calendar } from 'lucide-react'

const bills = [
  {
    id: 1,
    name: 'Netflix Subscription',
    amount: 19.99,
    dueDate: '2024-02-15',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netflix/netflix-original.svg',
    isPaid: false
  },
  {
    id: 2,
    name: 'Spotify Premium',
    amount: 9.99,
    dueDate: '2024-02-18',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spotify/spotify-original.svg',
    isPaid: true
  },
  {
    id: 3,
    name: 'Adobe Creative Cloud',
    amount: 52.99,
    dueDate: '2024-02-20',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/adobe/adobe-original.svg',
    isPaid: false
  }
]

function formatDate(dateString: string) {
  const date = new Date(dateString)
  return new Intl.DateTimeFormat('en-US', { 
    month: 'short', 
    day: 'numeric' 
  }).format(date)
}

function getDaysUntil(dateString: string) {
  const today = new Date()
  const dueDate = new Date(dateString)
  const diffTime = dueDate.getTime() - today.getTime()
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  return diffDays
}

export default function UpcomingBills() {
  return (
    <div className="card space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Upcoming Bills</h2>
        <button className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors">
          <Calendar size={20} />
        </button>
      </div>

      <div className="space-y-4">
        {bills.map((bill) => {
          const daysUntil = getDaysUntil(bill.dueDate)
          return (
            <div 
              key={bill.id}
              className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/10 p-2">
                  <Image
                    src={bill.logo}
                    alt={bill.name}
                    width={24}
                    height={24}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <p className="font-medium">{bill.name}</p>
                  <p className="text-sm text-gray-400">Due {formatDate(bill.dueDate)}</p>
                </div>
              </div>

              <div className="text-right">
                <p className="font-medium">${bill.amount}</p>
                {bill.isPaid ? (
                  <span className="text-xs text-primary">Paid</span>
                ) : (
                  <span className="text-xs text-gray-400">
                    {daysUntil === 0 ? 'Due today' : 
                     daysUntil === 1 ? 'Due tomorrow' : 
                     `${daysUntil} days left`}
                  </span>
                )}
              </div>
            </div>
          )
        })}
      </div>

      <button className="w-full py-3 rounded-xl border border-white/10 hover:bg-white/5 transition-colors text-sm">
        View All Bills
      </button>
    </div>
  )
}
