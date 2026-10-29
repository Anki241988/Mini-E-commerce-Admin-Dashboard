import { useParams, Link } from "react-router-dom";

function ItemDetailsPage({ productList }) {
  const { productId } = useParams();

  const selectedProduct = productList.find(
    (product) => product.id === Number(productId)
  );

  if (!selectedProduct) {
    return <h2>Product not found</h2>;
  }

  return (
    <div>
      <h1>{selectedProduct.title}</h1>

      <img
        src={selectedProduct.images}
        alt={selectedProduct.title}
      />

      <p>Price: {selectedProduct.price} €</p>
      <p>Stock: {selectedProduct.stock}</p>
      <p>{selectedProduct.description}</p>

      <Link to="/">Back to Dashboard</Link>
    </div>
  );
}

export default ItemDetailsPage;