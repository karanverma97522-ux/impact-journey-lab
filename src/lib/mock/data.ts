/**
 * Mock data for the Innovation Ecosystem prototype.
 * No backend yet — everything here is in-memory demo content.
 */

export type Stage =
  | "Problem"
  | "Research"
  | "Validation"
  | "Team"
  | "Prototype"
  | "Incubation";

export const JOURNEY: Stage[] = [
  "Problem",
  "Research",
  "Validation",
  "Team",
  "Prototype",
  "Incubation",
];

export type IdeaStatus =
  | "Draft"
  | "Submitted"
  | "Researching"
  | "Validating"
  | "Building"
  | "Team Forming"
  | "Incubation Requested"
  | "Under Review"
  | "Incubated"
  | "Archived";

export type Person = {
  id: string;
  name: string;
  initials: string;
  role: string;
  institution: string;
  skills: string[];
  domains: string[];
  availability: "Open to collaborate" | "Limited" | "Unavailable";
  relation: "Collaborator" | "Teammate" | "Mentor" | "Suggested" | "Friend";
  workingOn?: string;
};

export type Idea = {
  id: string;
  title: string;
  summary: string;
  problem: string;
  domain: string;
  targetUsers: string;
  stage: Stage;
  status: IdeaStatus;
  progress: number;
  validation: "Not started" | "In progress" | "Evidence collected";
  collaborators: string[];
  lastActivity: string;
  created: string;
  updated: string;
};

export type Mission = {
  id: string;
  title: string;
  objective: string;
  ideaId?: string;
  state: "Active" | "Upcoming" | "Completed";
  due: string;
  done: number;
  total: number;
  tasks: { id: string; title: string; column: TaskColumn; assignee?: string }[];
};

export type TaskColumn =
  | "To Explore"
  | "To Do"
  | "In Progress"
  | "Review"
  | "Completed";

export const TASK_COLUMNS: TaskColumn[] = [
  "To Explore",
  "To Do",
  "In Progress",
  "Review",
  "Completed",
];

export type Opportunity = {
  id: string;
  title: string;
  org: string;
  type: string;
  deadline: string;
  daysLeft: number;
  location: string;
  eligibility: string;
  description: string;
};

export type Resource = {
  id: string;
  title: string;
  category: string;
  type: "Article" | "Video" | "Template" | "Toolkit" | "Course" | "Case Study";
  minutes: number;
  progress: number;
  blurb: string;
};

export type NotificationItem = {
  id: string;
  category: "Collaboration" | "Mentorship" | "Missions" | "Ideas" | "Incubation" | "Opportunities";
  title: string;
  body: string;
  time: string;
  unread: boolean;
};

export type Conversation = {
  id: string;
  name: string;
  kind: "Direct" | "Team" | "Mission" | "Idea" | "Mentor";
  context?: string;
  unread: number;
  last: string;
  time: string;
  messages: { id: string; from: string; me?: boolean; text: string; time: string }[];
};

export const currentUser = {
  name: "Aarav Menon",
  firstName: "Aarav",
  initials: "AM",
  role: "Student · 3rd year, Computer Science",
  institution: "Bharati Institute of Technology",
};

