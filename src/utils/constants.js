import funny_money from "../images/funnymoney.png";
import job_seeker from "../images/jobseeker.png";

const jobs = [
  {
    company: "Bovisync",
    title: "Web Developer & Project Manager",
    description: "",
    start_date: "July 2021",
    end_date: "current",
    activities: [
      "Assumed role as Engineering Manager after CTO departure, led sprints, personnel management, hiring, and product planning",
      "Worked daily with Product and Engineering teams to ensure company vision was being executed as manageable, technical tasks",
      "Wireframed, built, and launched progressive web app for optimizing cow diets using Ionic Vue, GraphQL, and Django",
      "Completed multi-year company objective to modernizing data visualization service for large data sets by implementing and customizing Plotly.js",
      "Updated and simplified drug-inventory tracking system user interface to be compatible with European farming standards",
      "Upgraded entire monolith codebase for ES6 compatibility and migrated to Rollup to decrease bundling times",
    ],
  },
  {
    company: "Actualize Coding Bootcamp",
    title: "Web Development Teaching Assistant",
    description: "",
    start_date: "May 2021",
    end_date: "July 2021",
    activities: [
      "Taught students how to ideate, architect, iterate, and build RESTful CRUD web applications",
      "Focused on teaching proficiency in Ruby, Rails, Javascript, VueJS, and PostgreSQL",
      "Held private office hours to help students learn new topics or round-out understanding of concepts covered in class",
    ],
  },
  {
    company: "Actualize Coding Bootcamp",
    title: "Web Development Student",
    description: "",
    start_date: "December 2020",
    end_date: "May 2021",
    activities: [
      "Learned fundamentals and best practices in full-stack web development in areas of project architecture, backend, frontend, and how to effectively self-teach new technologies",
      "Generated technical requirements and determined the most effective solutions, created wireframes, designed schema, and researched outside resources",
      "Built and tested the backend, incorporating external APIs",
      "Created pages and RESTful routes, made web requests to retrieve data, formatted and styled results, incorporated libraries and themes",
    ],
  },
  {
    company: "Joe Chocolate Company",
    title: "Co-Founder & CEO",
    description:
      "Naturally caffeinated dark chocolate. Locally produced, nationally distributed, internationally enjoyed.",
    start_date: "March 2016",
    end_date: "December 2020",
    activities: [
      "Started business as an undergraduate class project and a two-man operation out of the back of a fish-n-chips restaurant",
      "Developed product, recipes, and manufacturing practices",
      "Built and implemented software for websites, CRM, fulfillment, and forecasting",
      "Closed multiple rounds of funding with angel investors and private equity",
      "Expanded wholesale business 300+ locations including REI, Whole Foods, and Nordstorm",
      "Managed wholesale and retail operations, employing over 20 staff members",
      "Managed construction and opened retail facility in Pike Place Market, serving 50K+ customers per year",
    ],
  },
  {
    company: "Caveman Dirtbag Sponsorship",
    title: "Founder",
    description: "Fueling thru-hikers on the Pacific Crest Trail",
    start_date: "March 2016",
    end_date: "December 2020",
    activities: [
      "Created business co-op to sponsor thru-hikers on the PCT",
      "Partnered with Patagonia Seattle, Arc'teryx, Enlightened Equipment, and other outdoor brands",
      "Selected 2-4 hikers each year to receive cash, gear, and food in care-packages",
      "Recognized as preeminent sponsorship amongst thru-hikers and received hundreds of applications each year",
      "Sponsored hikers from countries including Brazil, New Zealand, and Israel",
    ],
  },
  {
    company: "Peach",
    title: "Business Development Associate",
    description: "",
    start_date: "August 2016",
    end_date: "November 2016",
    activities: [
      "Performed sales cycle from discovery, to cold calling, to activation of lunch delivery program",
      "Onboarded 30+ businesses onto Peach lunch delivery platform including two of Seattle's largest hospitals, JP Morgan, and Weyerhaeuser's headquarters",
      "Developed best practices for activating healthcare providers",
    ],
  },
  {
    company: "CardSwapper",
    title: "Co-Founder & CEO",
    description: "The world's first peer-to-peer trading and liquidation platform for unused and unwanted gift cards",
    start_date: "February 2013",
    end_date: "June 2016",
    activities: [
      "Co-founded business as an undergraduate freshman at the University of Washington",
      "Designed and wire-framed application ",
      "Hired and managed team to develop, and launch application on iOS app store",
      "Raised seed funding from Jones + Foster Accelerator and from private investors",
      "Wrote, submitted, and received patent from the United States Patent and Trademark Office for novel methods of digital gift card exchange ",
      "Partnered with nations largest gift card liquidation platform to launch cash-for-cards feature",
    ],
  },
  {
    company: "UW School of Music",
    title: "Student Visual & Audio Archiver",
    description: "",
    start_date: "October 2013",
    end_date: "May 2016",
    activities: [
      "Recorded, live-mixed, and produced live classical, jazz, choral, and orchestral performances in high-fidelity",
      "Self-taught Logic Pro, Audacity, and Premiere Pro to increase quality of archived media ",
      "Hired independently by graduate students to produce thesis performances due to quality of work",
    ],
  },
  {
    company: "Tango Card",
    title: "Social Networking Intern",
    description: "",
    start_date: "October 2013",
    end_date: "May 2016",
    activities: [
      "Managed Facebook, Twitter, and Linkedin social profiles via Hootsuite",
      "Deployed social marketing strategies focused on increasing relevance amongst key demographics",
      "Nearly doubled Twitter following using unpaid-marketing strategies",
    ],
  },
];

