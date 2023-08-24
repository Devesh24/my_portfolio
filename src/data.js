import project1 from "./Components/photos/hangman.png";
import project2 from "./Components/photos/shopify.png";
import project3 from "./Components/photos/ssgyp.png";
import project4 from "./Components/photos/wasteWatchers.png";
import project5 from "./Components/photos/mms.png";
import project6 from "./Components/photos/moneymate.png";
import nodejs from "./Components/photos/nodejs.png";
import expressjs from "./Components/photos/express.png";
import mongo from "./Components/photos/mongo.png";
import mysql from "./Components/photos/mysql.png";
import reactjs from "./Components/photos/react.png";
import js from "./Components/photos/js.png";
import bootstrap from "./Components/photos/bootstrap.png";
import css from "./Components/photos/css.png";
import html from "./Components/photos/html.png";
import cpp from "./Components/photos/c++.png";
import dsa from "./Components/photos/dsa1.png";

export const sayings = [
  {
    id: 1,
    quote: "“The secret of getting ahead is getting started”",
    writer: "- Mark Twain",
  },
  {
    id: 2,
    quote:
      "“All our dreams can come true, if we have the courage to pursue them”",
    writer: "- Walt Disney",
  },
  {
    id: 3,
    quote: "“It's hard to beat a person who never gives up”",
    writer: "- Babe Ruth",
  },
  {
    id: 4,
    quote:
      "“If people are doubting how far you can go, go so far that you can’t hear them anymore”",
    writer: "- Michele Ruiz",
  },
];

export const myProjects = [
  {
    name: "Dynamic School Website",
    photo: project5,
    id: 0,
    live: "",
    github: "",
  },
  {
    name: "MoneyMate - Expense Tracker",
    photo: project6,
    id: 1,
    live: "https://moneymate-the-best-expense-tracker.netlify.app/",
    github: "https://github.com/Devesh24/MoneyMate-frontend",
  },
  {
    name: "Hangman - The Game",
    photo: project1,
    id: 3,
    live: "https://devesh24.github.io/hangman/",
    github: "https://github.com/Devesh24/hangman",
  },
  {
    name: "Shopify - Shopping Hub",
    photo: project2,
    id: 4,
    live: "https://shopifylive.netlify.app/",
    github: "https://github.com/Devesh24/shopkaro",
  },
  {
    name: "Sarv Sanyukt Gramin Yojna Portal",
    photo: project3,
    id: 5,
    live: "https://devesh24.github.io/SSGYP/",
    github: "https://github.com/Devesh24/SSGYP",
  },
  {
    name: "Waste Watchers",
    photo: project4,
    id: 2,
    live: "https://waste-watchers1.netlify.app/",
    github: "https://github.com/Devesh24/Iot_dustbin",
  },
];

export const mySkills = [
  { percent: 75, skillName: "MongoDB", id: 3, clr: "#fb5607", photo: mongo },
  {
    percent: 80,
    skillName: "ExpressJS",
    id: 2,
    clr: "#06d6a0",
    photo: expressjs,
  },
  { percent: 90, skillName: "ReactJS", id: 5, clr: "#06d6a0", photo: reactjs },
  { percent: 80, skillName: "NodeJS", id: 1, clr: "#fee800", photo: nodejs },
  { percent: 50, skillName: "MySQL", id: 4, clr: "#06ccff", photo: mysql },
  { percent: 75, skillName: "JavaScript", id: 6, clr: "#ff00be", photo: js },
  {
    percent: 95,
    skillName: "BootStrap",
    id: 7,
    clr: `#6a4c93`,
    photo: bootstrap,
  },
  { percent: 95, skillName: "CSS 3", id: 8, clr: "#04fc43", photo: css },
  { percent: 100, skillName: "HTML 5", id: 9, clr: "#06ccff", photo: html },
  { percent: 90, skillName: "C++", id: 10, clr: "#d62828", photo: cpp },
  { percent: 90, skillName: "DSA", id: 11, clr: "#06d6a0", photo: dsa },
];
