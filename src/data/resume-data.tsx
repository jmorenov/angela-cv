import {
  ConsultlyLogo,
  ParabolLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Angela Floro Prieto",
  initials: "AF",
  location: "Madrid, Spain",
  locationLink: "https://www.google.com/maps/place/Madrid",
  about:
      "Passionate about advertising and digital marketing. Organized, fast and continuous learner, able to work under pressure.",
  summary:
  "My experience in the world of work has been through an internship in an e-commerce company, where I devoted myself to data analysis and helped in the accounting of the company. I believe that teamwork, having your own ideas and innovating whenever possible are the basis of a good professional profile and I comply with these three concepts.",
  avatarUrl: "/angela.png",
  personalWebsiteUrl: "https://angelafloro.com",
  contact: {
    email: "angelafloro1994@gmail.com ",
    tel: "+34666655896",
    social: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/angelafloro/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "Complutense University of Madrid",
      degree: "Digital Marketing Master",
      start: "September 2020",
      end: "October 2021",
    },
    {
      school: "University of Granada",
      degree: "Business Administration and Management Degree",
      start: "September 2012",
      end: "June 2018",
    },
  ],
  work: [
    {
      company: "Admitad",
      link: "https://www.admitad.com/",
      badges: ["Remote", "Freenlance"],
      title: "Content Manager",
      logo: ConsultlyLogo,
      start: "January 2023",
      end: "July 2024",
      description:
        "Monthly content plan. Blogs for clients. KPI analysis. Web maintenance.",
    },
    {
      company: "After",
      link: "https://after.green/es/",
      badges: ["Content", "Social Media"],
      title: "Community Manager",
      logo: ConsultlyLogo,
      start: "September 2021",
      end: "March 2022",
      description:
          "Select, propose and produce the content for the social media. Propose and execute collaborations with other profiles related to the brand. Develop and report on KPIs, measuring the impact of social media content",
    },
    {
      company: "UNIR",
      link: "https://estudiar.unir.net/",
      badges: ["Leads"],
      title: "Digital Marketing Specialist",
      logo: ConsultlyLogo,
      start: "April 2021",
      end: "June 2021",
      description:
          "Work on achieving competitive advantage. Develop lead acquisition and conversion plans. Analyze market opportunities. Define the content strategy",
    },
    {
      company: "Prosegur",
      link: "https://movistarproseguralarmas.es/",
      badges: ["Data analyst"],
      title: "Data Analyst and accountant",
      logo: ConsultlyLogo,
      start: "December 2018",
      end: "June 2019",
      description:
          "Analysis of data. Support to the financial department",
    },
    {
      company: "BuyIn",
      link: "https://www.buyin.es/",
      badges: ["Data analyst"],
      title: "Data Analyst",
      logo: ConsultlyLogo,
      start: "March 2017",
      end: "September 2017",
      description:
          "Uploading of products to the web. Analysis of data. Support in web positioning (SEO)",
    },
  ],
  skills: [
    "Web design: wordpress, prestashop",
    "Design: canva, photoshop",
    "Analysis of data: metricool, emplifi, tableau, GA",
    "Office package",
    "Others: screaming frog, creator studio, oracle, google ads, facebook ads",
    "Chat GPT",
  ],
  projects: [
    {
      title: "AngyFlix",
      techStack: [
        "Wordpress",
      ],
      description:
          "Project carried out in the Master in Digital Marketing as a blog on WordPress where I recommended movies and series.",
    },
    {
      title: "University Kids",
      techStack: [
        "Wordpress",
      ],
      description:
        "Company created as part of the final project for the subject of Business Creation in the fourth year. \"University Kids\" is the result of the union of seven partners, whose purpose is to establish a company in which to train and prepare children (between 4 and 16 years old) for their professional future.",
    },
  ],
} as const;
