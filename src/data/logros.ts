export type Logro = {
    title: string;
    place: string;
    year: string;
    description: string;
    skills: string[];
};

export const logros: Logro[] = [
    {
        title: 'Ganadores - Hackaton Party Rock 2026',
        place: 'Universidad de Zaragoza',
        year: 'Febrero 2026',
        description: 'Primer puesto en el hackaton de IA generativa con PartyRock (AWS), organizado por la Universidad de Zaragoza con más de 300 participantes. Desarrollamos “GastoFácil”, un sistente inteligente para la gestión de gastos en viajes de empresa, diseñado para automatizar y simplificar procesos administrativos complejos.',
        skills: ['Trabajo en equipo', 'Resolución de problemas', 'Pensamiento creativo'],
    },
    {
        title: 'Participante - NASA Space Apps Challenge 2025',
        place: 'Zaragoza',
        year: 'Octubre 2025',
        description: 'Participación en la XI edición del hackaton internacional organizado por la NASA. Desarrollamos “PlanMyWeather”, una aplicación web interactiva que utiliza datos de observación terrestre de la NASA para predecir condiciones meteorológicas en Zaragoza. Entrenamos un modelo de IA con 5 años de datos históricos y construimos un dashboard con visualizacioens de probabilidad de temperatura, precipitación y viento, permitiendo a los usuarios guardar planes vinculados a las predicciones.',
        skills: ['Trabajo en equipo', 'Colaboración en equipo multidisciplinar', 'Trabajo bajo presión'],
    },
    {
        title: 'Voluntaria - JNIC 2025',
        place: 'Universidad de Zaragoza',
        year: 'Junio 2025',
        description: 'Colaboración como voluntaria en la décima edición de las Jornadas Nacionales de Investigación en Ciberseguridad (JNIC), un congreso científico de referencia nacional en ciberseguridad organizado por la Universidad de Zaragoza con el apoyo del INCIBE.',
        skills: ['Trabajo en equipo', 'Responsabilidad', 'Comunicación', 'Organización'],
    },
];
