'use client'

import { useState, useRef, useEffect } from 'react'
import { 
  ArrowUpRight, 
  ArrowDownRight, 
  Wallet, 
  CreditCard, 
  Send, 
  Plus,
  TrendingUp,
  Gift,
  Receipt,
  Banknote,
  PiggyBank,
  Target,
  AlertTriangle,
  Zap,
  ArrowDownLeft,
  Search
} from 'lucide-react'
import Image from 'next/image'
import RevenueChart from '@/components/features/RevenueChart'
import CardPreview from '@/components/features/CardPreview'
import TransactionList from '@/components/features/TransactionList'
import { formatDate } from '@/utils/date'

const stats = [
  {
    title: 'Total Balance',
    value: '$48,574.12',
    change: '+12.5%',
    isPositive: true,
    icon: Wallet,
    trend: [65, 59, 80, 81, 56, 72, 90]
  },
  {
    title: 'Monthly Spending',
    value: '$3,287.49',
    change: '-8.3%',
    isPositive: false,
    icon: CreditCard,
    trend: [45, 52, 38, 24, 33, 26, 21]
  },
  {
    title: 'Monthly Income',
    value: '$7,524.89',
    change: '+15.2%',
    isPositive: true,
    icon: Send,
    trend: [35, 41, 62, 42, 56, 78, 86]
  }
]

const goals = [
  {
    title: 'New Car',
    target: 25000,
    current: 15750,
    icon: PiggyBank,
    iconBg: 'from-blue-500 to-blue-500/50',
    iconColor: 'text-white',
    progress: Math.round((15750 / 25000) * 100),
    dueDate: '2024-08-01'
  },
  {
    title: 'Vacation',
    target: 5000,
    current: 3200,
    icon: Target,
    iconBg: 'from-purple-500 to-purple-500/50',
    iconColor: 'text-white',
    progress: Math.round((3200 / 5000) * 100),
    dueDate: '2024-06-15'
  }
]

const insights = [
  {
    icon: <TrendingUp size={20} className="text-red-500" />,
    title: "Spending Insight",
    description: "Your restaurant spending is 15% higher than last month",
    trend: "up",
    color: "text-red-500"
  },
  {
    icon: <PiggyBank size={20} className="text-green-500" />,
    title: "Saving Opportunity",
    description: "You could save $50/month on subscription services",
    trend: "down",
    color: "text-green-500"
  },
  {
    icon: <Zap size={20} className="text-blue-500" />,
    title: "Quick Tip",
    description: "Set up automatic payments to avoid late fees",
    trend: "tip",
    color: "text-blue-500"
  }
]

const transactions = [
  { 
    id: 1, 
    name: 'Sarah Johnson',
    type: 'expense',
    amount: 1200.00,
    avatar: '/avatar.svg',
    time: '2:30 PM',
    category: 'Housing'
  },
  { 
    id: 2, 
    name: 'Michael Chen',
    type: 'income',
    amount: 850.00,
    avatar: '/avatar.svg',
    time: '11:45 AM',
    category: 'Work'
  },
  { 
    id: 3, 
    name: 'Emma Wilson',
    type: 'expense',
    amount: 25.00,
    avatar: '/avatar.svg',
    time: '9:20 AM',
    category: 'Food & Drinks'
  },
  { 
    id: 4, 
    name: 'David Martinez',
    type: 'expense',
    amount: 85.00,
    avatar: '/avatar.svg',
    time: '8:45 AM',
    category: 'Food & Drinks'
  },
  { 
    id: 5, 
    name: 'Sophie Taylor',
    type: 'income',
    amount: 450.00,
    avatar: '/avatar.svg',
    time: '8:15 AM',
    category: 'Freelance'
  }
]