const profile = {
  name: "Samuel Tanner",
  phone: "360.878.0730",
  email: "samuel.m.s.tanner@gmail.com",
  title: "Web Developer",
  blurb: "Entrepreneur and developer. I love turning neat ideas into beautiful realities.",
};

const links = {
  mail: "mail",
  linkedIn: "https://www.linkedin.com/in/samueltanner/",
  github: "https://github.com/samueltanner",
};
const skills = [
  { name: "Adobe Illustrator", score: 5 },
  { name: "Adobe Lightroom", score: 5 },
  { name: "Adobe Photoshop", score: 5 },
  { name: "Adobe Premiere", score: 3 },
  { name: "Adobe XD", score: 5 },
  { name: "Airtable", score: 5, dev_skill: true },
  { name: "AngularJS", score: 2, dev_skill: true },
  { name: "Creating & Maintaining API's", score: 4, dev_skill: true },
  { name: "Bootstrap", score: 4, dev_skill: true },
  { name: "Cold Calling", score: 5 },
  { name: "CRUD Applications", score: 3, dev_skill: true },
  { name: "Customer Relationship Management", score: 5 },
  { name: "Django", score: 3, dev_skill: true },
  { name: "Financial Projections", score: 3 },
  { name: "Fundraising", score: 5 },
  { name: "Git/GitHub/version control", score: 3, dev_skill: true },
  { name: "GraphQL", score: 3, dev_skill: true },
  { name: "HTML", score: 4, dev_skill: true },
  { name: "Ionic Framework", score: 4, dev_skill: true },
  { name: "Javascript", score: 5, dev_skill: true },
  { name: "Logic Pro", score: 5 },
  { name: "Marketing Strategy & Rollout", score: 5 },
  { name: "Microsoft Excel", score: 5 },
  { name: "Notion", score: 5, dev_skill: true },
  { name: "Object Oriented Programming", score: 3, dev_skill: true },
  { name: "Pair Programming", score: 5, dev_skill: true },
  { name: "Plotly.js", score: 3, dev_skill: true },
  { name: "PostgreSQL", score: 3, dev_skill: true },
  { name: "Project Management", score: 4, dev_skill: true },
  { name: "Python", score: 3, dev_skill: true },
  { name: "React.js", score: 4, dev_skill: true },
  { name: "REST APIs", score: 4, dev_skill: true },
  { name: "Rollup.js", score: 5 },
  { name: "Ruby on Rails", score: 4, dev_skill: true },
  { name: "Ruby", score: 4, dev_skill: true },
  { name: "Sales & Sales Management", score: 5 },
  { name: "Tailwind CSS", score: 5, dev_skill: true },
  { name: "Team Management", score: 5 },
  { name: "Video Editing", score: 4 },
  { name: "Vue.js", score: 4, dev_skill: true },
  { name: "Web Development", score: 4, dev_skill: true },
  { name: "Wholesale Management", score: 5 },
  { name: "Wire-framing", score: 5, dev_skill: true },
];

