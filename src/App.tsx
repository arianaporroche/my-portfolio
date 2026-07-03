import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ProjectsPage from './pages/ProjectsPage';
import AboutMe from './pages/AboutMe/AboutMe';
import ContactoPage from './pages/ContactoPage';
import LandingPage from './pages/LandingPage/LandingPage';

function App() {
  return (
    <BrowserRouter>
      <div className="portfolio">
        <NavBar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/proyectos" element={<ProjectsPage />} />
          <Route path="/sobre-mi" element={<AboutMe />} />
          <Route path="/contacto" element={<ContactoPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
