import React, { useRef, useState, useId } from "react";

export default function ExampleUseRef() {
  const inputRef = useRef("");
  const [tasks, setTasks] = useState([]);
  // console.log(inputRef);
  // Menggunakan fungsi useId untuk mendapatkan ID unik
  const id = useId();
  const HandleAddTask = () => {
    console.log("id = " + id);
    setTasks((prevTasks) => [...prevTasks, inputRef.current.value]);
    // console.log(inputRef.current.value);
  };
  return (
    <div>
      ExampleUseRef
      <input type="text" ref={inputRef}></input>
      <button onClick={HandleAddTask}>Tambahkan</button>
      <br></br>
      <ul>
        {tasks.map((task) => (
          <li key={id}>{task}</li>
        ))}
      </ul>
    </div>
  );
}
