export type Project = {
    type: string;
    year: string;
    title: string;
    description: string;
    techStack: string[];
    image: string;
    alt: string;
};

export const projects: Project[] = [
    {
        type: 'Full stack',
        year: '2026',
        title: 'A-Darts',
        description: 'Sistema de gestión en tiempo real de torneos de dardos de punta de acero.',
        techStack: ['React', 'React Native', 'Node.js', 'PostgreSQL', 'Docker'],
        image: '/mockups/a-darts.png',
        alt: 'A-Darts',
    },
    {
        type: 'Full stack',
        year: '2026',
        title: 'GeoAda',
        description:
            'Aplicación web para gestionar las reservas de los espacios del edificio Ada Byron de la Universidad de Zaragoza.',
        techStack: ['React', 'NestJS', 'PostgreSQL', 'Pygeoapi', 'Docker'],
        image: '/mockups/geoada.png',
        alt: 'GeoAda',
    },
    {
        type: 'Full stack',
        year: '2026',
        title: 'Montgomery SafetyMap',
        description:
            'Aplicación web para la Policía del Condado de Montgomery (Maryland, EE. UU.) para visualizar y analizar los delitos ocurridos en el condado.',
        techStack: ['React', 'Node.js', 'MongoDB', 'KNIME'],
        image: '/mockups/montgomery-safety-map.png',
        alt: 'Montgomery SafetyMap',
    },
    {
        type: 'Full stack',
        year: '2025',
        title: 'PlanMyWeather',
        description:
            'Aplicación web que utiliza datos de observación terrestre de la NASA para predecir condiciones meteorológicas en Zaragoza.',
        techStack: ['React', 'Python', 'FastAPI', 'Flask', 'IA'],
        image: '/mockups/plan-my-weather.png',
        alt: 'PlanMyWeather',
    },
    {
        type: 'Full stack',
        year: '2025',
        title: 'Dartly',
        description:
            'Aplicación web para la gestión de ligas de dardos de punta de acero.',
        techStack: ['Angular', 'Node.js', 'Turso', 'Render'],
        image: '/mockups/dartly.png',
        alt: 'Dartly',
    },
    {
        type: 'Frontend',
        year: '2025',
        title: 'CodeLab',
        description:
            'Aplicación web para CodeLab, una asociación de estudiantes de informática de la EINA (Universidad de Zaragoza), para la organización de eventos, hackatones y charlas.',
        techStack: ['Astro'],
        image: '/mockups/codelab.png',
        alt: 'CodeLab',
    },
];
