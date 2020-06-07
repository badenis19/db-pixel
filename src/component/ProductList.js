import React from 'react';
// import './App.css';

/* Component */
const ProductList = () => {

  // Array of Object where the products are stored
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

  const displayProduct = () => {
    if (true) {
      return products.map(product => {
        return (
          <div>
            <p key={product.id}>{product.name}</p>
            <p key={product.id}>{product.price}</p>
            <p key={product.id}>{product.name}</p>
            <img src={product.img_url} alt="procuct"/>
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

export default ProductList;
