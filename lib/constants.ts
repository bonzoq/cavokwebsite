export const SITE_CONFIG = {
  name: "CAVOK",
  tagline: "The Modern Digital Pilot Logbook",
  description:
    "Log flights in seconds, track currency automatically, and export professional PDF logbooks. The free pilot logbook app for student pilots through airline captains.",
  url: "https://cavok.app",
  email: "hello@cavok.app",
  appStoreUrl: "https://apps.apple.com",
  twitter: "@cavokapp",
  instagram: "@cavokapp",
} as const;

export const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Support", href: "/support" },
] as const;

export const FEATURES = [
  {
    title: "Smart Flight Logging",
    description:
      "Log flights in under 30 seconds with intelligent autocomplete, smart defaults, and automatic time calculations. Supports FAA and EASA formats.",
    icon: "Plane",
  },
  {
    title: "Live Statistics & Charts",
    description:
      "Beautiful dashboards showing your total times, monthly trends, aircraft breakdown, PIC vs SIC split, and career progression — all updating in real time.",
    icon: "BarChart3",
  },
  {
    title: "Currency Tracker",
    description:
      "Never wonder if you're current again. CAVOK automatically tracks FAA 61.57, IFR currency, medical certificates, and flight reviews. Custom rules too.",
    icon: "ShieldCheck",
  },
  {
    title: "Aircraft Fleet",
    description:
      "Manage your aircraft with type ratings, specs, photos, and per-aircraft statistics. From Cessna 172s to Boeing 737s.",
    icon: "PlaneTakeoff",
  },
  {
    title: "World Flight Map",
    description:
      "See every airport you've visited and every route you've flown on a beautiful interactive world map.",
    icon: "Globe",
  },
  {
    title: "Professional PDF Export",
    description:
      "Generate print-ready logbook PDFs in official EASA or FAA format. Perfect for interviews, applications, and audits.",
    icon: "FileText",
  },
  {
    title: "Document Vault",
    description:
      "Store licenses, medicals, ratings, and certificates. Get reminders before they expire. Never scramble for paperwork again.",
    icon: "FolderLock",
  },
  {
    title: "Import & Migrate",
    description:
      "Switching from ForeFlight, LogTen Pro, or a spreadsheet? Import your entire history in minutes with our smart CSV importer.",
    icon: "Download",
  },
] as const;

export const PRICING_PLANS = {
  free: {
    name: "Free",
    price: "$0",
    period: "forever",
    features: [
      "Unlimited flight logging",
      "Up to 3 aircraft",
      "Basic statistics (last 12 months)",
      "Day/Night VFR currency tracking",
      "CSV export",
      "Offline support",
    ],
    cta: "Download Free",
    highlighted: false,
  },
  pro: {
    name: "Pro",
    priceMonthly: "$4.99",
    priceYearly: "$39.99",
    period: "mo",
    features: [
      "Everything in Free, plus:",
      "Unlimited aircraft",
      "Full statistics & all charts",
      "All currency rules (IFR, medical, custom)",
      "PDF export (EASA & FAA format)",
      "Import from CSV / ForeFlight / LogTen",
      "Interactive flight map",
      "Document vault with expiry reminders",
      "Crew management",
      "Photo attachments & signatures",
      "Priority support",
    ],
    cta: "Start 7-Day Free Trial",
    highlighted: true,
  },
} as const;

export const TESTIMONIALS = [
  {
    quote:
      "I switched from a paper logbook after 200 hours and never looked back. CAVOK imported everything perfectly and the currency tracker alone is worth it.",
    name: "Sarah M.",
    title: "Commercial Pilot",
    hours: "1,200 hrs",
  },
  {
    quote:
      "Finally an app that understands EASA logging. The PDF export is identical to my physical logbook — my airline accepted it immediately.",
    name: "Thomas K.",
    title: "A320 First Officer",
    hours: "4,500 hrs",
  },
  {
    quote:
      "As a CFI, I love that my students can get signatures right in the app. It's saved me so much time.",
    name: "James R.",
    title: "CFII/MEI",
    hours: "2,800 hrs",
  },
  {
    quote:
      "The statistics dashboard is addictive. Watching my hours grow with those beautiful charts keeps me motivated.",
    name: "Priya S.",
    title: "Student Pilot",
    hours: "45 hrs",
  },
  {
    quote:
      "I've tried LogTen, ForeFlight logging, and FlyLog. CAVOK is the first one that felt right on day one.",
    name: "Mike D.",
    title: "ATP",
    hours: "8,200 hrs",
  },
  {
    quote:
      "Clean, fast, and it actually works offline when I'm flying in remote areas. The sync is seamless.",
    name: "Ana L.",
    title: "Bush Pilot",
    hours: "3,100 hrs",
  },
] as const;

export const FAQ_ITEMS = [
  {
    question: "Is CAVOK really free?",
    answer:
      "Yes! Unlimited flight logging, basic statistics, and CSV export are completely free, forever. Pro features like PDF export, full statistics, and the flight map are available with an optional subscription.",
  },
  {
    question: "Can I import my existing logbook?",
    answer:
      "Absolutely. CAVOK supports CSV import with smart column mapping. We specifically support ForeFlight and LogTen Pro formats, and you can import from any spreadsheet.",
  },
  {
    question: "Does it work for EASA and FAA?",
    answer:
      "Yes. CAVOK supports both FAA and EASA logging formats, currency rules, and PDF export templates. Select your regulatory framework in settings.",
  },
  {
    question: "What about offline use?",
    answer:
      "CAVOK works fully offline. Log flights, edit entries, and view your logbook without internet. Everything syncs automatically when you reconnect.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Your data is stored securely on Google Cloud (Firebase) with encryption at rest and in transit. Only you can access your logbook. You can export or delete your data at any time.",
  },
  {
    question: "Can I use CAVOK for airline applications?",
    answer:
      "Yes. CAVOK generates professional PDF logbooks in official EASA and FAA formats that are accepted by airlines and regulatory authorities.",
  },
  {
    question: "Will there be an Android version?",
    answer:
      "We're focused on making the best possible iOS experience first. Android is on our roadmap — join our mailing list to be notified.",
  },
  {
    question: "How do I cancel my Pro subscription?",
    answer:
      "You can cancel anytime through your Apple ID subscription settings. You'll keep Pro access until the end of your billing period.",
  },
] as const;

export const CURRENCY_RULES = [
  { label: "Day VFR Passenger Currency", detail: "3 landings / 90 days" },
  {
    label: "Night Passenger Currency",
    detail: "3 night full-stops / 90 days",
  },
  { label: "IFR Currency", detail: "6 approaches + hold / 6 months" },
  { label: "Flight Review", detail: "24 calendar months" },
  { label: "Medical Certificate expiry", detail: "Tracked automatically" },
  { label: "Custom rules you define", detail: "Fully configurable" },
] as const;

export const STATS = {
  totalPilots: 10000,
  totalFlights: 500000,
  totalCountries: 120,
} as const;
