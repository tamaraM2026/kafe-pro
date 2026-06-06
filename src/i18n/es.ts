import type { Translations } from "./types";

export const es: Translations = {
  common: {
    siteName: "Kafe con Propósito",
    nav: {
      home: "Inicio",
      about: "Qué es Kafe",
      founder: "Fundadora",
      memberships: "Membresías",
      community: "Comunidad",
      cesky: "Česky",
      contact: "Contacto",
    },
    programmesLabel: "Programas",
    programmesItems: {
      bbb: "Business Building Blocks",
      tenx: "10x Productiva",
    },
    reserve: "Reserva tu lugar →",
    exploreMemberships: "Explorar membresías",
    footer: {
      tagline:
        "Un círculo de mujeres en Bohemia Central. Conversaciones reales con un buen café.",
      exploreHeading: "Explorar",
      followHeading: "Síguenos",
      whereHeading: "Dónde",
      locationText: "Bohemia Central · Poděbrady · Praga",
      locationFrequency: "Dos veces al mes · EN · ES · CZ",
      getInTouch: "Escríbenos →",
      copyright: "Kafe con Propósito · Círculo de Mujeres",
      navAbout: "Qué es Kafe",
      navFounder: "Fundadora",
      navMemberships: "Membresías",
      navCommunity: "Comunidad",
    },
  },

  meta: {
    homeTitle: "Kafe con Propósito",
    homeDescription:
      "Una comunidad para mujeres que están construyendo algo que importa. Conversaciones reales con un buen café en Bohemia Central.",
    aboutTitle: "Qué es Kafe — Kafe con Propósito",
    aboutDescription:
      "No es un evento. Es una comunidad de mujeres en Bohemia Central que se reúne dos veces al mes para conversar de verdad.",
    founderTitle: "Fundadora — Kafe con Propósito",
    founderDescription:
      "Conoce a Tamara Medina Sapovalova, fundadora de Kafe con Propósito.",
    membershipsTitle: "Membresías — Kafe con Propósito",
    membershipsDescription:
      "Tres formas de unirte a Kafe con Propósito: sesión individual, comunidad mensual o la premium Roastery.",
    communityTitle: "Comunidad y Colaboradores — Kafe con Propósito",
    communityDescription:
      "Conoce a las mujeres, mentoras y marcas aliadas que dan forma a la comunidad Kafe con Propósito.",
    contactTitle: "Contacto — Kafe con Propósito",
    contactDescription:
      "Escríbele a Kafe con Propósito para reservar tu lugar o hacer una pregunta.",
    bbbTitle: "Business Building Blocks — Kafe con Propósito",
    bbbDescription:
      "Un programa de 2 meses que te lleva de 'tengo una idea' a 'tengo un negocio real y funcionando.' Talleres en vivo, herramientas prácticas, impulso real.",
    tenxTitle: "10x Productiva — Kafe con Propósito",
    tenxDescription:
      "Una guia gratuita de autocoaching de 10 dias con ejercicios diarios, reflexiones y acciones para ser 10 veces mas productiva.",
  },

  home: {
    regionLabel: "BOHEMIA CENTRAL · EN · ES · CZ",
    heroHeading:
      "Una comunidad para mujeres que están construyendo algo que importa.",
    heroBrandName: "Kafe con Propósito",
    heroDescription:
      " reúne a mujeres profesionales, emprendedoras y expatriadas — dos veces al mes, en persona, con un buen café. Conversaciones reales. Conexión genuina. Sin discursos de venta, sin presión.",
    heroSubtext:
      "Encuentros en inglés, checo y español · Bohemia Central y Praga · Dos veces al mes",
    stats: [
      { value: "2×", label: "encuentros al mes" },
      { value: "3", label: "idiomas (EN · ES · CZ)" },
      { value: "10–20", label: "mujeres por encuentro" },
    ],
    painHeading: "Estás rodeada de gente.\nY aun así lo resuelves sola.",
    painSubheading:
      "Ya sea que hayas vivido aquí toda la vida o que llegaste el año pasado, crecer como mujer profesional puede ser muy solitario — sobre todo cuando las personas a tu alrededor no entienden del todo lo que estás construyendo.",
    quotes: [
      "Tengo muchos conocidos. Lo que me falta es gente que realmente entienda lo que estoy tratando de construir.",
      "Trabajo desde casa, estoy construyendo algo en lo que creo — pero la soledad es real.",
      "No soy la misma persona que era hace un año — y todavía no sé en quién me estoy convirtiendo.",
      "Quiero hablar de cosas reales — las dudas, los sueños, las decisiones difíciles. No solo del clima.",
    ],
    whatKafeLabel: "QUÉ ES KAFE",
    whatKafeHeading: "No es un evento. Es una comunidad.",
    pillars: [
      {
        icon: "☕",
        title: "Comunidad",
        text: "Un círculo constante y de confianza de mujeres que se presentan — no un evento puntual que olvidas el lunes.",
      },
      {
        icon: "💬",
        title: "Crecimiento",
        text: "Cada encuentro tiene un tema elegido por las miembros. Te vas con una perspectiva real, no solo con tarjetas de visita.",
      },
      {
        icon: "🪑",
        title: "Apoyo",
        text: "Tu propia gente. Mujeres que recuerdan de qué hablaste la vez pasada, que celebran tus logros.",
      },
    ],
    belongLabel: "¿ES PARA MÍ?",
    belongHeading: "Este es tu lugar si algo de esto te suena familiar.",
    belongItems: [
      "Estás construyendo un negocio o una carrera que te importa",
      "Eres expatriada echando raíces, o local buscando nuevas perspectivas",
      "Eres madre equilibrando la ambición con todo lo demás",
      "Estás navegando una transición — personal o profesional",
      "Quieres una conversación honesta, no charla superficial",
      "Tienes curiosidad por cómo otras mujeres están resolviendo las cosas",
    ],
    belongDisclaimer:
      "No somos un grupo de Facebook que nunca se reúne de verdad · no somos una sala de desconocidas intercambiando tarjetas · no es un lugar donde necesitas un título, un plan de negocios o una historia pulida.",
    tiersLabel: "ENCUENTRA TU LUGAR",
    tiersHeading: "Tres formas de ser parte",
    tiersSubheading:
      "Empieza con un encuentro, o sumérgete en la comunidad. Tú decides el ritmo.",
    tiers: [
      {
        name: "The Espresso Shot",
        price: "450 CZK",
        per: "por sesión",
        tagline: "Pago por sesión",
        desc: "Prueba un encuentro antes de comprometerte. El punto de entrada perfecto para quien viene por primera vez.",
        cta: "Ver próximos",
        featured: false,
      },
      {
        name: "The Brew Community",
        price: "850 CZK",
        per: "al mes",
        tagline: "La más popular",
        desc: "Dos plazas garantizadas, descuentos para miembros y el directorio. La forma más popular de hacer de Kafe parte de tu vida.",
        cta: "Unirme",
        featured: true,
      },
      {
        name: "The Roastery",
        price: "1,950 CZK",
        per: "al mes",
        tagline: "Premium",
        desc: "Todo lo de Brew, más un Mastermind mensual, pase VIP para invitadas y espacio para destacar tu negocio.",
        cta: "Ir más profundo",
        featured: false,
      },
    ],
    ctaHeading: "Tu lugar en la mesa te está esperando.",
    ctaSubheading:
      "Sin discurso. Sin presión.\nSolo mujeres reales, conversación real y un café muy bueno.",
  },

  about: {
    label: "QUÉ ES KAFE",
    heading: "Un círculo de mujeres, no un evento de networking.",
    intro:
      "Kafe con Propósito es un círculo constante y de confianza de mujeres que se presentan — dos veces al mes, en persona, en Bohemia Central. Cada encuentro tiene un tema, una intención, y está diseñado para la conversación real, no para las transacciones.",
    testimonialsHeading: "Lo que dicen las mujeres",
    testimonialsSubheading: "Palabras reales de miembros reales",
    testimonials: [
      {
        name: "Valeria",
        text: "Esta es la comunidad que he estado buscando desde que me mudé aquí hace dos años.",
      },
      {
        name: "Adela",
        text: "Un ambiente agradable y de apoyo a pesar de las diferentes edades de las participantes y sus distintos recorridos profesionales. Las actividades trajeron pensamientos y reflexiones interesantes.",
      },
      {
        name: "Irena",
        text: "Pensé que tenía que elegir entre quedarme aquí y crecer profesionalmente. Kafe con Propósito me mostró que podía tener ambas cosas. He ganado perspectivas que nunca habría encontrado en mis círculos habituales — además de amistades reales con mujeres que me desafían y me apoyan en igual medida.",
      },
    ],
    faqHeading: "Algunas preguntas, respondidas",
    faqs: [
      {
        q: "¿Necesito hablar inglés o checo perfecto?",
        a: "Para nada. Damos la bienvenida a cada acento y nivel de idioma. La mayoría de los encuentros son en inglés, con sesiones en checo y español también en el calendario. Lo que importa es entendernos — no la perfección.",
      },
      {
        q: "¿Y si soy introvertida o tímida?",
        a: "La mayoría lo somos. Los grupos son pequeños (10–20 mujeres) y nadie te pone en el centro de atención antes de que estés lista. Encontrarás tu momento.",
      },
      {
        q: "No soy empresaria ni CEO. ¿Encajo aquí?",
        a: "No buscamos currículos. Buscamos mujeres curiosas, abiertas y comprometidas con el proceso de convertirse. Eso es todo.",
      },
      {
        q: "¿Cuánto cuesta?",
        a: "Las sesiones regulares empiezan en 450 CZK. Las membresías (con plazas garantizadas, descuentos y más) desde 850 CZK/mes.",
      },
      {
        q: "¿Dónde se reúnen?",
        a: "Nos reunimos en Bohemia Central, Poděbrady y Praga — así que siempre hay una opción cerca de ti.",
      },
    ],
  },

  founder: {
    label: "DE TAMARA",
    heading: "Por qué creé esto",
    paragraphs: [
      "Creé Kafe con Propósito porque yo misma lo necesitaba. No solo un evento de networking. No un grupo en línea. Una comunidad real — una que te encuentra donde estás y crece contigo.",
      "He pasado más de 20 años en negocios internacionales entre América Latina y Europa. Sé lo que se siente ser la única mujer en la sala, mudarse y empezar de cero, construir algo sin un mapa. Kafe es el espacio que me hubiera gustado que existiera.",
    ],
    signature: "— Tamara Medina Sapovalova, Fundadora",
  },

  memberships: {
    label: "ENCUENTRA TU LUGAR",
    heading: "Tres formas de ser parte",
    subheading:
      "Empieza con un encuentro, o sumérgete en la comunidad. Tú decides el ritmo.",
    tiers: [
      {
        name: "The Espresso Shot",
        tag: "Pago por sesión",
        price: "450 CZK",
        per: "por sesión",
        desc: "Prueba un encuentro antes de comprometerte. El punto de entrada perfecto para quien viene por primera vez.",
        perks: [
          "Entrada para una sesión",
          "Elige cualquier encuentro disponible",
          "Sin compromiso",
        ],
        featured: false,
      },
      {
        name: "The Brew Community",
        tag: "La más popular",
        price: "850 CZK",
        per: "al mes",
        desc: "Dos plazas garantizadas, descuentos para miembros y el directorio.",
        perks: [
          "2 encuentros garantizados al mes",
          "Acceso al directorio de miembros",
          "Descuentos en talleres",
          "Círculo de WhatsApp",
        ],
        featured: true,
      },
      {
        name: "The Roastery",
        tag: "Premium",
        price: "1,950 CZK",
        per: "al mes",
        desc: "Todo lo de Brew, más experiencias más profundas y visibilidad.",
        perks: [
          "Todo lo de Brew",
          "Mastermind mensual",
          "Pase VIP para invitadas",
          "Espacio para destacar tu negocio",
        ],
        featured: false,
      },
    ],
    chooseCta: "Elegir esta →",
    bannerLabel: "PRÓXIMAMENTE MAYO 2026",
    bannerHeading: "Un café. Una mujer. Una historia.",
    bannerDescription:
      "Una vez al mes, una mujer abre la velada con su historia — sin filtros, con propósito, real. Porque lo más poderoso que una mujer puede hacer por otra es mostrarle lo que es posible.",
    bannerCta: "Sé la primera en enterarte →",
  },

  community: {
    label: "COMUNIDAD Y COLABORADORES",
    heading: "Las mujeres — y las marcas — detrás de la mesa.",
    intro:
      "Mentoras, creadoras y colaboradoras de confianza. Estas son las personas que construyen junto a nosotras — y las marcas aliadas que recomendamos a nuestra comunidad.",
    featuredLabel: "ALIADO DESTACADO",
    featured: {
      title: "Foťte mobilem jako profesionál",
      flag: "🇨🇿",
      bullets: [
        "Chcete zachytit své životní okamžiky jako profesionální fotograf?",
        "Vyžaduje váš business neustálé přispívání na sociálních sítí?",
        "Rádi byste si z výletů odvezli reprezentativní galerii fotografií?",
        "Chcete dostat maximum z vašeho mobilního telefonu — bez drahé techniky?",
      ],
      learnMore: "Saber más →",
    },
    voicesLabel: "VOCES DE LA COMUNIDAD",
    voicesHeading: "Conoce el círculo",
    members: [
      {
        name: "Adela Fialová",
        langs: "CZ · EN",
        role: "Fotógrafa",
        bio: "La fotografía no es solo un trabajo para mí, es una forma de vida. Cada imagen es un desafío de combinar precisión técnica con sensibilidad artística — una manera de compartir historias, emociones y caminos con el mundo.",
        url: "https://www.adelafialova.com/",
        urlLabel: "adelafialova.com",
      },
      {
        name: "Zuzana Koláčková",
        langs: "CZ",
        role: "Mentora de negocios y estratega · Podnikatelky SOBĚ",
        bio: "Guío a las mujeres para que dejen de solo 'probar' con su negocio y aprendan a dirigirlo con seguridad y conciencia. Conecto la mentalidad interna con una estrategia de negocios sólida — para proyectos estables en armonía con tu estilo de vida.",
        url: "https://www.podnikatelkysobe.cz/",
        urlLabel: "podnikatelkysobe.cz",
      },
      {
        name: "Tamara Medina",
        langs: "ES · EN · CZ",
        role: "Coach de Negocios y Conectora",
        bio: "Siempre he sido la persona que conecta a la gente, la que ve la oportunidad antes de que alguien más le ponga nombre. Lo que me mueve es la convicción de que lo más poderoso que una mujer puede hacer por otra es mostrarle que no está sola en esto.",
        url: "https://www.kafeconproposito.com/",
        urlLabel: "kafeconproposito.com",
      },
      {
        name: "Iveta Skřivanová",
        langs: "CZ",
        role: "Guía de reconexión con uno mismo a través de la percepción",
        bio: "Creo un espacio para detenerse y percibir lo que realmente está sucediendo dentro de ti. A través de la escucha y la experiencia, ayudo a las personas a reconectarse con su autenticidad, su calma y su propio centro.",
        url: "https://ivetaskrivanova.cz/",
        urlLabel: "ivetaskrivanova.cz",
      },
      {
        name: "Viktoria Platonova",
        langs: "CZ · EN · RU",
        role: "Coach de Bienestar y Profesora de Yoga · Fundadora de MaMeetUs",
        bio: "Trabajo con mujeres en la intersección del movimiento, la respiración y la mente — creyendo que la conexión, con las demás y con nosotras mismas, es el primer paso de regreso a quienes realmente somos.",
        url: "https://www.mameetus.cz/",
        urlLabel: "mameetus.cz",
      },
    ],
    collaboratorsLabel: "COLABORADORES",
    collaboratorsHeading: "Marcas y aliados con los que construimos",
    collaborators: [
      {
        name: "Podnikatelky SOBĚ",
        url: "https://www.podnikatelkysobe.cz/",
      },
      { name: "Adela Fialová", url: "https://www.adelafialova.com/" },
      { name: "Harrington Verve", url: "https://harringtonverve.com/" },
      { name: "MaMeetUs", url: "https://www.mameetus.cz/" },
      {
        name: "Iveta Skřivanová",
        url: "https://ivetaskrivanova.cz/",
      },
      { name: "Sapovalova Solutions", url: "#" },
    ],
    collaborateCta:
      "¿Quieres colaborar o ser destacada? Escríbenos — nos encanta conocer mujeres que construyen trabajo que importa.",
  },

  contact: {
    label: "CONTÁCTANOS",
    heading: "Saluda.",
    intro:
      "¿Una pregunta, una colaboración o lista para reservar tu lugar? Escríbenos y te responderemos con los detalles del próximo encuentro.",
    nameLabel: "Nombre",
    emailLabel: "Correo electrónico",
    messageLabel: "Mensaje",
    submitButton: "Enviar mensaje →",
    successMessage: "Gracias — te escribiremos pronto.",
    followText: "O síguenos en",
  },

  bbb: {
    label: "PROGRAMA",
    heading: "Business Building Blocks",
    intro: 'Convierte tu idea de negocio en realidad. Un programa de 2 meses que te lleva de "tengo una idea" a "tengo un negocio real y funcionando." Talleres en vivo y sesiones a tu ritmo — sin relleno, sin teoría que no funciona en la vida real.',
    registerCta: "Registra tu interés →",
    workshopDetailsCta: "Detalles de los talleres",
    outcomesLabel: "CON QUÉ TE IRÁS",
    outcomesHeading: "Más que un curso — un punto de inflexión",
    outcomes: [
      {
        title: "Alguien que realmente te entiende",
        body: "Olvídate de los consejos genéricos. Desarrollarás tu propio estilo de liderazgo y crearás un plan que se ajuste a tu vida, tus valores y tus metas.",
      },
      {
        title: "Confianza para evitar errores costosos",
        body: "Aprende de personas que ya pasaron por esto. Obtén el conocimiento que te ayuda a esquivar los errores costosos que comete la mayoría de las nuevas emprendedoras.",
      },
      {
        title: "Un negocio que realmente puede crecer",
        body: "Deja de construir algo que solo funciona si lo haces todo tú. Crea sistemas y estructuras que permitan a tu negocio expandirse sin quemarte.",
      },
      {
        title: "Personas que entienden por lo que estás pasando",
        body: "Conéctate con otras en el mismo camino — personas con quienes celebrar los logros, buscar soluciones juntas y apoyarte cuando las cosas se ponen difíciles.",
      },
    ],
    differentLabel: "POR QUÉ ESTE PROGRAMA ES DIFERENTE",
    differentHeading: "Diseñado para cómo crecen los negocios de verdad",
    differentiators: [
      {
        title: "Aprenderás lo que realmente importa",
        body: "Desde encontrar a los socios adecuados hasta entender tus finanzas, desde construir tu modelo de negocio hasta convertirte en la líder que tu empresa necesita. Sin vacíos críticos.",
      },
      {
        title: "Se adapta a tu vida real",
        body: "Cada taller de 1.5–2 horas aborda un desafío específico. No es beber de una manguera — es aprender algo práctico y usarlo antes de la siguiente sesión.",
      },
      {
        title: "Aprendes haciendo",
        body: "Distribuido en 2 meses, dándote tiempo para aplicar lo que aprendes. Cada semana se construye sobre la anterior, creando impulso real en tu negocio.",
      },
    ],
    curriculumLabel: "ESTO ES LO QUE CUBRIREMOS",
    curriculumHeading: "Seis bloques de construcción",
    curriculum: [
      "Preparar tu mentalidad — la base que toda emprendedora exitosa necesita",
      "Tomar decisiones que te hacen avanzar — metas claras, acción clara",
      "Construir algo que perdure — cimientos sólidos desde el primer día",
      "Entender tu mercado — quién necesita lo que ofreces y cómo llegar a ellos",
      "Convertir conversaciones en ventas — habilidades reales de negociación que se sienten auténticas",
      "Crecimiento inteligente — usando conexiones, tecnología y herramientas de IA para escalar eficientemente",
    ],
    finalCtaHeading: "Registra tu interés hoy",
    finalCtaSubheading: "Plazas limitadas.",
    finalCtaButton: "Empezar ahora →",
  },

  tenx: {
    label: "GUIA GRATUITA",
    heading: "10 dias. 10 acciones.",
    headingEmphasis: "10 veces mas productiva.",
    heroSub: "Una guia gratuita de autocoaching con ejercicios diarios, reflexiones y acciones.",
    pullQuote: "El cambio lleva tiempo — pero si haces un poco cada dia, estas pequenas acciones forman nuevos habitos. Sin darte cuenta, tu vida se transforma.",
    daysLabel: "TU VIAJE DE 10 DIAS",
    days: [
      "El secreto del exito — tu actitud",
      "Que te mueve realmente? Tus valores",
      "Convirtiendo tus suenos en realidad",
      "Lo que dice tu voz interior",
      "El tiempo — quien tiene el control?",
      "Eres la persona que quieres ser?",
      "Adonde te llevan tus decisiones diarias",
      "Eligiendo tus influencias con sabiduria",
      "Responsabilidad y toma de decisiones",
      "Cuidar de ti misma — la base de todo",
    ],
    forYouLabel: "ES PARA TI?",
    forYouItems: [
      "Sabes que algo tiene que cambiar pero no sabes por donde empezar",
      "Te sientes ocupada todo el tiempo pero no verdaderamente productiva",
      "Estas en transicion — carrera, lugar, identidad — y quieres claridad",
      "Has empezado cosas antes y no las has terminado, y estas lista para intentarlo diferente",
      "Quieres acciones practicas diarias, no solo teoria",
    ],
    tamaraBio: "Escribi esta guia tras anos de acompanar a mujeres en su reinvencion — cambios de carrera, mudanzas internacionales, esos momentos silenciosos de \"y ahora que?\" que llegan entre un capitulo y el siguiente. Estos 10 dias son la destilacion de lo que realmente funciona cuando dejas de esperar el momento perfecto y empiezas a construir desde donde estas.",
    tamaraName: "Tamara Medina Sapovalova",
    tamaraRole: "Fundadora, Kafe con Proposito",
    optInTitle: "Comienza tu",
    optInTitleEmphasis: "transformacion de 10 dias",
    optInSub: "Ingresa tus datos y recibe la guia directo en tu correo — gratis.",
    namePlaceholder: "Tu nombre",
    emailPlaceholder: "Tu correo electronico",
    errorMsg: "Por favor completa ambos campos.",
    ctaButton: "Enviame la guia →",
    privacyNote: "Sin spam. Cancela cuando quieras.",
    successHeading: "Estas dentro!",
    successMessage: "Revisa tu correo — la guia va en camino.",
  },
};
