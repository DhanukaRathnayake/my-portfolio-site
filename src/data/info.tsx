import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";
import { TbBrandFiverr } from "react-icons/tb";
import { FaCode } from "react-icons/fa";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { GrUserExpert } from "react-icons/gr";

export const Info = {
  firstName: "Dhanuka",
  lastName: "Rathnayake",
  roleHighlights: ["Full", "Stack", "DevOps"],
  tags: ["NextJs", "NestJs", "Flutter", "AWS", "Terraform"],
  connections: [
    {
      name: "GitHub",
      url: "https://github.com/DhanukaRathnayake",
      icon: <FaGithub style={{ height: "100%", width: "100%" }} />,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/dhanukarathnayake/",
      icon: <FaLinkedinIn style={{ height: "100%", width: "100%" }} />,
    },
    {
      name: "Upwork",
      url: "https://www.upwork.com/freelancers/~01beff29422dd4ac9d?viewMode=1",
      icon: <SiUpwork style={{ height: "100%", width: "100%" }} />,
    },
    {
      name: "Fiverr",
      url: "https://www.fiverr.com/dhanuka_devops",
      icon: <TbBrandFiverr style={{ height: "100%", width: "100%" }} />,
    },
  ],
  sections: {
    section01: {
      description:
        "I specialize in building scalable web applications, mobile apps, and full-stack solutions tailored to your business needs.",
    },
    section02: {
      description:
        "A passionate DevOps Engineer driving innovation in software and infrastructure automation. With over five years of experience, I’m here to bring your projects to life with cutting-edge technology.",
    },
    section03: {
      description:
        "Explore my work, skills, and services crafted with cutting-edge technologies.",
    },
    section04: {
      description: "Let me know if you'd like further refinements!",
    },
  },
  email: "dhanuka.janith@outlook.com",
  location: {
    name: "Kandy, Sri Lanka",
    link: "https://goo.gl/maps/nPW1gLNiarB3gi3t5",
  },
  cv: "https://drive.google.com/file/d/12acCJrOtr3l2dOz_k_gcWO3Hm4kvCDla/view?usp=sharing",
  profilePicture: `${process.env.AWS_S3_URL}/dp.webp`,
  status: "Ready To Innovate",
  company: {
    name: "Sonic Labs (Pvt) Ltd",
    link: "https://www.soniclabsglobal.com/",
  },
  summaryCounts: [
    {
      id: 1,
      title: "Total Projects",
      count: 15,
      description: "Innovation web solutions crafted",
      link: "/blogs?category=Projects",
      icon: <FaCode size="20" />,
    },
    {
      id: 2,
      title: "Services",
      count: 4,
      description: "Trusted service provider",
      link: "/services",
      icon: <MdOutlineVerifiedUser size="20" />,
    },
    {
      id: 3,
      title: "Years of experience",
      count: 5,
      description: "Continuous learning journey",
      link: "/about",
      icon: <GrUserExpert size="20" />,
    },
  ],
};

export const Education = {
  category: "Education",
  description:
    "I've been working in this field for the past 5 years. Here's a timeline of my journey.",
  items: [
    {
      title: "University Of Kelaniya Sri Lanka | B.Sc",
      date: "2017 - 2020",
      contents: [
        {
          description: "Computer Science",
        },
        {
          description: "Physics",
        },
        {
          description: "Pure Mathematic",
        },
        {
          description: "Marketing Management",
        },
      ],
      skills: [
        "Programming",
        "Database System",
        "Data Communication",
        "OOP",
        "IntelliJ",
        "Visual Programming",
        "Mobile Application",
        "Ai",
        "Software Project Management",
      ],
    },
    {
      title: "St. Sylvester's College Kandy Sri Lanka",
      date: "2005 - 2015",
      contents: [
        {
          description: "G. C. E. Advanced Level",
        },
        {
          description: "G. C. E. Ordinary Level",
        },
      ],
      skills: [],
    },
  ],
};

