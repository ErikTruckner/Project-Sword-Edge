import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  lawn,
  dharma,
  atom,
  tesla,
  shopify,
  reactExpense,
  reactGoals,
  reactThreeCars,
  reactToDo,
  VueThreeSplash,
  ogPortThumb,
  carrent,
  jobit,
  tripguide,
  threejs,
} from '../assets'

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
]

const services = [
  {
    title: 'Full Stack Web Developer',
    icon: web,
  },
  {
    title: 'UX Designer',
    icon: mobile,
  },
  {
    title: '3D Developer',
    icon: backend,
  },
  {
    title: 'Web Motion Designer',
    icon: creator,
  },
]

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
]

const experiences = [
  {
    title: 'Free Lance Contractor',
    company_name: "Erik's Landscaping",
    icon: lawn,
    iconBg: '#d2fcd4',
    date: '2007 - Present',
    points: [
      'Create, manage, and implement scheduling',
      'Administrative work and billing',
      'Establishing client contracts',
      'Care for properties according to contracts',
    ],
  },
  {
    title: 'WordPress Developer',
    company_name: 'Dharmacakra',
    icon: dharma,
    iconBg: '#E6DEDD',
    date: 'October 2021 - Present',
    points: [
      'Developing and maintaining WordPress blog.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Version Control',
      'Build an audience through Social Media outreach.',
    ],
  },
  {
    title: 'Full Stack Developer',
    company_name: 'AbsurDesign',
    icon: atom,
    iconBg: '#fcccd5',
    date: 'July 2022 - Present',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Developing Web Based 3D Experiences',
      'Building APIs and working with SQL and noSQL databases ',
      'Implementing responsive design and ensuring cross-browser compatibility.',
    ],
  },
]

const testimonials = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
]

const projects = [
  {
    name: 'React Expense Tracker',
    description:
      'Web-based platform that allows users to track expenses over time, providing a visual graph of the data.',
    link: 'https://eriks-react-expense-tracker.netlify.app/',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'Custom CSS',
        color: 'green-text-gradient',
      },
    ],
    image: reactExpense,
    source_code_link: 'https://github.com/ErikTruckner/REACT-Expense-Tracker',
  },
  {
    name: 'Three.js Splash Page',
    description:
      'Created using Nuxt.js and Three.js; an interactive WebGL splash page utilizing camera position animations via GreenSock Animation Platform (GSAP).',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: VueThreeSplash,
    source_code_link: 'https://github.com/ErikTruckner/VueTHREEjsPortfolio',
  },
  {
    name: 'React To Do List',
    description:
      'A to do list app created using React and Bootstrap. Implementing CRUD (Create, Read, Update, Delete) functionality with user populated data.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: reactToDo,
    source_code_link: 'https://github.com/ErikTruckner/react-todo-list',
  },
  {
    name: 'React Daily Goals App',
    description:
      'Created using React. A simple daily goal app utilizing Create and Delete methods, as well as changing user input field styles based on users actions.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: reactGoals,
    source_code_link: 'https://github.com/ErikTruckner/REACT-goal-list',
  },
  {
    name: 'R3F Car Shop',
    description:
      'A WebGL project created using React-Three-Fiber; featuring user ability to manipulate camera position and colors of imported glTF models using HTML buttons. Apple users may need to enable WebGL in their browser. There are known issues with some iOS devices. This project is rather heavy as it utilizes physics, multiple lights sources, shadows, and multiple glTF objects. Thus, some devices may suffer from performance issues.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: reactThreeCars,
    source_code_link: 'https://github.com/ErikTruckner/cars',
  },
  {
    name: 'Vanilla JavaScript Three.js Portfolio',
    description:
      'A WebGL project created using React-Three-Fiber; featuring user ability to manipulate camera position and colors of imported glTF models using HTML buttons. Apple users may need to enable WebGL in their browser. There are known issues with some iOS devices. This project is rather heavy as it utilizes physics, multiple lights sources, shadows, and multiple glTF objects. Thus, some devices may suffer from performance issues.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: ogPortThumb,
    source_code_link: 'https://github.com/ErikTruckner/portfolio3',
  },
]

export { services, technologies, experiences, testimonials, projects }
