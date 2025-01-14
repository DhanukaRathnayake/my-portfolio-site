import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";
import { TbBrandFiverr } from "react-icons/tb";

export const Info = {
  firstName: "Dhanuka",
  lastName: "Rathnayake",
  roles: "Full Stack & DevOps Engineering",
  roleHighlights: ["Full", "Stack", "DevOps"],
  tags: ["AWS", "K8S", "Terraform", "NextJs", "NestJs"],
  connections: [
    {
      name: "GitHub",
      url: "https://github.com/DhanukaRathnayake",
      icon: <FaGithub size={20} />,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/dhanukarathnayake/",
      icon: <FaLinkedinIn size={20} />,
    },
    {
      name: "Upwork",
      url: "https://www.upwork.com/freelancers/~01beff29422dd4ac9d?viewMode=1",
      icon: <SiUpwork size={20} />,
    },
    {
      name: "Fiverr",
      url: "https://www.fiverr.com/dhanuka_devops",
      icon: <TbBrandFiverr size={20} />,
    },
  ],
  email: "dhanuka.janith@outlook.com",
  location: {
    name: "Kandy, Sri Lanka",
    link: "https://goo.gl/maps/nPW1gLNiarB3gi3t5",
  },
  cv: "https://drive.google.com/file/d/12acCJrOtr3l2dOz_k_gcWO3Hm4kvCDla/view?usp=sharing",
  status: "Ready To Innovate",
  company: {
    name: "Sonic Labs (Pvt) Ltd",
    link: "https://www.soniclabsglobal.com/",
  },
};
