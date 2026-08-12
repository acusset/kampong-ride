export const copy = {
  meta: {
    title: "Kampung Ride — skip the surge, ride with your neighbours",
    description:
      "Kampung Ride matches you with neighbours from your own estate who are already driving to work. Tag along, chip in for the ride, skip the surge pricing.",
  },
  nav: {
    wordmark: "Kampung Ride",
    links: {
      how: "How it works",
      drive: "Already driving?",
      faq: "FAQ",
    },
    cta: "Join waitlist",
  },
  hero: {
    titleLine1: "Skip the morning surge.",
    titleLine2: "Join a ride.",
    body: "Kampung Ride matches you with neighbours from your own estate — your block, your condo, your kampung — who are already driving to work every morning. Tag along, chip in for the ride, skip the surge pricing.",
    ctaPrimary: "Join waitlist",
    ctaSecondary: "See how it works",
  },
  howItWorks: {
    eyebrow: "How it works",
    steps: [
      {
        number: "01",
        title: "Tell us your estate",
        body: "Teban Gardens, a cluster of HDB blocks, a condo — whatever your kampung is. We match locally first, starting with neighbours who already live near you.",
      },
      {
        number: "02",
        title: "Get matched with neighbours",
        body: "We pair you with neighbours who already make this trip every day — no one's going out of their way for you.",
      },
      {
        number: "03",
        title: "Ride together, split the cost",
        body: "Chip in for fuel and parking directly with your driver. No surge pricing, no platform markup — just a fair split between neighbours.",
      },
      {
        number: "04",
        title: "Do it again tomorrow",
        body: "Keep a regular match for a standing carpool, or find someone new whenever your schedule changes.",
      },
    ],
  },
  alreadyDriving: {
    eyebrow: "Driving to work?",
    title: "Turn your empty seats into savings",
    body: "It’s a trip you’re already making. Offer a seat to up to three neighbours — you set the days, the seats and the pickup points, riders chip in for fuel, and you start the day with company instead of an empty car.",
    cta: "Offer a seat",
    photoPlaceholder: "Photo placeholder — driver and neighbours carpooling in the morning",
    tags: ["You choose your riders", "Fuel costs split fairly", "Pause anytime"],
  },
  whatItCosts: {
    eyebrow: "What it costs",
    rideHailing: {
      amount: "~$18",
      label: "Ride-hailing, surge hour, one rider",
    },
    kampungRide: {
      amount: "$5–7",
      label: "Kampung Ride, same trip, split with the driver",
    },
    caption:
      "Illustrative example for a typical estate-to-town commute. Actual cost depends on distance and how many neighbours share the ride.",
  },
  faq: {
    eyebrow: "Questions",
    items: [
      {
        q: "Which estates are covered?",
        a: "We're rolling out estate by estate. Tell us yours when you join the waitlist and we'll let you know as soon as Kampung Ride is live near you. Matches are always with someone from your own estate — you're never paired with a stranger from across town.",
      },
      {
        q: "How much does it cost?",
        a: "Riders split fuel and parking directly with the driver — there's no markup and no surge pricing. You and your driver agree the amount before the ride.",
      },
      {
        q: "Do I need a car to join?",
        a: "No — most people join as riders. If you already drive to work, you can also offer seats to neighbours.",
      },
      {
        q: "Do I have to commit to every day?",
        a: "No — join for the days that work for you. Ride occasionally, or set up a standing match for your regular commute.",
      },
      {
        q: "What if my match falls through?",
        a: "You're never locked into one ride. Cancel with notice and we'll help you find another neighbour heading your way, or fall back to your usual commute for the day.",
      },
    ],
  },
  signup: {
    titleLine1: "Your kampung is coming soon.",
    titleLine2: "than you think.",
    body: "Started by neighbours tired of surge pricing — not a big rideshare company.",
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
    success: "You're on the list — we'll email you when Kampung Ride reaches your estate.",
  },
  footer: {
    tagline: "Kampung Ride — carpool with your neighbours.",
  },
} as const;

export type Copy = typeof copy;
