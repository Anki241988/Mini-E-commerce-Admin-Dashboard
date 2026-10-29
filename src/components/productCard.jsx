
//before tailwind 

/*         function ProductCard({product,onDelete}) {
  return (
  
        <div className='productContainer' >
            <img className='imgClass' src={product.images}/>
            <h3>{product.title}</h3>
            <p>Price: {product.price} €</p>
        <button onClick={()=>onDelete(product.id)}>Delete</button> 

  {product.stock <=10 &&  <span className='low Stock'>Low Stock  </span>} 
          
           {product.stock >=11 && <span className='InStock'>In Stock </span>}   

      
      </div>
  )
}
export default ProductCard */
      
      
      
      
      
      
      
      
      
      function ProductCard({product,onDelete}) {
  return (
  
       <div className="productContainer flex flex-col items-center gap-2 bg-white rounded-xl p-4 min-w-0">
            <img className='imgClass' src={product.images}/>
            <h3>{product.title}</h3>
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