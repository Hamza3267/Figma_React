import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import load from "./assets/images/loadingicon.gif";
import './index.css'
import Dashboard from './pages/dashboardpage';


const Home = lazy(() => import('./pages/home'));
const Page404 = lazy(() => import('./pages/page404'));
const About = lazy(() => import('./pages/aboutus'));
const ContactUs = lazy(() => import('./pages/contact us'));
const Company = lazy(() => import('./pages/companylist'));
const Candidates = lazy(() => import('./pages/candidateslist'));
const InfoCandidate = lazy(() => import('./pages/cadidatesinfo'));
const InfoCompany = lazy(() => import('./pages/companyinfo'));
const LoginPage = lazy(() => import('./components/loginform'));


function App() {

  
  return (
   
    <div>
    <BrowserRouter>
      <Suspense fallback={<div className="loading">
        <img src={load} alt="" className="imgggg" />
      </div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/page404" element={<Page404 />} />
          <Route path="/aboutus" element={<About />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/company" element={<Company />} />
          <Route path="/candidates" element={<Candidates />} />
          <Route path="/info" element={<InfoCandidate />} />
          <Route path="/infocompany" element={<InfoCompany />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  </div>

 
  );
}

export default App;
