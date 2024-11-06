import { CiLinkedin } from "react-icons/ci";
import { FaGithub, FaJava, FaLinux, FaPython } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { SiExpress, SiMongodb } from "react-icons/si";
import {
  MdOutlineAlternateEmail,
  MdOutlineDesignServices,
} from "react-icons/md";
import { IoCallOutline, IoLocationOutline } from "react-icons/io5";
import { FiCode} from "react-icons/fi";
import { FaReact } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import {
  client1,
  client2,
  client3,
  client4,
  client5,
  client6,
  project1,
  project2,
  project3,
  project4,
} from "./assets";
import { DiNodejs } from "react-icons/di";
import { BsDatabaseFillGear } from "react-icons/bs";

export const navigation = [
  { name: "Home", id: "header" },
  { name: "About", id: "about" },
  { name: "Services", id: "services" },
  { name: "Projects", id: "projects" },
  { name: "Coding Profile", id: "testimonials" },
  { name: "Contact", id: "contact" },
];
export const techStack = [
  { name: "ReactJs", icon: <FaReact /> },
  { name: "ExpressJs", icon: <SiExpress /> },
  { name: "NodeJs", icon: <DiNodejs /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "TailwindCSS", icon: <RiTailwindCssFill /> },
  { name: "Python", icon: <FaPython />},
  { name: "Java", icon :   <FaJava />},
  { name: "Git & Github", icon : <FaGithub />},
  { name: "Linux", icon : <FaLinux />},
];

export const services = [
  {
    icon: <FiCode />,
    name: "Full Stack Development",
    description: `
         Creating end-to-end web solutions, from frontend interfaces to backend logic, ensuring seamless integration, efficiency, and high performance across all layers of development.`,
  },
  {
    icon: <BsDatabaseFillGear />,
    name: "Database Management",
    description: `
         Designing and optimizing databases to handle data securely and efficiently, using both SQL and NoSQL databases to deliver scalable data solutions for applications of all sizes.`,
  },
  {
    icon: <MdOutlineDesignServices />,
    name: "API Development & Integration",
    description: `
          Building and integrating RESTful and GraphQL APIs for smooth communication between client and server, providing reliable data flow and functionality for any application.`,
  },
];

export const projects = [
  {
    name: "Full Stack Gmail Clone",
    description: `A full-stack web application that replicates the core functionalities of Gmail, including inbox management, email sending/receiving, and user authentication, built with modern technologies for an enhanced user experience.`,
    image: project1, 
    url: "https://github.com/RohanManojPatil/Gmail-Clone",
    live : "https://fir-1048a.web.app" 
  },
  {
    name: "Multithreaded Proxy Server",
    description: `A high-performance proxy server using multithreading to handle multiple connections concurrently. This project improves the efficiency and speed of web traffic routing while providing secure and reliable proxy services.`,
    image: project2, 
    url: "https://github.com/RohanManojPatil/Multithreaded-Proxy-Server",
    live: "",
  },
  {
    name: "Scalable Chat Application",
    description: `A scalable and real-time chat application built with modern technologies like SocketIO, Typescript, Next js, Postgres, Kafka, Redis. The application supports group chat, direct messaging, and ensures high performance and low latency.`,
    image: project3, 
    url: "https://github.com/RohanManojPatil/Chat-Application", 
    live : "https://scalable-nodejs-chat-app-client.vercel.app/",
  },
  {
    name: "Vehicle Service Management System",
    description: `A web application that helps manage vehicle services, including booking appointments, tracking maintenance history, and ensuring timely vehicle check-ups. Built with a user-friendly interface and efficient backend system.`,
    image: project4, 
    url: "https://github.com/RohanManojPatil/Vehicle-Service/tree/main/DE",
    live : "",
  },
];

export const testimonies = [
  {
    profile: client1,
    name: "Jessica Harper",
    position: "Product Manager",
    company: "echNova Solutions",
    content: `Emmanuel transformed our website’s user experience! His attention to detail and ability to translate our vision into a seamless interface was exceptional. We saw an immediate improvement in user engagement.`,
  },
  {
    profile: client2,
    name: "Mark Thompson",
    position: "CEO",
    company: "Dynamic Designs",
    content: `Working with Emmanuel was a breeze! He’s fast, communicative, and his code is always clean and efficient. Our website looks and performs better than ever.`,
  },
  {
    profile: client3,
    name: "Clara Mensah",
    position: "Marketing Director",
    company: "BrightPath Agency",
    content: `Emmanuel’s frontend skills took our branding to the next level. He was able to bring our design concepts to life with stunning accuracy and creativity. I highly recommend him!`,
  },
  {
    profile: client4,
    name: "Samuel Okwuosa",
    position: "CTO",
    company: "Greenline Tech",
    content: `Emmanuel is hands-down one of the best frontend developers I've worked with. His expertise made our site not only look great but perform flawlessly across all devices.`,
  },
  {
    profile: client5,
    name: "Linda Ruiz",
    position: "Co-Founder",
    company: "PixelSpark Creative Studio",
    content: `Emmanuel is incredibly talented. He consistently delivers pixel-perfect designs and smooth user experiences. I appreciate his dedication to excellence and innovation."`,
  },
  {
    profile: client6,
    name: "Tunde Adebayo",
    position: "Lead Developer",
    company: "CodeWave",
    content: `Emmanuel is a top-notch frontend developer! His work always exceeds expectations, and he’s a pleasure to collaborate with. Our site is now faster and more user-friendly than ever.`,
  },
];

export const contactInfo = [
  {
    name: "Email",
    icon: <MdOutlineAlternateEmail />,
    value: "rohanpatil1963@gmail.com",
  },
  {
    name: "Phone",
    icon: <IoCallOutline />,
    value: "+91 6358331981",
  },
  {
    name: "Address",
    icon: <IoLocationOutline />,
    value: "Surat, Gujarat",
  },
];

export const socialHandles = [
  {
    name: "Github",
    icon: <AiFillGithub />,
    link: "https://github.com/RohanManojPatil",
  },
  {
    name: "LinkedIn",
    icon: <CiLinkedin />,
    link: "https://www.linkedin.com/in/rohan-patil-009444261/",
  },
];

export const footer = [
  {
    group: "Hot Links",
    routes: [
      { name: "Home", id: "header" },
      { name: "About", id: "about" },
      { name: "Services", id: "services" },
      { name: "Projects", id: "projects" },
      { name: "Coding Profiles", id: "testimonials" },
      { name: "Contact", id: "contact" },
    ],
  },

];