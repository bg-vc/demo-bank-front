'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Bell, Settings, LogOut, ChevronDown, User } from 'lucide-react'

export default function ProfileMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const [hasNotification] = useState(true)

  return (
    <div className="flex items-center gap-4">
      <div className="relative">
        <button className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
          <Bell size={20} className="text-gray-400" />
          {hasNotification && (
            <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full" />
          )}
        </button>
      </div>

      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-3 px-2 py-1 rounded-xl hover:bg-white/5 transition-colors"
        >
          <span className="text-sm">Hi BG-VC!</span>
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 p-0.5">
            <div className="w-full h-full rounded-[10px] overflow-hidden">
              <Image
                src="/avatar.svg"
                alt="Profile"
                width={40}
                height={40}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <ChevronDown
            size={16}
            className={`text-gray-400 transition-transform duration-200 ${
              isOpen ? 'rotate-180' : ''
            }`}
          />
        </button>

        {isOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-background/95 backdrop-blur-lg rounded-xl border border-white/10 shadow-xl overflow-hidden">
            <div className="p-2 space-y-1">
              <button className="flex items-center gap-2 w-full px-3 py-2 text-left hover:bg-white/5 rounded-lg transition-colors">
                <User size={16} className="text-gray-400" />
                <span>Profile</span>
              </button>
              <button className="flex items-center gap-2 w-full px-3 py-2 text-left hover:bg-white/5 rounded-lg transition-colors">
                <Settings size={16} className="text-gray-400" />
                <span>Settings</span>
              </button>
              <div className="h-px bg-white/10 my-1" />
              <button className="flex items-center gap-2 w-full px-3 py-2 text-left hover:bg-white/5 rounded-lg transition-colors text-red-500">
                <LogOut size={16} />
                <span>Logout</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
