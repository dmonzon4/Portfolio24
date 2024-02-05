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
      testText: 'Exceptionally pleased with militaria. I have been very disappointed with many alleged business card designers. He really surprised me with his taste and style. Impossible to let you down.',
      name: 'Angel R.',
      info: 'Interior Designer'
  },
  {
      testText: '2Exceptionally pleased with militaria. I have been very disappointed with many alleged business card designers. He really surprised me with his taste and style. Impossible to let you down.',
      name: 'Ruth.',
      info: 'Interior Designer'
  },
  {
      testText: '3Exceptionally pleased with militaria. I have been very disappointed with many alleged business card designers. He really surprised me with his taste and style. Impossible to let you down.',
      name: 'Cliff W.',
      info: 'Interior Designer'
  },
  {
      testText: '4Exceptionally pleased with militaria. I have been very disappointed with many alleged business card designers. He really surprised me with his taste and style. Impossible to let you down.',
      name: 'siemens',
      info: 'Interior Designer'
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
              proCount: '198 Projects',
              name: 'UI & UX Design',
              textInfo: 'Create project plan, Data analysis, wireframes, Concept Testing, Style guide, Responsiveness, User Testing.'
          },   
          {
                icon: IoLayersOutline,
                proCount: '18 Projects',
                name: 'Graphic Design',
                textInfo: 'Create project plan, Data analysis, wireframes, Concept Testing, Style guide, Responsiveness, User Testing.'
          },   
          { 
              icon: RiComputerLine,
              proCount: '112 Projects',
              name: 'Web Design',
              textInfo: 'Create project plan, Data analysis, wireframes, Concept Testing, Style guide, Responsiveness, User Testing.'
          },   
      ],
            
  }



    
  // Testimonials  Data.......................
import ProjctImage1 from '../assets/pikachu.jpg'
import ProjctImage2 from '../assets/pikachu.jpg'
import ProjctImage3 from '../assets/pikachu.jpg'
import ProjctImage4 from '../assets/pikachu.jpg'
import ProjctImage5 from '../assets/pikachu.jpg'

export const ProjectsData =[
  {
      projectImage: ProjctImage1,
      category: 'Analytics, UI-Ux',
      title: 'Branding & Digital Video Campaign For George’s Cafe',
      info: 'Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.',
      projectLink: "#",
  },
  {
      projectImage: ProjctImage2,
      category: 'Web developement',
      title: 'Branding & Digital Video Campaign For George’s Cafe',
      info: 'Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.',
      projectLink: "#",
  },
  {
      projectImage: ProjctImage3,
      category: 'Mobile Apps',
      title: 'Branding & Digital Video Campaign For George’s Cafe',
      info: 'Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.',
      projectLink: "#",
  },
  {
      projectImage: ProjctImage4,
      category: 'Analytics, UI-Ux',
      title: 'Branding & Digital Video Campaign For George’s Cafe',
      info: 'Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.',
      projectLink: "#",
  },
  {
      projectImage: ProjctImage5,
      category: 'Mobile Apps',
      title: 'Branding & Digital Video Campaign For George’s Cafe',
      info: 'Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.',
      projectLink: "#",
  },   
]