export const Experience = {
  category: "Experience",
  description:
    "I've been working in this field for the past 5 years. Here's a timeline of my journey.",
  items: [
    {
      title: "DevOps Engineer at Sonic Labs ( pvt ) ltd | Hybrid",
      date: "Aug 2023",
      contents: [
        {
          description:
            "Spearheaded the maintenance, monitoring, and optimization of the company's production-level platform servers, ensuring optimal performance and reliability.",
        },
        {
          description:
            "Enhanced CI/CD processes to an advanced level by integrating with project management tools, streamlining development workflows and accelerating delivery cycles.",
        },
        {
          description:
            "Conducted in-depth research to develop disaster recovery and backup restoration methods for production sites and critical data, bolstering the company's resilience against potential disruptions.",
        },
        {
          description:
            "Pioneered the implementation of updated designs for auto-scaling, resource allocation, and cost management strategies for cloud services and infrastructure utilized by the company's platforms.",
        },
        {
          description:
            "Proactively identified and mitigated security vulnerabilities across the company's platforms, ensuring robust protection against potential threats and breaches.",
        },
      ],
      skills: [
        "Amazon Web Services (AWS)",
        "Terraform",
        "Kubernetes",
        "Docker",
        "Bash",
        "Python",
        "Gitlab",
        "CICD",
        "Pipelines",
        "Jenkins",
        "Grafana",
        "Prometheus",
        "Linux",
        "JMeter",
      ],
    },
    {
      title:
        "Junior DevOps Engineer | Software Engineer II at Sonic Labs ( pvt ) ltd | Colombo",
      date: "Aug 2022",
      contents: [
        {
          description:
            "Orchestrated the creation of scalable software infrastructure utilizing Terraform and AWS services, aligning with Infrastructure as Code (IaC) principles to ensure flexibility and efficiency.",
        },
        {
          description:
            "Architected and implemented GitLab and GitHub CI/CD pipelines, automating the seamless deployment of over 50 microservices across Amazon EKS Clusters, enhancing development velocity and reliability.",
        },
        {
          description:
            "Demonstrated adeptness in managing and optimizing a portfolio of 5+ diverse web platforms, leveraging Kubernetes, Linux, and Shell Scripts to streamline operations and enhance performance.",
        },
        {
          description:
            "Established robust monitoring and alerting mechanisms using Grafana and K8s Monitoring tools, providing real-time insights into system health and performance, ensuring proactive issue resolution and uptime optimization.",
        },
      ],
      skills: [
        "Amazon Web Services (AWS)",
        "Terraform",
        "Kubernetes",
        "Docker",
        "Gitlab",
        "CICD",
        "Shell Scripting",
        "Linux",
        "Next.js",
        "Nest.js",
      ],
    },
    {
      title: "Full Stack Engineer at Sonic Labs ( pvt ) ltd | Colombo",
      date: "Feb 2022",
      contents: [
        {
          description:
            "Demonstrated mastery in Full Stack Engineering, proficiently developing both frontend and backend components to deliver user-centric applications with robust data gathering capabilities.",
        },
        {
          description:
            "Acknowledged the importance of DevOps practices, actively experimenting with and training in Kubernetes technologies and workflows, enhancing deployment efficiency and scalability.",
        },
        {
          description:
            "Spearheaded the crafting of infrastructure-level architectures for web-based software development platforms, leveraging Terraform and AWS services to ensure scalability, reliability, and security.",
        },
        {
          description:
            "Fostered close collaboration with cross-functional teams, including development, operations, and quality assurance, to drive efficiency, streamline processes, and achieve project success through effective communication and teamwork.",
        },
      ],
      skills: [
        "AWS EKS",
        "Terraform",
        "Kubernetes",
        "Docker",
        "Infrastructure",
        "Architectural Design",
        "DevOps",
      ],
    },
    {
      title: "Junior Full Stack Engineer at Sonic Labs ( pvt ) ltd | Remote",
      date: "Jun 2021",
      contents: [
        {
          description:
            "Acquired expertise in the MERN (MongoDB, Express.js, React, Node.js) stack, leveraging its capabilities to construct and maintain intricate microservices.",
        },
        {
          description:
            "Developed and refined over 15 microservices tailored for enhanced data gathering within the cryptocurrency platform, employing advanced engineering techniques to optimize performance.",
        },
        {
          description:
            "Proficiently utilized software version control platforms and collaborative tools to ensure seamless development workflows and efficient project management practices.",
        },
        {
          description:
            "AWS Deployment : Orchestrated successful product deployments on AWS EC2 Linux servers, fortified with SSL certificates. Leveraged a range of AWS services to optimize server performance.Orchestrated successful product deployments on AWS EC2 Linux servers, bolstered by SSL certificates, and leveraged a diverse range of AWS services to enhance server performance and reliability.",
        },
        {
          description:
            "Pioneered exploration into emerging fields of crypto and NFT technologies, actively developing demos to illustrate their potential applications and value.",
        },
        {
          description:
            "Engineered microservices interfacing with live trading exchanges, facilitating seamless data collection and providing invaluable insights into resource management and operational limitations.",
        },
      ],
      skills: [
        "MERN Stack",
        "GitHub",
        "Next.js",
        "Node.js",
        "MongoDB",
        "Amazon EC2",
        "Linux",
        "Solidity",
      ],
    },
    {
      title: "Freelance Web Developer",
      date: "Aug 2019",
      contents: [
        {
          description:
            "Developed an innovative online conceptual marketing platform, providing clients with a dynamic space to showcase and sell their ideas and products - irate.lk.",
        },
        {
          description:
            "Engineered a unique online platform for the exchange of political ideas, fostering open discussions and encouraging civic engagement - kiyanna.lk.",
        },
        {
          description:
            "Designed and implemented a comprehensive online solution for efficient hospital management, facilitating seamless patient records, appointments, and resource coordination - DA Hospital Management system.",
        },
        {
          description:
            "Crafted a user-friendly Woo-Commerce application tailored for mobile devices, enabling users to explore and shop effortlessly on-the-go - WayTooGo Mobile Application.",
        },
        {
          description:
            "Developed a web-based application for real-time weather tracking, offering users an interactive experience to monitor weather conditions - Heat Map Weather Tracker.",
        },
      ],
      skills: [
        "JavaScript",
        "React.js",
        "Angular.js",
        "React Native",
        "HTML",
        "Cascading Style Sheets (CSS)",
        "Bootstrap",
      ],
    },
  ],
};

export const Certification = [
  {
    id: 1,
    title: "AWS Cloud Practisioner",
    date: "Sep 2023",
    contents: [{ id: 1, description: "Still in progress" }],
  },
  {
    id: 2,
    title: "AWS Cloud SysOps Administrator",
    date: "Sep 2023",
    contents: [{ id: 1, description: "Still in progress" }],
  },
  {
    id: 3,
    title: "HashiCorp - Terrafrorm Associate",
    date: "Sep 2023",
    contents: [{ id: 1, description: "Still in progress" }],
  },
];
