'use client'

import { User, Bell, Shield, CreditCard, Wallet, HelpCircle } from 'lucide-react'
import Image from 'next/image'

interface SettingItem {
  label: string;
  type: 'image' | 'text' | 'email' | 'tel' | 'toggle' | 'button';
  value?: string | boolean;
}

interface SettingSection {
  title: string;
  icon: any;
  items: SettingItem[];
}

const sections: SettingSection[] = [
  {
    title: 'Profile Settings',
    icon: User,
    items: [
      { label: 'Profile Picture', type: 'image' },
      { label: 'Display Name', type: 'text', value: 'Stefan' },
      { label: 'Email Address', type: 'email', value: 'stefan@example.com' },
      { label: 'Phone Number', type: 'tel', value: '+1 234 567 890' }
    ]
  },
  {
    title: 'Notifications',
    icon: Bell,
    items: [
      { label: 'Push Notifications', type: 'toggle', value: true },
      { label: 'Email Notifications', type: 'toggle', value: true },
      { label: 'Transaction Alerts', type: 'toggle', value: true },
      { label: 'Marketing Communications', type: 'toggle', value: false }
    ]
  },
  {
    title: 'Security',
    icon: Shield,
    items: [
      { label: 'Two-Factor Authentication', type: 'toggle', value: true },
      { label: 'Biometric Login', type: 'toggle', value: false },
      { label: 'Login Notifications', type: 'toggle', value: true },
      { label: 'Change Password', type: 'button' }
    ]
  }
]

export default function SettingsPage() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-semibold">Settings</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Card */}
        <div className="lg:col-span-3">
          <div className="card">
            <div className="flex items-center gap-6">
              <div className="relative">
                <div className="w-24 h-24 rounded-xl overflow-hidden bg-gradient-to-br from-primary/20 to-primary/10 p-0.5">
                  <div className="w-full h-full rounded-[10px] overflow-hidden">
                    <Image
                      src="https://picsum.photos/96"
                      alt="Profile"
                      width={96}
                      height={96}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <button className="absolute bottom-0 right-0 w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                  <User size={16} />
                </button>
              </div>
              <div>
                <h2 className="text-2xl font-semibold">Stefan</h2>
                <p className="text-gray-400">Premium Account</p>
              </div>
            </div>
          </div>
        </div>

        {/* Settings Sections */}
        {sections.map((section, index) => (
          <div key={index} className="card space-y-4">
            <div className="flex items-center gap-2">
              <section.icon size={20} className="text-primary" />
              <h2 className="text-xl font-semibold">{section.title}</h2>
            </div>

            <div className="space-y-4">
              {section.items.map((item, itemIndex) => (
                <div key={itemIndex} className="flex justify-between items-center">
                  <span>{item.label}</span>
                  {item.type === 'toggle' ? (
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        defaultChecked={typeof item.value === 'boolean' ? item.value : false}
                      />
                      <div className="w-11 h-6 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                    </label>
                  ) : item.type === 'button' ? (
                    <button className="px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg transition-colors">
                      Change
                    </button>
                  ) : (
                    <span className="text-gray-400">{item.value}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Quick Links */}
        <div className="card space-y-4">
          <h2 className="text-xl font-semibold">Quick Links</h2>
          <div className="space-y-2">
            {[
              { icon: CreditCard, label: 'Manage Cards' },
              { icon: Wallet, label: 'Payment Methods' },
              { icon: HelpCircle, label: 'Help & Support' }
            ].map((link, index) => (
              <button
                key={index}
                className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors text-left"
              >
                <link.icon size={20} className="text-primary" />
                <span>{link.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
