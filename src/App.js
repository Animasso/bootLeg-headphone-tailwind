// import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header";

function App() {
  // const [darkMode, setDarkMode] = useState(false);
  // const handleDarkmode = () => {
  //   setDarkMode(!darkMode);
  // };

  return (
    <div>
      {/* div className={`${darkMode ? "dark" : ""}`} */}
      <Header />
      {/* <button onClick={handleDarkmode}>Change mode</button> */}
    </div>
  );
}

export default App;
