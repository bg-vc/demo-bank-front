'use client'

import { Plus } from 'lucide-react'

export default function CardPreview() {
  return (
    <div className="card space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">My Card</h2>
        <button className="text-sm text-gray-400 hover:text-white">View All</button>
      </div>

      <div className="relative">
        {/* Add Card Button */}
        <button className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all z-10">
          <Plus size={20} className="text-primary" />
        </button>

        {/* Card Stack */}
        <div className="relative h-48">
          {/* Background Card */}
          <div className="absolute inset-x-4 top-4 h-40 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 backdrop-blur" />
          
          {/* Main Card */}
          <div className="absolute inset-0 p-6 rounded-2xl bg-gradient-to-br from-primary to-primary/80 shadow-xl">
            <div className="h-full flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-white/60">Total Balance</p>
                  <p className="text-2xl font-semibold mt-1">$22,350.50</p>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <p className="text-lg tracking-widest">4358 4445 0988 2373</p>
                </div>
                <p className="text-sm text-white/60">08/24</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
