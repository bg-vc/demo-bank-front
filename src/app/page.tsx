'use client'

import DashboardLayout from '@/components/layout/DashboardLayout'
import RevenueChart from '@/components/features/RevenueChart'
import ExpenseDonut from '@/components/features/ExpenseDonut'
import TransactionList from '@/components/features/TransactionList'
import CardPreview from '@/components/features/CardPreview'
import FilterTabs from '@/components/features/FilterTabs'

export default function Home() {
  return (
    <DashboardLayout>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-2xl font-semibold">My Dashboard</h1>
          <FilterTabs />
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full">
          {/* Left Column - Charts */}
          <div className="lg:col-span-2 space-y-6 h-full">
            <div className="h-[400px]">
              <RevenueChart timeRange="7d" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card">
                <ExpenseDonut />
              </div>
              <div className="space-y-6">
                <div className="card">
                  <h3 className="text-xl font-semibold mb-4">Income</h3>
                  <div className="space-y-2">
                    <p className="text-2xl font-semibold">$2,240</p>
                    <div className="flex items-center gap-2">
                      <span className="text-primary text-sm">+12%</span>
                      <span className="text-sm text-gray-400">This week's income</span>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <h3 className="text-xl font-semibold mb-4">Expense</h3>
                  <div className="space-y-2">
                    <p className="text-2xl font-semibold">$1,750</p>
                    <div className="flex items-center gap-2">
                      <span className="text-secondary text-sm">-15%</span>
                      <span className="text-sm text-gray-400">This week's expense</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Card & Transactions */}
          <div className="space-y-6">
            <CardPreview />
            <TransactionList />
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
