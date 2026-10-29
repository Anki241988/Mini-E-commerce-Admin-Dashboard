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

   // <div className='productList'> before tailwind
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6 p-4">
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