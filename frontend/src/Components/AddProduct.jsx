import { useState } from "react";
import axios from "axios";


function AddProduct() {
  const [product, setProduct] = useState({
    pname: "",
    category: "",
    startPrice: "",
    highestBid: "",
    desc: "",
    image: "", // URL of the image
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token"); // ✅ Get token from storage
  
    try {
      const response = await axios.post(
        "http://127.0.0.1:3001/api/addProduct",
        product,
        { headers: { Authorization: `Bearer ${token}` } } // ✅ Send token in request
      );
  
      console.log(response.data);
      setMessage("Product added successfully!");
    } catch (error) {
      console.error("Error adding product:", error.response?.data || error.message);
      setMessage("Failed to add product. Only admins can add products.");
    }
  };
  

  return (<><br></br><br></br>
    <div className="container">
      <center>
      <h2>Add New Product</h2>

      {message && <p>{message}</p>}
      

      <form onSubmit={handleSubmit} style={{width:'800px',marginLeft:'100px'}} >
        <input  type="text" name="pname" value={product.pname} onChange={handleChange} placeholder="Product Name" required />
        <input type="text" name="category" value={product.category} onChange={handleChange} placeholder="Category" required />
        <input type="number" name="startPrice" value={product.startPrice} onChange={handleChange} placeholder="Starting Price" required />
        <input  type="number" name="highestBid" value={product.highestBid} onChange={handleChange} placeholder="Highest Bid (Optional)" />
        <textarea name="desc" value={product.desc} onChange={handleChange} placeholder="Product Description" required></textarea>

        <input  type="text" name="image" value={product.image} onChange={handleChange} placeholder="Image URL" required />

        {product.image && <img src={product.image} alt="Preview" style={{ width: "200px", marginTop: "10px" }} />}

        <button  type="submit">Add Product</button>
        <br></br>
      </form></center>
    </div><br></br><br></br></>
  );
}

export default AddProduct;
