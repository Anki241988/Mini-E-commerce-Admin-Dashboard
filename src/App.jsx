import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import ProductData from "./assets/product.json"; 
import DashboardPage from "./pages/DashboardPage";
import ItemDetailsPage from "./pages/ItemDetailsPage";
import AboutPage from "./pages/AboutPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  const [productList, setProductList] = useState(ProductData);

  const handleDelete = (id) => {
    const newList = productList.filter(
      (product) => product.id !== id
    );

    setProductList(newList);
  };

  return (
    <MainLayout>
    <Routes>
  <Route path="/" element={<DashboardPage  productList={productList}
      onDelete={handleDelete}/>} />
  <Route path="/products/:productId" element={<ItemDetailsPage  productList={productList} />} />
  <Route path="/about" element={<AboutPage />} />
  <Route path="*" element={<NotFoundPage />} />
</Routes>


    </MainLayout>
     
   




  );
}

export default App;