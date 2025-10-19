// src/pages/Dashboard.js
import React, { useState, useEffect, useRef } from "react";

function Dashboard() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const filtered = products.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "20px" }}>
      <h2>Dashboard 🛍️</h2>
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ padding: "8px", width: "300px" }}
      />
      <div style={{ display: "flex", flexWrap: "wrap", marginTop: "20px" }}>
        {filtered.map((item) => (
          <div
            key={item.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "10px",
              margin: "10px",
              width: "200px",
            }}
          >
            <img
              src={item.image}
              alt={item.title}
              style={{ width: "100px", height: "100px" }}
            />
            <h4>{item.title.substring(0, 25)}...</h4>
            <p>₹{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
