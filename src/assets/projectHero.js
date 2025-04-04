import jobifyThumb from '../assets/jobifyLanding.png'
import bloomDaleThumb from "../assets/bloomDale.png"
import freeStore from '../assets/freeStore.png'
import shopFusion from '../assets/shopfusion.png'
import civiconnect from '../assets/civiconnect.png'
export const projectHero = [
  {
    id: 1,
    name: "CiviConnect",
    img: civiconnect, 
    description:
      "Civi Connect is a centralized platform designed to enhance community engagement by enabling residents to report local issues such as water shortages, sanitation concerns, and infrastructure problems. It uses geo-referenced data to plot issues on an interactive map, offering real-time visibility for both residents and local authorities.",
    techStack: ["React", "NodeJS", "Express JS", "Mongo DB", "Leaflet.js", "Tailwind"],
    url: "https://civiconnect.onrender.com/", 
  }
  ,
  {
    id: 2,
    name: "Jobify",
    img: jobifyThumb,
    description:
      "This web application is designed to help users track their job applications, upcoming interviews, and declined offers. It also provides insights into their application history with detailed statistics. Admins have access to additional features, such as viewing the number of users and job entries within the application.",
    techStack: ["React", "NodeJS", "Express JS", "Mongo DB","Tailwind"],
    url: "https://jobify-7ckj.onrender.com/",
  },
  {
    id: 3,
    name: "FreeStore Rest API",
    img: freeStore,
    description:
      "This application provides a REST API service for e-commerce websites, supporting all HTTP methods for managing products, including categorization. It integrates with Cloudinary to securely store and manage product images in the cloud, offering a reliable backend solution for e-commerce platforms",
    techStack: ["React", "NodeJS", "Express JS", "Mongo DB","Tailwind"],
    url: "https://freestore-rest-api.onrender.com/",
  },
  {
    id: 4,
    name: "Shop Fusion",
    img: shopFusion,
    description:
      "Shopfusion is a dynamic landing page designed for an e-commerce website. It seamlessly integrates products fetched from an external API with locally stored items, providing users with a diverse and interactive shopping experience. The page efficiently manages both online and offline content, ensuring a smooth and consistent user experience.",
    techStack: ["HTML", "CSS", "JavaScript"],
    url: "https://shopfusionv1.netlify.app/",
  },
  {
    id: 5,
    name: "BloomDale",
    img: bloomDaleThumb,
    description:
      "The BloomDale organic store web application is designed to offer an engaging online presence for BloomDale, showcasing their range of organic products. The application includes a visually appealing landing page and a comprehensive products page to enhance the shopping experience for visitors.",
    techStack: ["HTML", "CSS", "JavaScript"],
    url: "https://organicstorecss.netlify.app/",
  },
];
