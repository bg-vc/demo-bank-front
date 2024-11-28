'use client'

import { useState } from 'react'
import { Home, BarChart2, Settings, CreditCard, Receipt, Bell } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import SearchBar from '@/components/features/SearchBar'
import ProfileMenu from '@/components/features/ProfileMenu'

const navigationItems = [
  { icon: Home, label: 'Dashboard', href: '/dashboard' },
  { icon: CreditCard, label: 'Cards', href: '/cards' },
  { icon: Receipt, label: 'Transactions', href: '/transactions' },
  { icon: BarChart2, label: 'Analytics', href: '/analytics' },
  { icon: Settings, label: 'Settings', href: '/settings' },
]

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [notifications] = useState(3) // Example notification count

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-20 bg-background/50 backdrop-blur-sm flex flex-col items-center py-8 gap-8 border-r border-white/5">
        <Link href="/dashboard" className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary/50 flex items-center justify-center">
          <Image src="/avatar.svg" alt="Logo" width={24} height={24} className="rounded-full" />
        </Link>
        <nav className="flex flex-col gap-6">
          {navigationItems.map((item) => {
            const isActive = pathname.includes(item.href)
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-item group relative ${
                  isActive ? 'text-primary bg-primary/10' : 'text-gray-400 hover:text-white'
                }`}
              >
                <item.icon size={24} />
                <span className="absolute left-full ml-4 px-2 py-1 bg-background/90 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                  {item.label}
                </span>
              </Link>
            )
          })}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-screen">
        {/* Header */}
        <header className="h-20 px-6 flex items-center justify-between border-b border-white/5 bg-background/30 backdrop-blur-sm sticky top-0 z-10">
          <SearchBar />
          <div className="flex items-center gap-6">
            <ProfileMenu />
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="flex-1 overflow-auto">
          {children}
        </div>
      </main>
    </div>
  )
}
