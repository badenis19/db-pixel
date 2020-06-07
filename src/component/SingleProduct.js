import React from 'react';

/* Component */
const SingleProduct = (props) => {

  console.log(props);

const { match } = props;
const id = match.params.id;

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
      <p>id: {id}</p>

    </div>
  );

}

export default SingleProduct;
