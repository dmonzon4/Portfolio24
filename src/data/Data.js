// About Data.................

import AboutImage from '../assets/Tryagain.png'
import CV from '../assets/CV.pdf'

export const AboutData =[
    {
        Image: AboutImage,

        AboutMe: "As an Innovation Enthusiast, I thrive on creative problem-solving and constantly seek innovative ways to tackle challenges. I approach goals dynamically, leveraging my diverse skills with enthusiasm and creativity. Being an Agile Strategist, I flexibly develop and implement plans, embracing creativity in problem-solving. My analytical mindset allows me to translate information into actionable insights, facilitating informed decision-making and effective problem-solving.",

        AboutContactText: 'Whether you would like to drop a friendly greeting or kick off your project with my assistance, do not hesitate to reach out. Feel free to get in touch!',
        Email: "diego.almg@hotmail.com",
        CV: CV,        
    }
];


// Skills Data.................
export const SkillsData =[
    {
        skillName: 'Creative Problem-Solving 🧠',
        percentage: 85,
    },
    {
        skillName: 'Strategic Communication 📢',
        percentage: 95,
    },
    {
        skillName: 'Efficient Project Management 📅',
        percentage: 85,
    },
    {
        skillName: 'Adaptability and Continuous Learning 🚀',
        percentage: 100,
    }
]


//   // Testimonials  Data.......................
export const TestimonialsData =[
  {
      testText: 'Coming soon',
      name: '-- .-',
      info: 'Coming soon'
  },
  {
      testText: '---.',
      name: '-- .-',
      info: '---'
  },
  {
      testText: '---.',
      name: '-- .-',
      info: '---'
  },
  {
      testText: '---.',
      name: '-- .-',
      info: '---'
  },    
];



  // Testimonials  Data.......................
  import { HiOutlineLightBulb } from "react-icons/hi"; 
  import { IoLayersOutline } from "react-icons/io5";
  import { RiComputerLine } from "react-icons/ri";

  export const ServicesData ={
      services: [
          { 
              icon: HiOutlineLightBulb, 
            //   proCount: '198 Projects',
              name: 'Innovative Solutions',
              textInfo: 'Creative solutions, Ideation, Prototyping, User Experience Optimization, Responsive Design, User Testing.'
          },   
          {
                icon: IoLayersOutline,
                // proCount: '18 Projects',
                name: 'Visual Branding',
                textInfo: 'Visual Elements Integration, User Feedback Incorporation.'
          },   
          { 
              icon: RiComputerLine,
            //   proCount: '112 Projects',
              name: 'Web Development',
              textInfo: 'Project planning, Front-end and Back-end Development.'
          },   
      ],
            
  }



    
  // Testimonials  Data.......................
import ProjctImage1 from '../assets/bk.png'
import ProjctImage2 from '../assets/google.png'
import ProjctImage3 from '../assets/blitz.jpg'
import ProjctImage4 from '../assets/loading.gif'
import ProjctImage5 from '../assets/loading.gif'

export const ProjectsData =[
  {
      projectImage: ProjctImage1,
      category: 'Bayerische Kueche',
      title: 'Full Stack Project',
      info: 'As a full-stack developer has been an exhilarating experience of merging technology and gastronomy. Designing a platform that not only showcases the rich tapestry of Bavarian cuisine but also streamlines the reservation process has been a journey of both skill enhancement and pure enjoyment. Each line of code represents not just functionality but a valuable lesson in the art of balancing technical finesse with culinary appreciation.',
      projectLink: "https://bk-mern-projekt.netlify.app/",
  },
  {
      projectImage: ProjctImage2,
      category: 'PokeTrade',
      title: 'Full Stack Project',
      info: 'This aventure has been a dynamic dance of teamwork, where each line of code reflects the shared passion and dedication we invested in bringing this platform to life. Beyond the technical intricacies, our collaboration has been a lesson in effective communication, problem-solving and the joy of shared achievement. From brainstorming sessions to late-night coding marathons, every step has been a shared adventure, reinforcing the belief that great things happen when minds collaborate.',
      projectLink: "https://poketradedm.adaptable.app",
  },
  {
      projectImage: ProjctImage3,
      category: 'Blitz',
      title: 'Front-End Project',
      info: 'This project has been an exhilarating test of both precision and agility. Crafting this game has not only honed my coding skills but also offered a firsthand experience in designing an interactive and heart-pounding experience. It is more than just a game; it is a fusion of skill, excitement, and the joy of creating an immersive digital experience that keeps players on the edge of their seats. Get ready for a baseball adventure that challenges both your reflexes and strategic thinking.',
      projectLink: "https://dmonzon4.github.io/Fastball-Blitz/",
  },
  {
      projectImage: ProjctImage4,
      category: 'Coming soon...',
      title: '...very soon',
      info: 'WhimsyWizard Ipsum, where rainbow-hued dragons compose symphonies with bubblegum notes, jellybean-powered spaceships embark on candy constellations, and time-traveling robots serve tea to quantum butterflies. Be cautious around the interdimensional tickle monsters and beware of the juggling octopuses practicing circus tricks in zero gravity! Glide through the marshmallow clouds and dance with the stardust sprites in this fantastical Ipsum wonderland!',
      projectLink: "#",
  },
  {
      projectImage: ProjctImage5,
      category: 'Coming soon...',
      title: '...very soon',
      info: 'WhimsyWizard Ipsum, where rainbow-hued dragons compose symphonies with bubblegum notes, jellybean-powered spaceships embark on candy constellations, and time-traveling robots serve tea to quantum butterflies. Be cautious around the interdimensional tickle monsters and beware of the juggling octopuses practicing circus tricks in zero gravity! Glide through the marshmallow clouds and dance with the stardust sprites in this fantastical Ipsum wonderland!',
      projectLink: "#",
  },   
]