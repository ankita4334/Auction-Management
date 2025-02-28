import { useState, useEffect } from "react";
import axios from "axios";
import '../card.css';

function Explore() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:3001/api/getProducts")
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setError("Failed to load products. Please try again.");
      });
  }, []);

  return (
    <div className="explore-container">
      <h2>Explore Auctions</h2>

      {error && <div className="error">{error}</div>}

      <div className="product-grid">
        {products.length === 0 && !error && <p>Loading products...</p>}

        {products.map((product, index) => (
          <div className="product-card" key={product._id || index}>
            <img src={product.image} alt={product.pname} className="product-image" />
            <div className="product-info">
              <h3>{product.pname}</h3>
              <p><strong>Category:</strong> {product.category}</p>
              <p><strong>Starting Price:</strong> ${product.startPrice}</p>
              <p><strong>Highest Bid:</strong> ${product.highestBid || "N/A"}</p>
              <p className="description">{product.desc}</p>
              <button className="bid-btn">Bid Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Explore;
