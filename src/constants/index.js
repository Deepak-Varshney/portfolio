const navLinks = [
  {
    name: "Projects",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  { text: "CRM Platforms", imgPath: "/images/ideas.svg" },
  { text: "Clinic ERPs", imgPath: "/images/concepts.svg" },
  { text: "Community Apps", imgPath: "/images/designs.svg" },
  { text: "Video Suites", imgPath: "/images/code.svg" },
  { text: "CRM Platforms", imgPath: "/images/ideas.svg" },
  { text: "Clinic ERPs", imgPath: "/images/concepts.svg" },
  { text: "Community Apps", imgPath: "/images/designs.svg" },
  { text: "Video Suites", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 18, suffix: "+", label: "Months building Next.js/MERN products" },
  { value: 4, suffix: "+", label: "Production CRM & ERP launches" },
  { value: 120, suffix: "+", label: "Workflows & lead journeys automated" },
  { value: 6, suffix: "+", label: "Cross-functional squads partnered with" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Security-First Delivery",
    desc: "Designing RBAC, audit logs, and policy guards so CRMs and ERPs stay compliant from day one.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Clear Stakeholder Updates",
    desc: "Demonstrating progress with sprint notes, Loom walkthroughs, and release-ready documentation.",
  },
  {
    imgPath: "/images/time.png",
    title: "Reliable Sprint Velocity",
    desc: "Pairing TypeScript, Zustand, and automated testing to keep hand-offs predictable and on schedule.",
  },
];

const techStackImgs = [
  {
    name: "Next.js & React",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "TypeScript & Zustand",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Node.js & Express",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Three.js Storytelling",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "GitHub & CI",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "Next.js & React UI",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "TypeScript & State Patterns",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Node.js & Express APIs",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Three.js Storytelling",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "GitHub, CI & Reviews",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review:
      "Deepak turned months of scattered lead tracking into a cohesive CoreFlow release. He anticipates use-cases, writes clean TypeScript, and documents every change so rollouts feel effortless.",
    logoPath: "/images/logo1.png",
    title: "Full Stack Developer · Claims 360 Management",
    date: "May 2025 - Present",
    responsibilities: [
      "Leading CoreFlow CRM build in Next.js 14 + TypeScript covering lead intake, folio tracking, follow-up history, and audit logs.",
      "Designed RBAC and policy guards for sales, ops, and finance personas, securing 50+ workflows without slowing delivery.",
      "Connected Zustand stores, server actions, and analytics cards so leadership dashboards load in under 200ms.",
    ],
  },
  {
    review:
      "Give Deepak a fuzzy requirement and he’ll come back with a working module, test plan, and migration notes. CivicNest and MedNest shipped smoothly because he owned the full stack.",
    logoPath: "https://media.licdn.com/dms/image/v2/D4D0BAQHaCb-52w0aDQ/company-logo_200_200/company-logo_200_200/0/1718184357555?e=1765411200&v=beta&t=ZAEjqYq1isSmA7YTAFx9qOinNeftyMLenq0UP1beqB4",
    title: "Full Stack Developer (Intern) · Elenco Corporation",
    date: "Mar 2025 - Oct 2025",
    responsibilities: [
      "Built CivicNest society platform with Clerk auth, resident dashboards, event planner, and Recharts analytics.",
      "Shipped MedNest clinic ERP modules for appointments, doctor/reception RBAC, and jsPDF export of OPD cards.",
      "Standardized form flows with React Hook Form + Zod and centralized shared state with Zustand for consistent UX.",
    ],
  },
  {
    review:
      "Deepak modernized our invoicing stack, cleaned up the API surface, and kept everyone aligned. He is dependable for high-visibility shipping dates.",
    logoPath: "https://media.licdn.com/dms/image/v2/C4E0BAQHRAMuZRWuQ9A/company-logo_200_200/company-logo_200_200/0/1652949238727?e=1765411200&v=beta&t=Ituy8mhVFK37YvQLmhAfM3_SiBy6XHX7J0x7T7UD3lE",
    title: "Junior Full Stack Developer · Sight3",
    date: "Apr 2024 - Sep 2024",
    responsibilities: [
      "Developed a Next.js invoicing suite and reusable UI kit that improved client finance workflows by 25%.",
      "Authored REST APIs handling inventory, billing, and user data with validation, logging, and secure data access.",
      "Partnered with design, QA, and PMs to launch ahead of schedule while maintaining code reviews and documentation.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Nikhil Sahu",
    mentions: "Product Lead · Claims 360",
    review:
      "CoreFlow needed airtight RBAC and a ton of moving parts. Deepak not only shipped the feature set but also left us with documentation, analytics hooks, and a rollout plan our team trusted.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Alka Mehta",
    mentions: "Operations Director · Elenco Corporation",
    review:
      "CivicNest and MedNest were high-stakes launches for our community and clinic partners. Deepak handled authentication, dashboards, and jsPDF exports without missing a single milestone.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Rohan Desai",
    mentions: "Engineering Manager · Sight3",
    review:
      "He rebuilt our invoicing interface in Next.js, tightened up the API layer, and partnered with QA daily. The app went live two weeks early because Deepak kept everyone aligned.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Pragya Narang",
    mentions: "Mentor · Internshala Trainings",
    review:
      "Deepak is the rare learner who implements every concept in a practical build. His capstone demos covering MERN, DSA, and deployment best practices were consistently production-ready.",
    imgPath: "/images/client4.png",
  },
  {
    name: "Amit Kulkarni",
    mentions: "Technical Coach · IBM SkillsBuild",
    review:
      "During the IBM web app sprint he mentored peers, wrote modular JavaScript, and never compromised on testing. He’s dependable whenever a delivery date is non-negotiable.",
    imgPath: "/images/client5.png",
  },
];

const socialImgs = [
  {
    name: "GitHub",
    imgPath: "/images/github.svg",
    href: "https://github.com/Deepak-Varshney",
  },
  {
    name: "LinkedIn",
    imgPath: "/images/linkedin.png",
    href: "https://www.linkedin.com/in/deepakvarshney-exe",
  },
  {
    name: "Email",
    imgPath: "/images/mail.svg",
    href: "mailto:deepakvarshney.com@gmail.com",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
