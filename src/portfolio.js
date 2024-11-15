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
    "As a seasoned Software Engineer with over 7 years of experience 🚀, I specialize in designing and implementing highly scalable API-based solutions with a focus on improving performance. My biggest achievements include creating efficient systems that have significantly improved business operations for various clients. With expertise in SQL databases, and clean architecture, my analytical thinking and problem-solving skills are second to none."
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
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "C#",
      fontAwesomeClassname: "fab fa-c"
    },
    {
      skillName: "Asp.Net",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "Multi Tenancy",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "Hibernate",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "Design Pattern",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "Linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fas fa-docker"
    },
    {
      skillName: "Golang",
      fontAwesomeClassname: "fab fa-golang"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fas fa-git"
    },
    {
      skillName: "Sql/NoSql",
      fontAwesomeClassname: "fab fa-database"
    },
    {
      skillName: "Redis",
      fontAwesomeClassname: "fab fa-java"
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
      Stack: "Java", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "C#",
      progressPercentage: "70%"
    },
    {
      Stack: "Postgres",
      progressPercentage: "60%"
    },
    {
      Stack: "Sql Server",
      progressPercentage: "60%"
    },
    {
      Stack: "Redis",
      progressPercentage: "60%"
    },
    {
      Stack: "Spring Boot",
      progressPercentage: "60%"
    },
    {
      Stack: "Spring Security",
      progressPercentage: "60%"
    },
    {
      Stack: "Spring Jpa",
      progressPercentage: "60%"
    },
    {
      Stack: "Spring Data",
      progressPercentage: "60%"
    },
    {
      Stack: "Spring Cloud",
      progressPercentage: "60%"
    },
    {
      Stack: "Asp.net",
      progressPercentage: "60%"
    },
    {
      Stack: "Linux",
      progressPercentage: "60%"
    },
    {
      Stack: "Docker",
      progressPercentage: "60%"
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
      company: "Today",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "June 2018 – Present",
      desc: "Development of high-load systems in the field of physical access management and maintenance of existing systems.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Backend Engineer Java",
      company: "Shenazh ",
      companylogo: require("./assets/images/shenazh.webp"),
      date: "May 2022 - Apr 2023 · 1 yr",
      desc: "As a part-time software engineer at Shenazh, a construction startup that serves as a marketplace intermediary, my main responsibilities included:",
      descBullets: [
        "- Building and managing a technical team, fostering a collaborative work environment, and ensuring high-quality work.",
        "- Conducting technical analysis of business demands and end-users, ensuring that the product met the needs of all stakeholders.",
        "- Implementing the backend system, ensuring that the system was scalable, efficient, and met the needs of the users."
      ]
    },
    {
      role: "Backend Engineer .net",
      company: "Bimer ",
      companylogo: require("./assets/images/bimer.png"),
      date: "May 2022 - Apr 2023 · 1 yr",
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
      role: "Backend Engineer Java",
      company: "Zamin ",
      companylogo: require("./assets/images/balonet.png"),
      date: "Apr 2018 - Mar 2022 · 4 yrs",
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
      role: "Backend Engineer .net",
      company: "Kasra",
      companylogo: require("./assets/images/kasra.jpg"),
      date: "Mar 2017 - Feb 2018 · 1 yr",
      desc: "As a software company with a long-standing reputation, Kasra specializes in office automation, traffic automation, and feeding solutions. Here are some of the key projects I contributed to during my time with the company:",
      descBullets: [
        "- Successfully implemented an offline patch installation project for the support team and end-users, ensuring seamless software updates without internet connectivity.",
        "- Developed a guest subsystem for traffic automation, improving the user experience and streamlining the system's functionality.",
        "- Collaborated with the artificial intelligence team to integrate a dashboard system with Power BI into the main system, providing real-time data visualization and analysis for stakeholders."
      ]
    },
    {
      role: "Junior Backend Developer .net",
      company: "Freelancer ",
      companylogo: require("./assets/images/freelancer.jpg"),
      date: "Mar 2016 - Feb 2017 · 1 yr",
      desc: "My experience as a Backend Developer freelancer has allowed me to work on a variety of projects using a range of technologies. Some of my notable achievements include:",
      descBullets: [
        "- Developing the NegahNo websi,te project, which focused on best practices of Asp.net MVC, SQL database, and Bootstrap in the film and cinema industry.",
        "- Building a web-based platform for bridge maintenance using SQL Server and Asp.net MVC.",
        "- Creating software to manage the internal processes of a small company using Sql Lite and Windows Form."
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
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
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
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
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
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
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
  display: true // Set false to hide this section, defaults to true
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
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
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
