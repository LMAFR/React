import { useState, createContext } from 'react'

// The context we will consume is the one in the line below
export const FiltersContext = createContext()

export function FiltersProvider ({ children }) {
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0
  })
  return (
    <FiltersContext.Provider value={{
      filters, setFilters
    }}
    >
      {children}
    </FiltersContext.Provider>
  )
}
