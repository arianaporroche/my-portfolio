import { Carousel } from '../../components/Carousel/Carousel';
import './LandingPage.css';
import TechStackSection from '../../components/TechStackSection/TechStackSection';
import ProjectsSection from '../../components/ProjectsSection/ProjectsSection';

const misProyectos = [
    '/mockups/a-darts.png',
    '/mockups/codelab.png',
    '/mockups/dartly.png',
    '/mockups/geoada.png',
    '/mockups/montgomery-safety-map.png',
    '/mockups/plan-my-weather.png',
];

function LandingPage() {
    return (
        <>
            <section className="hero">
                <div className="hero-header-box">
                    <h1 className="hero-name">
                        ARIANA PORROCHE
                    </h1>
                    <p className="hero-meta">
                        <span className="item">Ingeniera informática</span>
                        <span className="item">Desarrollo software</span>
                        <span className="item">Zaragoza, España</span>
                    </p>
                    <p className="hero-desc">
                        <span className="desc-line line-1">[Diseño y desarrollo soluciones software robustas</span>
                        <span className="desc-line line-2">que resuelven problemas reales, combinando experiencias de usuario</span>
                        <span className="desc-line line-3">impecables con código mantenible]</span>
                    </p>
                </div>
            </section>

            <section>
                <Carousel images={misProyectos} />
            </section>

            <ProjectsSection preview />

            <TechStackSection />
        </>
    );
}

export default LandingPage;
