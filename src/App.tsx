import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ScrollToTop from './components/ScrollToTop';
import ProjectsPage from './pages/Projects/ProjectsPage';
import ProjectInfoPage from './pages/Projects/ProjectInfoPage';
import AboutMe from './pages/AboutMe/AboutMe';
import ContactoPage from './pages/ContactoPage/ContactoPage';
import LandingPage from './pages/LandingPage/LandingPage';

function App() {
  return (
    <BrowserRouter>
      <div className="portfolio">
        <ScrollToTop />
        <NavBar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/proyectos" element={<ProjectsPage />} />
          <Route path="/proyectos/:slug" element={<ProjectInfoPage />} />
          <Route path="/sobre-mi" element={<AboutMe />} />
          <Route path="/contacto" element={<ContactoPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
