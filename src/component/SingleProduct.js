import React from 'react';

/* Component */
const SingleProduct = (props) => {

  // storing id from the params 
  const { match } = props;
  const id = match.params.id;

  const displaySingleProduct = () => {
    return props.products.map((product) => {
      if (product.id.toString() === id) {
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
              <div className="price-and-add-button">
                <p key={product.id}>£{product.price.toFixed(2)}</p>
              </div>
            </div>
          </div>
        )
      }
    })
  }

  return (
    <div className="container">
      <div className="row">
        {displaySingleProduct()}
      </div>
    </div>
  );
}

export default SingleProduct;
