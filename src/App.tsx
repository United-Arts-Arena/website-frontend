import React from "react";
import { Home } from "./pages/Home/Home";
import { NotFound } from "./pages/NotFound/NotFound";
import { Impressum } from "./pages/Impressum/Impressum";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PageFrame } from "./components/PageFrame/PageFrame";
import { NewsletterSignup } from "./pages/NewsletterSignup/NewsletterSignup";
import { FAQ } from "./pages/FAQ/faq";
import { Privacy } from "./pages/Privacy/privacy";
import { Contact } from "./pages/Contact/Contact";

function App() {
  return (
    <div>
      <Router basename={process.env.PUBLIC_URL}>
        <PageFrame>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="impressum" element={<Impressum />} />
            <Route path="privacy" element={<Privacy />} />
            <Route path="newsletter" element={<NewsletterSignup />} />
            <Route path="faq" element={<FAQ />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </PageFrame>
      </Router>
    </div>
  );
}

export default App;
