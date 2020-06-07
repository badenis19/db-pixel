import React from 'react';
// import './App.css';

/* Component */
const SingleProduct = () => {

  // Array of Object where the products are stored ( TO DO: store all data in the App.js)
  const products = [
    {
      id: 1,
      name: "test",
      price: 90,
      img_url: "www.test.lf"
    },
    {
      id: 2,
      name: "test",
      price: 90,
      img_url: "www.test.lf"
    },
    {
      id: 3,
      name: "test",
      price: 90,
      img_url: "www.test.lf"
    },
    {
      id: 4,
      name: "test",
      price: 90,
      img_url: "www.test.lf"
    },
    {
      id: 5,
      name: "test",
      price: 90,
      img_url: "www.test.lf"
    }
  ]
  
  const displaySingleProduct = () => {
    if (true) {
      return products.map(product => {
        return (
          <div>
            <p key={product.id}>{product.name}</p>
            <p key={product.id}>{product.price}</p>
            <p key={product.id}>{product.name}</p>
            <img src={product.img_url} alt="product"/>
          </div>
        )
      })
    }
  }

  return (
    <div className="App">
      {displaySingleProduct()}
    </div>
  );

}

export default SingleProduct;
