export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: "Full Stack" | "Frontend App" | "Web Tool";
  problem: string;
  solution: string;
  features: string[];
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  imageUrl: string;
  badge?: string;
  accentColor: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level: "Proficient" | "Working Knowledge" | "Learning";
    iconName?: string;
  }[];
}

export interface LearningItem {
  title: string;
  category: string;
  description: string;
  currentMilestone: string;
}

export const PERSONAL_INFO = {
  name: "MD. MOHAIMINUL",
  preferredName: "Mohaiminul",
  role: "Frontend Developer",
  targetRole: "MERN Stack Developer & Software Engineer",
  headline: "Frontend Developer building thoughtful, fast, and user-focused web experiences.",
  subheadline:
    "Electronics and Communication Engineering student at Hajee Mohammad Danesh Science and Technology University (HSTU). Combining engineering problem-solving with modern web technologies, AI integrations, and responsive UI craft.",
  location: "Dinajpur, Bangladesh",
  status: "Open to Internships & Junior Roles",
  email: "mohaiminul6543@gmail.com",
  github: "https://github.com/Minul-lab",
  linkedin: "https://www.linkedin.com/in/md-mohaiminul-a56429373/",
  resumeUrl:
    "https://docs.google.com/document/d/1bqrIRU_2m0CiKTSRpVk75U2ZAtmrYT6vJWFiEckYhVw/edit?usp=sharing",
  photoUrl: "/images/mohaiminul.jpg",
  education: {
    degree: "Bachelor of Science in Electronics and Communication Engineering",
    institution: "Hajee Mohammad Danesh Science and Technology University (HSTU)",
    location: "Dinajpur, Bangladesh",
    focus: "Embedded Systems, Digital Signal Processing, Communication Systems & Software Engineering Fundamentals",
  },
};

export const PROJECTS_DATA: Project[] = [
  {
    id: "bazar-dor",
    title: "Bazar-Dor",
    tagline: "Daily Commodity & Market Price Tracker for Bangladesh",
    category: "Full Stack",
    badge: "Featured Full-Stack",
    accentColor: "emerald",
    imageUrl: "/images/projects/bazar-dor.png",
    problem:
      "Everyday commodity prices fluctuate significantly across markets in Bangladesh, making it difficult for consumers and households to track price trends, detect inflation shifts, and make informed shopping decisions.",
    solution:
      "Engineered an interactive daily price tracking platform that aggregates everyday essential prices (rice, lentils, oil, vegetables, fish, meat, spices), visualizes daily price gainers/losers, and allows multi-market comparisons.",
    features: [
      "Live price ticker marquee displaying real-time commodity prices and percentage changes",
      "Daily price movers section highlighting top price increases and declines",
      "Dynamic category filtering and multi-criteria sorting (Price: Low to High / High to Low)",
      "Division and bazaar-level price comparison engine with min, max, and average indicators",
      "Full authentication flow with BetterAuth (Email/Password, Google & GitHub OAuth)",
      "MongoDB database integration for user session and profile persistence",
    ],
    technologies: [
      "Next.js (App Router)",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "DaisyUI",
      "BetterAuth",
      "MongoDB",
      "REST API",
      "React Toastify",
    ],
    liveUrl: "https://bazar-dor-2-avum.vercel.app/",
    githubUrl: "https://github.com/Minul-lab/bazar-dor-2",
  },
  {
    id: "fitlog",
    title: "FitLog",
    tagline: "Interactive Workout Planner & Fitness Routine Tracker",
    category: "Frontend App",
    badge: "Interactive Utility",
    accentColor: "cyan",
    imageUrl: "/images/projects/fitlog.png",
    problem:
      "Gym goers and fitness enthusiasts often struggle with cluttered routine trackers, lacking a lightweight, distraction-free tool to organize today's workout plan and calculate active metrics on the fly.",
    solution:
      "Created a fast, responsive workout companion that allows users to explore a catalog of targeted exercises, build custom daily workout splits, and monitor aggregate time and calorie estimates.",
    features: [
      "Curated catalog of 12+ structured exercises with muscle group targeting and execution specs",
      "Interactive 'Today's Plan' session builder (manage up to 5 focused daily exercises)",
      "Real-time aggregate metric computation (cumulative duration, estimated calories burned, exercises completed)",
      "One-click 'Save for Later' workout bookmarking and completion toggles",
      "Sort exercises dynamically by workout duration, calorie burn rate, or rating",
      "Responsive layout optimized for mobile screens during active gym sessions",
    ],
    technologies: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "React Icons",
      "React Toastify",
      "Vercel",
    ],
    liveUrl: "https://fit-log-by-minul.vercel.app/",
    githubUrl: "https://github.com/Minul-lab/fit-log-by-minul",
  },
  {
    id: "devstack",
    title: "DevStack",
    tagline: "Developer Technology Stack Builder & Learning Hub",
    category: "Web Tool",
    badge: "Ecosystem Tool",
    accentColor: "indigo",
    imageUrl: "/images/projects/devstack.png",
    problem:
      "Junior developers and tech learners need an intuitive visual way to map modern web technologies, understand where each tool fits in the architecture, and reinforce core React mental models.",
    solution:
      "Built a developer workbench where users can explore comprehensive technology data, curate and customize their personal tech stack in real-time, and study fundamental React concepts.",
    features: [
      "Categorized technology discovery catalog (Frontend, Backend, Database, Cloud & Tooling)",
      "Dynamic stack accumulator enabling users to add, review, and assemble custom stacks",
      "Comprehensive React architectural Q&A section explaining JSX, state vs. props, and lifecycle hooks",
      "Instant visual toast notifications via React Toastify for user feedback",
      "Lightweight, high-performance architecture built with Vite and Tailwind CSS v4",
    ],
    technologies: [
      "React 19",
      "TypeScript",
      "Vite",
      "Tailwind CSS v4",
      "React Toastify",
      "Netlify",
    ],
    liveUrl: "https://devstack-by-minul.netlify.app/",
    githubUrl: "https://github.com/Minul-lab/Devstack",
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Frontend Development",
    description: "Core strength in building responsive, modern user interfaces with clean architecture.",
    skills: [
      { name: "React.js", level: "Proficient" },
      { name: "Next.js (App Router)", level: "Proficient" },
      { name: "JavaScript (ES6+)", level: "Proficient" },
      { name: "HTML5 & CSS3", level: "Proficient" },
      { name: "Tailwind CSS", level: "Proficient" },
      { name: "TypeScript", level: "Working Knowledge" },
    ],
  },
  {
    title: "Backend & Full-Stack",
    description: "Actively expanding knowledge in server-side technologies as part of the MERN stack journey.",
    skills: [
      { name: "Node.js", level: "Working Knowledge" },
      { name: "Express.js", level: "Working Knowledge" },
      { name: "REST APIs", level: "Working Knowledge" },
      { name: "BetterAuth", level: "Working Knowledge" },
    ],
  },
  {
    title: "Database",
    description: "Data modeling and persistence for web applications.",
    skills: [
      { name: "MongoDB", level: "Working Knowledge" },
    ],
  },
  {
    title: "Programming Languages",
    description: "Academic foundation in procedural and object-oriented programming.",
    skills: [
      { name: "C", level: "Proficient" },
      { name: "C++", level: "Proficient" },
      { name: "JavaScript", level: "Proficient" },
    ],
  },
  {
    title: "Tools & Workflow",
    description: "Modern developer workflow, version control, and cloud hosting.",
    skills: [
      { name: "Git", level: "Proficient" },
      { name: "GitHub", level: "Proficient" },
      { name: "Vercel", level: "Proficient" },
      { name: "Netlify", level: "Proficient" },
      { name: "npm", level: "Proficient" },
      { name: "VS Code", level: "Proficient" },
    ],
  },
];

