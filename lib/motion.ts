import type { Transition, Variants } from "framer-motion";

/** Preset spring principal: respuesta fluida sin rebote excesivo */
export const springPreset = {
  type: "spring" as const,
  stiffness: 100,
  damping: 20,
};

/** Misma física en formato Transition para `transition` en motion components */
export const springTransition: Transition = {
  type: "spring",
  stiffness: 100,
  damping: 20,
};

/** Entrada escalonada para contenedores (hero, listas) */
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.05,
    },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: springTransition,
  },
};

/** Fondo DAG: solo fundido, sin desplazamiento */
export const staggerBackdrop: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: springTransition,
  },
};
