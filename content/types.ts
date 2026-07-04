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
  duration: LocaleCopy;
  description: LocaleCopy;
  stack: string[];
};

export type PortfolioContent = {
  name: string;
  roles: RoleProfile[];
  education: LocaleCopy;
  about: {
    timeline: TimelineItem[];
    personal: {
      es: string[];
      en: string[];
    };
  };
  experiences: ExperienceItem[];
};