export const CURRENTLY_LEARNING: LearningItem[] = [
  {
    title: "MERN Stack Architecture",
    category: "Full-Stack Development",
    description:
      "Deepening practical backend knowledge with Express middleware, MongoDB aggregation pipelines, authentication patterns, and RESTful service design.",
    currentMilestone: "Building end-to-end CRUD services with secure session handling",
  },
  {
    title: "TypeScript Deep Dive",
    category: "Language & Type Safety",
    description:
      "Mastering advanced generics, strict utility types, and end-to-end type safety across client-server boundaries in Next.js applications.",
    currentMilestone: "Refactoring application state and API payloads with strict interfaces",
  },
  {
    title: "Data Structures & Algorithms in C++",
    category: "Computer Science Core",
    description:
      "Leveraging C/C++ background from Electronics Engineering to sharpen algorithmic problem solving, time-space complexity optimization, and memory awareness.",
    currentMilestone: "Solving intermediate problem sets on arrays, hashing, and trees",
  },
  {
    title: "AI Integration in Web Apps",
    category: "Emerging Technologies",
    description:
      "Exploring practical integration of LLMs, web-based AI tooling, and local AI inference running directly on consumer hardware.",
    currentMilestone: "Experimenting with local open-weight model workflows and AI API endpoints",
  },
];

export const ABOUT_PARAGRAPHS = [
  {
    heading: "The Engineering Foundation",
    text: "I am an undergraduate student in Electronics and Communication Engineering at Hajee Mohammad Danesh Science and Technology University (HSTU) in Dinajpur, Bangladesh. Studying ECE gave me a solid appreciation for how computational systems function from the hardware layer up—starting with low-level C and C++, circuit logic, and analytical problem-solving.",
  },
  {
    heading: "Transition to Web & Frontend Craft",
    text: "When I began building software for the web, I discovered how much I enjoy the immediate connection between code and user experience. I focused deeply on modern JavaScript, React.js, Next.js, and Tailwind CSS. I care about writing maintainable code, structuring components thoughtfully, and designing interfaces that feel fast, intuitive, and accessible on every device.",
  },
  {
    heading: "Expanding to MERN & Full-Stack",
    text: "To become a well-rounded software engineer, I am actively expanding my skillset into full-stack development with Node.js, Express.js, and MongoDB. Projects like Bazar-Dor have allowed me to build real-world applications featuring authentication, API routing, and database persistence.",
  },
  {
    heading: "Curiosity for AI & IoT",
    text: "My long-term aspiration bridges my engineering roots with future tech. I have a genuine interest in Artificial Intelligence, machine learning integrations in web applications, running AI models locally on personal machines, and embedded IoT systems.",
  },
];
