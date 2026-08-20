export type LocaleCopy = {
  es: string;
  en: string;
};

export type TechAccent = "data" | "dev";

export type RoleTechnology =
  | string
  | {
      label: string;
      items: string[];
    };

export type RoleProfile = {
  id: string;
  title: LocaleCopy;
  technologies: RoleTechnology[];
  accent: TechAccent;
};

export type TimelineItem = {
  id: string;
  period: LocaleCopy;
  title: LocaleCopy;
  description: LocaleCopy;
};

export type ExperienceItem = {
  id: string;
  title: LocaleCopy;
  statusLabel?: LocaleCopy;
  duration: LocaleCopy;
  description: LocaleCopy;
  stack: string[];
  url?: string;
  urlLabel?: string;
  hideUrlPrefix?: boolean;
};

export type ProjectLink = {
  label: string;
  href: string;
};

export type ProjectItem = {
  id: string;
  title: string;
  category: LocaleCopy;
  summary: LocaleCopy;
  highlights: {
    es: string[];
    en: string[];
  };
  stack: string[];
  links: ProjectLink[];
};

export type ContactLink = {
  id: "gmail" | "linkedin" | "github" | "cv";
  label: string;
  value: string;
  href: string;
};

export type LanguageItem = {
  id: string;
  name: LocaleCopy;
  level: LocaleCopy;
  proficiency: number;
};

export type CertificationPlatformId =
  | "coderhouse"
  | "coursera"
  | "udemy"
  | "google"
  | "aws"
  | "platzi"
  | "linkedin"
  | "otros";

export type CertificationPlatform = {
  id: CertificationPlatformId;
  label: LocaleCopy;
};

/**
 * image: ruta pública, ej. `/certifications/coursera/mi-cert.png`
 * credentialUrl: link oficial opcional (Coursera/Verify/etc). Si no está, la card no es clickeable hacia afuera.
 */
export type CertificationItem = {
  id: string;
  platformId: CertificationPlatformId;
  title: LocaleCopy;
  year?: string;
  image: string;
  credentialUrl?: string;
};

export type PortfolioContent = {
  name: string;
  contact: ContactLink[];
  roles: RoleProfile[];
  education: LocaleCopy;
  languages: LanguageItem[];
  about: {
    timeline: TimelineItem[];
    personal: {
      es: string[];
      en: string[];
    };
  };
  experiences: ExperienceItem[];
  projects: ProjectItem[];
  certificationPlatforms: CertificationPlatform[];
  certifications: CertificationItem[];
};