export default function DashboardPage() {
  const [timeRange, setTimeRange] = useState<'7d' | '30d' | '90d'>('7d')
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState('Last 7 days')
  const dropdownRef = useRef<HTMLDivElement>(null)

  const handleTimeRangeChange = (option: string) => {
    setSelectedOption(option)
    switch (option) {
      case 'Last 7 days':
        setTimeRange('7d')
        break
      case 'Last 30 days':
        setTimeRange('30d')
        break
      case 'Last 90 days':
        setTimeRange('90d')
        break
    }
    setIsOpen(false)
  }

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div className="p-4 space-y-3">
      {/* Top Navigation */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex-1">
          <h1 className="text-2xl font-semibold">Welcome back, BG-VC</h1>
        </div>
        <div className="flex items-center gap-4">
          <button className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-xl flex items-center gap-2">
            <Plus className="w-5 h-5" />
            Add Money
          </button>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-3 gap-3">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white/5 rounded-2xl p-3 hover:bg-white/[0.07] transition-colors">
            <div className="flex justify-between items-start mb-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-transparent flex items-center justify-center">
                  <stat.icon size={20} className="text-primary" />
                </div>
                <span className="text-sm text-gray-400">{stat.title}</span>
              </div>
              <div className={`flex items-center gap-1 text-sm ${
                stat.isPositive ? 'text-primary' : 'text-red-500'
              }`}>
                {stat.isPositive ? (
                  <ArrowUpRight size={16} />
                ) : (
                  <ArrowDownRight size={16} />
                )}
                <span>{stat.change}</span>
              </div>
            </div>
            <p className="text-2xl font-semibold mb-3">{stat.value}</p>
            <div className="h-12">
              <div className="flex items-end justify-between h-full gap-1">
                {stat.trend.map((value, i) => (
                  <div
                    key={i}
                    className="w-full bg-primary/20 rounded-sm"
                    style={{ height: `${value}%` }}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts and Cards */}
      <div className="grid grid-cols-4 gap-3">
        {/* Revenue Overview */}
        <div className="col-span-3 bg-white/5 rounded-2xl p-3">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-semibold">Revenue Overview</h2>
            <div className="relative inline-block text-left min-w-[140px]">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="bg-[#152115]/95 backdrop-blur-sm text-sm px-4 py-2 rounded-lg flex items-center gap-2 w-full justify-between"
              >
                {selectedOption}
              </button>
              {isOpen && (
                <div 
                  className="absolute right-0 top-full mt-1 py-1 bg-[#0C1A0C] rounded-lg border border-white/10 shadow-xl min-w-[140px] z-50"
                  ref={dropdownRef}
                >
                  {[
                    'Last 7 days',
                    'Last 30 days',
                    'Last 90 days'
                  ].map((option) => (
                    <div 
                      key={option}
                      className="px-4 py-2 hover:bg-white/5 cursor-pointer transition-colors whitespace-nowrap"
                      onClick={() => handleTimeRangeChange(option)}
                    >
                      {option}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="h-[240px]">
            <RevenueChart timeRange={timeRange} />
          </div>
        </div>

        {/* My Cards Section */}
        <div className="col-span-1 space-y-3">
          <div className="bg-white/5 rounded-2xl p-3">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-lg font-semibold">My Cards</h2>
              <button className="text-sm text-primary">View All</button>
            </div>
            <div className="bg-primary rounded-2xl p-4 space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm opacity-80">Total Balance</span>
              </div>
              <div className="text-2xl font-semibold">$22,350.50</div>
              <div className="text-lg opacity-80">4358 4445 0988 2373</div>
              <div className="text-sm opacity-80">08/24</div>
            </div>
          </div>

          <div className="bg-white/5 rounded-2xl p-3">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-lg font-semibold">Financial Goals</h2>
              <button className="text-sm text-primary">View All</button>
            </div>
            <div className="space-y-3">
              {goals.map((goal, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className={`w-10 h-10 rounded-xl ${goal.iconBg} flex items-center justify-center`}>
                        <goal.icon size={20} className={goal.iconColor} />
                      </div>
                      <span className="font-medium">{goal.title}</span>
                    </div>
                    <span className="text-sm text-gray-400">{goal.progress}%</span>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Due {goal.dueDate}</div>
                    <div className="flex items-center justify-between text-sm">
                      <span>${goal.current.toLocaleString()}</span>
                      <span className="text-gray-400">${goal.target.toLocaleString()}</span>
                    </div>
                    <div className="mt-1 h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary rounded-full"
                        style={{ width: `${goal.progress}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Insights and Transactions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
        {/* Insights */}
        <div className="bg-white/5 rounded-2xl p-3">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold">Financial Insights</h2>
          </div>
          <div className="space-y-3">
            {insights.map((insight, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
              >
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                  {insight.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-medium mb-1 flex items-center gap-2">
                    {insight.title}
                    {insight.trend === "up" && <ArrowUpRight className={`w-4 h-4 ${insight.color}`} />}
                    {insight.trend === "down" && <ArrowDownRight className={`w-4 h-4 ${insight.color}`} />}
                    {insight.trend === "tip" && <Zap className={`w-4 h-4 ${insight.color}`} />}
                  </h3>
                  <p className="text-sm text-gray-400">{insight.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Transactions */}
        <div className="lg:col-span-2">
          <div className="bg-white/5 rounded-2xl p-3">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold">Recent Transactions</h2>
              <button className="text-sm text-primary">View All</button>
            </div>
            <div className="space-y-3">
              {transactions.map((transaction, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors cursor-pointer group"
                >
                  <div className="flex items-center gap-3">
                    <div className="relative w-10 h-10 rounded-full bg-white/10 overflow-hidden">
                      <Image
                        src={transaction.avatar}
                        alt={transaction.name}
                        width={40}
                        height={40}
                        className="rounded-full"
                        priority={index < 2}
                        unoptimized
                      />
                    </div>
                    <div>
                      <h3 className="font-medium flex items-center gap-2">
                        {transaction.name}
                        <span className="text-xs px-2 py-0.5 rounded-full bg-white/10 text-gray-400">
                          {transaction.category}
                        </span>
                      </h3>
                      <div className="text-xs text-gray-500">
                        {transaction.time}
                      </div>
                    </div>
                  </div>
                  <span className={`font-medium ${transaction.type === 'expense' ? 'text-red-500' : 'text-green-500'}`}>
                    {transaction.type === 'expense' ? '-' : '+'}${transaction.amount.toFixed(2)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
