# Certificaciones — cómo cargarlas

Dejá tus fotos / capturas oficiales en la subcarpeta de la plataforma y registralas en `content/portfolio.ts` → `certifications`.

## Carpetas

| Plataforma | Carpeta |
|---|---|
| Coderhouse | `public/certifications/coderhouse/` |
| Coursera | `public/certifications/coursera/` |
| Udemy | `public/certifications/udemy/` |
| Google | `public/certifications/google/` |
| AWS | `public/certifications/aws/` |
| Platzi | `public/certifications/platzi/` |
| LinkedIn Learning | `public/certifications/linkedin/` |
| Otras | `public/certifications/otros/` |

Formatos recomendados: `.png`, `.jpg`, `.webp` (idealmente landscape o A4 horizontal, peso razonable).

## Entrada en `content/portfolio.ts`

```ts
{
  id: "nombre-unico",
  platformId: "coursera", // coderhouse | coursera | udemy | google | aws | platzi | linkedin | otros
  title: {
    es: "Nombre del certificado",
    en: "Certificate name",
  },
  year: "2024", // opcional
  image: "/certifications/coursera/nombre-unico.png",
  credentialUrl: "https://...", // OPCIONAL — si existe, al hacer click se abre el link oficial
},
```

- Con `credentialUrl`: la card lleva al verificador / página oficial.
- Sin `credentialUrl`: se muestra la imagen, pero no hay link externo.
