import NavBar from "./components/NavBar";
import "./App.css";

function HeroSections() {
  return <div>HeroSection</div>;
}

function App() {
  return (
    <>
      <div>
        {/* aku */}
        <NavBar />
        <HeroSections />
        {/* hilmi */}
        {/* <HeroSection /> */}
        <h1>Hello React</h1>
      </div>
    </>
  );
}

export default App;
