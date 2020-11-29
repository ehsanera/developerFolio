/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section
import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Saad Pasta",
  title: "Hi all, I'm Ehsan",
  subTitle: emoji("A passionate Software Developer 🚀 having an experience of building Web with Spring Boot / MongoDB / Multi Tenant / Microservice and some other cool libraries and frameworks."),
  resumeLink: "https://jobinja.ir/user/ehsanrafee"
};

// Your Social Media Link
const socialMediaLinks = {
  github: "https://github.com/ehsanera",
  linkedin: "https://www.linkedin.com/in/ehsan-rafee-00885049/",
  gmail: "ehsan.rafee.gk@gmail.com",
  gitlab: "https://gitlab.com/ehsanera",
  facebook: "https://www.facebook.com/ehsan.rafee",
  medium: "https://medium.com/@ehsan.rafee.gk ",
  stackoverflow: "https://stackoverflow.com/users/6892681/ehsan",
  instagram: "https://instagram.com/ehsanera",
  twitter: "https://twitter.com/ehsan_era"
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section
const skillsSection = {
  title: "What i do",
  subTitle: "PROJECT MANAGER AND SERVER DEVELOPER. ACTIVE, PASSIONATE, FLEXIBLE AND CHALLENGING.",
  skills: [
    emoji("⚡ Manage Project With Flexibility and agility."),
    emoji("⚡ Develop Server Side Application with high Level Technology"),
    emoji("⚡ Familiar with the latest technologies in the world such as microservice and multi tenant.")
  ],
/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */
  softwareSkills: [
    {
      skillName: "Linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "SysAdmin",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "Microservice",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "Spring Boot",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Multi Tenant",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "fab fa-database"
    },
    {
      skillName: "TSql",
      fontAwesomeClassname: "fab fa-database"
    },
    {
      skillName: "ORM",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "IntellijIDEA",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Security",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fas fa-docker"
    },
  ]
};

// Your education background
const educationInfo = {
  viewEducation: true, // Set it to true to see education section
  schools: [
    {
      schoolName: "Isfahan University Jahad Higher Education Institute",
      logo: require("./assets/images/jahad-logo.jpeg"),
      subHeader: "Master of Science in Computer Science",
      duration: "September 2017 - April 2019",
      desc: "Participated in the research of XXX and published 3 papers.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      schoolName: "Islamic Azad University of Shahin Shahr",
      logo: require("./assets/images/azad-logo.jpeg"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2013 - April 2017",
      desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      ]
    }
  ]
}

// Your top 3 proficient stacks/tech experience
const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design",  //Insert stack or technology you have experience in
      progressPercentage: "90%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ]
};


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Project Manage",
      company: "Zamin",
      companyLogo: require("./assets/images/zamin-logo.png"),
      date: "Apr 2018 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Full Stack Web Developer",
      company: "Kasra",
      companyLogo: require("./assets/images/kasra-logo.jpeg"),
      date: "Mar 2017 – Apr 2018",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Full Stack Web Developer",
      company: "Freelance",
      companyLogo: require("./assets/images/freelance_logo.png"),
      date: "Mar 2016 – Mar 2017",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "ehsanera", // Change to your github username to view your profile in Contact Section.
  showGithubProfile :"true" // Set true or false to show Contact profile using Github, defaults to false
};


// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      link: "http://saayahealth.com/"
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      link: "http://nextu.se/"
    }
  ]
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",
  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle: "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        { name: "Certification", url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing" },
        { name: "Award Letter", url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing" },
        { name: "Google Code-in Blog", url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html" }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle: "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [{ name: "View Google Assistant Action", url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en" }]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        { name: "Certification", url: "" },
        { name: "Final Project", url: "https://pakistan-olx-1.firebaseapp.com/" }
      ]
    }
  ]
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description: "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description: "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ]
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ]
};

// Podcast Section
const podcastSection = {
  viewPodcastSection: false,
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: ["https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"]
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+98-9135763109",
  email_address: "ehsan.rafee.gk@gmail.com"
};

//Twitter Section

const twitterDetails = {
  userName : "ehsan_era"//Replace "twitter" with your twitter username without @
};
export { greeting, socialMediaLinks, skillsSection, educationInfo, techStack, workExperiences, openSource, bigProjects, achievementSection, blogSection, talkSection, podcastSection, contactInfo , twitterDetails};
