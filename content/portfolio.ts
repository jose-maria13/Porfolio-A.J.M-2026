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
      href: "/cv-jose-maria-atonur-2026.pdf",
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
        "Mi objetivo es que los datos no sean solo información almacenada, sino activos capaces de aportar valor mediante flujos seguros, trazables y preparados para escalar.",
        "Mi base en QA me aportó rigurosidad analítica: aprendí a automatizar pruebas, validar procesos críticos y detectar fallas antes de que impacten en el producto. Hoy aplico esa mirada en arquitecturas de Big Data, servicios cloud en AWS y modelos de Machine Learning.",
        "El perfil Full Stack me permite entender el ciclo completo: desde la nube, la base de datos y los pipelines, hasta la integración con interfaces y experiencias de usuario finales.",
        "Me interesa traducir requerimientos complejos a un lenguaje claro, conectar equipos técnicos y funcionales, y construir soluciones colaborativas donde la calidad humana sea tan importante como la calidad técnica.",
      ],
      en: [
        "My goal is to make data more than stored information: it should become an asset that delivers value through secure, traceable, and scalable workflows.",
        "My QA background gave me analytical rigor. I learned to automate tests, validate critical processes, and detect failures before they impact the product. Today I apply that mindset to Big Data architectures, AWS cloud services, and Machine Learning models.",
        "My Full Stack profile helps me understand the full cycle: from cloud infrastructure, databases, and pipelines to integration with interfaces and final user experiences.",
        "I focus on translating complex requirements into clear language, connecting technical and functional teams, and building collaborative solutions where human quality matters as much as technical quality.",
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
  certificationPlatforms: [
    { id: "aws", label: { es: "AWS", en: "AWS" } },
    { id: "coderhouse", label: { es: "Coderhouse", en: "Coderhouse" } },
    { id: "udemy", label: { es: "Udemy", en: "Udemy" } },
    { id: "coursera", label: { es: "Coursera", en: "Coursera" } },
    { id: "google", label: { es: "Google", en: "Google" } },
    { id: "platzi", label: { es: "Platzi", en: "Platzi" } },
    { id: "linkedin", label: { es: "LinkedIn Learning", en: "LinkedIn Learning" } },
    { id: "otros", label: { es: "Otros", en: "Other" } },
  ],
  certifications: [
    {
      id: "aws-cloud-practitioner",
      platformId: "aws",
      title: {
        es: "AWS Certified Cloud Practitioner",
        en: "AWS Certified Cloud Practitioner",
      },
      year: "2025",
      image: "/certifications/aws/cloud-practitioner.png",
      credentialUrl:
        "https://www.credly.com/badges/9cb66081-e284-48f6-95c9-b91ed315800b/linked_in_profile",
    },
    {
      id: "coderhouse-testing-qa-manual",
      platformId: "coderhouse",
      title: {
        es: "Testing QA Manual",
        en: "Manual QA Testing",
      },
      year: "2024",
      image: "/certifications/coderhouse/testing-qa-manual.png",
    },
    {
      id: "coderhouse-publicidad-redes-avanzado",
      platformId: "coderhouse",
      title: {
        es: "Marketing Digital: Publicidad en Redes Avanzado",
        en: "Digital Marketing: Advanced Social Ads",
      },
      year: "2023",
      image: "/certifications/coderhouse/publicidad-redes-avanzado.png",
    },
    {
      id: "coderhouse-community-manager-publicidad",
      platformId: "coderhouse",
      title: {
        es: "Marketing Digital: Community Manager & Publicidad",
        en: "Digital Marketing: Community Manager & Advertising",
      },
      year: "2022",
      image: "/certifications/coderhouse/community-manager-publicidad.png",
    },
    {
      id: "udemy-bases-datos-sql-tester",
      platformId: "udemy",
      title: {
        es: "Bases de datos y SQL para tester",
        en: "Databases and SQL for Testers",
      },
      year: "2024",
      image: "/certifications/udemy/base-de-datos-sql-tester.png",
      credentialUrl:
        "https://www.udemy.com/certificate/UC-10d88c15-a3b8-4e3b-a0cd-bb65aa09302e/",
    },
    {
      id: "udemy-google-sheets",
      platformId: "udemy",
      title: {
        es: "Especialización de Google Sheets",
        en: "Google Sheets Specialization",
      },
      year: "2024",
      image: "/certifications/udemy/google-sheets.png",
      credentialUrl:
        "https://www.udemy.com/certificate/UC-475202d3-cf6b-4b60-874e-091904008242/",
    },
    {
      id: "udemy-n8n-agentes-ia",
      platformId: "udemy",
      title: {
        es: "n8n Total: Agentes IA y automatización sin código",
        en: "n8n Total: AI Agents and No-Code Automation",
      },
      year: "2025",
      image: "/certifications/udemy/n8n-agentes-ia.png",
      credentialUrl:
        "https://www.udemy.com/certificate/UC-8beb1065-6ea0-4a85-bc7e-93b8bd95d08a/",
    },
    {
      id: "udemy-aws-desde-cero",
      platformId: "udemy",
      title: {
        es: "Formación AWS desde cero",
        en: "AWS Training from Scratch",
      },
      year: "2025",
      image: "/certifications/udemy/uc-1ab96526.png",
      credentialUrl:
        "https://www.udemy.com/certificate/UC-1ab96526-bc18-472d-9601-7f69325083a5/",
    },
    {
      id: "udemy-postman-masterclass",
      platformId: "udemy",
      title: {
        es: "Testing con Postman: Masterclass",
        en: "Testing with Postman: Masterclass",
      },
      year: "2025",
      image: "/certifications/udemy/uc-28a92b27.png",
      credentialUrl:
        "https://www.udemy.com/certificate/UC-28a92b27-3b02-4de1-a0c4-f334dec1b776/",
    },
    {
      id: "udemy-aws-cloud-practitioner-prep",
      platformId: "udemy",
      title: {
        es: "AWS Certified Cloud Practitioner (CLF-C02)",
        en: "AWS Certified Cloud Practitioner (CLF-C02)",
      },
      year: "2025",
      image: "/certifications/udemy/uc-514e7f8b.png",
      credentialUrl:
        "https://www.udemy.com/certificate/UC-514e7f8b-f943-4032-9fe3-355b6145ceb5/",
    },
  ],
};