export const ideas: Idea[] = [
  {
    id: "campus-food-waste",
    title: "Campus Food Waste Tracker",
    summary: "Track and redirect surplus cafeteria food before it is discarded.",
    problem:
      "Campus cafeterias discard large volumes of edible food daily because surplus is only discovered after service ends.",
    domain: "Sustainability / Campus",
    targetUsers: "Cafeteria staff, student volunteers, NGO partners",
    stage: "Validation",
    status: "Validating",
    progress: 72,
    validation: "In progress",
    collaborators: ["ISHA", "RK", "TN"],
    lastActivity: "2 hours ago",
    created: "12 Mar 2026",
    updated: "Today",
  },
  {
    id: "smart-campus-queue",
    title: "Smart Campus Queue",
    summary: "Remove physical waiting lines from campus service desks.",
    problem:
      "Students lose 30–50 minutes a week waiting in queues for administrative and medical services.",
    domain: "Healthcare / Campus",
    targetUsers: "Students, administrative staff, campus clinic",
    stage: "Research",
    status: "Researching",
    progress: 38,
    validation: "In progress",
    collaborators: ["ISHA", "DV"],
    lastActivity: "Yesterday",
    created: "2 Feb 2026",
    updated: "Yesterday",
  },
  {
    id: "rural-lab-kit",
    title: "Rural Science Lab Kit",
    summary: "Low-cost modular lab kit for schools without laboratory funding.",
    problem:
      "Rural secondary schools teach practical science without any lab equipment, so experiments stay theoretical.",
    domain: "Education",
    targetUsers: "Government school teachers, class 8–10 students",
    stage: "Team",
    status: "Team Forming",
    progress: 54,
    validation: "Evidence collected",
    collaborators: ["MP"],
    lastActivity: "3 days ago",
    created: "18 Jan 2026",
    updated: "3 days ago",
  },
  {
    id: "artisan-ledger",
    title: "Artisan Ledger",
    summary: "Simple sales and inventory ledger for local craft sellers.",
    problem:
      "Small artisans track sales on paper and cannot tell which products are actually profitable.",
    domain: "Commerce",
    targetUsers: "Artisans, weekly market sellers",
    stage: "Prototype",
    status: "Incubation Requested",
    progress: 81,
    validation: "Evidence collected",
    collaborators: ["RK", "TN", "DV"],
    lastActivity: "5 days ago",
    created: "9 Dec 2025",
    updated: "5 days ago",
  },
  {
    id: "night-transit",
    title: "Night Transit Companion",
    summary: "Shared-route safety companion for late campus commutes.",
    problem: "Students leaving labs after 9 pm have no reliable, shared way home.",
    domain: "Mobility / Safety",
    targetUsers: "Late-hour commuters, hostel wardens",
    stage: "Problem",
    status: "Draft",
    progress: 12,
    validation: "Not started",
    collaborators: [],
    lastActivity: "1 week ago",
    created: "3 Aug 2026",
    updated: "1 week ago",
  },
];

export const problemDna = {
  ideaId: "campus-food-waste",
  statement:
    "Campus cafeterias discard edible surplus food daily because surplus quantity is only known after service ends.",
  who: {
    primary: ["Cafeteria supervisors", "Student volunteers"],
    secondary: ["Campus administration", "Partner NGOs"],
    stakeholders: ["Sustainability office", "Food vendors"],
  },
  why: [
    "Surplus is counted manually at closing time",
    "No shared signal between kitchen and volunteers",
    "Pickup partners need 2 hours of notice",
  ],
  where: ["Campus", "Hostel messes", "Vendor kitchens"],
  painLevel: "High" as "Low" | "Medium" | "High" | "Critical",
  frequency: "Daily",
  currentSolutions: [
    "WhatsApp group between two volunteers",
    "Nothing — surplus is discarded",
    "Occasional NGO phone calls",
  ],
  currentGaps: ["Too slow", "Not reliable", "No record of what happened"],
  technology: ["Mobile application", "Lightweight data logging", "SMS notifications"],
  expertise: ["Developer", "Operations / Logistics", "Domain Expert (food safety)", "Researcher"],
  clarity: [
    { area: "Problem clarity", state: "Strong" },
    { area: "User understanding", state: "Strong" },
    { area: "Evidence collected", state: "Needs More Evidence" },
    { area: "Existing solution research", state: "Needs More Evidence" },
    { area: "Pain understanding", state: "Strong" },
    { area: "Validation progress", state: "Still Exploring" },
  ] as { area: string; state: "Strong" | "Needs More Evidence" | "Still Exploring" }[],
};

export const ideaActivity = [
  { id: "a1", label: "Problem DNA updated", detail: "Pain level evidence added", time: "2 hours ago" },
  { id: "a2", label: "Interview logged", detail: "Cafeteria supervisor, Block C", time: "Yesterday" },
  { id: "a3", label: "Collaborator joined", detail: "Tanvi Nair — Operations", time: "3 days ago" },
  { id: "a4", label: "Mission completed", detail: "Map the surplus workflow", time: "5 days ago" },
  { id: "a5", label: "Idea created", detail: "Draft started from a campus observation", time: "12 Mar 2026" },
];

