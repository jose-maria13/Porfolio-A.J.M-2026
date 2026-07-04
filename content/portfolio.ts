import type { PortfolioContent } from "./types";

export const portfolio: PortfolioContent = {
  name: "Jose Maria Atonur",
  roles: [
    {
      id: "software-quality-assurance-qa-automation",
      title: {
        es: "Software Quality Assurance And QA Automation",
        en: "Software Quality Assurance And QA Automation",
      },
      technologies: [
        "Python",
        "Selenium",
        "Cypress",
        "Postman",
        "CI/CD",
        "SQL",
        "Spark",
        "SAS",
        "Data Integration",
        "MobaXterm",
        "Oracle",
      ],
      accent: "dev",
    },
    {
      id: "cloud-data-engineer",
      title: {
        es: "Cloud Data Engineer",
        en: "Cloud Data Engineer",
      },
      technologies: [
        {
          label: "AWS",
          items: [
            "Glue",
            "Step Functions",
            "S3",
            "Lambda",
            "DynamoDB",
            "CloudWatch",
            "Athena",
          ],
        },
        "Airflow",
      ],
      accent: "data",
    },
    {
      id: "machine-learning-data-analyst",
      title: {
        es: "Machine Learning Data Analyst",
        en: "Machine Learning Data Analyst",
      },
      technologies: [
        "SageMaker",
        {
          label: "Snowflake",
          items: ["Stored Procedures", "Data Warehouse", "Database"],
        },
        "Oracle",
        "Linux",
      ],
      accent: "data",
    },
    {
      id: "full-stack-developer",
      title: {
        es: "Full Stack Developer",
        en: "Full Stack Developer",
      },
      technologies: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Supabase",
        "MongoDB",
        "JavaScript",
      ],
      accent: "dev",
    },
  ],
  education: {
    es: "Técnico Universitario en Desarrollo y Calidad de Software (UNSTA)",
    en: "University Technician in Software Development and Quality (UNSTA)",
  },
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
        "Desde chico tuve interés por el ámbito tecnológico, empezando por juegos shooter y experiencias similares que despertaron mi curiosidad por cómo se construyen las cosas digitales. También disfruto mucho el mate y el café.",
        "Siempre me consideré una persona creativa, pero sobre todo una persona que busca entender. Me gusta saber qué hago, por qué lo hago y cuáles son los puntos de mejora de cada desafío que me propongo.",
        "Creo que en el ámbito IT una de las características que más se pierden es la calidad humana detrás de la pantalla. Trato de ser siempre algo más que un cuadradito en un Meet: busco conectar con la otra persona de manera sana, cercana y colaborativa.",
      ],
      en: [
        "Outside IT, my hobbies are going to the gym and playing football. They are important parts of my routine because they keep me active, focused, and mentally healthy.",
        "Since I was young, I have been interested in technology, starting with shooter games and similar experiences that made me curious about how digital things are built. I also really enjoy mate and coffee.",
        "I have always considered myself creative, but above all, someone who wants to understand. I like knowing what I am doing, why I am doing it, and where each challenge can be improved.",
        "I believe one of the things that often gets lost in IT is the human quality behind the screen. I try to be more than just a square in a Meet call: I aim to connect with others in a healthy, close, and collaborative way.",
      ],
    },
  },
  experiences: [
    {
      id: "strata-qa-automation-customer-support",
      title: {
        es: "Software Tester, QA Automation and Customer Support",
        en: "Software Tester, QA Automation and Customer Support",
      },
      duration: {
        es: "14 de octubre de 2024 - Actualidad",
        en: "October 14, 2024 - Present",
      },
      description: {
        es: "Strata Analytics es una empresa de análisis de datos donde asumo el rol de testear procesos de análisis de datos, performance de campañas, pipelines automatizados, formatos de tablas, flujos de trabajo, manejo de datos y archivos en la nube, además de análisis de modelos de Machine Learning.",
        en: "Strata Analytics is a data analytics company where I test data analysis processes, campaign performance, automated pipelines, table formats, workflows, cloud data and file handling, and Machine Learning model analysis.",
      },
      stack: ["SQL", "AWS", "Python", "Snowflake"],
    },
  ],
};
