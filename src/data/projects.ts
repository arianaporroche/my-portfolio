export type Project = {
    type: string;
    year: string;
    title: string;
    description: string;
    techStack: string[];
    webImage: string;
    webAlt: string;
    mobileImage?: string;
    mobileAlt?: string;
};

export const projects: Project[] = [
    {
        type: 'DDD · Frontend · Backend',
        year: '2026',
        title: 'A-Darts',
        description: 'Sistema de gestión en tiempo real de torneos de dardos de punta de acero.',
        techStack: ['React', 'React Native', 'Node.js', 'PostgreSQL', 'Docker'],
        webImage: '/a-darts-web.png',
        webAlt: 'A-Darts web',
        mobileImage: '/a-darts-mobile.png',
        mobileAlt: 'A-Darts móvil',
    },
    {
        type: 'DDD · Frontend · Backend',
        year: '2026',
        title: 'GeoAda',
        description:
            'Aplicación web para gestionar las reservas de los espacios del edificio Ada Byron de la Universidad de Zaragoza.',
        techStack: ['React', 'NestJS', 'PostgreSQL', 'pygeoapi', 'Docker'],
        webImage: '/geoada.png',
        webAlt: 'GeoAda web',
    },
    {
        type: 'Hackaton · Full stack',
        year: '2025',
        title: 'PlanMyWeather',
        description:
            'Aplicación web que utiliza datos de observación terrestre de la NASA para predecir condiciones meteorológicas en Zaragoza.',
        techStack: ['React', 'Python', 'IA'],
        webImage: '/plan-my-weather.png',
        webAlt: 'PlanMyWeather web',
    },
];
