import React, { useState, useEffect } from "react";

export default function UseEffectComponent() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const [display, setDisplay] = useState("none");
  const [inputValue, setInputValue] = useState("");
  const [inputEnabled, setInputEnabled] = useState(true);
  let nama = "muchson";
  const handleClick = () => {
    setCount(count + 1);
  };
  const handleClick2 = () => {
    setCount2(count2 + 1);
  };
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  // useEffect(() => {
  // disinilah logic dari use Effect itu digunakan untuk menjjakan sesuatu
  // ini tidak bagus untuk di manfaatkan terlalu  banyak
  // ketika pengen melakukana validasi typing, secara logic bisa kita gunakan,  tapi pendekatan  itu tidak aku sukai
  //   console.log("use effect tanpa kurng siku");
  // });
  // sama dengan didmound
  useEffect(() => {
    console.log("use  effect jalan 1  kali");
    if (nama === "muchson") {
      alert("Hai muchson"); //  pakai modal
    }
    // paggil api disini
  }, []);
  // sama dengan did update
  useEffect(() => {
    if (inputValue.length == 5) {
      setDisplay("");
      setInputEnabled(false); // Menonaktifkan input jika panjang input mencapai 5 karakter
    } else {
      setDisplay("none");
      setInputEnabled(true); // Mengaktifkan kembali input jika panjang input kurang dari 5 karakter
    }
    // console.log("use  effect memantau count");
  }, [inputValue]);

  // useEffect(() => {
  //   console.log("use  effect memantau count2");
  // }, [count2]);
  return (
    <div>
      <h1>Hello, World!</h1>
      <p>This is a simple functional component.</p>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        disabled={!inputEnabled}
      />
      <small style={{ display: display, color: "red" }}>
        input terlalu panjang
      </small>
      {/* {inputValue} */}
      <button onClick={handleClick}>Increment count</button>
      <p>Count: {count}</p>
      <hr></hr>
      <button onClick={handleClick2}>Increment count 2</button>
      <p>Count: {count2}</p>
    </div>
  );
}
