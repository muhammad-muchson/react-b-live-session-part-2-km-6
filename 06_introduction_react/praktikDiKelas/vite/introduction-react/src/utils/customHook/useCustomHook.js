//hook yang berfungsi untuk melakukan pengecekan length sebuah value
import React, { useState, useEffect } from "react";

export default function useCustomHook() {
  const [value, setValue] = useState("value dari custom");
  const [length, setLenght] = useState("length dari customhoom");

  useEffect(() => {
    setLenght(value.length);
  }, [value]);
  const handleChangeHook = (e) => {
    setValue(e.target.value);
  };
  return { value, length, handleChangeHook };
}
