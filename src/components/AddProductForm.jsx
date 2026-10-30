import { useState } from "react";
function AddProductForm({addProductToList}) {

    const[addData,setaddData]=useState({  title: "",
    price: "",
    stock: "",
    description: "",
    images: ""})

    function handleSummit(event){
event.preventDefault();
console.log(addData);

addProductToList(addData)

 setaddData({
    title: "",
    price: "",
    stock: "",
    description: "",
    images: ""
  });
    }
      
   
  return (
    <div className="addProductForm">
      <h2>Add New Product</h2>

      <form className="formStyle" onSubmit={handleSummit}>

        <div className="labelInputStyle">  <label className="labelStyle">Product Name:</label>
        <input className='inputStyle'type="text" placeholder="Enter product name"  value={addData.title}  onChange ={(event)=>{
    const clone ={...addData};
    clone.title=event.target.value;
    setaddData(clone)}
    }/></div>
      
<div className="labelInputStyle"><label className="labelStyle" >Price:</label>
        <input className='inputStyle'type="number" placeholder="Enter price" value={addData.price}  onChange ={(event)=>{
    const clone ={...addData};
    clone.price=event.target.value;
    setaddData(clone)}
    } />
</div>
      <div className="labelInputStyle"> <label className="labelStyle">Stock:</label>
        <input className='inputStyle'type="number" placeholder="Enter stock quantity" value={addData.stock}  onChange ={(event)=>{
    const clone ={...addData};
    clone.stock=event.target.value;
    setaddData(clone)}
    }/></div>  
       
<div className="labelInputStyle"><label className="labelStyle">Description:</label>
        <textarea className='inputStyle' placeholder="Enter product description"  value={addData.description}  onChange ={(event)=>{
    const clone ={...addData};
    clone.description=event.target.value;
    setaddData(clone)}
    }></textarea>
</div>
        <div className="labelInputStyle">  <label className="labelStyle" >Image URL:</label>
        <input className='inputStyle'type="url" placeholder="Enter image URL" value={addData.images}  onChange ={(event)=>{
    const clone ={...addData};
    clone.images=event.target.value;
    setaddData(clone)}

    
    } /></div>
      

        <button type="submit" className="submit">Submit</button>
      </form>
    </div>

    
  );

  
}

export default AddProductForm;