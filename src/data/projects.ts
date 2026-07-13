export type Project = {
    type: string;
    year: string;
    title: string;
    summary: string;
    techStack: string[];
    image: string;
    alt: string;

    description?: string;
    detailedDescription?: string;
    architecture?: string;
    domainModel?: string;
    scrum?: string;
    mobileMockups?: string[];
    webMockups?: string[];
};

export const projects: Project[] = [
    {
        type: 'Full stack',
        year: '2026',
        title: 'A-Darts',
        summary: 'Sistema de gestión en tiempo real de torneos de dardos de punta de acero.',
        techStack: ['React', 'React Native', 'Node.js', 'PostgreSQL', 'Docker'],
        image: '/mockups/a-darts.png',
        alt: 'A-Darts',

        description: 'A-Darts es un **sistema multiplataforma** de gestión en **tiempo real** para torneos de dardos de punta de acero, diseñado para cubrir las necesidades de administradores, jugadores y visitantes desde una sola plataforma.',
        detailedDescription: 'La **aplicación web** sirve a tres perfiles distintos: los administradores gestionan inscripciones, cuadrantes y partidas; los jugadores consultan sus estadísticas y siguen su evolución a lo largo de los torneos; y los espectadores pueden ver cualquier partida en tiempo real desde cualquier dispositivo y lugar del mundo.\n\nLa **aplicación móvil** está pensada para los apuntadores: permite registrar las tiradas de cada jugador durante la partida, calculando automáticamente cierres y medias, y validando cada entrada para evitar errores de marcador.\n\nEl **backend** expone una API REST para la gestión centralizada de usuarios, jugadores y torneos, y un servidor WebSocket que garantiza la sincronización en tiempo real entre todos los dispositivos conectados.',
        architecture: 'El sistema está compuesto por dos aplicaciones, una aplicación móvil y una aplicación web, y un backend que centraliza la lógica de negocio y la persistencia de datos, como se muestra en la visión conceptual del sistema.\n\nComo se ilustra en el diagrama de despliegue del sistema, la aplicación móvil se ejecuta en tablets Android instaladas junto a las dianas de juego, mientras que la aplicación web se ejecuta en el navegador de los usuarios que acceden al sistema. Ambas aplicaciones se comunican a través de Internet con un servidor desplegado en un VPS de OVHCloud. En dicho servidor se utiliza Docker para gestionar los servicios que componen la aplicación. Se emplea Nginx como servidor web y proxy inverso para servir la aplicación web y redirigir las peticiones de los clientes hacia los servidores internos correspondientes. También hay una API REST que se encarga de las operaciones de consulta y gestión de datos, y un servidor de comunicación en tiempo real basado en WebSockets, utilizado para la sincronización inmediata del estado de las partidas y del torneo.',
        domainModel: 'El diseño de la arquitectura software combina dos patrones de diseño complementarios: **Arquitectura Hexagonal** (o Ports and Adapters) y **Diseño Dirigido por el Dominio** (DDD).\n\nBajo este enfoque, se establece una separación estricta entre el núcleo de negocio y el resto del sistema, de forma que cada capa tiene una responsabilidad bien definida y no depende de los detalles de implementación de las demás. En total, el sistema se divide en tres capas independientes: la capa de dominio, que contiene toda la lógica de negocio; la capa de aplicación, que actúa como orquestadora de los casos de uso; y la capa de infraestructura, que implementa los adaptadores concretos que se comunican con el mundo exterior.\n\nSobre esta base arquitectónica, se aplican los principios del DDD para modelar el dominio. El sistema se organiza en torno a agregados, cada uno con su raíz, sus entidades y sus objetos valor. El modelo de dominio de la aplicación web se compone de los siguientes ocho agregados: User, Player, Tournament, RegisteredParticipant, Bracket, Match, PlayingArea y TournamentResults.',
        mobileMockups: ['/a-darts/mobile-mockups/1.png', '/a-darts/mobile-mockups/2.png', '/a-darts/mobile-mockups/3.png', '/a-darts/mobile-mockups/4.png', '/a-darts/mobile-mockups/5.png', '/a-darts/mobile-mockups/6.png'],
        webMockups: ['/a-darts/web-mockups/1.png', '/a-darts/web-mockups/2.png', '/a-darts/web-mockups/3.png', '/a-darts/web-mockups/4.png', '/a-darts/web-mockups/5.png', '/a-darts/web-mockups/6.png', '/a-darts/web-mockups/7.png', '/a-darts/web-mockups/8.png', '/a-darts/web-mockups/9.png'],
    },
    {
        type: 'Full stack',
        year: '2026',
        title: 'GeoAda',
        summary:
            'Aplicación web para gestionar las reservas de los espacios del edificio Ada Byron de la Universidad de Zaragoza.',
        techStack: ['React', 'NestJS', 'PostgreSQL', 'Pygeoapi', 'Docker'],
        image: '/mockups/geoada.png',
        alt: 'GeoAda',

        description: 'GeoAda es un **sistema de gestión y reserva de espacios** para el edificio Ada Byron de la Universidad de Zaragoza. Permite a los usuarios consultar un mapa interactivo del edificio, buscar y reservar espacios según su rol, y a los gerentes administrar la configuración de espacios y buscar.',
        detailedDescription: 'GeoAda nace para resolver la gestión de espacios (aulas, seminarios, laboratorios, despachos y salas comunes) del edificio Ada Byron, ofreciendo a estudiantes, docentes, investigadores y personal técnico la posibilidad de consultar disponibilidad y reservar espacios según un sistema de permisos basado en roles. La aplicación incluye un mapa urbano interactivo por plantas, un buscador de espacios con filtros, y un flujo de reserva en dos pasos que valida automáticamente solapamientos, aforo y compatibilidad de categoría de uso. El rol "gerente" dispone además de funcionalidades de administración para modificar la reservabilidad, categoría, horario, asignación y porcentaje de uso de cada espacio, así como la configuración general de los edificios.',
        architecture: 'El backend sigue una **arquitectura hexagonal** organizada en **tres capas** (infraestructura, aplicación y dominio), con una jerarquía unidireccional que mantiene el dominio aislado de detalles técnicos. La persistencia se gestiona mediante los patrones Repository y Data Mapper sobre Prisma ORM, sobre una base de datos PostgreSQL con la extensión PostGIS para datos geográficos. A nivel de componentes y conectores, el sistema sigue un estilo N-Tier de cuatro niveles: cliente web en React, servidor web y servidor geográfico (PyGeoAPI) como puerta de entrada, servidor de aplicación que concentra la lógica de negocio (comunicado de forma asíncrona mediante RabbitMQ), y la capa de datos.\n\nEn el **despliegue**, estos componentes se distribuyen en **cinco nodos** independientes (cliente, servidor web, servidor de aplicación, servidor geográfico y base de datos), cada uno con su puerto y tecnología específica (NestJS sobre Node.js, PyGeoAPI y PostgreSQL 14).',
        domainModel: 'El dominio se modela mediante **Diseño Dirigido por el Dominio**, con **5 agregados** (Persona, Departamento, Edificio, Espacio y Reserva), cada uno con su propia entidad raíz, invariantes y lógica encapsulada. Se complementa con 12 objetos de valor (como Correo, Rol, Horario o Validez) que expresan restricciones del dominio sin identidad propia, y 11 políticas de negocio que regulan operaciones sensibles, como qué roles pueden modificar un espacio, qué transiciones de rol están permitidas o qué condiciones debe cumplir una reserva para considerarse válida.',
        webMockups: ['/geoada/web-mockups/1.png', '/geoada/web-mockups/2.png', '/geoada/web-mockups/3.png', '/geoada/web-mockups/4.png', '/geoada/web-mockups/5.png'],
    },
    {
        type: 'Full stack',
        year: '2026',
        title: 'Montgomery SafetyMap',
        summary:
            'Aplicación web para la Policía del Condado de Montgomery (Maryland, EE. UU.) para visualizar y analizar los delitos ocurridos en el condado.',
        techStack: ['React', 'Node.js', 'MongoDB', 'KNIME'],
        image: '/mockups/montgomery-safety-map.png',
        alt: 'Montgomery SafetyMap',

        description: 'Montgomery SafetyMap es una **aplicación web** para la **Policía del Condado de Montgomery** (Maryland, EE. UU.) para visualizar y analizar los delitos ocurridos en el condado, que además predice la criminalidad en las distintas zonas.',
        detailedDescription: 'La **aplicación web** incluye un mapa interactivo que muestra los delitos ocurridos en el Condado de Montgomery, organizados por distritos o zonas de patrullaje. Consta de **tres áreas** diferenciadas:\n\n- Un **área pública**, accesible para ciudadanos y turistas, donde pueden consultar la información sobre la criminalidad del condado, visualizar los índices de criminalidad por distritos y calcular la ruta más segura entre dos puntos. También pueden poner alertas sobre posibles delitos.\n\n- Un **área privada para la policía**, protegida mediante un sistema de autenticación,  que permite el acceso a funcionalidades avanzadas de análisis y gestión, la visualización de los índices de criminalidad por zonas de patrullaje y la generación de rutas de patrullaje por las zonas más peligrosas.\n\n- Un **área privada para los administradores**, con funcionalidades avanzadas de gestión de usuarios, alertas y delitos.',
        architecture: 'La aplicación sigue una **arquitectura** de **3 niveles** (3-tier architecture), lo que garantiza una separación clara de responsabilidades y facilita el mantenimiento y escalabilidad del sistema:\n\n- **Nivel de Presentación (Frontend):** Interfaz de usuario desarrollada con React Native y Expo, encargada de la visualización de mapas, estadísticas e interacción con el usuario.\n\n- **Nivel de Lógica de Negocio (Backend):** API REST construida con Node.js y Express que procesa las peticiones, gestiona la seguridad (JWT) y ejecuta la lógica del servidor.\n\n- **Nivel de Datos (Base de Datos):** Almacenamiento persistente basado en MongoDB Atlas, donde se gestionan las colecciones de delitos, usuarios, alertas y resultados del modelo de IA.',
        webMockups: ['/montgomery-safetymap/web-mockups/1.png', '/montgomery-safetymap/web-mockups/2.png', '/montgomery-safetymap/web-mockups/3.png', '/montgomery-safetymap/web-mockups/4.png', '/montgomery-safetymap/web-mockups/5.png'],
    },
    {
        type: 'Full stack',
        year: '2025',
        title: 'PlanMyWeather',
        summary:
            'Aplicación web que utiliza datos de observación terrestre de la NASA para predecir condiciones meteorológicas en Zaragoza.',
        techStack: ['React', 'Python', 'FastAPI', 'Flask', 'IA'],
        image: '/mockups/plan-my-weather.png',
        alt: 'PlanMyWeather',

        description: 'PlanMyWeather es una **aplicación web** que utiliza datos de observación terrestre de la **NASA** para **predecir condiciones meteorológicas** en Zaragoza y ayudar a los usuarios a planificar sus actividades.',
        detailedDescription: 'El reto planteado por la NASA consistía en construir una aplicación con interfaz personalizada que permitiera a los usuarios consultar la probabilidad de condiciones meteorológicas adversas para una ubicación y fechas concretas. Para resolverlo, entrenamos un **modelo de IA** con cinco años de datos históricos obtenidos a través de las **APIs públicas de NASA Earthdata**, utilizando el **dataset MERRA-2**. La aplicación genera un **dashboard interactivo** con visualizaciones dinámicas de probabilidad de temperatura, precipitación y viento, y permite a los usuarios crear y guardar planes vinculados a las predicciones meteorológicas de una fecha específica, facilitando la toma de decisiones para actividades al aire libre, viajes o eventos.',
        architecture: 'El frontend está desarrollado en React con componentes de shadcn/ui, priorizando un diseño limpio y accesible. El backend combina FastAPI y Flask en Python para gestionar el procesamiento de los datos de la NASA, la integración con sus APIs públicas y la exposición de los endpoints que consume el cliente. El modelo de IA, entrenado con los datos históricos de MERRA-2, se integra en la capa de backend y devuelve las predicciones meteorológicas en forma de probabilidades que el frontend representa visualmente. Se utilizó Figma para el diseño de la interfaz y GitHub para el control de versiones y la colaboración.',
        webMockups: ['/planmyweather/web-mockups/1.png', '/planmyweather/web-mockups/2.png', '/planmyweather/web-mockups/3.png'],
    },
    {
        type: 'Full stack',
        year: '2025',
        title: 'Dartly',
        summary:
            'Aplicación web para la gestión de ligas de dardos de punta de acero.',
        techStack: ['Angular', 'Node.js', 'Turso', 'Render'],
        image: '/mockups/dartly.png',
        alt: 'Dartly',

        description: 'Dartly es una **aplicación web** de **gestión de ligas de dardos** de punta de acero.',
        detailedDescription: 'Dartly nace como solución a la gestión manual de la información deportiva de la Asociación Aragonesa de Dardos, ofreciendo una plataforma centralizada que cubre todo el ecosistema de la competición: registro de jugadores, clubes, equipos y sedes; organización de temporadas, jornadas y partidos; y actualización automática de clasificaciones a partir de los resultados introducidos.\n\nLa aplicación distinque dos tipos de usuario: el administrador, con acceso completo para crear, editar y eliminar cualquier entidad del sistema, y el visitante, que puede consultar clasificaciones, resultados, estadísticas y calendarios sin acceder a datos personales. Entre las funcionalidades más destacadas se incluye la carga y validación de calendarios mediante ficheros Excel y el registro detallado de estadísticas individuales.',
        architecture: 'El sistema sigue una arquitectura en **3 tiers**: el **frontend** implementado en Angular, el **backend** en Node.js con Express organizado en capas de endpoints, lógica de negocio y acceso a datos, y la **base de datos** relacional gestionada con Turso. El **despliegue** es **continuo** y totalmente automatizado mediante GitHub Actions y Render, de forma que cualquier cambio validado en la rama principal desencadena un nuevo despliegue independiente de frontend y backend.',
        scrum: 'El proyecto se desarrolló siguiendo la **metodología Scrum** a lo largo de **4 sprints**, gestionados con Jira mediante un tablero Kanban con las columnas To Do, In Progress, In Review y Done. Cada sprint partía de una **pila de producto priorizada** con historias de usuario, criterios de aceptación y bocetos de interfaz, y finalizaba con una **revisión** del trabajo completado apoyada en diagramas de burnup y burndown para analizar la velocidad del equipo y detectar desviaciones. El reparto de tareas se realizaba por **autoasignación** según competencias, y al final de cada sprint se celebraba una **retrospectiva** para identificar mejoras de proceso de cara al siguiente ciclo.',
        webMockups: ['/dartly/web-mockups/1.png', '/dartly/web-mockups/2.png', '/dartly/web-mockups/3.png', '/dartly/web-mockups/4.png', '/dartly/web-mockups/5.png', '/dartly/web-mockups/6.png', '/dartly/web-mockups/7.png'],
    },
    {
        type: 'Frontend',
        year: '2025',
        title: 'CodeLab',
        summary:
            'Aplicación web para CodeLab, una asociación de estudiantes de informática de la EINA (Universidad de Zaragoza), para la organización de eventos, hackatones y charlas.',
        techStack: ['Astro'],
        image: '/mockups/codelab.png',
        alt: 'CodeLab',

        description: 'CodeLab es una **aplicación web** para CodeLab, una asociación de estudiantes de informática de la EINA (Universidad de Zaragoza), para la organización de eventos, hackatones y charlas.',
        detailedDescription: 'CodeLab es el **rediseño** y **desarrollo** de la web oficial de CodeLab, una asociación de estudiantes de informática de la EINA (Universidad de Zaragoza). El proyecto abarcó desde el diseño en Figma hasta la implementación completa en Astro, cubriendo la landing page, la página de presentación del equipo, el blog y la página de contacto. Me encargué del diseño en Figma y participé en la implementación en Astro, con el objetivo de modernizar la presencia digital de la asociación, dotándola de una interfaz más atractiva y coherente que reflejara su identidad y facilitara la difusión de sus eventos, hackatones y charlas entre la comunidad estudiantil.',
        webMockups: ['/codelab/web-mockups/1.jpg', '/codelab/web-mockups/2.jpg', '/codelab/web-mockups/3.jpg', '/codelab/web-mockups/4.jpg', '/codelab/web-mockups/5.jpg', '/codelab/web-mockups/6.png'],
    },
];
