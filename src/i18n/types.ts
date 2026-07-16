export type Translations = {
  common: {
    siteName: string;
    nav: {
      home: string;
      about: string;
      founder: string;
      events: string;
      memberships: string;
      community: string;
      cesky: string;
      contact: string;
    };
    programmesLabel: string;
    programmesItems: {
      bbb: string;
      tenx: string;
      unveiled: string;
      spanishConversation: string;
    };
    reserve: string;
    exploreMemberships: string;
    footer: {
      tagline: string;
      exploreHeading: string;
      followHeading: string;
      whereHeading: string;
      locationText: string;
      locationFrequency: string;
      getInTouch: string;
      copyright: string;
      navAbout: string;
      navFounder: string;
      navEvents: string;
      navMemberships: string;
      navCommunity: string;
    };
  };

  meta: {
    homeTitle: string;
    homeDescription: string;
    aboutTitle: string;
    aboutDescription: string;
    founderTitle: string;
    founderDescription: string;
    eventsTitle: string;
    eventsDescription: string;
    membershipsTitle: string;
    membershipsDescription: string;
    communityTitle: string;
    communityDescription: string;
    contactTitle: string;
    contactDescription: string;
    bbbTitle: string;
    bbbDescription: string;
    tenxTitle: string;
    tenxDescription: string;
    unveiledTitle: string;
    unveiledDescription: string;
    spanishConversationTitle: string;
    spanishConversationDescription: string;
  };

  home: {
    regionLabel: string;
    heroHeading: string;
    heroBrandName: string;
    heroDescription: string;
    heroSubtext: string;
    painHeading: string;
    painSubheading: string;
    quotes: string[];
    whatKafeLabel: string;
    whatKafeHeading: string;
    pillars: Array<{ icon: string; title: string; text: string }>;
    belongLabel: string;
    belongHeading: string;
    belongItems: string[];
    belongDisclaimer: string;
    tiersLabel: string;
    tiersHeading: string;
    tiersSubheading: string;
    tiers: Array<{
      name: string;
      price: string;
      per: string;
      tagline: string;
      desc: string;
      cta: string;
      featured: boolean;
    }>;
    ctaHeading: string;
    ctaSubheading: string;
  };

  about: {
    label: string;
    heading: string;
    intro: string;
    testimonialsHeading: string;
    testimonialsSubheading: string;
    testimonials: Array<{ name: string; text: string }>;
    faqHeading: string;
    faqs: Array<{ q: string; a: string }>;
  };

  founder: {
    label: string;
    heading: string;
    paragraphs: string[];
    signature: string;
    profileTitle: string;
    experience: {
      heading: string;
      body: string;
      details: Array<{ label: string; value: string }>;
      closing: string;
    };
    turningPoint: {
      heading: string;
      body: string;
      quote: string;
    };
    services: {
      heading: string;
      intro: string;
      items: Array<{ tag: string; title: string; desc: string; cta: string }>;
    };
    closing: {
      heading: string;
      body: string;
      ctaPrimary: string;
      ctaSecondary: string;
    };
  };

  events: {
    hero: {
      eyebrow: string;
      heading: string;
      lead: string;
      secondaryCta: string;
      metaLine: string;
    };
    whatsNew: {
      eyebrow: string;
      heading: string;
      intro: string;
    };
    rhythm: {
      oneCup: { title: string; text: string };
      networking: { title: string; text: string };
      discussion: { title: string; text: string };
      dinner: { title: string; text: string };
    };
    detailsEyebrow: string;
    detailsHeading: string;
    seasonDetails: Array<{ label: string; value: string }>;
    calendarEyebrow: string;
    calendarHeading: string;
    calendarIntro: string;
    viewDetailsCta: string;
    launchTag: string;
    closeTag: string;
    ctaBand: {
      eyebrow: string;
      heading: string;
      seasonBody: string;
      editionBody: string;
      seeOtherDates: string;
      emailNote: string;
    };
    backToCalendar: string;
    inThisSessionEyebrow: string;
    inThisSessionHeading: string;
    rsvpByEmail: string;
    seasonLaunchEyebrow: string;
    seasonCloseEyebrow: string;
    thisEditionEyebrow: string;
    speakerPlaceholder: string;
    venuePlaceholder: string;
    nextEditionLabel: string;
    list: Array<{
      slug: string;
      dateLabel: string;
      dateTag: string;
      title: string;
      description: string;
      ticket: string;
    }>;
  };

  memberships: {
    label: string;
    heading: string;
    subheading: string;
    tiers: Array<{
      name: string;
      tag: string;
      price: string;
      per: string;
      desc: string;
      perks: string[];
      featured: boolean;
    }>;
    chooseCta: string;
  };

  community: {
    label: string;
    heading: string;
    intro: string;
    featuredLabel: string;
    featured: {
      title: string;
      flag: string;
      bullets: string[];
      learnMore: string;
    };
    voicesLabel: string;
    voicesHeading: string;
    members: Array<{
      name: string;
      langs: string;
      role: string;
      bio: string;
      url: string;
      urlLabel: string;
    }>;
    collaboratorsLabel: string;
    collaboratorsHeading: string;
    collaborators: Array<{ name: string; url: string }>;
    collaborateCta: string;
  };

  contact: {
    label: string;
    heading: string;
    intro: string;
    nameLabel: string;
    emailLabel: string;
    messageLabel: string;
    submitButton: string;
    successMessage: string;
    followText: string;
  };

  bbb: {
    label: string;
    heading: string;
    intro: string;
    registerCta: string;
    workshopDetailsCta: string;
    outcomesLabel: string;
    outcomesHeading: string;
    outcomes: Array<{ title: string; body: string }>;
    differentLabel: string;
    differentHeading: string;
    differentiators: Array<{ title: string; body: string }>;
    curriculumLabel: string;
    curriculumHeading: string;
    curriculum: string[];
    finalCtaHeading: string;
    finalCtaSubheading: string;
    finalCtaButton: string;
  };

  tenx: {
    label: string;
    heading: string;
    headingEmphasis: string;
    heroSub: string;
    pullQuote: string;
    daysLabel: string;
    days: string[];
    forYouLabel: string;
    forYouItems: string[];
    tamaraBio: string;
    tamaraName: string;
    tamaraRole: string;
    optInTitle: string;
    optInTitleEmphasis: string;
    optInSub: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    errorMsg: string;
    ctaButton: string;
    privacyNote: string;
    successHeading: string;
    successMessage: string;
  };

  unveiled: {
    label: string;
    heading: string;
    heroSub: string;
    reflectionHeading: string;
    reflectionText: string;
    shadowHeading: string;
    shadowText: string;
    pillarsLabel: string;
    pillars: Array<{ title: string; subtitle: string; description: string }>;
    noFiltersHeading: string;
    noFiltersText: string;
    faqHeading: string;
    faqs: Array<{ q: string; a: string }>;
    guidesLabel: string;
    guidesHeading: string;
    guides: Array<{ name: string; role: string; bio: string }>;
    joinedForcesHeading: string;
    joinedForcesText: string;
    transformationHeading: string;
    transformationIntro: string;
    transformations: Array<{ title: string; text: string }>;
    transformationNote: string;
    eventHeading: string;
    eventDate: string;
    eventTime: string;
    eventLocation: string;
    pricingLabel: string;
    pricingNote: string;
    tiers: Array<{
      name: string;
      badge: string;
      price: string;
      priceNote: string;
      regularPrice: string;
      perks: string[];
      cta: string;
    }>;
    reserveCta: string;
  };

  spanishConversation: {
    label: string;
    heading: string;
    headingEmphasis: string;
    subheading: string;
    intro: string;
    whyLabel: string;
    whyHeading: string;
    whyItems: Array<{ title: string; body: string }>;
    groupsLabel: string;
    groupsHeading: string;
    groupsIntro: string;
    groups: Array<{ name: string; dayTime: string; location: string; status: string }>;
    topicsLabel: string;
    topicsHeading: string;
    topics: Array<{ title: string; body: string }>;
    limitedSpots: string;
    ctaButton: string;
  };
};
