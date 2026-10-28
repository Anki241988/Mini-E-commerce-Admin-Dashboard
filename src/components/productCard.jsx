function ProductCard({product,onDelete}) {
  return (
  
        <div className='productContainer' >
            <img className='imgClass' src={product.images}/>
            <h3>{product.title}</h3>
            <p>Price: {product.price} €</p>
            <button onClick={()=>onDelete(product.id)}>Delete</button>

         {product.stock <=10 &&  <span className='lowStock'>Low Stock  </span>}
          

               {product.stock >=11 && <span className='InStock'>In Stock </span>}
           
          

            
    
        </div>
  )
}
export default ProductCard