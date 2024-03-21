import NavBar from "./components/NavBar";
import "./assets/css/style.css";
// import style from "./assets/css/style.module.css";
import Hook from "./components/Hook";
function HeroSection() {
  return <div>HeroSection</div>;
}

export default function App() {
  // let user = "muchson"; // kalau pengen berubah harus mengghunakan state
  let warna = "red"; //bisa di taruh file lain
  console.log("warna =" + warna);
  let bahasa = "indonesia";
  //jangan seperti ini untuk menentukan tampilan
  // if (user == "muchson") {
  //   return <div>{user}</div>;
  // }
  // ini fungsi biasa
  // function tampil() {
  //   console.log("halo tampil");
  // }
  //ini adalah arrow fucntion
  const tampil = () => {
    console.log("halo tampil");
    console.log("sebelum dirubah warna = " + warna);
    warna = "grey";
    console.log("setelah dirubah warna =  " + warna);
  };
  const handleChangePassword = (event) => {
    console.log(event.target.value);
    console.log("halo password");
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log("halo submit");
    console.log(event.target[0].value);
  };
  function handleMouseOver() {
    console.log("Mouse masuk");
  }

  function handleMouseOut() {
    console.log("Mouse keluar");
  }
  // Array berisi nama-nama anak di kelas
  const namaAnakKelas = ["muchson", "daffa", "lativa", "nabraska"];
  return (
    <div>
      <h1 onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
        Halaman APP
      </h1>

      {/* ini adalah state */}
      <HeroSection />
      {/* ini adalah stateless*/}
      <NavBar nama={"john"} />
      {/* code berikut adalah if else tapi  tipe ternary */}

      <input
        placeholder="username"
        type="text"
        //dipakai  ketika function itu  ribet dan mulek dan di pakai di banyak  tempat
        // onChange={handleChangeUsername}
        //kalau  masih simple dan  tidak  perlu di gunakan pada tempat lain
        onChange={(e) => {
          console.log("arrow function inline = " + e.target.value);
        }}
      />
      <input
        placeholder="password"
        type="password"
        onChange={handleChangePassword}
      />
      <button onClick={tampil} className={warna}>
        {bahasa == "indonesia" ? "tombol" : "button"}
      </button>

      <form onSubmit={handleSubmit}>
        <input type="text" />
        <button type="submit">Kirim</button>
      </form>
      {namaAnakKelas.map((nama) => (
        // import global css
        // <p className="red" key={nama}>
        //   {nama}
        // </p>
        // import pakek module
        // <p className={style.blue} key={nama}>
        //   {nama}
        // </p>
        // import pakek inline
        <p style={{ color: warna }} key={nama}>
          {nama}
        </p>
      ))}
    </div>
  );
}
