import { useState } from "react";
import { useParams,useNavigate } from "react-router-dom";
function EditProductPage({productList,onUpdate}) {

  const{productId}=useParams()
  const navigate = useNavigate();

     const selectedProduct = productList.find(
    (product) => product.id === Number(productId)

   
  );

const [formData, setFormData] = useState({
  title: selectedProduct?.title ?? "",
  price: selectedProduct?.price ?? "",
  stock: selectedProduct?.stock ?? "",
  description: selectedProduct?.description ?? ""
});

   console.log(selectedProduct)

  if (!selectedProduct) {
    return <h2>Product not found</h2>;
  }

function handleSave() {
  console.log("SAVE BUTTON CLICKED");

  const updatedProduct = {
    ...selectedProduct,
    ...formData,
    price: Number(formData.price),
    stock: Number(formData.stock)
  };

  console.log("Updated Product:", updatedProduct);

  onUpdate(updatedProduct);

  navigate("/");
}

return (
   <div className="flex flex-col gap-4 max-w-md mx-auto p-6">

    <h1 className="text-2xl font-bold">Edit Product</h1>
  <label>Product Title</label>

     <input
  value={formData.title}
  onChange={(event) => {
    setFormData({
      ...formData,
      title: event.target.value
    });
  }}
  className="border p-2 rounded"
/>
         <label>Price</label>
<input
  value={formData.price}
  onChange={(event) => {
    setFormData({
      ...formData,
      price: event.target.value
    });
  }}
  className="border p-2 rounded"
/>
  <label>Stock</label>
     <input
  value={formData.stock}
  onChange={(event) => {
    setFormData({
      ...formData,
      stock: event.target.value
    });
  }}
  className="border p-2 rounded"
/>
        <label>Description</label>
<input
  value={formData.description}
  onChange={(event) => {
    setFormData({
      ...formData,
      description: event.target.value
    });
  }}
  className="border p-2 rounded"
/>
<button type="button" className="bg-green-500 text-white px-4 py-2 rounded-lg"   onClick={handleSave}>
  Save Changes
</button>
      

      
    </div>



  );
}

 
export default EditProductPage;