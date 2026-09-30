export const copy = {
  meta: {
    title: "Kampong Ride — skip the surge, ride with your neighbours",
    description:
      "Kampong Ride matches you with neighbours from your own estate who are already driving to work. Tag along, chip in for the ride, skip the surge pricing.",
  },
  nav: {
    wordmark: "Kampong Ride",
    links: {
      how: "How it works",
      drive: "Already driving?",
      faq: "FAQ",
    },
    cta: "Join waitlist",
  },
  hero: {
    titleLine1: "Skip the morning surge.",
    titleLine2: "Join the ride.",
    body: "Kampong Ride matches you with neighbours from your own estate — your block, your condo, your kampong — who are already driving to work every morning. Tag along, chip in for the ride, skip the surge pricing.",
    ctaPrimary: "Join waitlist",
    ctaSecondary: "See how it works",
  },
  howItWorks: {
    eyebrow: "How it works",
    steps: [
      {
        number: "01",
        title: "Create or join a ride",
        body: "Find neighbours who are already driving to work and heading in your direction.",
      },
      {
        number: "02",
        title: "Ride together, split the cost",
        body: "Chip in for fuel and parking directly with your driver. No surge pricing, no platform markup — just a fair split between neighbours.",
      },
      {
        number: "03",
        title: "Do it again tomorrow",
        body: "Keep a regular match for a standing carpool, or find someone new whenever your schedule changes.",
      },
    ],
  },
  alreadyDriving: {
    eyebrow: "Driving to work?",
    title: "Turn your empty seats into savings",
    body: "It’s a trip you’re already making. Offer seats to neighbours: you set the route, the pickup point, riders chip in for fuel.",
    cta: "Offer a seat",
    photoAlt: "A driver and neighbours carpooling together on a morning commute",
    tags: ["You choose your riders", "Fuel costs split fairly", "Pause anytime"],
  },
  faq: {
    eyebrow: "Questions",
    items: [
      {
        q: "Is it available in my neighbourhood?",
        a: "The more people who join, the more likely you’ll find a match. So spread the word! And register your commute to encourage neighbours to join.",
      },
      {
        q: "How much does it cost?",
        a: "The price per seat is set by the driver, based on fuel and parking costs",
      },
      {
        q: "Do I need a car to join?",
        a: "No — most people join as riders. If you already drive to work, you can also offer seats to neighbours.",
      },
      {
        q: "Do I have to commit to every day?",
        a: "No — join for the days that work for you. Ride occasionally, or set up a standing match for your regular commute.",
      },
    ],
  },
  signup: {
    titleLine1: "Your ride is coming soon.",
    titleLine2: "than you think.",
    body: "Started by neighbours tired of surge pricing, being stuck in traffic and looking at empty seats in other cars.",
    form: {
      emailLabel: "Email address",
      emailPlaceholder: "Email address",
      submit: "Join waitlist",
      submitPending: "Adding you…",
    },
    errors: {
      invalidEmail: "Enter a valid email address.",
      serverError: "Something went wrong. Please try again later.",
    },
    success: "You're on the list!",
  },
  footer: {
    tagline: "Kampong Ride — carpool with your neighbours.",
  },
} as const;

export type Copy = typeof copy;
