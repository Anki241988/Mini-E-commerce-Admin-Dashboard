import { useState } from 'react'
import productData from '../assets/product.json'


function productList() {

    const[productList,setProductList]=useState(productData)
  return (
    <div>{productList.map((product)=>(
        
        <div className='productContainer' key={product.id}>
            <img className='imgClass' src={product.images}/>
            <h3>{product.title}</h3>
            <p>Price: {product.price} €</p>
            <button>Delete</button>
            </div>
    ))}
        </div>
  );
}

export default productList;