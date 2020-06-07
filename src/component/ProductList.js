import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ProductList = ({ products }) => {

  const displayProduct = () => {
    if (products) {
      return products.map(product => {
        return (
          <div key={product.id} className="product col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3">
            <div className="product-card">
              <div className="product-name">
                <p key={product.id}>{product.name}</p>
              </div>
              <div className="product-image">
                <div className="wrapper">
                  <img key={product.id} src={product.img_url} alt="product" />
                </div>
              </div>
              <div className="view-button">
                <p key={product.id}>£{product.price.toFixed(2)}</p>
                <Link to={`/products/${product.id}`}>
                  <button className="btn btn-primary">VIEW</button>
                </Link>
              </div>
            </div>
          </div>
        )
      })
    }
  }

  return (
    <div className="product-container container">
      <p className="intro">Welcome to <strong>PC-SALE</strong> the home of the latest PCs. Please find below our wide range of products:</p>
      <div className="row">
        {displayProduct()}
      </div>
    </div>
  );

}

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
}

export default ProductList;
