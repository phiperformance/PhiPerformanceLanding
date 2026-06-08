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
  translations: {
    es: ProjectTranslation;
    en: ProjectTranslation;
  };
}

export const projects: Project[] = [
  {
    slug: "roller-now",
    client: "Roller Now",
    industry: "E-commerce / Hogar",
    services: ["desarrollo-web", "performance-ads", "arquitectura-digital"],
    featured: true,
    coverImage: null,
    translations: {
      es: {
        description:
          "E-commerce de cortinas y persianas a medida en Córdoba. Producto altamente personalizable que requería un proceso de cotización claro y un embudo de ventas estructurado.",
        challenge:
          "Roller Now tenía demanda orgánica pero no contaba con una estructura digital para capturarla. Sin píxeles configurados, sin landing de conversión y sin sistema de seguimiento de leads.",
        solution:
          "Implementamos la Arquitectura Digital completa, desarrollamos una landing de alta conversión con cotizador integrado y lanzamos campañas de Meta Ads segmentadas por zona geográfica en Córdoba.",
        results: [
          "Reducción del CPL en un 40% en los primeros 60 días",
          "Tasa de conversión de landing: 8,3%",
          "Pipeline de leads estructurado con seguimiento automatizado",
        ],
      },
      en: {
        description:
          "Custom blinds and curtains e-commerce in Córdoba. Highly customizable product requiring a clear quotation process and structured sales funnel.",
        challenge:
          "Roller Now had organic demand but no digital structure to capture it. No pixels configured, no conversion landing page, and no lead tracking system.",
        solution:
          "We implemented the complete Digital Architecture, developed a high-conversion landing page with integrated quote calculator, and launched geographically segmented Meta Ads campaigns in Córdoba.",
        results: [
          "40% CPL reduction in the first 60 days",
          "Landing conversion rate: 8.3%",
          "Structured lead pipeline with automated follow-up",
        ],
      },
    },
  },
  {
    slug: "perez-bonadero",
    client: "Pérez Bonadero SRL",
    industry: "Servicios / B2B",
    services: ["arquitectura-digital", "performance-ads", "crm-kommo"],
    featured: true,
    coverImage: null,
    translations: {
      es: {
        description:
          "Empresa de liquidación de siniestros con foco en clientes corporativos. Mercado B2B con ciclos de venta largos y alta necesidad de seguimiento.",
        challenge:
          "El equipo comercial perdía leads por falta de un sistema de seguimiento. Los contactos llegaban por WhatsApp y email sin ningún proceso estandarizado de calificación.",
        solution:
          "Implementamos Kommo CRM con pipelines diferenciados por tipo de siniestro, integramos WhatsApp Business y configuramos chatbots de calificación inicial. Complementamos con campañas de Google Ads para búsquedas B2B.",
        results: [
          "Tiempo de respuesta a leads reducido de 48hs a menos de 2hs",
          "Visibilidad completa del pipeline de ventas",
          "Tasa de cierre incrementada un 25%",
        ],
      },
      en: {
        description:
          "Claims settlement company focused on corporate clients. B2B market with long sales cycles and high follow-up needs.",
        challenge:
          "The sales team was losing leads due to lack of a follow-up system. Contacts arrived via WhatsApp and email with no standardized qualification process.",
        solution:
          "We implemented Kommo CRM with pipelines differentiated by claim type, integrated WhatsApp Business, and configured initial qualification chatbots. Complemented with Google Ads campaigns for B2B searches.",
        results: [
          "Lead response time reduced from 48h to under 2h",
          "Full visibility of the sales pipeline",
          "Closing rate increased by 25%",
        ],
      },
    },
  },
  {
    slug: "titus-cars",
    client: "Titus Cars",
    industry: "Automotriz",
    services: ["performance-ads", "ingenieria-de-contenido", "desarrollo-web"],
    featured: true,
    coverImage: null,
    translations: {
      es: {
        description:
          "Concesionaria de autos usados en Córdoba. Mercado competitivo donde la velocidad de respuesta y la confianza son factores clave de conversión.",
        challenge:
          "Alta competencia en búsquedas de autos usados en Córdoba, con bajo diferencial de marca y sin contenido que generara confianza antes de la consulta.",
        solution:
          "Desarrollamos una estrategia de contenido con Reels mostrando el proceso de preparación de cada auto (trust-building), complementada con campañas de Meta Ads con formularios de lead generation y un sitio web con catálogo de vehículos.",
        results: [
          "Incremento del 60% en consultas mensuales",
          "Reducción del costo por lead en Meta Ads",
          "Comunidad activa en Instagram con +5k seguidores en 6 meses",
        ],
      },
      en: {
        description:
          "Used car dealership in Córdoba. Competitive market where response speed and trust are key conversion factors.",
        challenge:
          "High competition in used car searches in Córdoba, with low brand differentiation and no content that generated trust before the inquiry.",
        solution:
          "We developed a content strategy with Reels showing the preparation process of each car (trust-building), complemented with Meta Ads campaigns with lead generation forms and a website with vehicle catalog.",
        results: [
          "60% increase in monthly inquiries",
          "Reduced cost per lead on Meta Ads",
          "Active Instagram community with +5k followers in 6 months",
        ],
      },
    },
  },
  {
    slug: "san-pietro",
    client: "San Pietro",
    industry: "Gastronomía",
    services: ["performance-ads", "ingenieria-de-contenido", "arquitectura-digital"],
    featured: false,
    coverImage: null,
    translations: {
      es: {
        description:
          "Restaurante en Córdoba con propuesta gastronómica italiana de autor. Necesidad de llenar mesas en horarios de baja demanda y posicionarse como referente gastronómico.",
        challenge:
          "Sin presencia digital estructurada y con una propuesta de valor que no se comunicaba correctamente. El boca en boca no era suficiente para sostener la operación.",
        solution:
          "Construimos la arquitectura digital desde cero, lanzamos Meta Ads con creatividades que mostraban el ambiente y los platos, y desarrollamos una estrategia de contenido enfocada en el storytelling del chef y del producto.",
        results: [
          "Ocupación en horarios de baja demanda incrementada un 35%",
          "Incremento en reservas a través de Instagram",
          "Alcance orgánico multiplicado por 4 en 3 meses",
        ],
      },
      en: {
        description:
          "Restaurant in Córdoba with an Italian author cuisine concept. Need to fill tables during low-demand hours and position as a gastronomic reference.",
        challenge:
          "No structured digital presence and a value proposition that wasn't being communicated correctly. Word of mouth wasn't enough to sustain the operation.",
        solution:
          "We built the digital architecture from scratch, launched Meta Ads with creatives showcasing the ambiance and dishes, and developed a content strategy focused on the chef and product storytelling.",
        results: [
          "35% increase in occupancy during low-demand hours",
          "Increase in reservations through Instagram",
          "Organic reach multiplied by 4 in 3 months",
        ],
      },
    },
  },
];
