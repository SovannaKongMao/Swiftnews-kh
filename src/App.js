import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./views/pages/homePage";
import AboutPage from "./views/pages/aboutPage";
import BusinessPage from "./views/pages/businessPage";
import SportPage from "./views/pages/sportPage";
import TechPage from "./views/pages/techPage";
import EntertainPage from "./views/layouts/Entertainment";
import ContactPage from "./views/pages/contact";
import SearchPage from "./views/pages/searchPage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="business" element={<BusinessPage />} />
          <Route path="sport" element={<SportPage />} />
          <Route path="tech" element={<TechPage />} />
          <Route path="entertain" element={<EntertainPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="search" element={<SearchPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
