import PropTypes from "prop-types";
export default function NavBar(props) {
  //props
  //state = variabel di dalam  function
  // nama = "= variabel nama";
  // props.nama = "muchson";
  // semua hal yang diatas return maka tidak pernah akan di tampilkan pada layar tapi akan tetap di jalankan

  return (
    <div>
      props dari Appjs ={props.nama}
      {props.nama === "john" && <h1 className="red">Hai Kamu admin John</h1>}
    </div>
  ); // semua  hal ada di dalam return artinya akan tampil pada layar
}

// Menambahkan validasi PropTypes untuk prop 'nama'
NavBar.propTypes = {
  nama: PropTypes.string.isRequired,
};
