import React, { useState } from "react";
import useInputLength from "../utils/customHook/useCustomHook";
export default function TableComponent({ products, addProduct }) {
  // console.log(products);
  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    price: 0,
    availableQuantity: 0,
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log(e);
    console.log(name);
    console.log(value);
    setNewProduct({ ...newProduct, [name]: value });
    console.log(newProduct);
    console.log("======================");
  };
  const { value, length, handleChangeHook } = useInputLength("");
  return (
    <div>
      {value}
      {length}
      <br></br>
      Table Component
      {/* masuk apa ? form */}
      <input
        name="name"
        placeholder="name"
        onChange={handleChange}
        value={newProduct.name}
      ></input>
      <input
        name="description"
        placeholder="description"
        onChange={handleChangeHook}
        // value={newProduct.description}
      ></input>
      <button
        onClick={() => {
          addProduct(newProduct);
        }}
      >
        click function props
      </button>
    </div>
  );
}
