import frontend from "../assets/images/frontend.png"
import programming from "../assets/images/programming.webp"
import tools from "../assets/images/tools.png"
import softskill from "../assets/images/softskill.jpeg"
import iconImage from "../assets/images/reactIcon.jpg"

export const SKILLS = [
    {
        title: "Frontend",
        icon: frontend,
        skills: [
            { skill: "HTML5", percentage: "70%"},
            { skill: "CSS", percentage: "55%"},
            { skill: "JavaScript", percentage: "60%"},
            { skill: "React.js", percentage: "50%"},
        ],
    },
    {
        title: "Programming",
        icon: programming,
        skills: [
            { skill: "C", percentage: "90%"},
            { skill: "Java", percentage: "75%"},
            { skill: "Python", percentage: "70%"},
        ],
    },
    {
        title: "Tools",
        icon: tools, 
        skills: [
            { skill: "Git & GitHub", percentage: "60%"},
            { skill: "Visual Studio Code", percentage: "75%"},
        ],
    },
    {
        title: "Soft Skills",
        icon: softskill,
        skills: [
            { skill: "Problem Solving", percentage: "70%"},
            { skill: "Collaboration", percentage: "75%"},
            { skill: "Attention to Detail", percentage: "60%"},
        ],
    },
];


export const PROJECTS = [
    {
        title: "UnityBid",
        date: "Ongoing",
        responsibilities: [
            "Develope a community based online auction system, where a people in a closed community can participate in an auction conducted in that community",
            "Ensure security"
        ],
    },

    {
        title: "Calculator",
        date: "January 2023",
        responsibilities: [
            "Developed a calculator using java",
            "Used infix to postfix conversion using stack datastructure"
        ]
    },

    {
        title: "Face Detection",
        date: "January 2024",
        responsibilities: [
            "Developed a face detection project using machine learning",
            "Open CV library of python is used"
        ]
    }
  ];