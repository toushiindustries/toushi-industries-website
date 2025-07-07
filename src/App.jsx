import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Hero from "./components/Hero.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Busy from "./components/Busy.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/busy" element={<Busy />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
