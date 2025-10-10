import type { ResumeData } from "@/lib/types";

export const RESUME_DATA: ResumeData = {
  name: "Thomas Blank",
  initials: "TB",
  location: "Freiburg, Germany, CET",
  locationLink: "https://www.google.com/maps/place/Freiburg",
  about: "Senior Software Engineer for Machine Learning",
  summary: (
    <>
      I’m an accomplished software engineer who makes machine learning work in production. At Bosch, I built tools and infrastructure that empower teams to train, deploy, and monitor models efficiently - bridging research ideas and real-world products. My work focuses on clean architecture, automation, and performance optimization to help ML deliver consistent value at scale.
    </>
  ),
  avatarUrl: "https://avatars.githubusercontent.com/u/4013007?v=4",
  personalWebsiteUrl: "https://aboutblank.me",
  contact: {
    email: "thomi.blank@gmail.com",
    tel: "",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/thoomi",
        icon: "github",
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/blanktho/",
        icon: "linkedin",
      },
    ],
  },
  education: [
    {
      school: "Master's Degree in Applied Computer Science, FH Erfurt",
      degree: "Thesis: Machine Learning based analysis of complex sign plates (object detection & semantic segmentation)",
      start: "2014",
      end: "2018",
    },
    {
      school: "Bachelor' Degree in Applied Computer Science, FH Erfurt",
      degree: "",
      start: "2011",
      end: "2014",
    },
  ],
  work: [
    {
      company: "Bosch, Level 4 driving project",
      link: "https://www.bosch.com/stories/topics/automated-driving/",
      badges: [],
      title: "Senior Software Engineer - Machine Learning",
      start: "2021",
      end: "2025",
      description:  (
        <>
          <ul className="list-inside list-disc">
            <li>
              Architected and co-created xflow, a modular ML training and deployment framework now used by 10+ teams across Bosch.
            </li>
            <li>
              Designed and optimized data and model pipelines, cutting down training iteration time and compute costs.
            </li>
            <li>
              Migrated the perception stack from single-view CNNs to a multi-view spatio-temporal system, improving robustness and accuracy.
            </li>
            <li>
              Engineered reproducible training and inference workflows with Docker, AzureML, and CI/CD integration.
            </li>
            <li>
              Collaborated closely with corporate research to bring state-of-the-art models into production, including ONNX/TensorRT optimizations for embedded deployment.
            </li>
            <li>
              Promoted code quality through reviews, best practices, and leading technical interviews for incoming engineers.
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Bosch & Daimler Collaboration Project Athena",
      link: "https://www.businessinsider.de/gruenderszene/allgemein/daimler-bosch-roboter-taxis/",
      badges: [],
      title: "Software Engineer - Machine Learning",
      start: "2018",
      end: "2021",
      description: (
        <>
          <ul className="list-inside list-disc">
            <li>
              Developed and maintained model pipelines for object detection and tracking on automotive datasets.
            </li>
            <li>
              Deployed and benchmarked models with TensorRT, achieving real-time inference on embedded GPUs.
            </li>
            <li>
              Improved training reproducibility and evaluation by automating dataset versioning and experiment tracking.
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "YAZIO",
      link: "https://www.yazio.com",
      badges: [],
      title: "Full Stack Web Developer",
      start: "2014",
      end: "2017",
      description: (
        <>
          <ul className="list-inside list-disc">
            <li>
              Built and maintained high-traffic web APIs (Symfony2, Redis, PostgreSQL) serving {">"}1M monthly users.
            </li>
            <li>
              Automated deployments with Ansible and implemented backend monitoring for reliability and speed.
            </li>
          </ul>
        </>
      ),
    },
  ],
  skills: [
    "Python",
    "C++",
    "Bash",
    "Torch",
    "Tensorflow",
    "ONNX",
    "TensorRT",
    "Docker",
    "AzureML",
    "CI/CD",
    "Architecture Design",
    "Data Pipelines",
    "API Development"    
  ],
  projects: [
  ],
  writing: [
    {
      title: "Why I Stopped Using Design Patterns in ML Research Projects",
      publication: "Personal Blog",
      date: "Sep 2025",
      description: "Discusses how overly complex software design patterns hindered research productivity in machine learning projects, advocating for simplified code architecture to enable faster iteration and better understanding.",
      link: {
        label: "Read Article",
        href: "https://aboutblank.me/design-patterns-harm-ml-research/"
      }
    }
  ],
} as const;
