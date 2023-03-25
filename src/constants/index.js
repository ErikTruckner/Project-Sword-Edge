import {
  mobile,
  backend,
  creator,
  web,
  lawn,
  dharma,
  atom,
  reactExpense,
  protocourseTN,
  reactGoals,
  reactThreeCars,
  reactToDo,
  VueThreeSplash,
  ogPortThumb,
  arrow,
} from '../assets'

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'portfolio',
    title: 'Portfolio',
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

const experiences = [
  {
    title: 'Freelance Contractor',
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
      'Developing and maintaining WordPress blog',
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

const projects = [
  {
    name: 'React Three Fiber Teaching Site',
    description:
      " *In production* Example website for a course I'm creating. This course will teach React Three Fiber, Drei, Framer Motion, Slider.js, and advanced custom CSS animations, and Tailwind",
    link: 'https://prototype-course.netlify.app/',

    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'framer motion',
        color: 'green-text-gradient',
      },
      {
        name: 'three.js',
        color: 'pink-text-gradient',
      },
    ],
    image: protocourseTN,
    source_code_link:
      'https://github.com/ErikTruckner/Project-Course-Creation-Proto',
  },
  {
    name: 'Expense Tracker App',
    description:
      'Web based platform that provides users with a visual graph of their spending over time. Built with React and custom CSS.',
    link: 'https://eriks-react-expense-tracker.netlify.app/',

    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'custom css',
        color: 'green-text-gradient',
      },
      {
        name: 'visual data',
        color: 'pink-text-gradient',
      },
    ],
    image: reactExpense,
    source_code_link: 'https://github.com/ErikTruckner/REACT-Expense-Tracker',
  },
  {
    name: 'Three.js Splash Page',
    description:
      'Created using Nuxt.js and Three.js; an interactive WebGL splash page utilizing camera position animations via GreenSock Animation Platform (GSAP).',
    link: 'https://portfoliosplash.netlify.app/',
    tags: [
      {
        name: 'vue',
        color: 'blue-text-gradient',
      },
      {
        name: 'three.js',
        color: 'green-text-gradient',
      },
      {
        name: 'gsap',
        color: 'pink-text-gradient',
      },
    ],
    image: VueThreeSplash,
    source_code_link: 'https://github.com/ErikTruckner/VueTHREEjsPortfolio',
  },
  {
    name: 'React To Do List',
    description:
      'A to do list app created using React and custom Bootstrap. Implementing CRUD (Create, Read, Update, Delete) functionality with user populated data.',
    link: 'https://eriks-react-todo-list.netlify.app/',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'bootstrap',
        color: 'green-text-gradient',
      },
      {
        name: 'CRUD',
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
    link: 'https://eriks-daily-goals-app.netlify.app/',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'custom css',
        color: 'green-text-gradient',
      },
      {
        name: 'CRUD',
        color: 'pink-text-gradient',
      },
    ],
    image: reactGoals,
    source_code_link: 'https://github.com/ErikTruckner/REACT-goal-list',
  },
  {
    name: 'R3F Car Shop',
    description:
      'React Three Fiber project featuring user ability to manipulate camera position and colors of imported glTF models using HTML buttons. iOS users may need to enable WebGL in their browser. There are known issues with some iOS devices. This app is rather heavy as it utilizes physics, multiple lights sources, shadows, and multiple glTF objects. Thus, some devices may suffer from performance issues.',
    link: 'https://carcolorshop.netlify.app/',
    tags: [
      {
        name: 'react three fiber',
        color: 'blue-text-gradient',
      },
      {
        name: 'gsap',
        color: 'green-text-gradient',
      },
      {
        name: 'ux',
        color: 'pink-text-gradient',
      },
    ],
    image: reactThreeCars,
    source_code_link: 'https://github.com/ErikTruckner/cars',
  },
  {
    name: 'Vanilla JavaScript Three.js Portfolio',
    description:
      'A simple Vanilla JavaScript Portfolio utilizing Three.js and custom animated glTF created in Blender',
    link: 'https://eriksportfolio.netlify.app/',
    tags: [
      {
        name: 'vanilla js',
        color: 'blue-text-gradient',
      },
      {
        name: 'three.js',
        color: 'green-text-gradient',
      },
      {
        name: 'blender',
        color: 'pink-text-gradient',
      },
    ],
    image: ogPortThumb,
    source_code_link: 'https://github.com/ErikTruckner/portfolio3',
  },
]

export { services, experiences, projects }
