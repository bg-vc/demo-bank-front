'use client'

import Image from 'next/image'

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* Left Side - Auth Form */}
      <div className="flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-8">
          <div className="flex items-center gap-2">
            <Image
              src="/logo.svg"
              alt="BG Bank Logo"
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <span className="text-2xl font-semibold gradient-text">BG Bank</span>
          </div>
          {children}
        </div>
      </div>

      {/* Right Side - Feature Showcase */}
      <div className="hidden lg:flex items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20 p-8">
        <div className="w-full max-w-lg space-y-8">
          <h1 className="text-4xl font-bold">
            Welcome to the Future of Banking
          </h1>
          <p className="text-gray-400">
            Experience seamless financial management with our modern banking dashboard.
            Track expenses, manage cards, and analyze your spending patterns all in one place.
          </p>
          <div className="grid grid-cols-2 gap-6">
            {[
              'Real-time Analytics',
              'Smart Budgeting',
              'Secure Transactions',
              'Investment Tracking',
            ].map((feature) => (
              <div key={feature} className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
