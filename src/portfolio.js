/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section
import emoji from "react-easy-emoji";

const greeting = {
    /* Your Summary And Greeting Section */
    username: "Ehsan Rafee",
    title: "Hi all, I'm Ehsan",
    subTitle: emoji("Software engineer for +5 years, experienced with over 20+ projects,  with different experienced in Backend/DevOps/Agile/Project Management."),
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
            fontAwesomeClassname: "fa fa-server"
        },
        {
            skillName: "Microservice",
            fontAwesomeClassname: "fa fa-microchip"
        },
        {
            skillName: "Spring Boot",
            fontAwesomeClassname: "fa fa-power-off"
        },
        {
            skillName: "Multi Tenant",
            fontAwesomeClassname: "fa fa-sitemap"
        },
        {
            skillName: "MongoDB",
            fontAwesomeClassname: "fas fa-database"
        },
        {
            skillName: "TSql",
            fontAwesomeClassname: "fas fa-database"
        },
        {
            skillName: "ORM",
            fontAwesomeClassname: "fa fa-plug"
        },
        {
            skillName: "IntellijIDEA",
            fontAwesomeClassname: "fa fa-list-alt"
        },
        {
            skillName: "Security",
            fontAwesomeClassname: "fa fa-user-secret"
        },
        {
            skillName: "Docker",
            fontAwesomeClassname: "fab fa-docker"
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
            desc: "Took courses about Software Engineering, Web Security, Operating Systems, ... .",
        },
        {
            schoolName: "Islamic Azad University of Shahin Shahr",
            logo: require("./assets/images/azad-logo.jpeg"),
            subHeader: "Bachelor of Science in Computer Science",
            duration: "September 2013 - April 2017",
            desc: "Participated in the research and published paper.",
            descBullets: [
                "Sharif University of Technology - International Campus, the first student conference on modern engineering developments",
            ]
        }
    ]
}

// Your top 3 proficient stacks/tech experience
const techStack = {
    viewSkillBars: true, //Set it to true to show Proficiency Section
    experience: [
        {
            Stack: "Project Management",  //Insert stack or technology you have experience in
            progressPercentage: "85%"  //Insert relative proficiency in percentage
        },
        {
            Stack: "Spring Boot",
            progressPercentage: "80%"
        },
        {
            Stack: "Kotlin",
            progressPercentage: "100%"
        },
        {
            Stack: "Multi Tenancy",
            progressPercentage: "60%"
        },
        {
            Stack: "Microservice",
            progressPercentage: "70%"
        },
        {
            Stack: "Database / SQL / No SQL",
            progressPercentage: "90%"
        },
        {
            Stack: "Git",
            progressPercentage: "70%"
        },
        {
            Stack: "RPC",
            progressPercentage: "40%"
        },
        {
            Stack: "Gradle",
            progressPercentage: "80%"
        },
    ]
};


// Your top 3 work experiences

