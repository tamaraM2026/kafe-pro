export type Translations = {
  common: {
    siteName: string;
    nav: {
      home: string;
      about: string;
      founder: string;
      memberships: string;
      community: string;
      cesky: string;
      contact: string;
    };
    programmesLabel: string;
    programmesItems: {
      bbb: string;
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
    membershipsTitle: string;
    membershipsDescription: string;
    communityTitle: string;
    communityDescription: string;
    contactTitle: string;
    contactDescription: string;
    bbbTitle: string;
    bbbDescription: string;
  };

  home: {
    regionLabel: string;
    heroHeading: string;
    heroBrandName: string;
    heroDescription: string;
    heroSubtext: string;
    stats: Array<{ value: string; label: string }>;
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
    bannerLabel: string;
    bannerHeading: string;
    bannerDescription: string;
    bannerCta: string;
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
};
