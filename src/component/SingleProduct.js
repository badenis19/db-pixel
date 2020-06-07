import React from 'react';
import { BrowserRouter as useParams } from 'react-router-dom';
// import './App.css';

/* Component */
const SingleProduct = () => {

let { id } = useParams();

  // const displaySingleProduct = () => {
  //   if (true) {
  //     return products.map(product => {
  //       return (
  //         <div>
  //           <p key={product.id}>{product.name}</p>
  //           <p key={product.id}>{product.price}</p>
  //           <p key={product.id}>{product.name}</p>
  //           <img src={product.img_url} alt="product"/>
  //         </div>
        
  //     })
  //   }
  // }

  return (
    <div>
      {/* {displaySingleProduct()} */}
      {/* <p>Single Product</p> */}
      <p>params</p>

    </div>
  );

}

export default SingleProduct;
