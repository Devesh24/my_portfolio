import project1 from "./Components/photos/hangman.png"
import project2 from "./Components/photos/shopify.png"
import project3 from "./Components/photos/ssgyp.png"

export const sayings = [
    {
        id: 1,
        quote: "“The secret of getting ahead is getting started”",
        writer: "- Mark Twain"
    },
    {
        id: 2,
        quote: "“All our dreams can come true, if we have the courage to pursue them”",
        writer: "- Walt Disney"
    },
    {
        id: 3,
        quote: "“It’s hard to beat a person who never gives up”",
        writer: "- Babe Ruth"
    },
    {
        id: 4,
        quote: "“If people are doubting how far you can go, go so far that you can’t hear them anymore”",
        writer: "- Michele Ruiz"
    },
]


export const myProjects = [
  {
    name: "Hangman - The Game",
    photo: project1,
    info: "Hangman is a Single Player guessing game. The player has to guess a word in certain number of chances. The word to guess is represented by a row of dashes representing each letter of the word. If the player clickes or presses a letter which occurs in the word, the letter gets visible in all its correct positions. If the clicked or pressed letter does not occur in the word, the game adds one element of a hanged stick figure as a tally mark. Generally, the game ends once the word is guessed, or if the stick figure is completed — signifying that all guesses have been made.",
    id: 0,
    github: "https://devesh24.github.io/hangman/"
  },
  {
    name: "Shopify - Shopping Hub",
    photo: project2,
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepequasi unde eum, temporibus sit voluptas provident at quas atquerepellendus delectus consequuntur. Eos ab molestiae ut assumendaprovident, architecto explicabo praesentium dolore numquamrecusandae sunt ducimus veritatis nam. Fuga natus sed oditeveniet officiis cum numquam laboriosam at quibusdam nisi? Loremipsum dolor sit amet consectetur adipisicing elit. Cumque, culpa quod illum sapiente rerum accusamus, molestias beatae cumassumenda minus saepe nostrum aspernatur at eveniet! Asperioresdoloribus quis nobis recusandae optio, distinctio inventore,doloremque consectetur ex nemo necessitatibus laboriosam sunteveniet possimus dolorum rem. Rem fugiat porro itaque nam.",
    id: 1,
    github: "https://shopifylive.netlify.app/"
  },
  {
    name: "Sarv Sanyukt Gramin Yojna Portal",
    photo: project3,
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepequasi unde eum, temporibus sit voluptas provident at quas atquerepellendus delectus consequuntur. Eos ab molestiae ut assumendaprovident, architecto explicabo praesentium dolore numquamrecusandae sunt ducimus veritatis nam. Fuga natus sed oditeveniet officiis cum numquam laboriosam at quibusdam nisi? Loremipsum dolor sit amet consectetur adipisicing elit. Cumque, culpa quod illum sapiente rerum accusamus, molestias beatae cumassumenda minus saepe nostrum aspernatur at eveniet! Asperioresdoloribus quis nobis recusandae optio, distinctio inventore,doloremque consectetur ex nemo necessitatibus laboriosam sunteveniet possimus dolorum rem. Rem fugiat porro itaque nam.",
    id: 2,
    github: "https://devesh24.github.io/SSGYP/"
  },
]


  export const mySkills = [
    {percent: 90, skillName: "HTML 5", id:1, clr:"#06ccff"},
    {percent: 90, skillName: "CSS 3", id:2, clr:"#04fc43"},
    {percent: 75, skillName: "JavaScript", id:3, clr:"#ff00be"},
    {percent: 75, skillName: "ReactJS", id:4, clr:"#fee800"},
    {percent: 50, skillName: "mySQL", id:5, clr:"#fb5607"},
    {percent: 90, skillName: "BootStrap", id:6, clr:`#6a4c93`},
    {percent: 70, skillName: "C++", id:7, clr:"#d62828"},
    {percent: 90, skillName: "DSA", id:8, clr:"#06d6a0"},
  ]