import React from "react";
import { Home } from "./pages/Home/Home";
import { NotFound } from "./pages/NotFound/NotFound";
import { Impressum } from "./pages/Impressum/Impressum";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PageFrame } from "./components/PageFrame/PageFrame";

function App() {
  return (
    <div>
      <Router>
        <PageFrame>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="impressum" element={<Impressum />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </PageFrame>
      </Router>
    </div>
  );
}

export default App;
