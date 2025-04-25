import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

import "./css/app.css";

function App() {
  return (
    <>
      <main id="pictureBackground">
        <section id="mainSection">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </section>
      </main>
    </>
  );
}

export default App;
