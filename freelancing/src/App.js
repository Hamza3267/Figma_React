import Home from "./pages/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Page404 from "./pages/page404";
import About from "./pages/aboutus";
import ContactUs from "./pages/contact us";
import Company from "./pages/companylist"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/page404" element={<Page404 />} />
          <Route path="/aboutus" element={<About />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/company" element={<Company />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
