import { socialLinks, youtubebanner  } from "../images";


const projectdetails = [
    {
        projectName : 'DevTinder',
        discription : 'A place to connect with all developer network',
        techStack : ['Node','Express','React','Tailwind','DaisyUI','Redux','Nginx','Aws'],
        githublink : 'https://github.com/Ansonsd5/devTinderFE',
        liveLink : 'https://ansonsd.com',
        bannerLink : "https://ik.imagekit.io/ansonsaverdsouza/Screenshot%20from%202025-05-30%2023-20-35.png?updatedAt=1748627517001"
    },
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
        projectName : 'Safe Play',
        discription : 'Good health and wellbeing for children of immigration family',
        techStack : ['React','MaterialUI','Github','netlify'],
        githublink : 'https://github.com/Ansonsd5/safeplay/tree/main/safeplay',
        liveLink : 'https://safe-play.netlify.app/',
        bannerLink :'https://ik.imagekit.io/ansonsaverdsouza/Screenshot%202024-08-26%20160447.png?updatedAt=1724668540816',
    },
    {
        projectName : 'Url Shortner',
        discription : 'This application helps you keep most important url links in short way with all the statistics of usage',
        techStack : ['React','Tailwind','Supabase','Shadcn/ui','Github'],
        githublink : 'https://github.com/Ansonsd5/urlshortner',
        liveLink : 'https://urlshortner-2gp.pages.dev/',
        bannerLink :'https://ik.imagekit.io/ansonsaverdsouza/Screenshot%202024-09-16%20212500.png?updatedAt=1726502274433',
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
