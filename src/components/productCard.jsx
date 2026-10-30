


import { Link } from "react-router-dom";
  
      function ProductCard({product,onDelete}) {

  return (
  
       <div className='productContainer flex flex-col items-center gap-1 bg-white rounded-xl p-3 w-full min-w-0'>
            <Link to={`/products/${product.id}`}>
            <img
  className="imgClass"
  src={product.images[0]}
  alt={product.title}
 
  
/>

            
  <h3 className="text-base font-semibold text-slate-800 mt-3">{product.title}</h3>
</Link>
            <p>Price: {product.price} €</p>
      
      
      
       <button onClick={()=>onDelete(product.id)} className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg">
  Delete
</button>
           
           {product.stock <= 10 && 
        <span className="text-red-600 text-xs">
          Low Stock
        </span>
      }

      {product.stock >= 11 && 
        <span className="text-green-600 text-xs">
          In Stock
        </span>
      }

         
    
        </div>
  )
}
export default ProductCard