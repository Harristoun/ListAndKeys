import React from 'react';

const Product = ({id, name, price,left,image}) => {
  return (<div>
    <div>{id}</div>
    <div>{name}</div>
    <div>{price}</div>
    <div>{left}</div>
    <div>{id}</div>
    <div>{image}</div>
  </div>)   
};

export default Product;