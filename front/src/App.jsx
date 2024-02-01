import { Outlet } from "react-router-dom";
import "./App.css";
import Logo from "./components/Logo.jsx";
 

function App() {
  return (
    <>
      <Logo />
      <Outlet />
    </>
  );
}

export default App;
