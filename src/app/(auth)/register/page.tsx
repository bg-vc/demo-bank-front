'use client'

import { useState } from 'react'
import Link from 'next/link'
import { User, Mail, Lock, Eye, EyeOff } from 'lucide-react'

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold">Create an account</h2>
        <p className="text-gray-400">Get started with your free account today</p>
      </div>

      <form className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="name" className="block text-sm font-medium">
            Full Name
          </label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              id="name"
              type="text"
              placeholder="Enter your full name"
              className="w-full h-12 pl-10 pr-4 rounded-xl bg-white/5 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium">
            Email
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="w-full h-12 pl-10 pr-4 rounded-xl bg-white/5 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="password" className="block text-sm font-medium">
            Password
          </label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              id="password"
              type={showPassword ? 'text' : 'password'}
              placeholder="Create a password"
              className="w-full h-12 pl-10 pr-12 rounded-xl bg-white/5 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          <p className="text-xs text-gray-400">
            Must be at least 8 characters long
          </p>
        </div>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="terms"
            className="w-4 h-4 rounded border-white/10 text-primary focus:ring-primary"
          />
          <label htmlFor="terms" className="text-sm">
            I agree to the{' '}
            <Link href="/terms" className="text-primary hover:underline">
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link href="/privacy" className="text-primary hover:underline">
              Privacy Policy
            </Link>
          </label>
        </div>

        <button
          type="submit"
          className="w-full h-12 bg-primary hover:bg-primary/90 text-white rounded-xl font-medium transition-colors"
        >
          Create account
        </button>
      </form>

      <p className="text-center text-sm text-gray-400">
        Already have an account?{' '}
        <Link href="/login" className="text-primary hover:underline">
          Sign in
        </Link>
      </p>
    </div>
  )
}
