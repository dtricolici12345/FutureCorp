import { Outlet } from "react-router-dom";

import Footer from "./assets/footer.png"
import Logo from "./assets/Logo.png";

import "./App.css";

function App() {
  return (
    <>
      <header>
        <img id="logo" src={Logo} alt="Logo" />
        <h1>PaléoExpress</h1>
      </header>
      <Outlet />
      <footer>
        <img src={Footer} alt="ligne" />
      </footer>
    </>
  );
}

export default App;
