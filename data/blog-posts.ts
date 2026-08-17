// ─────────────────────────────────────────────────────────────────────────────
// BLOG — Modelo de contenido
//
// Cada artículo se arma con "bloques" (BlogBlock). Cada bloque se renderiza como
// HTML semántico (h2, h3, p, ul, blockquote), lo cual es ideal para SEO.
//
// PARÁMETROS DE CADA POST (los que cargás a mano):
//   slug        → URL del post: /blog/<slug>. Solo minúsculas, sin acentos, con guiones.
//   title       → Título visible (H1) y base del <title> de Google. 50-60 caracteres.
//   metaTitle?  → (opcional) Reemplaza al title solo en la pestaña/Google si querés
//                 una versión más optimizada con keyword. Si no lo ponés, usa `title`.
//   excerpt     → Resumen. Es la meta description Y el texto de la tarjeta. 140-160 caracteres.
//   date        → Fecha de publicación en formato ISO "AAAA-MM-DD". Ej: "2026-07-11".
//   updated?    → (opcional) Fecha de última actualización, mismo formato.
//   author      → Autor. Normalmente "Phi Performance Marketing".
//   category    → Etiqueta corta. Ej: "Performance Ads", "SEO", "CRM", "Estrategia".
//   keywords    → 3-6 frases de búsqueda a las que apunta el post (long-tail, con "córdoba"
//                 cuando aplique). Ej: ["cuánto invertir en meta ads", "pauta córdoba"].
//   coverImage  → Ruta de la imagen de portada (ej "/images/blog/mi-post.jpg") o null.
//   content     → Array de bloques con el cuerpo del artículo (ver tipos abajo).
//
// TIPOS DE BLOQUE disponibles para `content`:
//   { type: "h2", text: "Subtítulo de sección" }
//   { type: "h3", text: "Subtítulo menor" }
//   { type: "p",  text: "Un párrafo de texto corrido." }
//   { type: "ul", items: ["Ítem uno", "Ítem dos", "Ítem tres"] }
//   { type: "quote", text: "Una frase destacada / cita." }
//
// El tiempo de lectura se calcula automático; no hace falta cargarlo.
// ─────────────────────────────────────────────────────────────────────────────

export type BlogBlock =
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "quote"; text: string };