const workExperiences = {
    viewExperiences: true, //Set it to true to show workExperiences Section
    experience: [
        {
            role: "Senior Backend Developer / Team Leader",
            company: "Zamin",
            companyLogo: require("./assets/images/zamin-logo.png"),
            date: "Apr 2018 – Present",
            desc: "When I first joined Zamin Company, I joined as a junior developer, and very quickly I was promoted to senior developer, and then to the leader back team and project manager.\n" +
                "During my time with the company, I completed a number of projects and gained great experience, doing bot projects, sophisticated reporting systems, and multi-tenant projects and cloud management.\n" +
                "The languages of Kotlin, Docker, Multi-Tenancy, PostgreSQL, Mongo Db, Redis, Linux, Olap Cube, Jira, Team Management, Scrum, were some of the things I mastered.",
        },
        {
            role: "Full Stack Developer",
            company: "Kasra",
            companyLogo: require("./assets/images/kasra-logo.jpeg"),
            date: "Mar 2017 – Apr 2018",
            desc: "At Kasra Company, I had experience working in a team and a large company, I learned Scrum Agile, I worked with many people, several internal teams of the company, as well as various projects.\n" +
                "At the beginning of the project, I was given a patch installation that had remained in the production team for years and various developers had not been able to do it, but fortunately I was able to modify and operate it, the technology used in this project was C# and It was a web form.\n" +
                "I also collaborated on the analysis and implementation of several subsystems that were implemented within the company's core system that used .NET Form and jQuery technology.\n" +
                "And a .NET Core project.\n" +
                "The database technology of all projects was SQL Server.",
        },
        {
            role: "Founder",
            company: "Negah No",
            companyLogo: require("./assets/images/freelance_logo.png"),
            date: "Mar 2016 – Mar 2017",
            desc: "New Look was a startup in the field of cinema that my close friend and I started together and then I finished it alone.\n" +
                "The new look was dissolved after two years.\n" +
                "This project was written with ASP .NET MVC and Bootstrap was used for Front.",
        },
    ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
    githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
    githubUserName: "ehsanera", // Change to your github username to view your profile in Contact Section.
    showGithubProfile: "true" // Set true or false to show Contact profile using Github, defaults to false
};


// Some Big Projects You have worked with your company

const bigProjects = {
    title: "Big Projects",
    subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
    projects: [
        {
            image: require("./assets/images/balonet-logo.png"),
            link: "http://balonet.net/"
        },
        {
            image: require("./assets/images/kasra-logo.jpeg"),
            link: "https://www.kasraco.ir/"
        },
        {
            image: require("./assets/images/balome-logo.jpg"),
            link: ""
        },
        {
            image: require("./assets/images/balofood-logo.jpeg"),
            link: ""
        },
        {
            image: require("./assets/images/balohook-logo.jpg"),
            link: ""
        },
    ]
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {
    title: emoji("Achievements And Certifications 🏆 "),
    subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",
    achievementsCards: [
        {
            title: "Present scientific essay",
            subtitle: "Sharif University of Technology - International Campus Kish Island.",
            image: require("./assets/images/azad-logo.jpeg"),
            footerLink: [
                {
                    name: "Certification",
                    url: ""
                },
            ]
        },
        {
            title: "Coming conference Web and mobile",
            subtitle: "Coming conference Web and mobile.",
            image: require("./assets/images/fowm-logo.png"),
            footerLink: [{
                name: "Fowm Web Site",
                url: "https://www.fowm.ir/"
            }]
        },
    ]
};

// Blogs Section
const blogSection = {
    title: "Blogs",
    subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
    blogs: [
        {
            url: "https://virgool.io/@ehsan-rafee/%D8%B1%D9%87%D8%A8%D8%B1%DB%8C-%D9%88-%D8%A7%DB%8C%D8%AC%D8%A7%D8%AF-%D8%A7%D9%86%DA%AF%DB%8C%D8%B2%D9%87-%D8%AF%D8%B1-%D8%AE%D9%88%D8%AF-%D9%88-%D8%AF%DB%8C%DA%AF%D8%B1%D8%A7%D9%86-xbawxva7dacr",
            title: "رهبری و ایجاد انگیزه در خود و دیگران",
            description: "صحبت من در مورد مدیریت پروژه به صورت کلی است، اما! تجربه من در مدیریت(بهتره بگم رهبری) پروژه های نرم افزاری است پس قطعا نوشته های من در این دست پروژه ها کارآمد تر است."
        },
        {
            url: "https://virgool.io/@ehsan-rafee/%D8%A7%D8%B3%D8%AA%D9%81%D8%A7%D8%AF%D9%87-%D8%A7%D8%B2-olap-cube-mv23f8lthony",
            title: "استفاده از OLAP Cube",
            description: "مشکل اول این بود که حجم دیتا بسیار زیاد بود\n" +
                "\n" +
                "مشکل دوم این بود که برای آماده کردن خروجی، محاسبات خیلی سنگینی باید انجام میشد که دیتای میلیونی درش دخیل بود.\n" +
                "\n" +
                "مشکل سوم چندین لایه محسابه که همه لایه ها از پایین به بالا از خروجی محاسبه لایه قبلی + محاسبه خود لایه به دست میومد."
        },
        {
            url: "https://virgool.io/gnu-linux/%D8%A2%D9%85%D9%88%D8%B2%D8%B4-%D9%86%D8%B5%D8%A8-%D9%88-%D8%B1%D8%A7%D9%87-%D8%A7%D9%86%D8%AF%D8%A7%D8%B2%DB%8C-%D9%84%DB%8C%D9%86%D9%88%DA%A9%D8%B3-mint-%D9%BE%D8%B3%D8%B1-%D8%A8%D8%B2%D8%B1%DA%AF-%D8%A7%D9%88%D8%A8%D9%88%D9%86%D8%AA%D9%88-njuwnilmgh84",
            title: "آموزش نصب و راه اندازی لینوکس Mint پسر بزرگ اوبونتو",
            description: "در ابتدا باید بگم پسر بزرگ اوبونتو از پدرش خیلی روان تر و راحت تر شده، خیلی از ابزار ها رو هم به صورت پیشفرض تو دل خودش داره تا شما خیلی راحت و ساده بتونین ازش استفاده کنین، به نظر من بهترین گزینه دسکتاپ در حال حاضر مینت هستش."
        },
    ]
};

// Talks Sections

const talkSection = {
    viewTalkSection: false,
    title: "TALKS",
    subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"),
    talks: [
        {
            title: "Build Actions For Google Assistant",
            subtitle: "Codelab at GDG DevFest Karachi 2019",
            slides_url: "https://bit.ly/Ehsanera-slides",
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
    userName: "ehsan_era"//Replace "twitter" with your twitter username without @
};
export {
    greeting,
    socialMediaLinks,
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
    twitterDetails
};
