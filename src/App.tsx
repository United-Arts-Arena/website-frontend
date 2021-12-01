import React from "react";
import { Home } from "./pages/Home/Home";
import { NotFound } from "./pages/NotFound/NotFound";
import { Impressum } from "./pages/Impressum/Impressum";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PageFrame } from "./components/PageFrame/PageFrame";
import { ArtistSignup } from "./pages/ArtistSignup/ArtistSignup";
import { PartnerSignup } from "./pages/PartnerSignup/PartnerSignup";
import { FAQ } from "./pages/FAQ/faq";
import { Privacy } from "./pages/Privacy/privacy";

function App() {
  return (
    <div>
      <Router>
        <PageFrame>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="impressum" element={<Impressum />} />
            <Route path="privacy" element={<Privacy />} />
            <Route path="artists" element={<ArtistSignup />} />
            <Route path="partners" element={<PartnerSignup />} />
            <Route path="faq" element={<FAQ />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </PageFrame>
      </Router>
    </div>
  );
}

export default App;
