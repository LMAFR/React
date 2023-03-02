import { useState, useId } from 'react'
import './Filters.css'
import { useFilters } from '../hooks/useFilters'

export function Filters () {
  //   Let's create unique Ids for the price filter and the category filter.
  const minPriceFilterId = useId()
  const categoryFilterId = useId()

  const { filters, setFilters } = useFilters()

  const handlePrice = (event) => {
    setFilters(prevState => ({
      ...prevState,
      minPrice: event.target.value
    }))
  }

  const handleCategory = (event) => {
    setFilters(prevState => ({
      ...prevState,
      category: event.target.value
    }))
  }

  return (
    <section className='filters'>
      <div>
        <label htmlFor={minPriceFilterId}>Precio</label>
        <input
          type='range'
          id={minPriceFilterId}
          min='0'
          max='1000'
          value={filters.minPrice}
          onChange={handlePrice}
        />
        <span>{filters.minPrice}</span>
      </div>
      <div>
        <label htmlFor={categoryFilterId}>Categoría</label>
        <select id={categoryFilterId} onChange={handleCategory}>
          <option value='all'>Todas</option>
          <option value='laptops'>Portátiles</option>
          <option value='smartphones'>Móviles</option>
        </select>
      </div>
    </section>
  )
}
