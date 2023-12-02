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

];

const socialConnections = [
    {
        platform : "Linkdin",
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