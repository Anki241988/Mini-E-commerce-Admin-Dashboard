import { useState } from "react";
import ProductList from "../components/productList";
import AddProductForm from "../components/AddProductForm";
import { Link } from "react-router-dom";

function DashboardPage({ productList, onDelete }) {

  const[showForm,setshowForm]=useState(false)

 
  return (

    <>
    <div className="adjust">
      <h1>ShopVibe Dashboard</h1>
     <Link to="/AddProductForm" className="AddProduct">
  + Add Product
</Link>
</div>



      <ProductList
        productList={productList}
        onDelete={onDelete}
      />
{showForm && <AddProductForm />}

      </>
    
  );
}

export default DashboardPage;