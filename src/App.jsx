import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import "./css/App.css";

function App() {
  return (
    <>
      <main id="pictureBackground">
        <section id="mainSection">
          <Routes>
            <Route path="/Schild/" element={<Home />} />
          </Routes>
        </section>
      </main>
    </>
  );
}

export default App;