export const missions: Mission[] = [
  {
    id: "validate-problem",
    title: "Validate Your Problem",
    objective: "Interview 5 potential users and document what you heard.",
    ideaId: "campus-food-waste",
    state: "Active",
    due: "In 3 days",
    done: 3,
    total: 5,
    tasks: [
      { id: "t1", title: "Draft interview questions", column: "Completed", assignee: "AM" },
      { id: "t2", title: "Interview cafeteria supervisor", column: "Completed", assignee: "AM" },
      { id: "t3", title: "Interview hostel mess lead", column: "Completed", assignee: "ISHA" },
      { id: "t4", title: "Interview NGO pickup partner", column: "In Progress", assignee: "AM" },
      { id: "t5", title: "Interview sustainability office", column: "To Do" },
      { id: "t6", title: "Cluster insights into patterns", column: "To Explore" },
      { id: "t7", title: "Summarise findings for mentor", column: "Review", assignee: "RK" },
    ],
  },
  {
    id: "map-solutions",
    title: "Map Existing Solutions",
    objective: "Document how the problem is solved today and where it breaks.",
    ideaId: "smart-campus-queue",
    state: "Active",
    due: "In 8 days",
    done: 2,
    total: 6,
    tasks: [
      { id: "s1", title: "List current workarounds", column: "Completed" },
      { id: "s2", title: "Find 3 comparable products", column: "Completed" },
      { id: "s3", title: "Note pricing and access gaps", column: "In Progress" },
      { id: "s4", title: "Talk to one queue operator", column: "To Do" },
      { id: "s5", title: "Write a one-page comparison", column: "To Explore" },
      { id: "s6", title: "Share with team", column: "To Explore" },
    ],
  },
  {
    id: "prototype-sprint",
    title: "Prototype Sprint",
    objective: "Build a clickable prototype and test it with 3 users.",
    state: "Upcoming",
    due: "Starts 4 Sep",
    done: 0,
    total: 7,
    tasks: [],
  },
  {
    id: "problem-discovery",
    title: "Problem Discovery Sprint",
    objective: "Observe your environment and log 10 real problems.",
    state: "Completed",
    due: "Completed 14 Jul",
    done: 10,
    total: 10,
    tasks: [],
  },
];

export const network: Person[] = [
  {
    id: "isha",
    name: "Isha Kulkarni",
    initials: "IK",
    role: "Student · Design",
    institution: "Bharati Institute of Technology",
    skills: ["UI/UX", "User research", "Figma"],
    domains: ["Sustainability", "Campus"],
    availability: "Open to collaborate",
    relation: "Teammate",
    workingOn: "Campus Food Waste Tracker",
  },
  {
    id: "rk",
    name: "Dr. Rohit Kamath",
    initials: "RK",
    role: "Mentor · Product Strategy",
    institution: "Ecosystem mentor pool",
    skills: ["Product strategy", "Validation", "Go-to-market"],
    domains: ["Consumer", "Sustainability"],
    availability: "Limited",
    relation: "Mentor",
    workingOn: "2 active mentorships",
  },
  {
    id: "tn",
    name: "Tanvi Nair",
    initials: "TN",
    role: "Student · Operations",
    institution: "Bharati Institute of Technology",
    skills: ["Logistics", "Field research"],
    domains: ["Sustainability"],
    availability: "Open to collaborate",
    relation: "Collaborator",
    workingOn: "Campus Food Waste Tracker",
  },
  {
    id: "dv",
    name: "Dev Verma",
    initials: "DV",
    role: "Student · Backend",
    institution: "Sardar College of Engineering",
    skills: ["Node.js", "Data pipelines", "APIs"],
    domains: ["Campus", "Commerce"],
    availability: "Limited",
    relation: "Collaborator",
    workingOn: "Artisan Ledger",
  },
  {
    id: "mp",
    name: "Meera Pillai",
    initials: "MP",
    role: "Student · Education research",
    institution: "St. Xavier's College",
    skills: ["Curriculum design", "Interviews"],
    domains: ["Education"],
    availability: "Open to collaborate",
    relation: "Friend",
    workingOn: "Rural Science Lab Kit",
  },
  {
    id: "ayaan",
    name: "Ayaan Qureshi",
    initials: "AQ",
    role: "Student · Data",
    institution: "Bharati Institute of Technology",
    skills: ["Data analysis", "Python", "Dashboards"],
    domains: ["Sustainability", "Mobility"],
    availability: "Open to collaborate",
    relation: "Suggested",
    workingOn: "Looking for a sustainability team",
  },
  {
    id: "nidhi",
    name: "Nidhi Rao",
    initials: "NR",
    role: "Student · Business",
    institution: "Sardar College of Engineering",
    skills: ["Market research", "Finance", "Pitching"],
    domains: ["Commerce", "Education"],
    availability: "Open to collaborate",
    relation: "Suggested",
    workingOn: "Validation sprint cohort",
  },
];

