import { Outlet } from "react-router-dom";

import Footer from "./assets/footer.png"
import Logo from "./assets/Logo.png";

import "./App.css";
import Logo from "./components/Logo.jsx";
 

function App() {
  return (
    <>
      <Logo />
      <Outlet />
      <footer>
        <img src={Footer} alt="ligne" />
      </footer>
    </>
  );
}

export default App;
