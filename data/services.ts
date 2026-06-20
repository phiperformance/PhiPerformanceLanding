export interface ServiceTranslation {
  title: string;
  tagline: string;
  description: string;
  features: string[];
  painPoints: string[];
}

export interface Service {
  slug: string;
  icon: string;
  category: "setup" | "ads" | "content" | "web" | "crm";
  priceRange?: string;
  translations: {
    es: ServiceTranslation;
    en: ServiceTranslation;
  };
}

export const services: Service[] = [
  {
    slug: "arquitectura-digital",
    icon: "⬡",
    category: "setup",
    priceRange: "Setup fee único",
    translations: {
      es: {
        title: "Arquitectura Digital",
        tagline: "El cimiento antes de la escala.",
        description:
          "Ordenamos todos tus activos digitales para que trabajen como un sistema. Píxeles configurados, dominios verificados, Business Manager estructurado y Google Business optimizado.",
        features: [
          "Configuración y verificación de Meta Business Manager",
          "Instalación y auditoría de píxeles (Meta, Google, GA4)",
          "Configuración de dominio y DNS",
          "Optimización de Google Business Profile",
          "Auditoría de activos digitales existentes",
          "Documento de arquitectura entregable",
        ],
        painPoints: [
          "Tus campañas no atribuyen correctamente las conversiones",
          "Tenés múltiples cuentas de ads sin estructura clara",
          "No sabés si tu píxel está bien instalado",
          "Tu Google Business no aparece en búsquedas locales",
        ],
      },
      en: {
        title: "Digital Architecture",
        tagline: "The foundation before the scale.",
        description:
          "We organize all your digital assets so they work as a system. Properly configured pixels, verified domains, structured Business Manager, and optimized Google Business.",
        features: [
          "Meta Business Manager setup and verification",
          "Pixel installation and audit (Meta, Google, GA4)",
          "Domain and DNS configuration",
          "Google Business Profile optimization",
          "Existing digital assets audit",
          "Deliverable architecture document",
        ],
        painPoints: [
          "Your campaigns don't correctly attribute conversions",
          "You have multiple ad accounts with no clear structure",
          "You don't know if your pixel is properly installed",
          "Your Google Business doesn't show up in local searches",
        ],
      },
    },
  },
  {
    slug: "performance-ads",
    icon: "◈",
    category: "ads",
    priceRange: "Desde $250.000/mes",
    translations: {
      es: {
        title: "Performance Ads",
        tagline: "Cada peso invertido, justificado.",
        description:
          "Gestionamos tus campañas de Meta Ads y Google Ads con foco en ROAS y conversiones reales. No reportamos métricas de vanidad — co-construimos resultados con vos.",
        features: [
          "Estrategia y estructura de campañas Meta Ads",
          "Estrategia y estructura de campañas Google Ads",
          "Segmentación avanzada y audiencias personalizadas",
          "Creatividades publicitarias con brief estratégico",
          "Optimización semanal y reportes de performance",
          "A/B testing de audiencias y creatividades",
        ],
        painPoints: [
          "Invertís en publicidad pero no ves retorno claro",
          "Tu agencia anterior te reportaba métricas pero no resultados",
          "No tenés claro cuánto te cuesta adquirir un cliente",
          "Tus campañas están activas pero sin estrategia de embudo",
        ],
      },
      en: {
        title: "Performance Ads",
        tagline: "Every peso invested, justified.",
        description:
          "We manage your Meta Ads and Google Ads campaigns focused on ROAS and real conversions. We don't report vanity metrics — we co-build results with you.",
        features: [
          "Meta Ads campaign strategy and structure",
          "Google Ads campaign strategy and structure",
          "Advanced segmentation and custom audiences",
          "Ad creatives with strategic brief",
          "Weekly optimization and performance reports",
          "Audience and creative A/B testing",
        ],
        painPoints: [
          "You invest in advertising but don't see clear returns",
          "Your previous agency reported metrics but not results",
          "You're not clear on how much it costs to acquire a client",
          "Your campaigns are active but without a funnel strategy",
        ],
      },
    },
  },
  {
    slug: "ingenieria-de-contenido",
    icon: "◎",
    category: "content",
    priceRange: "Desde $150.000/mes",
    translations: {
      es: {
        title: "Ingeniería de Contenido",
        tagline: "Contenido que retiene y convierte.",
        description:
          "Producimos Reels y Carruseles con hooks de retención y CTAs de venta. El contenido no es decorativo — es parte del embudo.",
        features: [
          "Estrategia de contenido mensual con calendario",
          "Producción de Reels con hooks de retención",
          "Diseño de Carruseles de ventas",
          "Copywriting con framework de conversión",
          "Análisis de métricas de contenido",
          "Brief de contenido para equipo interno (si aplica)",
        ],
        painPoints: [
          "Publicás contenido pero no genera leads ni ventas",
          "No sabés qué hooks funcionan para tu audiencia",
          "Tu contenido tiene alcance pero no conversión",
          "No tenés tiempo ni equipo para producir contenido estratégico",
        ],
      },
      en: {
        title: "Content Engineering",
        tagline: "Content that retains and converts.",
        description:
          "We produce Reels and Carousels with retention hooks and sales CTAs. Content is not decorative — it's part of the funnel.",
        features: [
          "Monthly content strategy with calendar",
          "Reels production with retention hooks",
          "Sales carousel design",
          "Copywriting with conversion framework",
          "Content metrics analysis",
          "Content brief for internal team (if applicable)",
        ],
        painPoints: [
          "You post content but it doesn't generate leads or sales",
          "You don't know which hooks work for your audience",
          "Your content has reach but no conversion",
          "You don't have time or team for strategic content production",
        ],
      },
    },
  },
  {
    slug: "desarrollo-web",
    icon: "◻︎",
    category: "web",
    priceRange: "Desde $500.000",
    translations: {
      es: {
        title: "Desarrollo Web",
        tagline: "Sitios que convierten, no solo que se ven bien.",
        description:
          "Desarrollamos landing pages y sitios web orientados a conversión. Velocidad, SEO técnico y UX diseñados para llevar al visitante a la acción.",
        features: [
          "Diseño y desarrollo de landing pages de alta conversión",
          "Sitios web multipage con Next.js",
          "SEO técnico on-page",
          "Integración de píxeles y tracking",
          "Optimización de velocidad (Core Web Vitals)",
          "Responsive y mobile-first",
        ],
        painPoints: [
          "Tu sitio actual no convierte el tráfico en clientes",
          "Tarda más de 3 segundos en cargar",
          "No aparece en Google para búsquedas relevantes",
          "Tenés tráfico pero no generás consultas",
        ],
      },
      en: {
        title: "Web Development",
        tagline: "Sites that convert, not just look good.",
        description:
          "We develop conversion-oriented landing pages and websites. Speed, technical SEO, and UX designed to move visitors to action.",
        features: [
          "High-conversion landing page design and development",
          "Multipage websites with Next.js",
          "Technical on-page SEO",
          "Pixel and tracking integration",
          "Speed optimization (Core Web Vitals)",
          "Responsive and mobile-first",
        ],
        painPoints: [
          "Your current site doesn't convert traffic into clients",
          "It takes more than 3 seconds to load",
          "It doesn't appear on Google for relevant searches",
          "You have traffic but don't generate inquiries",
        ],
      },
    },
  },
  {
    slug: "crm-kommo",
    icon: "◉",
    category: "crm",
    priceRange: "Desde $200.000",
    translations: {
      es: {
        title: "Optimización CRM",
        tagline: "Ningún lead se pierde en el camino.",
        description:
          "Implementamos Kommo CRM con chatbots y embudos de venta para que tu equipo de ventas cierre más sin perder oportunidades en el proceso.",
        features: [
          "Implementación y configuración de Kommo CRM",
          "Diseño de pipelines de ventas",
          "Integración con WhatsApp Business",
          "Chatbots de calificación y seguimiento",
          "Capacitación del equipo comercial",
          "Automatizaciones de seguimiento post-lead",
        ],
        painPoints: [
          "Tus vendedores pierden leads por falta de seguimiento",
          "No tenés visibilidad del pipeline de ventas",
          "Los leads llegan pero nadie los contacta a tiempo",
          "No sabés en qué etapa se cae la mayoría de tus prospects",
        ],
      },
      en: {
        title: "CRM Optimization",
        tagline: "No lead gets lost along the way.",
        description:
          "We implement Kommo CRM with chatbots and sales funnels so your sales team closes more without losing opportunities in the process.",
        features: [
          "Kommo CRM implementation and configuration",
          "Sales pipeline design",
          "WhatsApp Business integration",
          "Qualification and follow-up chatbots",
          "Sales team training",
          "Post-lead follow-up automations",
        ],
        painPoints: [
          "Your salespeople lose leads due to lack of follow-up",
          "You have no visibility of the sales pipeline",
          "Leads come in but no one contacts them in time",
          "You don't know at which stage most of your prospects drop off",
        ],
      },
    },
  },
];
