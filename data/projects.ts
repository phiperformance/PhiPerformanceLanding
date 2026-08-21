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
  {
    slug: "nodo-iphone-store",
    client: "Nodo | iPhone Store",
    industry: "Retail / Tecnología",
    services: ["arquitectura-digital", "ingenieria-de-contenido", "performance-ads"],
    featured: true,
    coverImage: "/images/proyectos/nodo-iphone-store-cover.png",
    instagramUrl: "https://www.instagram.com/nodo.iphonestore/",
    translations: {
      es: {
        description:
          "Venta de iPhones nuevos y usados en Córdoba. Construimos la identidad de marca completa y la estrategia de contenido y pauta digital desde cero, posicionando a Nodo como el asesor de confianza del mercado de segunda mano.",
        challenge:
          "El mercado de reventa de celulares está dominado por el vendedor informal sin identidad y el influencer que prioriza el alcance por sobre la autoridad. Nodo necesitaba diferenciarse de ambos frente a un comprador que no compra al precio más bajo, sino a quien le da seguridad de que el equipo no está robado, bloqueado o con la batería deteriorada.",
        solution:
          "Diseñamos e implementamos la identidad de marca completa —sistema visual, paleta onyx y champagne gold, vocabulario de marca— posicionando a Nodo como el asesor de tecnología de confianza, no el vendedor ni el influencer. Construimos una base de producción de contenido en Notion con más de 29 piezas organizadas en tres pilares (Valor, Comercial, Humanización), configuramos la presencia en Instagram, Facebook, TikTok y WhatsApp Business, y lanzamos una campaña de Meta Ads a Mensajes de WhatsApp con ubicaciones Advantage+.",
        results: [
          "Identidad de marca completa desarrollada e implementada en todos los puntos de contacto",
          "Base de contenido en Notion con más de 29 piezas organizadas en tres pilares estratégicos",
          "Presencia configurada y calibrada en Instagram, Facebook, TikTok y WhatsApp Business",
          "Campaña de Meta Ads activa con objetivo de Mensajes de WhatsApp, en evaluación post-aprendizaje",
        ],
      },
      en: {
        description:
          "iPhone resale business in Córdoba, Argentina. We built the complete brand identity and the content and digital advertising strategy from scratch, positioning Nodo as the trusted tech advisor of the resale market.",
        challenge:
          "The phone resale market is dominated by two extremes: the informal seller with no identity or consistency, and the social media \"showoff\" who prioritizes reach over real authority. Nodo needed to stand apart from both, in front of a buyer who wants an iPhone but distrusts the resale market — worried about buying a stolen, locked, or worn-out device — and who doesn't buy at the lowest price, but from whoever gives them security.",
        solution:
          "We designed and implemented the complete brand identity — visual system, onyx and champagne gold palette, brand vocabulary — positioning Nodo as the trusted tech advisor, not the salesman or the influencer. We built a content production base in Notion with more than 29 pieces organized into three pillars (Value, Commercial, Humanization), set up the presence on Instagram, Facebook, TikTok, and WhatsApp Business, and launched a Meta Ads campaign for WhatsApp Messages with Advantage+ placements.",
        results: [
          "Complete brand identity developed and implemented across every touchpoint",
          "Notion content base with 29+ pieces organized into three strategic pillars",
          "Presence configured and calibrated across Instagram, Facebook, TikTok, and WhatsApp Business",
          "Active Meta Ads campaign for WhatsApp Messages, in post-learning-phase evaluation",
        ],
      },
    },
  },
  {
    slug: "ruta-20-impulso",
    client: "Ruta 20 Impulso",
    industry: "Servicios Financieros",
    services: ["desarrollo-web", "arquitectura-digital", "performance-ads"],
    featured: true,
    coverImage: "/images/proyectos/ruta-20-impulso-cover.png",
    websiteUrl: "https://www.ruta20impulso.com.ar",
    translations: {
      es: {
        description:
          "Agencia oficial de AutoCrédito S.A. en Córdoba Capital. Desarrollamos su landing page de conversión, corregimos la medición de leads y estructuramos su estrategia de pauta en Meta Ads, todo bajo un estricto sistema de cumplimiento regulatorio de marca.",
        challenge:
          "Ruta 20 Impulso tenía pauta corriendo en Meta Ads sin ninguna infraestructura digital que la sostuviera: Instagram sin estrategia, Google Business marcado como cerrado permanentemente, TikTok invisible y ningún sitio propio que centralizara la conversión. A esto se sumaba un desafío regulatorio de fondo: el producto es un plan de capitalización aprobado por IGJ, no un crédito bancario, y la comunicación debía respetar esa distinción en cada pieza.",
        solution:
          "Desarrollamos una landing page mobile-first como hub de conversión para tráfico orgánico y pago, con animaciones de scroll, botón flotante de WhatsApp, FAQ en acordeón y datos estructurados JSON-LD para SEO local. Instalamos GA4 y corregimos un error estructural del funnel que excluía del conteo a las conversiones que llegaban por el botón flotante, y estamos migrando el disparo de los píxeles para que ocurra recién tras una respuesta confirmada del backend. Estructuramos las campañas de Meta Ads por producto y audiencia, y construimos un sistema de cumplimiento de marca para que cada pieza respete las reglas regulatorias de AutoCrédito.",
        results: [
          "Landing page de conversión publicada y funcionando como hub de tráfico orgánico y pago",
          "Funnel de medición en GA4 corregido: de un paso obligatorio que subregistraba conversiones a un funnel real de dos pasos",
          "Campañas de Meta Ads estructuradas por producto y audiencia, activas y en optimización continua",
          "Sistema de cumplimiento de marca aplicado a cada pieza de contenido y pauta",
        ],
      },
      en: {
        description:
          "Official AutoCrédito S.A. agency in Córdoba Capital. We built their conversion landing page, fixed their lead measurement, and structured their Meta Ads strategy, all under a strict brand compliance system.",
        challenge:
          "Ruta 20 Impulso had Meta Ads running with no digital infrastructure behind it: Instagram with no strategy, Google Business marked as permanently closed, TikTok invisible, and no owned site to centralize conversion. On top of that came a deeper regulatory challenge: the product is an IGJ-approved capitalization plan, not a bank loan, and every piece of communication had to respect that distinction.",
        solution:
          "We developed a mobile-first landing page as a conversion hub for organic and paid traffic, with scroll animations, a floating WhatsApp button, an accordion FAQ, and JSON-LD structured data for local SEO. We installed GA4 and fixed a structural funnel error that was excluding conversions coming through the floating button, and we're migrating both pixels to fire only after a confirmed backend response. We structured Meta Ads campaigns by product and audience, and built a brand compliance system so every piece respects AutoCrédito's regulatory rules.",
        results: [
          "Conversion landing page published and running as the hub for organic and paid traffic",
          "GA4 measurement funnel fixed: from a mandatory step that under-counted conversions to a real two-step funnel",
          "Meta Ads campaigns structured by product and audience, active and in continuous optimization",
          "Brand compliance system applied to every piece of content and advertising",
        ],
      },
    },
  },
];
