// About Data.................

import AboutImage from '../assets/Tryagain.png'
import CV from '../assets/CV.pdf'

export const AboutData =[
    {
        Image: AboutImage,

        AboutMe: "Hi! I'm . I have a strong passion for design . I specialize in  UI/UX Design and my passion is all about building elegant and professional user interfaces and websites. I also do branding and identity design such as logo design, letterhead and business card, along with photo editing, image cropping and other graphic design services.",

        AboutContactText: 'Do you fancy saying hi to me or you want to get started with your project and you need my help? Feel free to contact me.',
        Email: "diego.almg@hotmail.com",
        CV: CV,        
    }
];


// Skills Data.................
export const SkillsData =[
    {
        skillName: 'Graphic Design',
        percentage: 70,
    },
    {
        skillName: 'Web Designing',
        percentage: 85,
    },
    {
        skillName: 'Brand Design',
        percentage: 60,
    },
    {
        skillName: 'Web Developmet',
        percentage: 40,
    }
]


//   // Testimonials  Data.......................
export const TestimonialsData =[
  {
      testText: 'Exceptionally pleased with militaria. I have been very disappointed with many alleged business card designers. He really surprised me with his taste and style. Impossible to let you down.',
      name: 'Ashlynn Herwitz',
      info: 'Interior Designer'
  },
  {
      testText: '2Exceptionally pleased with militaria. I have been very disappointed with many alleged business card designers. He really surprised me with his taste and style. Impossible to let you down.',
      name: 'Ashlynn Herwitz',
      info: 'Interior Designer'
  },
  {
      testText: '3Exceptionally pleased with militaria. I have been very disappointed with many alleged business card designers. He really surprised me with his taste and style. Impossible to let you down.',
      name: 'Ashlynn Herwitz',
      info: 'Interior Designer'
  },
  {
      testText: '4Exceptionally pleased with militaria. I have been very disappointed with many alleged business card designers. He really surprised me with his taste and style. Impossible to let you down.',
      name: 'Ashlynn Herwitz',
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