const projects = [
  {
    name: "Joe Chocolate Co's Ordering Tracking System",
    status: "deployed",
    stack: "Airtable",
    frontEndRepo: "",
    backEndRepo: "",
    liveLink: "",
    repoLink: [],
    description:
      "The impetus of my love and fascination with software development started when I learned what a relational database was. I needed a more robust order tracking software for my chocolate company but the out of the box solutions wouldn't cut it, so I started building one by myself using Airtable.\n\nIn the end I built a fully operational order and customer tracking database that was extremely easy to use and could handle the extremely cyclical nature of our business.",
  },
  {
    name: "Funny Money",
    frontEndRepo: "https://github.com/samueltanner/funny-money-frontend",
    backEndRepo: "https://github.com/samueltanner/funny_money_backend",
    liveLink: "https://funny-money-app.herokuapp.com/#/",
    status: "deployed",
    stack: "VueJS, Bootstrap, Rails",
    description:
      "My first full-stack project built as a culminating project for my software development bootcamp.\n\nThe vision came from a friend who wanted more visibility into the way his friends invested. Funny Money allows its users to track a portfolio of investments with realtime update from the IEXCloud and Alpha Advantage APIs. From there users could create and join groups where they could see the makeup and % gains (or losses) their friends had made.",
  },
  {
    name: "Job Seeker",
    frontEndRepo: "https://github.com/samueltanner/job_seeker_front",
    backEndRepo: "https://github.com/timmsnow/job_seeker",
    liveLink: "https://coding-job-seeker.netlify.app/",
    status: "deployed",
    stack: "ReactJS, Bootstrap, Rails",
    description:
      "Just after I graduated from the software development bootcamp, a buddy and I decided to build an app that would help us get hired. Our first objective was to learn React since it was not apart of our bootcamp curriculum and it was the industry standard; second, we wanted to track the tasks we deemed necessary to land a coding job.\n\n So we built an app that did just that. Job Seeker allows its users to track a variety of metrics like time spent white-boarding, time spent portfolio building, number of informational interviews, number of jobs applied to, a list of all the job postings you've interacted with, and (most importantly) the number of breaks you've taken throughout the day.",
  },
  {
    name: "Diet Tuner",
    frontEndRepo: "",
    backEndRepo: "",
    liveLink: "https://app.diettuner.com/",
    repoLink: [],
    status: "deployed privately",
    stack: "VueJS, Ionic, GraphQL, Django",
    description:
      "I was lucky enough to take an idea and build a brand new frontend from scratch as a junior developer. The idea was to create a diet tracker (think, MyFitnessPal) but for cows!\n\nAs I would come to learn, cows' diets can be tracked a lot like a human's, with macro-nutrients like carbohydrates, protein, fat, and fiber. Large farms have dietitians prescribe diets to portions of their herds and then it is the job of the farmhands to use the ingredients they have in stock to try to hit the ideal macro-nutrient rations. Easier said than done for sure. The Diet Tuner application is the visual interface to a very complex Django backend that could take a list of ingredients on hand and create 'tuned' diets that would save farms countless hours and dollars.\n\nI built the front end in Vue.js and utilized Ionic so I could easily compile the project as a progressive web app. I also implemented Vuex for authentication and other needs that required persisted-state.",
  },
  {
    name: "Samuel-Tanner.com",
    frontEndRepo: "https://github.com/samueltanner/personal-website",
    backEndRepo: "",
    liveLink: "",
    status: "deployed",
    stack: "ReactJS, Context API, Tailwind CSS",
    description:
      "My first website was built using a downloadable theme and it didn't ever really feel like me. So I decided to scrap that and build one from scratch. One of my big passions is design and unlike many of the developers I know, I actually enjoy tweaking CSS. I took this project as an opportunity to flesh out my CSS acumen.\n\nThis website was built using React, Context API, and Tailwind CSS. I found using Tailwind to be a breeze (pun intended) and hope I get to use it more in the future!",
  },
];

export { jobs, profile, links, skills, projects };
// export const jobs = JOBS;
// export const profile = PROFILE;
// export const links = LINKS;
// export const skills = SKILLS;
// export const projects = PROJECTS;
