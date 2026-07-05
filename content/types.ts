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
  id: "gmail" | "linkedin" | "github";
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
};
