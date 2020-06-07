import React from 'react';
import PropTypes from 'prop-types';

/* Component */
const ProductList = ({products}) => {

  const displayProduct = () => {
    if (true) {
      return products.map(product => {
        return (
          <div>
            <p key={product.id}>{product.name}</p>
            <p key={product.id}>{product.price}</p>
            <img src={product.img_url} alt="product"/>
          </div>
        )
      })
    }
  }

  return (
    <div className="App">
      {displayProduct()}
    </div>
  );

}

ProductList.propTypes = {
  product: PropTypes.array.isRequired,
}

export default ProductList;
