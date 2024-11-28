'use client'

import Image from 'next/image'
import { UserPlus } from 'lucide-react'

const friends = [
  { id: 1, name: 'Sarah', image: '/avatar.svg' },
  { id: 2, name: 'Mike', image: '/avatar.svg' },
  { id: 3, name: 'Anna', image: '/avatar.svg' },
]

export default function AddFriends() {
  return (
    <div className="flex justify-between items-center p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors group">
      <div>
        <p className="text-sm text-gray-400">Add friends</p>
        <p className="text-xs text-gray-500">Invite friends to join and earn rewards together</p>
      </div>
      
      <div className="flex items-center gap-3">
        <div className="flex -space-x-3">
          {friends.map((friend) => (
            <div
              key={friend.id}
              className="w-8 h-8 rounded-full border-2 border-background overflow-hidden ring-2 ring-transparent hover:ring-primary hover:scale-110 hover:z-10 transition-all duration-200"
            >
              <Image
                src={friend.image}
                alt={friend.name}
                width={32}
                height={32}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        
        <button className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center hover:bg-primary/30 transition-colors">
          <UserPlus size={16} />
        </button>
      </div>
    </div>
  )
}
