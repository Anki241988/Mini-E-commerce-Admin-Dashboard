import ProductCard from "./productCard";

function ProductList({ productList, onDelete }) {
  return (
    <div  className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {productList.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default ProductList;