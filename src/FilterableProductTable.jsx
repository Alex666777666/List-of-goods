import React from 'react'
import SearchBar from './SearchBar.jsx'
import ProductTable from './ProductTable.jsx'

class FilterableProductTable extends React.Component {
  state = {
    filterText: '',
    inStockOnly: false,
  }

  handleFilterTextChange = filterText => {
    this.setState({
      filterText: filterText,
    })
  }

  handleInStockChange = inStockOnly => {
    this.setState({
      inStockOnly: inStockOnly,
    })
  }

  render() {
    const { products } = this.props
    const { filterText, inStockOnly } = this.state
    return (
      <div>
        <SearchBar
          filterText={filterText}
          inStockOnly={inStockOnly}
          onFilterTextChange={this.handleFilterTextChange}
          onInStockChange={this.handleInStockChange}
        />
        <ProductTable
          products={products}
          filterText={filterText}
          inStockOnly={inStockOnly}
        />
      </div>
    )
  }
}

export default FilterableProductTable
