import { socialLinks, youtubebanner  } from "../images";


const projectdetails = [
    {
        projectName : 'MiniFlix',
        discription : 'A movie suggestion app which uses the power gpt api. While give the usefull move suggestions based on the user query.',
        techStack : ['React','Tailwind','Tmdb','Firebase','Redux','Gptapi','Github'],
        githublink : 'https://github.com/Ansonsd5/netflix-gpt',
        liveLink : 'https://netflix-gpt-4e981.web.app/',
        bannerLink : "https://ik.imagekit.io/ansonsaverdsouza/IMG_20231019_224445.jpg?updatedAt=1697735753223"
    },
    {
        projectName : 'YouTube Clone',
        discription : 'Cloned YouTube and implemented custom functionalities like most liked video, live chat and comment sections.',
        techStack : ['React','Tailwind','Redux','Github'],
        githublink : 'https://github.com/Ansonsd5/my-youtube',
        liveLink : 'https://netflix-gpt-4e981.web.app/',
        bannerLink : youtubebanner,
    },
    {
        projectName : 'ResUp',
        discription : 'This application will help the user to generate email Subject and body for  refferal. User has to provide the basic inputs, which will be used to generate email templates',
        techStack : ['React','Tailwind','Redux','Github','openai'],
        githublink : 'https://github.com/Ansonsd5/resup',
        liveLink : 'https://res-up.netlify.app/',
        bannerLink :'https://ik.imagekit.io/ansonsaverdsouza/Screenshot%202024-02-13%20222154.png?updatedAt=1707843421622',
    },
    {
        projectName : 'Url Shortner',
        discription : 'This application helps you keep most important url links in short way with all the statistics of usage',
        techStack : ['React','Tailwind','Supabase','Shadcn/ui','Github'],
        githublink : 'https://github.com/Ansonsd5/urlshortner',
        liveLink : 'https://urlshortner-2gp.pages.dev/',
        bannerLink :'https://rdvwisouupxagjtdycrv.supabase.co/storage/v1/object/public/profile_pic/Screenshot_2024_07_13_195637.png',
    },

];

const socialConnections = [
    {
        platform : "Linkedin",
        icon : socialLinks.linkdin,
        link : "https://www.linkedin.com/in/ansonsd/",

    },
    {
        platform : "Github",
        icon : socialLinks.githubicon,
        link : "https://github.com/Ansonsd5",
        
    },
    {
        platform : "x",
        icon : socialLinks.xsvg,
        link : "https://twitter.com/Anson__Dsouza",
        
    },
    {
        platform : "Insta",
        icon : socialLinks.insta,
        link : "https://www.instagram.com/anson___dsouza",
        
    }
]

export {
    projectdetails,
    socialConnections,
}