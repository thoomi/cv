import type { ResumeData } from "@/lib/types";

export const RESUME_DATA: ResumeData = {
  name: "Thomas Blank",
  initials: "TB",
  location: "Freiburg, Germany, CET",
  locationLink: "https://www.google.com/maps/place/Freiburg",
  about: "Senior Software Engineer for Machine Learning",
  summary: (
    <>
      I’m an accomplished software engineer who makes machine learning work in production. At Bosch, I co-created the ML framework that became the backbone for multiple teams, enabling smoother collaboration and faster experimentation. My work spans from optimizing training pipelines to deploying models on embedded systems—always with a focus on reliability and real-world impact.
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
              Transformed the stack from single-camera networks to spatio-temporal multi-view networks
            </li>
            <li>
              Close collaboration with corporate research
            </li>
            <li>
              Successful customer demos of urban hands-free driving using solely cameras (vision only)
            </li>
            <li>
              Software framework that boosted training efficiency for a multi-view, multi-task network and enabled seamless integration of temporal and task-specific data
            </li>
            <li>
              Streamlined training workflows, significantly lowering compute time and resource costs
            </li>
            <li>
             Conducted technical interviews and coding assessments, helping hire strong engineers for the team
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
              Deep Learning based camera perception for automated driving
            </li>
            <li>
              Multi Task CNNs (Semantic Segmentation, 3d Object Detection, Object Tracking, …)
            </li>
            <li>
              Co-Creator xflow: reusable training modules to facilitate collaboration in teams {">"} 50 devs
            </li>
            <li>
              Continuous & reproducible data parallel trainings on AzureML
            </li>
            <li>
              Real-time optimization & automatic deployment into the car (TensorRT, ONNX)
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
      start: "2021",
      end: "2024",
      description: (
        <>
          <ul className="list-inside list-disc">
            <li>
              Successfully developed a high performance & responsive website, seen by over a million people per month
            </li>
            <li>
              Built a scalable and resilient Symfony2 REST API, served by Nginx and enhanced with a Redis caching layer, using Ansible for efficient server and development environment management
            </li>
          </ul>
        </>
      ),
    },
  ],
  skills: [
    "Torch",
    "Tensorflow",
    "Python",
    "AzureML & DevOps",
    "Model deployment",
    "Object Detection & Tracking",
    "CUDA",
    "Training optimization",
  ],
  projects: [
  ],
} as const;
