import Navbar from "./Navbar";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import ProductList from "./productList";

function MainLayout({ productList, onDelete }) {
  return (
    <div className="MainLayout">
      <Navbar />
      <Sidebar />

      <ProductList
        productList={productList}
        onDelete={onDelete}
      />

      <Footer />
    </div>
  );
}

export default MainLayout;