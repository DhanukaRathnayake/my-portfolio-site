import Image from "next/image";

export const MainBlogCategories = [
  {
    id: 1,
    title: "Best Libraries for Developers",
    description:
      "Leverage pre-built solutions to accelerate development and reduce coding time.",
    coverImageUrl: `${process.env.AWS_S3_URL}/blog-libraries.jpg`,
    url: "/blogs?category=Libraries",
  },
  {
    id: 2,
    title: "AI Tools to Simplify Your Workflow",
    description:
      "Building intuitive and high-performance mobile applications for iOS and Android to meet your business needs.",
    coverImageUrl: `${process.env.AWS_S3_URL}/blog-ai-tools.jpg`,
    url: "/blogs?category=AI",
  },
  {
    id: 3,
    title: "Cloud Deployment Strategies",
    description:
      "Optimize your cloud infrastructure with proven strategies for efficient and scalable deployments.",
    coverImageUrl: `${process.env.AWS_S3_URL}/blog-cloud-strategies.jpg`,
    url: "/blogs?category=Cloud",
  },
];

export const MainServices = [
  {
    id: 1,
    title: "Full-Stack Development",
    description:
      "Delivering end-to-end web solutions, from front-end design to back-end functionality, for seamless digital experiences.",
    coverImageUrl: `${process.env.AWS_S3_URL}/service-full-stack.jpg`,
    url: "/services",
  },
  {
    id: 2,
    title: "Mobile Development",
    description:
      "Building intuitive and high-performance mobile applications for iOS and Android to meet your business needs.",
    coverImageUrl: `${process.env.AWS_S3_URL}/service-mobile.jpg`,
    url: "/services",
  },
  {
    id: 3,
    title: "Cloud Solution Design",
    description:
      "Designing and implementing scalable, secure, and efficient cloud-based solutions to power your business growth.",
    coverImageUrl: `${process.env.AWS_S3_URL}/service-devops.jpg`,
    url: "/services",
  },
];

export const SkillsList = [
  {
    id: 1,
    icon: (
      <Image
        height={50}
        width={50}
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
        alt="HTML"
      />
    ),
    name: "HTML",
    url: "https://www.w3schools.com/html/",
  },
  {
    id: 2,
    icon: (
      <Image
        height={50}
        width={50}
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
        alt="CSS"
      />
    ),
    name: "CSS",
    url: "https://www.w3schools.com/css/",
  },
  {
    id: 3,
    icon: (
      <Image
        height={50}
        width={50}
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
        alt="Bootstrap"
      />
    ),
    name: "Bootstrap",
    url: "https://getbootstrap.com/",
  },
  {
    id: 4,
    icon: (
      <Image
        height={50}
        width={50}
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
        alt="JavaScript"
      />
    ),
    name: "JavaScript",
    url: "https://www.javascript.com/",
  },
  {
    id: 5,
    icon: (
      <Image
        height={50}
        width={50}
        src="https://img.icons8.com/fluency/48/tailwind_css.png"
        alt="TailwindCSS"
      />
    ),
    name: "TailwindCSS",
    url: "https://tailwindcss.com/",
  },
  {
    id: 6,
    icon: (
      <Image
        height={50}
        width={50}
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
        alt="Java"
      />
    ),
    name: "Java",
    url: "https://www.oracle.com/java/",
  },
  {
    id: 7,
    icon: (
      <Image
        height={50}
        width={50}
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
        alt="Python"
      />
    ),
    name: "Python",
    url: "https://www.python.org/",
  },
  {
    id: 8,
    icon: (
      <Image
        height={50}
        width={50}
        src="https://img.icons8.com/color/48/react-native.png"
        alt="React"
      />
    ),
    name: "Redux",
    url: "https://redux.js.org/",
  },
  {
    id: 8,
    icon: (
      <Image
        height={50}
        width={50}
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
        alt="Redux"
      />
    ),
    name: "Redux",
    url: "https://redux.js.org/",
  },
  {
    id: 9,
    icon: (
      <Image
        height={50}
        width={50}
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg"
        alt="Angular"
      />
    ),
    name: "Angular",
    url: "https://angular.io/",
  },
  {
    id: 10,
    icon: (
      <Image
        height={50}
        width={50}
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
        alt="Next.js"
      />
    ),
    name: "Next.js",
    url: "https://nextjs.org/",
  },
  {
    id: 11,
    icon: (
      <Image
        height={50}
        width={50}
        src="https://img.icons8.com/color/48/nestjs.png"
        alt="Nest.js"
      />
    ),
    name: "Nest.js",
    url: "https://nestjs.com/",
  },
  {
    id: 12,
    icon: (
      <Image
        height={50}
        width={50}
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
        alt="Node.js"
      />
    ),
    name: "Node.js",
    url: "https://nodejs.org/",
  },
  {
    id: 13,
    icon: (
      <Image
        height={50}
        width={50}
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg"
        alt="Flutter"
      />
    ),
    name: "Flutter",
    url: "https://flutter.dev/",
  },
  {
    id: 14,
    icon: (
      <Image
        height={50}
        width={50}
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
        alt="MySQL"
      />
    ),
    name: "MySQL",
    url: "https://www.mysql.com/",
  },
  {
    id: 15,
    icon: (
      <Image
        height={50}
        width={50}
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
        alt="MongoDB"
      />
    ),
    name: "MongoDB",
    url: "https://www.mongodb.com/",
  },
  {
    id: 16,
    icon: (
      <Image
        height={50}
        width={50}
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"
        alt="Linux"
      />
    ),
    name: "Linux",
    url: "https://www.linuxfoundation.org/",
  },
  {
    id: 17,
    icon: (
      <Image
        height={50}
        width={50}
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
        alt="Docker"
      />
    ),
    name: "Docker",
    url: "https://www.docker.com/",
  },
  {
    id: 18,
    icon: (
      <Image
        height={50}
        width={50}
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg"
        alt="Kubernetes"
      />
    ),
    name: "Kubernetes",
    url: "https://kubernetes.io/",
  },
  {
    id: 19,
    icon: (
      <Image
        height={50}
        width={50}
        src="https://img.icons8.com/color/48/amazon-web-services.png"
        alt="AWS"
      />
    ),
    name: "AWS",
    url: "https://aws.amazon.com/",
  },
  {
    id: 20,
    icon: (
      <Image
        height={50}
        width={50}
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg"
        alt="GCP"
      />
    ),
    name: "GCP",
    url: "https://cloud.google.com/",
  },
  {
    id: 20,
    icon: (
      <Image
        height={50}
        width={50}
        src="https://img.icons8.com/color/48/terraform.png"
        alt="Terraform"
      />
    ),
    name: "GCP",
    url: "https://cloud.google.com/",
  },
];
