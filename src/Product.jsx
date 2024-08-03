import { useState } from "react";

export const Product = () => {
  const [carts, setCarts] = useState([]);
  const [visible, setVisible] = useState(false);
  const [search, setSearch] = useState("");

  const Data = [
    {
      Image: "blacktshirt.jpeg",
      Name: "Zara T-Shirt",
      company: "Zara",
      price: 1000,
    },
    {
      Image: "Shoes.jpeg",
      Name: "Black Shoes",
      company: "Puma",
      price: 2004,
    },
    {
      Image: "sunscreen.jpg",
      Name: "Sunscreen",
      company: "Dermaco",
      price: 500,
    }
  ];

  const clearCart = () => {
    setCarts([]);
  };

  const handleImageClick = (item) => {
    setCarts((prevCart) => [...prevCart, item]);
  };

  const toggleCartVisibility = () => {
    setVisible(!visible);
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredData = Data.filter(value =>
    value.Name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        placeholder="Search by name"
        onChange={handleSearchChange}
        style={{ marginBottom: "20px" }}
      />
      <div>
        {filteredData.map((value, i) => (
          <div key={i} style={{ display: "flex", marginBottom: "10px" }}>
            <img
              onClick={() => handleImageClick(value)}
              src={value.Image}
              alt={value.Name}
              style={{ width: "100px", height: "100px", cursor: "pointer", marginRight: "10px" }}
              />
              <div>
                <div>{value.Name}</div>
                <div>{value.company}</div>
                <div>{value.price} $</div>
              </div>
            </div>
          ))}
        </div>
        <button onClick={toggleCartVisibility} style={{ margin: "20px 0" }}>
          {visible ? "Hide Cart" : "Show Cart"}
        </button>
        {visible && (
          <div>
            {carts.length > 0 ? (
              carts.map((value, i) => (
                <div key={i} style={{ display: "flex", marginBottom: "10px" }}>
                  <img
                    src={value.Image}
                    alt={value.Name}
                    style={{ width: "100px", height: "100px", marginRight: "10px" }}
                  />
                  <div>
                    <div>{value.Name}</div>
                    <div>{value.company}</div>
                    <div>{value.price} $</div>
                  </div>
                </div>
              ))
            ) : (
              <div>No items in the cart</div>
            )}
          </div>
        )}
        <button onClick={clearCart} style={{ marginTop: "20px" }}>
          Clear Cart
        </button>
      </div>
    );
  };