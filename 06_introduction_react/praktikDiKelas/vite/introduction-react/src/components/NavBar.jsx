import PropTypes from "prop-types";
import { Link, Outlet } from "react-router-dom";

export default function NavBar(props) {
  //props
  //state = variabel di dalam  function
  // nama = "= variabel nama";
  // props.nama = "muchson";
  // semua hal yang diatas return maka tidak pernah akan di tampilkan pada layar tapi akan tetap di jalankan
  let id = 1;
  const numbers = [1, 2, 3, 4, 5];
  return (
    <div>
      {/* props dari Appjs ={props.nama}
      {props.nama === "john" && <h1 className="red">Hai Kamu admin John</h1>} */}
      ini induk
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to={`/hero`}>Hero</Link>
            </li>
            <li>
              <Link to={`/dashboard`}>Dashboard</Link>
            </li>
            {numbers.map((number) => (
              <li key={number}>
                <Link to={`/hero/${number}`}>Hero {number}</Link>
              </li>
            ))}
          </ul>
          <ul>
            <li>
              <Link to="/muchson">Not Found</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>
      </div>
      <hr></hr>
      <Outlet />
    </div>
  ); // semua  hal ada di dalam return artinya akan tampil pada layar
}

// Menambahkan validasi PropTypes untuk prop 'nama'
NavBar.propTypes = {
  nama: PropTypes.string.isRequired,
};
