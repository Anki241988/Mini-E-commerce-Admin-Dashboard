import ProductCard from "./productCard";

function ProductList({ productList, onDelete }) {
  return (
    <div  className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-3 p-4 w-full">
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