// import { useState } from "react";
import "./App.css";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";

function App() {
  // const [darkMode, setDarkMode] = useState(false);
  // const handleDarkmode = () => {
  //   setDarkMode(!darkMode);
  // };

  return (
    <div>
      {/* div className={`${darkMode ? "dark" : ""}`} */}
      <Main />
      <Footer />
      {/* <button onClick={handleDarkmode}>Change mode</button> */}
    </div>
  );
}

export default App;
