import { useState } from 'react'
import productData from '../assets/product.json'


function productList() {

    const[productList,setProductList]=useState(productData)
  return (
    <div>{productList.map((product)=>(
        
        <div key={product.id}>
            <h3>{product.title}</h3>
            <p>Price: {product.price} €</p>
            </div>
    ))}
        </div>
  );
}

export default productList;