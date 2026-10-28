import { useState } from 'react'
import productData from '../assets/product.json'


function productList() {

    const[productList,setproductList]=useState(productData)

    

const handleDelete = (id) => {
    const newList = productList.filter(product => product.id !== id);
    setproductList(newList)
  };

    
  return (
    <div>{productList.map((product)=>(
        
        <div className='productContainer' key={product.id}>
            <img className='imgClass' src={product.images}/>
            <h3>{product.title}</h3>
            <p>Price: {product.price} €</p>
            <button onClick={()=>handleDelete(product.id)}>Delete</button>

         {product.stock <=10 &&  <span className='lowStock'>Low Stock  </span>}
          

               {product.stock >=11 && <span className='InStock'>In Stock </span>}
           
            </div>

            
    ))}
        </div>
  );

}
export default productList;