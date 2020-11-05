import React, { Component } from 'react';
import ProductStats from './views/ProductStats';
import ProductEditor from './views/ProductEditor';
import ProductsList from './views/ProductsList';
import './index.css';

class Products extends Component {
    render() {
        const { data, toggleOutOfStock, remove, removeOutOfStock, addNew } = this.props;
        return (
            <div>
                <h3>Products</h3>
                <hr />
                <ProductStats products={data} />
                <ProductEditor addNew={addNew} />
                <ProductsList
                    products={data}
                    toggleOutOfStock={toggleOutOfStock}
                    remove={remove}
                    removeOutOfStock={removeOutOfStock}
                />
            </div>
        )
    }
}

export default Products;