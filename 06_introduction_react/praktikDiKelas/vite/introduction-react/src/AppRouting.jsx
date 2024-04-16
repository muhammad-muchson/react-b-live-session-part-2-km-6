import NavBar from "./components/NavBar";
import PrivateComponent from "./auth/PrivateComponent";
import PublicComponent from "./auth/PublicComponent";
import "./App.css";
import {
  Routes,
  Route,
  Navigate,
  useParams,
  useNavigate,
  Outlet,
} from "react-router-dom";
import { useEffect, useState } from "react";

function HeroSections() {
  const { id } = useParams();
  useEffect(() => {
    //ketika ke halaman hero akan memalkukan pemanggilan id 1
  }, []);
  // const { id } = match.params;

  console.log(id);
  return <div>HeroSection {id}</div>;
}
function HeroSectionsHome() {
  const { id } = useParams();
  useEffect(() => {
    //ketika ke halaman hero akan memalkukan pemanggilan id 1
  }, []);
  // const { id } = match.params;

  console.log(id);
  return <div>HeroSectionsHome</div>;
}
function NotFound() {
  return <div>Page Not FOund</div>;
}
function Home() {
  return <div>Selamat Data di Home</div>;
}
function Dashboard() {
  console.log("dashboard");
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.setItem("isAuthenticated", "false");
    // Redirect ke halaman login atau halaman lain setelah logout
    // Misalnya, menggunakan useNavigate dari react-router-dom
    navigate("/login");
  };

  return (
    <div>
      Selamat Datang di Dashboard
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

  const isAuthenticated = localStorage.getItem("isAuthenticated");
  const onButtonClick = () => {
    // Logika autentikasi akan ditambahkan di sini
    if (email === "1" && password === "1") {
      localStorage.setItem("isAuthenticated", "true");
      navigate("/dashboard"); // Redirect ke dashboard
    }
  };
  useEffect(() => {
    if (isAuthenticated == "true") {
      console.log("sudah login lo brooo");
      navigate("/dashboard"); // Redirect ke dashboard
    }
  }, []);
  return (
    <div className="mainContainer">
      <div className="titleContainer">
        <div>Login</div>
      </div>
      <br />
      <div className="inputContainer">
        <input
          value={email}
          placeholder="Enter your email here"
          onChange={(ev) => setEmail(ev.target.value)}
          className="inputBox"
        />
        <label className="errorLabel">{emailError}</label>
      </div>
      <br />
      <div className="inputContainer">
        <input
          value={password}
          placeholder="Enter your password here"
          onChange={(ev) => setPassword(ev.target.value)}
          className="inputBox"
        />
        <label className="errorLabel">{passwordError}</label>
      </div>
      <br />
      <div className="inputContainer">
        <input
          className="inputButton"
          type="button"
          onClick={onButtonClick}
          value="Log in"
        />
      </div>
    </div>
  );
}

function AppRouting() {
  useEffect(() => {
    //disni itu fetch api, terus kalau berhasil login
  }, []);
  let isLoggedIn = false;

  return (
    <>
      <div>
        {/* contoh route 1 */}
        <Routes>
          <Route path="/" Component={NavBar} />
          <Route path="/hero" Component={HeroSections} />
          <Route path="*" Component={NotFound} />
        </Routes>
        {/* route bersarang */}
        <Routes>
          <Route path="/" element={<NavBar isLogin={true} />}>
            <Route path="/hero" element={<HeroSections />} />
            <Route path="login" element={<NotFound />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
        <Outlet />
        {/* dynamic routing */}
        <Routes>
          <Route path="/" element={<NavBar nama={"muchson"} />}>
            <Route path="/home" element={<Home />} />
            <Route path="/hero/:id" element={<HeroSections />} />
            <Route path="/login" element={isLoggedIn ? <Home /> : <Login />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
        {/* private routing */}
        {/* <Routes> */}
        {/* private untuk super admin */}
        {/* <Route path="/" element={<PrivateComponent />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/hero/" element={<HeroSectionsHome />} />
          <Route path="/hero/:id" element={<HeroSections />} />
        </Route> */}
        {/* private untuk semua orang */}
        {/* <Route path="/" element={<PublicComponent />}>
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes> */}
      </div>
      <div>
        {/* aku */}
        {/* <NavBar /> */}
        {/* <HeroSections /> */}
        {/* hilmi */}
        {/* <HeroSection /> */}
        <h1 style={{ backgroundColor: "gray" }}>Footer</h1>
      </div>
    </>
  );
}

export default AppRouting;
