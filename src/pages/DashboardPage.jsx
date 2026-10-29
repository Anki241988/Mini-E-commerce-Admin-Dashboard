import ProductList from "../components/productList";

function DashboardPage({ productList, onDelete }) {
  return (
    <div>
      <h1>ShopVibe Dashboard</h1>

      <ProductList
        productList={productList}
        onDelete={onDelete}
      />
    </div>
  );
}

export default DashboardPage;