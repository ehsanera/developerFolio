/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Ehsan Rafee",
  title: "Hi all, I'm ehsan",
  subTitle: emoji(
    "Experienced Backend Engineer with over 8 years of expertise in designing , developing, and maintaining scalable, high performance software systems🚀. Skilled in microservices architecture, financial exchange systems, and implementing\n" +
    "secure, reliable backend solutions. Adept at collaborating with cross-functional teams to deliver innovative solutions"
  ),
  resumeLink:
    "https://www.cakeresume.com/s--F7fCGZnY-rgyMap6mYWFyg--/ehsan-rafee", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/ehsanera",
  linkedin: "https://www.linkedin.com/in/ehsan-rafee/",
  gmail: "ehsan.rafee.gk@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  medium: "https://medium.com/@ehsan.rafee.gk",
  stackoverflow: "https://stackoverflow.com/users/6892681/ehsan-rafee",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY BACKEND SOFTWARE ENGINEER WHO WANTS TO EXPLORE EVERY COOL TECH.",
  skills: [
    emoji(
      "⚡ Develop highly available Backend for your web and mobile applications."
    ),
    emoji("⚡ Development of responsive systems for high user numbers."),
    emoji(
      "⚡ Development of systems with the ability to connect with external systems such as banks and central insurance and any other external system that is necessary."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "Spring Boot",
      fontAwesomeClassname: "fas fa-leaf"
    },
    {
      skillName: "Asp.Net",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "Multi Tenancy",
      fontAwesomeClassname: "fas fa-layer-group"
    },
    {
      skillName: "Design Pattern",
      fontAwesomeClassname: "fas fa-project-diagram"
    },
    {
      skillName: "Linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fas fa-box"
    },
    {
      skillName: "Golang",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "Sql/NoSql",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Redis",
      fontAwesomeClassname: "fas fa-database"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Isfahan University Jahad Higher Education Institute",
      logo: require("./assets/images/jahad.png"),
      subHeader: "Bachelor Degree in Software Engineering",
      duration: "2013 - 2015",
      desc: "Activities and societies: Web Team, Volleyball. Passed software engineering courses include:",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      schoolName: "Islamic Azad University",
      logo: require("./assets/images/azad.jpg"),
      subHeader: "Associate degree in Software Engineering",
      duration: "2010 - April 2012",
      desc: "Activities and societies: Behavioral scientific article. Passed software engineering courses include:",
      descBullets: [
        "- Systematic thinking",
        "- Web basics",
        "- operating system",
        "- Network"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Java" //Insert stack or technology you have experience in
    },
    {
      Stack: "Kotlin"
    },
    {
      Stack: "GoLang"
    },
    {
      Stack: "Spring Boot"
    },
    {
      Stack: "Spring Cloud"
    },
    {
      Stack: ".NET"
    },
    {
      Stack: "Sql/NoSql"
    },
    {
      Stack: "Redis"
    },
    {
      Stack: "Docker"
    },
    {
      Stack: "RabbitMQ"
    },
    {
      Stack: "Linux"
    },
    {
      Stack: "Microservices"
    },
    {
      Stack: "Clean Architecture"
    },
    {
      Stack: "Design Patterns"
    },
    {
      Stack: "Multi-Tenancy"
    },
    {
      Stack: "Git"
    },
    {
      Stack: "CI/CD"
    },
    {
      Stack: "System Design"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Backend Engineer",
      company: "Next Top Tech",
      companylogo: require("./assets/images/next_top_tech_logo.jpeg"),
      date: "March 2024 – November 2025",
      desc: "Next Top Tech is a leader in financial exchange systems. As a backend software engineer, I specialize in designing and\n" +
        "implementing critical backend services for financial transactions, ensuring high availability, scalability, and secure data\n" +
        "processing. Key contributions include:",
      descBullets: [
        "Designed and implemented core components of a robust financial exchange system using .NET Core.",
        "Developed backend services to streamline transaction workflows, ensuring high availability and scalability.",
        "Integrated Elasticsearch APM for real-time performance monitoring and debugging.",
        "Designed efficient logging mechanisms to improve system observability and troubleshooting.",
        "Collaborated with cross-functional teams to enhance system performance and reliability.",
        "Optimized data processing pipelines, achieving a 25% increase in transaction efficiency."
      ]
    },
    {
      role: "Backend Engineer",
      company: "Today",
      companylogo: require("./assets/images/nxworkplace_logo.jpeg"),
      date: "March 2023 – March 2024",
      desc: "Today Company is a leader in microservices for controlling and optimizing the movement of goods, people, cars, and customers. As a\n" +
        "backend engineer at Today, I play a crucial role in developing microservices that utilize fingerprint and facial recognition technologies to\n" +
        "efficiently manage and secure all forms of traffic. Key contributions during my tenure at Today include:\n",
      descBullets: [
        "Maintained and upgraded legacy systems while transitioning to modern technologies.",
        "Improved system performance by 40% across all sales and mediation processes.",
        "Conducted business analysis to align system upgrades with organizational goals.",
        "Successfully designed and implemented a new B2B and B2C insurance service platform."
      ]
    },
    {
      role: "Backend Engineer",
      company: "Bimer ",
      companylogo: require("./assets/images/bimer.png"),
      date: "March 2022 - March 2023",
      desc: "As a software engineer at Bimer, acting as an intermediary between insurance providers and insurance sellers, as well as direct sales to the user, my main responsibilities are:",
      descBullets: [
        "- The dot net framework was successfully upgraded from version 3.1 to 6, ensuring compatibility and using new features for enhanced functionality.",
        "- Optimized performance up to 40% for SQL database and dot grid backend, improving overall system performance.",
        "- Designing and implementing a new system using .NET 7 and Postgres SQL database, meeting specific requirements and achieving desired results.",
        "- Demonstrated strong problem-solving skills and a proactive approach to identifying and addressing potential challenges, ensuring smooth operation of supporting infrastructure.",
        "- Collaborate with cross-functional teams to gather requirements, ensure seamless integration of new system and effective communication between departments."
      ]
    },
    {
      role: "Backend Engineer",
      company: "Zamin ",
      companylogo: require("./assets/images/balonet.png"),
      date: "April 2018 - March 2022",
      desc: "Zamin Company is a single-product software company specializing in Balonet, a professional messenger. As a software engineer with the company, my primary focus was on the development of messaging and management systems, as well as the core product. Some of my key contributions include:",
      descBullets: [
        "- Streamlined the distribution process of Balonet's white-label manufacturing and sales by architecting and developing a cloud management system, resulting in higher efficiency and faster time to market.",
        "- Developed custom dashboard systems for various organizations and companies, providing real-time data visualization and analysis capabilities for improved decision-making.",
        "- Created the Balonet bots framework, which simplified the process of developing custom chatbots in multiple programming languages, enabling businesses to leverage the power of conversational AI.",
        "- Contributed to the development of the core Balonet product, focusing on messaging and management systems to improve the user experience and functionality.",
        "- Collaborated with cross-functional teams to ensure seamless integration of different components and systems, resulting in a cohesive and reliable product."
      ]
    },
    {
      role: "Backend Engineer",
      company: "Kasra",
      companylogo: require("./assets/images/kasra.jpg"),
      date: "March 2016 - February 2018",
      desc: "As a software company with a long-standing reputation, Kasra specializes in office automation, traffic automation, and feeding solutions. Here are some of the key projects I contributed to during my time with the company:",
      descBullets: [
        "- Successfully implemented an offline patch installation project for the support team and end-users, ensuring seamless software updates without internet connectivity.",
        "- Developed a guest subsystem for traffic automation, improving the user experience and streamlining the system's functionality.",
        "- Collaborated with the artificial intelligence team to integrate a dashboard system with Power BI into the main system, providing real-time data visualization and analysis for stakeholders."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/bimer.png"),
      projectName: "Bimer Insurance Platform",
      projectDesc: "Developed a comprehensive insurance platform connecting insurance providers and sellers, featuring .NET 7 backend with Postgres SQL database and 40% performance optimization",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://bimer.ir/"
        }
      ]
    },
    {
      image: require("./assets/images/balonet.png"),
      projectName: "Balonet Messenger",
      projectDesc: "Contributed to the development of a professional messenger platform, including cloud management system, custom dashboards, and bot framework development",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://balonet.ir/"
        }
      ]
    },
    {
      image: require("./assets/images/shenazh.webp"),
      projectName: "Shenazh Construction Marketplace",
      projectDesc: "Built a marketplace platform for construction services, implementing scalable backend systems and technical team management",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://shenazh.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "TASK-ORIENTED BOOTCAMP IN SOFTWARE ENGINEERING WITH GOLANG",
      image: require("./assets/images/6b80237c5a499c9c9116be76fe09b189.jpg"),
      imageAlt: "Quera Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Quera Code-in",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Maintaining Security in Online Stores: Moving from Biometric to Behaviometric",
      subtitle:
        "Issued by Sharif University of Technology - International Campus-Kish Island",
      image: require("./assets/images/logo ok -white.png"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-0000000000",
  email_address: "saadpasta70@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
