import type { PortfolioContent } from "./types";

export const portfolio: PortfolioContent = {
  name: "Jose Maria Atonur",
  contact: [
    {
      id: "gmail",
      label: "Gmail",
      value: "Atonur65@gmail.com",
      href: "mailto:Atonur65@gmail.com",
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      value: "jose-maria-atonur",
      href: "https://www.linkedin.com/in/jose-maria-atonur-94949324b",
    },
    {
      id: "github",
      label: "GitHub",
      value: "jose-maria13",
      href: "https://github.com/jose-maria13",
    },
    {
      id: "cv",
      label: "CV",
      value: "Ver / descargar CV",
      href: "/cv-jose-maria-atonur.pdf",
    },
  ],
  roles: [
    {
      id: "database-administrator",
      title: {
        es: "Administrador de Bases de Datos",
        en: "Database Administrator",
      },
      technologies: [
        "SQL",
        "T-SQL",
        "Oracle",
        "MongoDB",
        "Snowflake",
        "Performance Tuning",
        "Backup & Recovery",
        "AWS",
      ],
      accent: "data",
    },
    {
      id: "technical-functional-analyst",
      title: {
        es: "Analista Funcional Técnico",
        en: "Technical Functional Analyst",
      },
      technologies: [
        "UML",
        "SCRUM",
        "Functional Analysis",
        "Test Plans",
        "Refactoring",
        "Documentation",
        "Postman",
      ],
      accent: "dev",
    },
    {
      id: "data-qa-analyst",
      title: {
        es: "Analista de Datos & Calidad",
        en: "Data & Quality Analyst",
      },
      technologies: [
        "Python",
        "SQL",
        "Data Pipelines",
        "Data Quality",
        "Machine Learning",
        "Snowflake",
        "AWS",
      ],
      accent: "data",
    },
    {
      id: "qa-automation-engineer",
      title: {
        es: "QA Automation & Testing",
        en: "QA Automation & Testing",
      },
      technologies: [
        "Cypress",
        "Selenium",
        "E2E Testing",
        "Stress Testing",
        "CI/CD",
        "API Testing",
      ],
      accent: "dev",
    },
  ],
  education: {
    es: "Técnico Universitario en Desarrollo y Calidad de Software (UNSTA)",
    en: "University Technician in Software Development and Quality (UNSTA)",
  },
  languages: [
    {
      id: "spanish",
      name: { es: "Español", en: "Spanish" },
      level: { es: "Nativo", en: "Native" },
      proficiency: 100,
    },
    {
      id: "english",
      name: { es: "Inglés", en: "English" },
      level: { es: "B1 · Intermedio", en: "B1 · Intermediate" },
      proficiency: 55,
    },
    {
      id: "portuguese",
      name: { es: "Portugués", en: "Portuguese" },
      level: { es: "A1-A2 · Básico", en: "A1-A2 · Basic" },
      proficiency: 28,
    },
  ],
  about: {
    timeline: [
      {
        id: "birth",
        period: {
          es: "19/05/2000",
          en: "05/19/2000",
        },
        title: {
          es: "Origen",
          en: "Origin",
        },
        description: {
          es: "Nací en Tucumán, Argentina, lugar donde estudie y culmine toda mi formacion academica primaria y secundaria. ",
          en: "I was born in Tucumán, Argentina, where my curiosity for technology, games, and understanding how things work began.",
        },
      },
      {
        id: "software-degree",
        period: {
          es: "2024",
          en: "2024",
        },
        title: {
          es: "Desarrollador de Software Universitario",
          en: "University Software Developer",
        },
        description: {
          es: "Me recibí en la Universidad Santo Tomás de Aquino, consolidando una base técnica orientada al desarrollo y la calidad de software. Durante mi formacion universitaria, ingrese en un programa de pasantia de la facultad, lugar el cual sigo ejerciendo ya como personal permanente de la misma.",
          en: "I graduated from Universidad Santo Tomás de Aquino, strengthening a technical foundation focused on software development and quality.",
        },
      },
      {
        id: "data-science-degree",
        period: {
          es: "Actualidad",
          en: "Currently",
        },
        title: {
          es: "Licenciatura en Ciencias de Datos",
          en: "Bachelor's Degree in Data Science",
        },
        description: {
          es: "Actualmente curso la carrera en la Universidad de la Ciudad de Buenos Aires, profundizando en datos, análisis y machine learning.",
          en: "I am currently studying at Universidad de la Ciudad de Buenos Aires, going deeper into data, analytics, and machine learning.",
        },
      },
      {
        id: "strata-analytics",
        period: {
          es: "Más de 1 año",
          en: "Over 1 year",
        },
        title: {
          es: "Strata Analytics",
          en: "Strata Analytics",
        },
        description: {
          es: "Trabajo en una empresa del exterior enfocada en análisis de datos, participando en desafíos reales de tecnología, calidad y datos.",
          en: "I work at an international data analytics company, contributing to real-world challenges across technology, quality, and data.",
        },
      },
    ],
    personal: {
      es: [
        "Fuera del mundo IT, mis hobbies son ir al gimnasio y jugar al fútbol. Son actividades muy importantes en mi día a día porque me mantienen activo, enfocado y sano de mente.",
        "Desde chico tuve interés por el ámbito tecnológico, empezando por juegos shooter y experiencias similares que despertaron mi curiosidad por cómo se construyen las cosas digitales.",
        "Siempre me consideré una persona creativa, pero sobre todo una persona que busca entender. Me gusta saber qué hago, por qué lo hago y cuáles son los puntos de mejora de cada desafío que me propongo.",
        "Creo que en el ámbito IT una de las características que más se pierden es la calidad humana detrás de la pantalla. Trato de ser siempre algo más que un cuadradito en un Meet: busco conectar con la otra persona de manera sana, cercana y colaborativa.",
      ],
      en: [
        "Outside IT, my hobbies are going to the gym and playing football. They are important parts of my routine because they keep me active, focused, and mentally healthy.",
        "Since I was young, I have been interested in technology, starting with shooter games and similar experiences that made me curious about how digital things are built.",
        "I have always considered myself creative, but above all, someone who wants to understand. I like knowing what I am doing, why I am doing it, and where each challenge can be improved.",
        "I believe one of the things that often gets lost in IT is the human quality behind the screen. I try to be more than just a square in a Meet call: I aim to connect with others in a healthy, close, and collaborative way.",
      ],
    },
  },
  experiences: [
    {
      id: "strata-qa-automation-customer-support",
      title: {
        es: "Analista de Datos, QA y Procesos de Bases de Datos",
        en: "Data, QA and Database Process Analyst",
      },
      duration: {
        es: "14 de octubre de 2024 - Actualidad",
        en: "October 14, 2024 - Present",
      },
      description: {
        es: "En Strata Analytics trabajo sobre procesos de datos, validación de información y aseguramiento de calidad en flujos analíticos. Mis tareas incluyen análisis de bases de datos, revisión de formatos de tablas, control de pipelines automatizados, validación de campañas, manejo de datos en la nube y soporte a procesos críticos. También participé en la reingeniería de un modelo de Machine Learning orientado a estimar la probabilidad de no recarga de clientes y predecir su comportamiento futuro, combinando análisis funcional, calidad de datos y optimización de procesos.",
        en: "At Strata Analytics, I work on data processes, information validation, and quality assurance for analytical workflows. My responsibilities include database analysis, table format reviews, automated pipeline validation, campaign performance checks, cloud data handling, and support for critical processes. I also contributed to the reengineering of a Machine Learning model designed to estimate customer recharge churn probability and predict future behavior, combining functional analysis, data quality, and process optimization.",
      },
      stack: ["SQL", "AWS", "Python", "Snowflake", "Machine Learning", "Data Quality"],
      url: "https://strata-analytics.us/es/",
      urlLabel: "Strata Analytics",
      hideUrlPrefix: true,
    },
    {
      id: "vethealth-commercial-software-database-admin",
      title: {
        es: "Administrador de Base de Datos para Software Comercial",
        en: "Database Administrator for Commercial Software",
      },
      statusLabel: {
        es: "Rol finalizado",
        en: "Completed role",
      },
      duration: {
        es: "24 de mayo de 2023 - 14 de octubre de 2024",
        en: "May 24, 2023 - October 14, 2024",
      },
      description: {
        es: "Brindé soporte técnico a un emprendimiento con una aplicación frontend ya funcional, liderando la definición, construcción y puesta en producción de su base de datos en MongoDB. Mi trabajo incluyó soporte diario, optimización de procesos y consumo de APIs, visualización de datos y acompañamiento técnico en la integración de pasarelas de pago.",
        en: "I provided technical support for a startup with an already functional frontend application, leading the definition, implementation, and production deployment of its MongoDB database. My work included daily support, process and API call optimization, data visualization, and technical assistance for payment gateway integrations.",
      },
      stack: ["MongoDB", "SQL", "AWS", "Stripe"],
      url: "https://vethealth-lime.vercel.app/",
      urlLabel: "VetHealth",
    },
    {
      id: "pasion-urbana-full-stack-redesign",
      title: {
        es: "Desarrollador Full Stack para Emprendimiento",
        en: "Full Stack Developer for Startup",
      },
      statusLabel: {
        es: "Rol finalizado",
        en: "Completed role",
      },
      duration: {
        es: "Rol finalizado hace 1 año",
        en: "Role completed 1 year ago",
      },
      description: {
        es: "Brindé servicios como desarrollador full stack para una inmobiliaria que necesitaba reestructurar su presencia web. Analicé el estado actual de la plataforma, identifiqué oportunidades de mejora y desarrollé un rediseño más funcional, claro y alineado con la experiencia digital que el emprendimiento buscaba transmitir.",
        en: "I provided full stack development services for a real estate business that needed to restructure its web presence. I analyzed the current state of the platform, identified improvement opportunities, and developed a more functional, clear, and aligned redesign for the digital experience the business wanted to deliver.",
      },
      stack: ["Full Stack", "Web Redesign", "UX/UI", "Responsive Design"],
      url: "https://pasion-urbana.vercel.app/",
      urlLabel: "Pasión Urbana",
    },
  ],
  projects: [
    {
      id: "csv-dataset-comparator",
      title: "CSV Dataset Comparator",
      category: {
        es: "Herramienta de validación de datos",
        en: "Data validation tool",
      },
      summary: {
        es: "Herramienta de línea de comandos desarrollada en Python para comparar grandes volúmenes de datos en archivos CSV y generar un reporte HTML con diferencias de estructura, cantidad de filas, duplicados y contenido.",
        en: "Python command-line tool built to compare large CSV datasets and generate an HTML report with structural differences, row counts, duplicates, and content-level discrepancies.",
      },
      highlights: {
        es: [
          "Pensada para validar migraciones, reprocesos o copias de datasets con alta cantidad de registros.",
          "Permite comparar archivos completos o por clave de negocio, excluyendo columnas dinámicas como fechas de actualización.",
          "Utiliza comparación por huella/hash para analizar contenido de forma eficiente y generar reportes navegables.",
        ],
        en: [
          "Designed to validate migrations, reprocessing tasks, or dataset copies with high record volume.",
          "Supports full-file comparison or business-key comparison while excluding dynamic columns such as update timestamps.",
          "Uses fingerprint/hash-based comparison to analyze content efficiently and generate navigable reports.",
        ],
      },
      stack: ["Python", "CSV", "Hashing", "HTML Reports", "CLI", "tqdm"],
      links: [
        {
          label: "GitHub",
          href: "https://github.com/jose-maria13/csv-dataset-comparator",
        },
      ],
    },
    {
      id: "ai-insurance-agent-stress-testing",
      title: "Stress Testing - Agente de IA de Seguros",
      category: {
        es: "Automatización QA y pruebas de rendimiento",
        en: "QA automation and performance testing",
      },
      summary: {
        es: "Proyecto orientado a validar la capacidad de respuesta de un agente de IA para seguros frente a múltiples conversaciones simultáneas, midiendo estabilidad, tiempos de respuesta, conversaciones exitosas y fallos durante escenarios de carga.",
        en: "Project focused on validating the response capacity of an insurance AI agent under multiple simultaneous conversations, measuring stability, response times, successful sessions, and failures during load scenarios.",
      },
      highlights: {
        es: [
          "Simula entre 20 y 50 usuarios realizando preguntas al agente de IA para evaluar comportamiento bajo carga.",
          "Genera reportes con métricas de rendimiento, tiempos de respuesta, sesiones correctas y conversaciones fallidas.",
          "Permite configurar credenciales, URL base, cantidad de sesiones concurrentes, preguntas de prueba y selectores de interfaz.",
        ],
        en: [
          "Simulates 20 to 50 users asking questions to the AI agent to evaluate behavior under load.",
          "Generates reports with performance metrics, response times, successful sessions, and failed conversations.",
          "Supports configuration for credentials, base URL, concurrent sessions, test questions, and interface selectors.",
        ],
      },
      stack: [
        "Cypress",
        "JavaScript",
        "Node.js",
        "E2E Testing",
        "Performance Metrics",
        "Test Reports",
      ],
      links: [
        {
          label: "GitHub",
          href: "https://github.com/jose-maria13/Stress-Test-Agentes-IA",
        },
      ],
    },
    {
      id: "conversational-agent-stress-test",
      title: "Conversational Agent Stress Test",
      category: {
        es: "Stress testing y monitoreo de servicios",
        en: "Stress testing and service monitoring",
      },
      summary: {
        es: "Proyecto de pruebas con Cypress y cypress-parallel para medir la estabilidad de un agente conversacional bajo carga controlada, simulando hasta 50 peticiones simultáneas y monitoreando el comportamiento de APIs y base de datos para validar respuestas esperadas.",
        en: "Cypress and cypress-parallel testing project built to measure the stability of a conversational agent under controlled load, simulating up to 50 simultaneous requests while monitoring API and database behavior to validate expected responses.",
      },
      highlights: {
        es: [
          "Diseñado para evaluar concurrencia realista con múltiples sesiones de usuario ejecutándose en paralelo.",
          "Registra tiempos de respuesta, tasa de éxito, longitud de respuestas y cantidad de sesiones procesadas.",
          "Permite monitorear APIs y base de datos durante escenarios de stress para detectar degradación, fallos o respuestas inesperadas.",
        ],
        en: [
          "Designed to evaluate realistic concurrency with multiple user sessions running in parallel.",
          "Tracks response times, success rate, response length, and number of processed sessions.",
          "Supports API and database monitoring during stress scenarios to detect degradation, failures, or unexpected responses.",
        ],
      },
      stack: [
        "Cypress",
        "cypress-parallel",
        "JavaScript",
        "Node.js",
        "API Monitoring",
        "Database Monitoring",
      ],
      links: [
        {
          label: "GitHub",
          href: "https://github.com/jose-maria13/conversational-agent-stress-test",
        },
      ],
    },
    {
      id: "cypress-conversational-agent-e2e",
      title: "Cypress Conversational Agent E2E",
      category: {
        es: "Automatización end-to-end",
        en: "End-to-end automation",
      },
      summary: {
        es: "Suite de pruebas end-to-end con Cypress para validar un flujo realista de usuario en una aplicación con agente conversacional: autenticación por SSO, envío de preguntas, espera de respuestas y verificación de widgets en dashboards.",
        en: "Cypress end-to-end test suite built to validate a realistic user flow in a conversational agent application: SSO authentication, question submission, response validation, and dashboard widget verification.",
      },
      highlights: {
        es: [
          "Automatiza un recorrido funcional completo desde login SSO hasta interacción con el agente conversacional.",
          "Valida respuestas del chat y carga de dashboards, cubriendo puntos críticos de una experiencia real de usuario.",
          "Utiliza variables de entorno para proteger credenciales, dominios privados y datos sensibles del proyecto.",
        ],
        en: [
          "Automates a complete functional journey from SSO login to interaction with the conversational agent.",
          "Validates chat responses and dashboard loading, covering critical points of a real user experience.",
          "Uses environment variables to protect credentials, private domains, and sensitive project data.",
        ],
      },
      stack: ["Cypress", "JavaScript", "Node.js", "SSO", "E2E Testing", "Env Config"],
      links: [
        {
          label: "GitHub",
          href: "https://github.com/jose-maria13/cypress-conversational-agent-e2e",
        },
      ],
    },
  ],
};
