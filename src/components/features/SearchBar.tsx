'use client'

import { Search, X } from 'lucide-react'
import { useState } from 'react'

export default function SearchBar() {
  const [searchValue, setSearchValue] = useState('')
  const [isFocused, setIsFocused] = useState(false)

  return (
    <div className={`relative w-96 transition-all duration-200 ${
      isFocused ? 'scale-105' : ''
    }`}>
      <Search 
        className={`absolute left-3 top-1/2 transform -translate-y-1/2 transition-colors duration-200 ${
          isFocused ? 'text-primary' : 'text-gray-400'
        }`} 
        size={20} 
      />
      <input
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder="Search payment"
        className="w-full h-12 bg-white/5 rounded-xl pl-12 pr-10 focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white/10 transition-all duration-200"
      />
      {searchValue && (
        <button
          onClick={() => setSearchValue('')}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
        >
          <X size={16} />
        </button>
      )}
      
      {isFocused && searchValue && (
        <div className="absolute w-full mt-2 bg-background/95 backdrop-blur-lg rounded-xl border border-white/10 shadow-xl overflow-hidden">
          <div className="p-2">
            <p className="text-sm text-gray-400 px-3 py-2">Recent Searches</p>
            {['Monthly payment', 'Netflix subscription', 'Rent payment'].map((item, index) => (
              <button
                key={index}
                className="w-full px-3 py-2 text-left hover:bg-white/5 rounded-lg transition-colors"
                onClick={() => setSearchValue(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
