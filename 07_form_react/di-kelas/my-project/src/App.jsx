import React, { useState } from "react";

export default function App() {
  // ini boleh juga kalau lagi latihan
  const [username, setUsername] = useState();
  const [errorUsername, setErrorUsername] = useState();
  const [message, setMessage] = useState();
  const [jurusan, setJurusan] = useState();
  const [jenisKelamin, setJenisKelamin] = useState();
  const [checkBox, setCheckBox] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  // yang bagus, pada satu form hanya terdapat satu state
  // const [dataDiri, setDataDiri] = useState([
  //   {
  //     username: "desain",
  //     message: "desain",
  //     jurusan: "desain",
  //   },
  // ]);
  // console.log(checkBox);
  const dataDiri = [
    { username: username, message, jenisKelamin: jenisKelamin },
  ];
  // console.log(dataDiri);
  const handleChangeUsername = (e) => {
    setUsername(e.target.value);
    const usernameRegex = /^[a-zA-Z]+$/;
    const isValidUsername = usernameRegex.test(e.target.value);
    // if (username.length >= 5 && username.length <= 10) {
    //   return console.log("Username memenuhi syarat");
    // }
    console.log(isValidUsername);
    if (!isValidUsername) {
      setErrorUsername("Tolong hanya masukkan berupa Huruf");
      return console.log("regex memenuhi syarat");
    }
  };
  function handleChangeJurusan(e) {
    console.log("value = " + e.target.value);
    setJurusan(e.target.value);
  }
  function handleChangeJenisKelamin(e) {
    console.log("value = " + e.target.value);
    setJenisKelamin(e.target.value);
  }
  const handleFileChange = (e) => {
    console.log(e);
    const file = e.target.files[0];
    setSelectedFile(URL.createObjectURL(file)); // Menyimpan URL gambar yang dipilih
  };
  return (
    <div className="p-8">
      <h1 className="text-3xl">Example Form</h1>
      <label className="block mb-4">
        <p>Username</p>
        <input
          onChange={handleChangeUsername}
          className="border border-gray-300 px-2 py-1"
        ></input>
        {errorUsername && <p>{errorUsername}</p>}
      </label>
      <label className="block mb-4">
        <p>Message</p>
        <textarea
          className="border border-gray-300"
          style={{ height: "400px", width: "400px" }}
        ></textarea>
      </label>
      <label className="block mb-4">
        <p className="mb-2">Jurusan</p>
        <select
          onChange={handleChangeJurusan}
          // onChange={(e) => setJurusan(e.target.value)}
          value={jurusan}
          className="border border-gray-300"
        >
          <option disabled>Pilih Jurusan</option>
          <option value="matematika">Matematika</option>
          <option value="desain">Design</option>
          <option value="olahraga">Olahraga</option>
        </select>
      </label>
      {/* <label className="block mb-4">
        <p>Jenis Kelamin</p>
        <input type="radio" />
        Laki-laki
        <input type="radio" />
        Perempuan
      </label> */}
      <div className="flex flex-col">
        <div className="flex">
          <input
            onChange={handleChangeJenisKelamin}
            type="radio"
            name="radio-1"
            className="radio mb-2"
            checked={jenisKelamin === "laki"}
            value="laki"
          />{" "}
          <p className="ml-2">Laki-laki</p>
        </div>
        <div className="flex">
          <input
            value="perempuan"
            onChange={handleChangeJenisKelamin}
            type="radio"
            name="radio-1"
            className="radio mb-2"
            checked={jenisKelamin === "perempuan"}
          />{" "}
          <p className="ml-2">Perempuan</p>
        </div>
      </div>
      <div className="mt-2">
        <input
          onChange={handleFileChange}
          type="file"
          className="file-input w-full max-w-xs"
        />
        <div className="avatar">
          <div className="w-48 rounded">
            <img src={selectedFile} />
          </div>
        </div>
      </div>
      <label className="block my-4">
        <p className="font-bold">Jenis Kelamin</p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi
          tempora deleniti quas consectetur enim, iste vitae temporibus quos a
          repellat tenetur optio amet fuga ducimus illo! Atque facere sint
          fugiat!
        </p>
        <input
          type="checkbox"
          onChange={() => {
            setCheckBox(!checkBox);
          }}
        />
        Saya menyetujui semua peraturan
      </label>
      {/* <label>
        URL:
        <input type="url" required placeholder="Enter a valid URL" />
      </label> */}
      <br></br>
      {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Tampilkan
      </button> */}
      <button className="btn btn-primary btn-xs">Button</button>
      <br></br>
      {jurusan}
      {checkBox}
    </div>
  );
}
