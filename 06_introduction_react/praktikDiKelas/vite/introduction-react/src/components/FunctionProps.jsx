import React from "react";
import TableComponent from "./TableComponent";
export default function FunctionProps() {
  function increment(value) {
    console.log("value yang dikirim = " + value);
  }
  const products = [
    {
      name: "Product 1",
      description: "Description 1",
      price: 10,
      availableQuantity: 5,
    },
    {
      name: "Product 2",
      description: "Description 2",
      price: 20,
      availableQuantity: 10,
    },
    {
      name: "Product 3",
      description: "Description 3",
      price: 15,
      availableQuantity: 8,
    },
  ];
  //gunakanya untuk menambahkan data produk lewat funciton ini
  const addProduct = (value) => {
    products.push(value);
    console.log(products);
  };
  return (
    <>
      <h1>FunctionProps</h1>
      <TableComponent products={products} addProduct={addProduct} />
    </>
  );
}