export const opportunities: Opportunity[] = [
  {
    id: "o1",
    title: "National Student Startup Challenge",
    org: "Ministry of Innovation Cell",
    type: "Startup Competition",
    deadline: "12 Sep 2026",
    daysLeft: 17,
    location: "Hybrid · Delhi",
    eligibility: "Undergraduate teams of 2–5",
    description:
      "Pitch a validated student venture. Finalists receive a seed grant and a 3-month incubation slot.",
  },
  {
    id: "o2",
    title: "Sustainability Prototype Grant",
    org: "GreenFutures Foundation",
    type: "Grant",
    deadline: "30 Aug 2026",
    daysLeft: 4,
    location: "Remote",
    eligibility: "Ideas with documented user evidence",
    description: "₹1.5L prototype grant for climate and resource-efficiency projects.",
  },
  {
    id: "o3",
    title: "Campus Health Hackathon",
    org: "MedTech Collective",
    type: "Hackathon",
    deadline: "5 Sep 2026",
    daysLeft: 10,
    location: "On campus",
    eligibility: "Open to all students",
    description: "36 hours to build a working prototype for a campus health problem.",
  },
  {
    id: "o4",
    title: "Pre-Incubation Cohort — Autumn",
    org: "BIT Incubation Centre",
    type: "Incubation Program",
    deadline: "20 Sep 2026",
    daysLeft: 25,
    location: "On campus",
    eligibility: "Ideas at validation stage or beyond",
    description: "Eight weeks of structured validation, mentorship and weekly review.",
  },
  {
    id: "o5",
    title: "Founder Storytelling Workshop",
    org: "Ecosystem Learning",
    type: "Workshop",
    deadline: "1 Sep 2026",
    daysLeft: 6,
    location: "Online",
    eligibility: "Open",
    description: "Practical session on explaining your problem before your solution.",
  },
];

export const ecosystemNews = [
  {
    id: "n1",
    tag: "Funding",
    title: "Campus-born climate ventures raised a record share of early grants this quarter",
    source: "Ecosystem Brief",
    time: "2 days ago",
  },
  {
    id: "n2",
    tag: "Policy",
    title: "New state programme adds incubation seats for rural-focused student projects",
    source: "Innovation Weekly",
    time: "4 days ago",
  },
  {
    id: "n3",
    tag: "Trend",
    title: "Why validation-first teams reach prototype 40% faster",
    source: "Ecosystem Research",
    time: "1 week ago",
  },
];

export const knowledge: Resource[] = [
  {
    id: "k1",
    title: "How to interview users without leading them",
    category: "Problem Discovery",
    type: "Article",
    minutes: 9,
    progress: 100,
    blurb: "The five question shapes that produce evidence instead of politeness.",
  },
  {
    id: "k2",
    title: "Problem statement worksheet",
    category: "Problem Discovery",
    type: "Template",
    minutes: 15,
    progress: 60,
    blurb: "Fill-in structure to move from a vague observation to a testable problem.",
  },
  {
    id: "k3",
    title: "Validation sprint toolkit",
    category: "Idea Validation",
    type: "Toolkit",
    minutes: 40,
    progress: 25,
    blurb: "Plan, run and document a one-week validation sprint.",
  },
  {
    id: "k4",
    title: "Reading a business model canvas honestly",
    category: "Business Models",
    type: "Video",
    minutes: 22,
    progress: 0,
    blurb: "Where student canvases usually hide their weakest assumption.",
  },
  {
    id: "k5",
    title: "Market research on a zero budget",
    category: "Market Research",
    type: "Course",
    minutes: 75,
    progress: 0,
    blurb: "Public data sources, field observation and small-sample sanity checks.",
  },
  {
    id: "k6",
    title: "The pivot that saved a campus logistics team",
    category: "Failure & Learning",
    type: "Case Study",
    minutes: 12,
    progress: 0,
    blurb: "What the team believed, what happened, and what they changed.",
  },
  {
    id: "k7",
    title: "Pitching the problem before the product",
    category: "Pitching",
    type: "Article",
    minutes: 7,
    progress: 100,
    blurb: "A structure for the first ninety seconds of any pitch.",
  },
  {
    id: "k8",
    title: "Runway, burn and student budgets",
    category: "Finance",
    type: "Article",
    minutes: 11,
    progress: 0,
    blurb: "Small-scale finance vocabulary you will need in review meetings.",
  },
];

