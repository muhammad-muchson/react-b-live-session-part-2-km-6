import React, { useState } from "react";

export default function Hook() {
  // semua hook digunakan diatas return
  // let username = "default";

  // kayak buat variabel tapi di react
  const [username, setUsername] = useState();
  const [age, setAge] = useState();
  const [count, setCount] = useState(0);
  const peopleData = [
    {
      id: 1,
      name: "John",
      age: 30,
      gender: "Male",
    },
    {
      id: 2,
      name: "Emily",
      age: 25,
      gender: "Female",
    },
    {
      id: 3,
      name: "Michael",
      age: 35,
      gender: "Male",
    },
  ];
  const [arrayValue, setArrayValue] = useState(["nama1", "nama2", "nama3"]);
  const [arrayOfObjectValue, setArrayOfObjectValue] = useState(peopleData);
  function namaFunction() {}
  const [bahasa, setBahasa] = useState("button");
  const handleChangeUsername = (e) => {
    // username = e.target.value;
    setUsername(e.target.value);
    console.log("username setelah if = " + username);
    return console.log(username);
  };
  const handleClickSubmit = () => {
    // setCount(count + 1);
    setArrayValue([...arrayValue, username]); //setArrayVakue(["nama1", "nama2", "nama3" , "nama4"]);
    // setArrayOfObjectValue((prevState) => {
    //   console.log("State sebelumnya:", prevState);
    //   return [
    //     ...prevState,
    //     {
    //       id: prevState.length + 1,
    //       name: username,
    //       age: age,
    //       gender: "Male",
    //     },
    //   ];
    // });
    // setArrayValue("nama4"); // ini tidak boleh
    return console.log("click");
  };
  return (
    <>
      <h1> Hook </h1>
      {username}
      <input
        placeholder="Username"
        type="text"
        onChange={handleChangeUsername}
      />
      <button onClick={handleClickSubmit}>button</button>
      {arrayValue}
      {/* {arrayOfObjectValue.map((person) => (
        <div key={person.id}>
          <p>{person.id}</p>
          <p>{person.name}</p>
          <p>{person.age}</p>
          <p>{person.gender}</p>
          <hr></hr>
        </div>
      ))} */}
      <br></br> <br></br>{" "}
      <button
        onClick={() => {
          if (bahasa == "tombol") {
            setBahasa("button");
          } else {
            setBahasa("tombol");
          }
        }}
      >
        {bahasa}
      </button>
      <button>Counter</button>0
    </>
  );
}