export interface BlogPost {
  slug: string;
  title: string;
  metaTitle?: string;
  excerpt: string;
  date: string;
  updated?: string;
  author: string;
  category: string;
  keywords: string[];
  coverImage: string | null;
  content: BlogBlock[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "cuanto-invertir-en-meta-ads",
    title: "¿Cuánto necesito invertir en Meta Ads para ver resultados?",
    metaTitle: "¿Cuánto invertir en Meta Ads? Guía para negocios en Córdoba",
    excerpt:
      "La pregunta que todo negocio se hace antes de pautar. La respuesta honesta no es un número: es un método para calcular tu presupuesto según tu negocio.",
    date: "2026-08-06",
    author: "Phi Performance Marketing",
    category: "Performance Ads",
    keywords: [
      "cuánto invertir en meta ads",
      "presupuesto publicidad meta córdoba",
      "cuánto cuesta pauta en instagram",
      "meta ads argentina",
      "agencia meta ads córdoba",
    ],
    coverImage: null,
    content: [
      {
        type: "p",
        text: "Es la primera pregunta que nos hace casi todo cliente en Córdoba antes de pautar: “¿cuánta plata necesito para que esto funcione?”. La respuesta que suena bien es un número redondo. La respuesta honesta es que ese número depende de tu negocio, y hay una forma simple de calcularlo. Vamos a eso.",
      },
      {
        type: "h2",
        text: "La respuesta corta: depende de tu CPA objetivo",
      },
      {
        type: "p",
        text: "El presupuesto no se define “a ojo”. Se define a partir de cuánto te cuesta conseguir un cliente (CPA, costo por adquisición) y cuántos clientes querés por mes. Si no sabés tu CPA todavía, no pasa nada: las primeras semanas de campaña justamente sirven para descubrirlo. Pero el marco de decisión siempre es el mismo.",
      },
      {
        type: "h2",
        text: "El método: de tu objetivo de ventas hacia atrás",
      },
      {
        type: "p",
        text: "En lugar de preguntarte cuánto gastar, empezá por cuánto querés ganar y trabajá al revés. Este es el orden:",
      },
      {
        type: "ul",
        items: [
          "Definí cuántas ventas o consultas nuevas querés por mes.",
          "Estimá cuánto vale para vos cada cliente nuevo (ticket promedio o valor de vida del cliente).",
          "Calculá cuánto podés pagar por conseguir uno sin dejar de ser rentable: ese es tu CPA máximo.",
          "Multiplicá el CPA por la cantidad de clientes que querés. Ese es tu presupuesto de partida.",
        ],
      },
      {
        type: "p",
        text: "Ejemplo simple: si querés 20 clientes nuevos por mes y podés pagar hasta $15.000 por cada uno sin perder margen, tu presupuesto de referencia es 20 × $15.000 = $300.000 mensuales. Es una estimación, no una promesa. Pero es infinitamente mejor que tirar un número al aire.",
      },
      {
        type: "h2",
        text: "Por qué un presupuesto muy bajo no funciona",
      },
      {
        type: "p",
        text: "Meta necesita datos para optimizar. Su algoritmo aprende mostrándole tu anuncio a distintas personas y observando quién convierte. Si el presupuesto es tan chico que junta muy pocas conversiones por semana, el sistema nunca sale de la “fase de aprendizaje” y los resultados quedan inestables. No es que la plataforma sea cara: es que por debajo de cierto piso, no tiene con qué trabajar.",
      },
      {
        type: "quote",
        text: "Un presupuesto demasiado bajo no es prudente: es tirar plata en cuotas.",
      },
      {
        type: "h2",
        text: "La fase de aprendizaje: los primeros 7 a 14 días",
      },
      {
        type: "p",
        text: "Como referencia, Meta recomienda que un conjunto de anuncios genere alrededor de 50 conversiones por semana para estabilizar la optimización. No siempre hace falta llegar exacto a ese número, pero da la idea: los primeros 7 a 14 días son de aprendizaje, no de veredicto. Apagar una campaña al tercer día porque “no vendió” es el error más común y el más caro. Los datos de esos primeros días son los que hacen rentables a los siguientes.",
      },
      {
        type: "h2",
        text: "Un piso realista para empezar",
      },
      {
        type: "p",
        text: "Si recién arrancás y todavía no tenés un CPA de referencia, conviene empezar con un presupuesto que te permita juntar suficientes conversiones para aprender rápido, sostenerlo al menos 3 a 4 semanas, y recién ahí sacar conclusiones. Antes de pautar, asegurate de tener en orden lo básico:",
      },
      {
        type: "ul",
        items: [
          "El píxel de Meta instalado y midiendo bien las conversiones.",
          "Un destino que convierta: una landing o un WhatsApp que responda rápido, no un perfil abandonado.",
          "Una oferta clara y un mensaje que hable del problema de tu cliente.",
          "La capacidad de responder los leads en minutos, no en días.",
        ],
      },
      {
        type: "h2",
        text: "Lo que sí garantiza resultados (y no es el presupuesto)",
      },
      {
        type: "p",
        text: "Duplicar la inversión no duplica los resultados si el resto está roto. En orden de impacto, lo que más mueve la aguja suele ser:",
      },
      {
        type: "ul",
        items: [
          "La oferta: qué ofrecés y por qué alguien elegiría eso hoy.",
          "El seguimiento: qué pasa con el lead después del clic (acá se gana o se pierde la venta).",
          "La creatividad: el hook de los primeros 3 segundos define si te ven o te saltean.",
          "La segmentación y la estructura de campañas.",
          "Recién al final, cuánta plata le ponés encima.",
        ],
      },
      {
        type: "p",
        text: "Por eso, antes de recomendarte un número, nosotros miramos tu negocio completo. Si querés que calculemos juntos un presupuesto realista para tu caso —y que revisemos si tu embudo está listo para recibir esa inversión— escribinos y armamos un diagnóstico honesto en 24 horas.",
      },
    ],
  },
  {
    slug: "meta-ads-o-google-ads-cual-conviene",
    title: "Meta Ads o Google Ads: ¿Cuál conviene para tu negocio?",
    metaTitle: "Meta Ads vs Google Ads: Guía para Pymes de Córdoba",
    excerpt:
      "Meta Ads y Google Ads resuelven problemas distintos. Te contamos cómo elegir la plataforma correcta según el momento de compra de tu cliente en Córdoba.",
    date: "2026-07-15",
    author: "Phi Performance Marketing",
    category: "Paid Media",
    keywords: [
      "meta ads o google ads",
      "publicidad digital cordoba",
      "que plataforma de ads elegir",
      "agencia de marketing cordoba",
    ],
    coverImage: null,
    content: [
      {
        type: "p",
        text: "Es la pregunta que más nos hacen antes de armar una cuenta publicitaria nueva: ¿pauteo en Meta o en Google? La respuesta corta es que depende, pero la útil tiene que ver con entender qué hace cada plataforma y en qué momento del proceso de compra está parado tu cliente potencial. Ninguna de las dos es mejor en términos absolutos, son herramientas distintas pensadas para resolver problemas distintos. Elegir mal no es solo una cuestión de gusto: significa quemar presupuesto en el canal equivocado para tu tipo de negocio.",
      },
      {
        type: "h2",
        text: "Qué resuelve cada plataforma, en criollo",
      },
      {
        type: "p",
        text: "Google Ads te conecta con alguien que ya está buscando activamente lo que vendés. Si alguien busca plomero urgente en Nueva Córdoba o abogado laboral en Córdoba capital, ya tiene un problema concreto y está buscando quién se lo resuelva ahora. Vos le aparecés justo en el momento de la decisión, compitiendo por una intención de compra que ya existe.",
      },
      {
        type: "p",
        text: "Meta Ads, Facebook e Instagram, funciona al revés: no le hablás a alguien que está buscando, le mostrás algo a alguien que ni sabía que lo necesitaba hasta que lo vio. Es publicidad de interrupción, no de búsqueda. Ahí ganás con creatividad, con storytelling, con mostrar el producto en uso dentro del scroll cotidiano de la gente.",
      },
      {
        type: "h2",
        text: "Cuándo conviene arrancar por Meta Ads",
      },
      {
        type: "ul",
        items: [
          "Productos o servicios visuales, donde ver vende más que leer: moda, decoración, gastronomía, estética.",
          "Negocios con ticket bajo o medio, donde la decisión de compra es rápida y muchas veces impulsiva.",
          "Cuando todavía no hay demanda instalada de búsqueda, hay que generarla vos con contenido.",
          "Cuando el objetivo del momento es construir marca y comunidad, no solo vender ya.",
        ],
      },
      {
        type: "h2",
        text: "Cuándo conviene arrancar por Google Ads",
      },
      {
        type: "ul",
        items: [
          "Rubros con intención de búsqueda clara: servicios técnicos, salud, legales, inmobiliarias.",
          "Tickets más altos, donde el cliente investiga y compara antes de decidir.",
          "Cuando ya existe la demanda instalada y el juego es aparecer primero, no crearla.",
          "Negocios locales que buscan cobertura geográfica precisa, del tipo cerca de mí o en Google Maps.",
        ],
      },
      {
        type: "h2",
        text: "¿Se pueden usar las dos al mismo tiempo?",
      },
      {
        type: "p",
        text: "En la mayoría de los ecosistemas digitales maduros, sí. Google Ads captura la demanda que ya existe mientras Meta Ads construye la demanda futura y refuerza la marca frente a quien todavía no está listo para comprar. El orden lógico suele ser: primero ordenar la arquitectura técnica, pixel, conversiones, landing. Después probar con presupuesto acotado en la plataforma que mejor calce con tu funnel. Y recién ahí sumar la segunda, cuando el negocio pueda sostener y medir las dos gestiones en paralelo.",
      },
      {
        type: "h2",
        text: "El error que vemos más seguido en Córdoba",
      },
      {
        type: "p",
        text: "La mayoría de las pymes arrancan a pautar sin tener la casa ordenada: sin píxel instalado, sin evento de conversión configurado, sin una landing que convierta, a veces ni con el WhatsApp Business bien seteado. Ahí no importa si elegís Meta o Google, la plata se va a fugar igual, porque no hay forma real de medir ni de optimizar la campaña. Antes de decidir la plataforma, tiene que existir la arquitectura digital mínima: tracking, atribución y un destino, web o WhatsApp, que esté listo para recibir gente.",
      },
      {
        type: "h2",
        text: "Cómo decidirlo en la práctica",
      },
      {
        type: "p",
        text: "Nosotros lo resolvemos con tres preguntas simples. Primera: ¿la gente ya busca activamente lo que vendés, o hay que despertarle el interés desde cero? Segunda: ¿cuál es tu ticket promedio y cuánto tiempo tarda alguien en decidir la compra? Tercera: ¿tenés contenido visual de calidad para sostener una estrategia en Meta, o vas a depender solo de texto y búsqueda? Las respuestas casi siempre te muestran el camino antes de gastar el primer peso.",
      },
      {
        type: "quote",
        text: "No existe la plataforma mejor. Existe la plataforma correcta para el momento de tu negocio, y muchas veces la respuesta es usar las dos, cada una cumpliendo su función.",
      },
      {
        type: "p",
        text: "Si no estás seguro por dónde arrancar, no hace falta que lo resuelvas solo. Escribinos por WhatsApp y armamos juntos un diagnóstico rápido de tu negocio antes de definir dónde poner la primera pauta.",
      },
    ],
  },
  {
    slug: "cuanto-tarda-en-dar-resultados-una-campana",
    title: "¿Cuánto tarda en dar resultados una campaña de Ads?",
    metaTitle: "Cuánto Tarda una Campaña de Ads en Dar Resultados",
    excerpt:
      "No hay una fecha mágica. Te explicamos las etapas reales de una campaña de Meta o Google Ads y por qué apurar los tiempos sale caro.",
    date: "2026-06-18",
    author: "Phi Performance Marketing",
    category: "Estrategia Publicitaria",
    keywords: [
      "cuanto tarda en funcionar una campaña de ads",
      "resultados publicidad digital cordoba",
      "tiempo de optimizacion meta ads",
      "cuando ver resultados en google ads",
    ],
    coverImage: null,
    content: [
      {
        type: "p",
        text: "Es la pregunta que llega en la primera semana, a veces al tercer día: cuándo empiezo a ver resultados. Y es lógica, porque cuando ponés plata en pauta querés ver que vuelve. El problema es que la expectativa suele estar mal calibrada, no porque el cliente sea impaciente, sino porque nadie le explicó cómo funciona realmente una campaña por dentro.",
      },
      {
        type: "h2",
        text: "Toda campaña pasa por tres etapas",
      },
      {
        type: "p",
        text: "Aprendizaje: el algoritmo de la plataforma, sea Meta o Google, arranca sin saber nada de tu audiencia real. Prueba combinaciones de público y creatividad, y recién ahí empieza a entender quién convierte mejor. Optimización: con datos suficientes, el sistema deja de tantear y empieza a repartir el presupuesto donde funciona. Escalado: recién en esta etapa tiene sentido subir presupuesto o sumar públicos nuevos, porque ya hay una base que probó funcionar.",
      },
      {
        type: "h2",
        text: "Por qué la etapa de aprendizaje no se puede saltear",
      },
      {
        type: "p",
        text: "Una referencia habitual en la industria es que un conjunto de anuncios necesita un volumen mínimo de conversiones registradas para que el algoritmo tenga datos suficientes y salga de la fase de aprendizaje. No es una ley matemática exacta ni una promesa de resultado, es simplemente el punto donde el sistema deja de adivinar y empieza a optimizar con información real. Antes de eso, cualquier lectura de la campaña es prematura.",
      },
      {
        type: "h2",
        text: "Lo que pasa si tocás la campaña todos los días",
      },
      {
        type: "p",
        text: "Cambiar el presupuesto, pausar y reactivar, editar el texto o la imagen: cada uno de esos movimientos puede reiniciar la fase de aprendizaje. Es el error más común que vemos en cuentas que heredamos de otra gestión. El dueño entra todos los días, ve que un día rindió menos, y toca algo. El algoritmo nunca llega a estabilizarse porque arranca de cero una y otra vez.",
      },
      {
        type: "h2",
        text: "Entonces, ¿cuánto hay que esperar?",
      },
      {
        type: "p",
        text: "No existe una fecha mágica ni un número que sirva para todos los rubros por igual. Lo que sí existe es un marco: los primeros días son de recolección de datos, no de decisiones. Recién con una ventana de tiempo razonable y volumen de datos consistente se puede evaluar si la segmentación, la creatividad o la oferta necesitan ajuste. Juzgar una campaña a las 48 horas es como juzgar un local nuevo por el primer día de apertura.",
      },
      {
        type: "h2",
        text: "Lo que sí depende de nosotros antes de arrancar el reloj",
      },
      {
        type: "p",
        text: "Acá es donde entra la arquitectura digital. Si el píxel no está bien instalado, si la conversión no está configurada, si la landing tarda en cargar, la fase de aprendizaje se contamina con datos malos desde el día uno. Por eso no arrancamos a pautar sin antes chequear que todo el tracking esté funcionando: cada día de aprendizaje con datos sucios es presupuesto que no vas a poder recuperar.",
      },
      {
        type: "quote",
        text: "El resultado no llega el día que arrancás la campaña. Llega el día que el sistema termina de aprender con datos limpios.",
      },
      {
        type: "p",
        text: "Si estás evaluando una campaña propia o de otra agencia y no sabés si el tiempo que pasó es razonable o ya es una señal de alarma, escribinos por WhatsApp y lo revisamos juntos sin vueltas.",
      },
    ],
  },
  {
    slug: "por-que-mi-web-no-aparece-en-google",
    title: "Por qué tu web no aparece en Google (y cómo arreglarlo)",
    metaTitle: "Por Qué mi Web no Aparece en Google - Guía SEO Local",
    excerpt:
      "Si buscás tu negocio y no aparecés, no sos invisible por mala suerte. Te contamos las razones técnicas más comunes y cómo empezar a solucionarlo.",
    date: "2026-05-26",
    author: "Phi Performance Marketing",
    category: "SEO y Presencia Digital",
    keywords: [
      "por que mi web no aparece en google",
      "seo local cordoba",
      "posicionamiento google negocios cordoba",
      "indexar sitio web",
    ],
    coverImage: null,
    content: [
      {
        type: "p",
        text: "Buscás tu propio negocio en Google y no aparece. Ni en la primera página, ni en la segunda. La reacción natural es pensar que el sitio está roto o que Google no te quiere, pero casi siempre el motivo es más técnico y más simple de lo que parece.",
      },
      {
        type: "h2",
        text: "Primero: ¿tu web está indexada?",
      },
      {
        type: "p",
        text: "Indexar no es lo mismo que existir. Un sitio puede estar online, funcionando perfecto, y aun así no estar en el índice de Google porque nunca fue rastreado. Para chequearlo, buscá site:tudominio.com directamente en Google. Si no aparece ningún resultado, el problema no es de posicionamiento, es que Google todavía ni conoce que tu web existe.",
      },
      {
        type: "h2",
        text: "Las causas técnicas más comunes",
      },
      {
        type: "ul",
        items: [
          "El sitio es nuevo y todavía no pasó el tiempo mínimo para que Google lo rastree y confíe en él.",
          "No hay un sitemap enviado a Search Console, o el archivo robots.txt está bloqueando el rastreo sin que el dueño lo sepa.",
          "Nunca se configuró Google Search Console, así que nadie está monitoreando si hay errores de indexación.",
          "El dominio no tiene autoridad: ningún otro sitio confiable enlaza hacia él.",
          "La velocidad de carga es muy lenta, especialmente en celular, y eso afecta tanto el rastreo como el posicionamiento.",
        ],
      },
      {
        type: "h2",
        text: "El otro motivo: competís por las palabras equivocadas",
      },
      {
        type: "p",
        text: "A veces la web sí está indexada, pero el negocio busca posicionar para términos genéricos y muy competidos, tipo inmobiliaria a secas, en vez de términos con intención local real, como inmobiliaria en Nueva Córdoba o departamentos en alquiler zona Güemes. Contra las marcas grandes y los portales establecidos, competir por el término genérico es una pelea que se pierde de entrada. La intención de búsqueda local específica es donde un negocio chico sí tiene chance real.",
      },
      {
        type: "h2",
        text: "SEO no es magia ni es instantáneo",
      },
      {
        type: "p",
        text: "Ninguna agencia seria te puede prometer la primera posición en dos semanas. El posicionamiento orgánico es un proceso acumulativo: mejora con el tiempo, con contenido consistente y con una base técnica sana. Desconfiá de cualquiera que te venda resultados garantizados en plazos cortos, eso no depende de una agencia, depende del algoritmo de Google y de la competencia real en tu rubro.",
      },
      {
        type: "h2",
        text: "Qué hacer primero, antes de gastar en SEO avanzado",
      },
      {
        type: "p",
        text: "Antes de invertir en estrategias de contenido o link building, hay una base técnica que se resuelve una sola vez: configurar Search Console, enviar el sitemap, verificar que robots.txt no esté bloqueando páginas importantes, y crear o completar el perfil de Google Business si el negocio tiene ubicación física o zona de cobertura. Sin esa base, cualquier esfuerzo de contenido después va a rendir menos de lo que debería.",
      },
      {
        type: "quote",
        text: "No aparecés en Google no porque Google no te quiera, sino porque técnicamente todavía no le diste motivos para encontrarte.",
      },
      {
        type: "p",
        text: "Si querés saber puntualmente por qué tu web no aparece, te hacemos un diagnóstico técnico rápido. Escribinos por WhatsApp y lo revisamos juntos.",
      },
    ],
  },
  {
    slug: "que-es-un-crm-y-cuando-lo-necesito",
    title: "¿Qué es un CRM y cuándo lo necesita tu negocio?",
    metaTitle: "Qué es un CRM y Cuándo Implementarlo en tu Pyme",
    excerpt:
      "Un CRM no es solo para empresas grandes. Te explicamos qué hace realmente y en qué momento del crecimiento de tu negocio empieza a ser necesario.",
    date: "2026-04-30",
    author: "Phi Performance Marketing",
    category: "CRM y Ventas",
    keywords: [
      "que es un crm",
      "cuando necesito un crm",
      "crm para pymes cordoba",
      "kommo crm argentina",
    ],
    coverImage: null,
    content: [
      {
        type: "p",
        text: "CRM son las siglas de Customer Relationship Management, gestión de la relación con el cliente, pero esa definición de manual no dice nada útil. En criollo: es el sistema donde vive toda la información de tus leads y clientes, para que ninguna conversación se pierda en un chat de WhatsApp perdido o en un cuaderno.",
      },
      {
        type: "h2",
        text: "En criollo: ¿qué hace un CRM?",
      },
      {
        type: "p",
        text: "Centraliza todo. Cuando un lead entra por Instagram, por WhatsApp o por un formulario de la web, el CRM lo registra, le asigna un estado, dice en qué etapa del embudo está, y guarda el historial completo de esa conversación. En vez de tener la información repartida entre la cabeza del vendedor, el celular personal y capturas de pantalla sueltas, todo queda en un solo lugar, ordenado y visible para todo el equipo.",
      },
      {
        type: "h2",
        text: "La señal más clara de que lo necesitás",
      },
      {
        type: "ul",
        items: [
          "Se te escapan leads porque nadie hizo seguimiento a tiempo.",
          "No podés decir con certeza cuántos leads entraron este mes ni en qué se convirtieron.",
          "Cada vendedor maneja su propio método, y cuando se va, se va también la información.",
          "Perdés ventas no porque el producto esté mal, sino porque el seguimiento fue tarde o inconsistente.",
        ],
      },
      {
        type: "h2",
        text: "Cuándo todavía no hace falta",
      },
      {
        type: "p",
        text: "Si tu negocio recibe pocos leads por mes y una sola persona los maneja de punta a punta, un CRM puede ser una complejidad innecesaria por ahora. La regla no es que todo negocio necesita un CRM ya, es que cuando el volumen o la cantidad de gente involucrada en la venta supera lo que se puede sostener a mano, ahí empieza a rendir. Meter un CRM antes de tiempo, sin nadie que lo mantenga cargado, es plata y tiempo tirados.",
      },
      {
        type: "h2",
        text: "CRM más automatización: el combo real",
      },
      {
        type: "p",
        text: "La parte que más valor agrega no es el CRM solo, es lo que se arma alrededor: bots que responden automático fuera de horario, embudos que mueven al lead de una etapa a otra sin que un humano tenga que hacerlo manualmente, recordatorios de seguimiento para que ningún lead quede frío. Ahí es donde un CRM bien configurado deja de ser una planilla más linda y empieza a ser una máquina que evita que se pierdan ventas por descuido.",
      },
      {
        type: "quote",
        text: "Un CRM no vende por vos. Pero te asegura que ningún lead se pierda por falta de seguimiento.",
      },
      {
        type: "p",
        text: "Si no sabés si tu negocio ya está en el punto donde un CRM suma, contanos cómo manejás hoy tus leads por WhatsApp y te decimos honestamente si conviene o todavía no.",
      },
    ],
  },
  {
    slug: "como-saber-si-mi-agencia-de-marketing-esta-funcionando",
    title: "¿Cómo saber si tu agencia de marketing funciona?",
    metaTitle: "Cómo Saber si tu Agencia de Marketing Está Funcionando",
    excerpt:
      "Likes y alcance no pagan cuentas. Te contamos qué preguntarle a tu agencia y qué métricas importan de verdad para saber si el trabajo rinde.",
    date: "2026-04-02",
    author: "Phi Performance Marketing",
    category: "Transparencia y Métricas",
    keywords: [
      "como saber si mi agencia de marketing funciona",
      "metricas de vanidad marketing",
      "agencia de marketing cordoba",
      "roas cpa que significa",
    ],
    coverImage: null,
    content: [
      {
        type: "p",
        text: "Pagás una agencia todos los meses, ves publicaciones subir, alguna que otra campaña activa, y aun así no tenés certeza real de si eso está generando ventas o solo movimiento. No sos el único: es una de las dudas más comunes entre quienes contratan marketing digital por primera vez.",
      },
      {
        type: "h2",
        text: "Las métricas de vanidad no dicen nada de tu bolsillo",
      },
      {
        type: "p",
        text: "Likes, alcance, impresiones, seguidores nuevos: son datos que suman contexto, pero no son el objetivo final de nadie que paga por resultados. Un posteo puede tener miles de alcance y cero ventas. Si el reporte mensual que recibís se limita a esos números con gráficos lindos, falta la parte que realmente importa.",
      },
      {
        type: "h2",
        text: "Las preguntas que sí importan",
      },
      {
        type: "ul",
        items: [
          "¿Cuánto costó cada lead que entró este mes?",
          "¿Cuánto costó cada venta concretada, no cada clic?",
          "¿Cuál fue el retorno de la inversión publicitaria?",
          "¿Cuántos de los leads que entraron se convirtieron en clientes reales, y cuántos se perdieron en el camino?",
        ],
      },
      {
        type: "h2",
        text: "Pedile esto a tu agencia",
      },
      {
        type: "p",
        text: "Acceso directo a la cuenta publicitaria, no solo capturas de pantalla armadas para el reporte. Acceso a Analytics o a la herramienta de medición que corresponda. Y sobre todo, que te puedan explicar con números crudos, no con adjetivos, por qué una campaña funcionó o no. Si te responden con genéricos como está yendo bien sin poder mostrar el dato detrás, es una señal de alarma.",
      },
      {
        type: "h2",
        text: "El objetivo no es solo estar en redes",
      },
      {
        type: "p",
        text: "Tener presencia en Instagram está bien, pero no es el fin en sí mismo. Cada pieza de contenido, cada campaña, debería tener un rol dentro de un embudo que termine en una conversación real, por WhatsApp o donde sea que tu negocio cierre ventas. Si nadie te puede explicar cómo se conecta lo que están publicando con lo que efectivamente vendés, probablemente no hay una estrategia detrás, hay solo contenido.",
      },
      {
        type: "h2",
        text: "Una señal de alarma: te hablan de todo menos de plata",
      },
      {
        type: "p",
        text: "Cuando una agencia evita sistemáticamente hablar de costo por resultado, de retorno o de números concretos, y en cambio siempre vuelve a la conversación sobre creatividad o alcance, vale la pena preguntarse por qué. La creatividad importa, pero al servicio de un resultado medible, no como reemplazo de la conversación sobre plata.",
      },
      {
        type: "quote",
        text: "Si tu agencia no te puede mostrar cuánto costó cada venta, no sabe si está funcionando. Y si ella no lo sabe, vos tampoco.",
      },
      {
        type: "p",
        text: "Si querés una segunda mirada honesta sobre cómo está rindiendo tu marketing actual, te la damos sin compromiso. Escribinos por WhatsApp y lo revisamos juntos.",
      },
    ],
  },
];