export const notifications: NotificationItem[] = [
  {
    id: "nt1",
    category: "Mentorship",
    title: "Dr. Rohit Kamath accepted your mentorship request",
    body: "First session suggested for Thursday, 4 pm.",
    time: "12 min ago",
    unread: true,
  },
  {
    id: "nt2",
    category: "Collaboration",
    title: "Tanvi Nair joined Campus Food Waste Tracker",
    body: "She added operations and field research to the team.",
    time: "2 hours ago",
    unread: true,
  },
  {
    id: "nt3",
    category: "Missions",
    title: "Mission deadline in 3 days",
    body: "Validate Your Problem — 3 of 5 interviews complete.",
    time: "5 hours ago",
    unread: true,
  },
  {
    id: "nt4",
    category: "Incubation",
    title: "Artisan Ledger application moved to Under Review",
    body: "BIT Incubation Centre assigned a reviewer.",
    time: "Yesterday",
    unread: false,
  },
  {
    id: "nt5",
    category: "Opportunities",
    title: "Sustainability Prototype Grant closes in 4 days",
    body: "Your saved opportunity is approaching its deadline.",
    time: "Yesterday",
    unread: false,
  },
  {
    id: "nt6",
    category: "Ideas",
    title: "Feedback received on Smart Campus Queue",
    body: "A reviewer asked for clearer evidence of frequency.",
    time: "2 days ago",
    unread: false,
  },
];

export const conversations: Conversation[] = [
  {
    id: "c1",
    name: "Campus Food Waste Tracker",
    kind: "Team",
    context: "Idea team · 4 members",
    unread: 2,
    last: "Isha: I mapped the pickup window, sharing notes tonight.",
    time: "09:12",
    messages: [
      { id: "m1", from: "Tanvi", text: "Supervisor confirmed surplus peaks after 8:30 pm.", time: "08:41" },
      { id: "m2", from: "Aarav", me: true, text: "That matches interview 2. Let's log it as evidence.", time: "08:47" },
      { id: "m3", from: "Isha", text: "I mapped the pickup window, sharing notes tonight.", time: "09:12" },
    ],
  },
  {
    id: "c2",
    name: "Dr. Rohit Kamath",
    kind: "Mentor",
    context: "Mentorship · Product strategy",
    unread: 1,
    last: "Bring your three riskiest assumptions on Thursday.",
    time: "Yesterday",
    messages: [
      { id: "m1", from: "Aarav", me: true, text: "Thank you for accepting the request.", time: "Yesterday" },
      { id: "m2", from: "Rohit", text: "Bring your three riskiest assumptions on Thursday.", time: "Yesterday" },
    ],
  },
  {
    id: "c3",
    name: "Validate Your Problem",
    kind: "Mission",
    context: "Mission chat",
    unread: 0,
    last: "You: Two interviews left before Friday.",
    time: "Mon",
    messages: [
      { id: "m1", from: "Aarav", me: true, text: "Two interviews left before Friday.", time: "Mon" },
    ],
  },
  {
    id: "c4",
    name: "Dev Verma",
    kind: "Direct",
    unread: 0,
    last: "Can you review the ledger schema?",
    time: "Sun",
    messages: [{ id: "m1", from: "Dev", text: "Can you review the ledger schema?", time: "Sun" }],
  },
  {
    id: "c5",
    name: "BIT Incubation Centre",
    kind: "Idea",
    context: "Artisan Ledger · application",
    unread: 0,
    last: "Reviewer: We'll come back with questions this week.",
    time: "Fri",
    messages: [
      { id: "m1", from: "Reviewer", text: "We'll come back with questions this week.", time: "Fri" },
    ],
  },
];

export const networkActivity = [
  { id: "na1", text: "Tanvi Nair joined your idea team", meta: "Campus Food Waste Tracker", time: "2h" },
  { id: "na2", text: "Dr. Rohit Kamath accepted your mentorship request", meta: "Product strategy", time: "5h" },
  { id: "na3", text: "Ayaan Qureshi commented on your problem statement", meta: "Smart Campus Queue", time: "Yesterday" },
  { id: "na4", text: "Meera Pillai completed a task", meta: "Rural Science Lab Kit", time: "2d" },
];

export function ideaById(id: string) {
  return ideas.find((i) => i.id === id);
}
