import { useState } from 'react'
import ProductData from '../assets/product.json'
import ProductCard from './productCard';


function ProductList() {

    const[productList,setproductList]=useState(ProductData)

    

const handleDelete = (id) => {
    const newList = productList.filter(product => product.id !== id);
    setproductList(newList)
  };

    
  return (

    <div className='productList'>
   {productList.map((product)=>(
        
        <ProductCard 
        key={product.id}
        product={product}
        onDelete={handleDelete}
        />

            
    ))}
        </div>
        
  );

}
export default ProductList;