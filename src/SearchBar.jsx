import React from 'react'

const SearchBar = props => {
  const { onFilterTextChange, onInStockChange, filterText, inStockOnly } = props

  const handleFilterTextChange = e => {
    onFilterTextChange(e.target.value)
  }

  const handleInStockChange = e => {
    onInStockChange(e.target.checked)
  }

  return (
    <form>
      <input
        type='text'
        placeholder='Search...'
        value={filterText}
        onChange={handleFilterTextChange}
      />
      <p>
        <input
          type='checkbox'
          checked={inStockOnly}
          onChange={handleInStockChange}
        />
        Only show products in stock
      </p>
    </form>
  )
}

export default SearchBar
