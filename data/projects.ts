export interface ProjectTranslation {
  description: string;
  challenge: string;
  solution: string;
  results: string[];
}

export interface Project {
  slug: string;
  client: string;
  industry: string;
  services: string[];
  featured: boolean;
  coverImage: string | null;
  instagramUrl?: string;
  websiteUrl?: string;
  translations: {
    es: ProjectTranslation;
    en: ProjectTranslation;
  };
}

export const projects: Project[] = [
  {
    slug: "roller-now",
    client: "Roller Now",
    industry: "Deco & Hogar",
    services: ["ingenieria-de-contenido"],
    featured: true,
    coverImage: "/images/proyectos/roller-now-cover.jpg",
    instagramUrl: "https://www.instagram.com/rollernow.arg/",
    translations: {
      es: {
        description:
          "Marca de lifestyle con productos pensados para una comunidad activa. Les creamos todo el contenido de video: desde el guion hasta la entrega final.",
        challenge:
          "Roller Now necesitaba contenido de video que conectara genuinamente con sus buyer personas y distintos públicos, sin sonar genérico ni ajeno al producto.",
        solution:
          "Aplicamos ingeniería de contenido: investigamos el producto y los públicos, guionamos cada pieza, grabamos, editamos y entregamos videos pensados estratégicamente para conectar con cada segmento de audiencia.",
        results: [
          "Contenido de video producido de inicio a fin: guion, grabación y edición",
          "Piezas adaptadas a distintos buyer personas y momentos del funnel",
          "Canal de Instagram con contenido propio y consistente",
        ],
      },
      en: {
        description:
          "Lifestyle brand with products designed for an active community. We created all their video content: from scripting to final delivery.",
        challenge:
          "Roller Now needed video content that genuinely connected with their buyer personas and different audiences, without sounding generic or disconnected from the product.",
        solution:
          "We applied content engineering: researched the product and audiences, scripted each piece, filmed, edited, and delivered videos strategically designed to connect with each audience segment.",
        results: [
          "Video content produced end-to-end: scripting, filming, and editing",
          "Pieces adapted to different buyer personas and funnel stages",
          "Instagram channel with original, consistent content",
        ],
      },
    },
  },
  {
    slug: "perez-bonadero",
    client: "Pérez Bonadero SRL",
    industry: "Servicios / B2B",
    services: ["arquitectura-digital"],
    featured: true,
    coverImage: "/images/proyectos/perez-bonadero-cover.jpg",
    websiteUrl: "https://www.perezbonaderosrl.com",
    translations: {
      es: {
        description:
          "Empresa sin presencia digital alguna. Construimos desde cero toda su identidad online: LinkedIn, Google y una landing page que hoy rankea cuando buscan la empresa.",
        challenge:
          "Pérez Bonadero SRL no tenía ningún activo digital. Sin perfiles en redes, sin presencia en Google y sin sitio web. Para sus clientes potenciales, la empresa simplemente no existía online.",
        solution:
          "Creamos los perfiles de LinkedIn de los directores fundadores, la página de empresa verificada en LinkedIn, el perfil de negocio verificado en Google y una landing page indexada. Hoy la empresa aparece en los primeros resultados cuando la buscan.",
        results: [
          "Perfiles de LinkedIn de directores fundadores creados y activos",
          "Página de empresa verificada en LinkedIn",
          "Perfil de negocio verificado en Google",
          "Landing page indexada que rankea en primeros puestos para búsquedas de la empresa",
        ],
      },
      en: {
        description:
          "Company with zero digital presence. We built their entire online identity from scratch: LinkedIn, Google, and a landing page that now ranks when people search for the company.",
        challenge:
          "Pérez Bonadero SRL had no digital assets at all. No social profiles, no Google presence, no website. For potential clients, the company simply didn't exist online.",
        solution:
          "We created LinkedIn profiles for the founding directors, a verified company page on LinkedIn, a verified Google Business profile, and an indexed landing page. Today the company appears in the top results when searched.",
        results: [
          "LinkedIn profiles for founding directors created and active",
          "Verified company page on LinkedIn",
          "Verified Google Business Profile",
          "Indexed landing page ranking at the top for company name searches",
        ],
      },
    },
  },
];
