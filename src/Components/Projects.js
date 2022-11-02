import React from "react";
import ProjectCard from "./ProjectCard";

const myProjects = [
  {
    name: "Project 1",
    photo: "./landscape.jpg",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepequasi unde eum, temporibus sit voluptas provident at quas atquerepellendus delectus consequuntur. Eos ab molestiae ut assumendaprovident, architecto explicabo praesentium dolore numquamrecusandae sunt ducimus veritatis nam. Fuga natus sed oditeveniet officiis cum numquam laboriosam at quibusdam nisi? Loremipsum dolor sit amet consectetur adipisicing elit. Cumque, culpa quod illum sapiente rerum accusamus, molestias beatae cumassumenda minus saepe nostrum aspernatur at eveniet! Asperioresdoloribus quis nobis recusandae optio, distinctio inventore,doloremque consectetur ex nemo necessitatibus laboriosam sunteveniet possimus dolorum rem. Rem fugiat porro itaque nam.",
    id: 0,
    github: "https://github.com/Devesh24"
  },
  {
    name: "Project 2",
    photo: "./landscape.jpg",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepequasi unde eum, temporibus sit voluptas provident at quas atquerepellendus delectus consequuntur. Eos ab molestiae ut assumendaprovident, architecto explicabo praesentium dolore numquamrecusandae sunt ducimus veritatis nam. Fuga natus sed oditeveniet officiis cum numquam laboriosam at quibusdam nisi? Loremipsum dolor sit amet consectetur adipisicing elit. Cumque, culpa quod illum sapiente rerum accusamus, molestias beatae cumassumenda minus saepe nostrum aspernatur at eveniet! Asperioresdoloribus quis nobis recusandae optio, distinctio inventore,doloremque consectetur ex nemo necessitatibus laboriosam sunteveniet possimus dolorum rem. Rem fugiat porro itaque nam.",
    id: 1,
    github: "https://github.com/Devesh24"
  },
  {
    name: "Project 3",
    photo: "./landscape.jpg",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepequasi unde eum, temporibus sit voluptas provident at quas atquerepellendus delectus consequuntur. Eos ab molestiae ut assumendaprovident, architecto explicabo praesentium dolore numquamrecusandae sunt ducimus veritatis nam. Fuga natus sed oditeveniet officiis cum numquam laboriosam at quibusdam nisi? Loremipsum dolor sit amet consectetur adipisicing elit. Cumque, culpa quod illum sapiente rerum accusamus, molestias beatae cumassumenda minus saepe nostrum aspernatur at eveniet! Asperioresdoloribus quis nobis recusandae optio, distinctio inventore,doloremque consectetur ex nemo necessitatibus laboriosam sunteveniet possimus dolorum rem. Rem fugiat porro itaque nam.",
    id: 2,
    github: "https://github.com/Devesh24"
  },
];

export default function Projects() {
  return (
    <>
      <div className="d-flex flex-column app py-5" id="projects">
        <h1 className="ms-5 heading">&lt;Projects&gt;</h1>
        <div className="d-flex justify-content-around align-items-center">
          <div
            id="carouselExampleCaptions"
            className="carousel slide"
            data-bs-ride="false"
          >
            <div className="carousel-inner">
              {myProjects.map((element, ind) => {
                return <ProjectCard
                active={element.id===0 ? "active" : ""}
                title={element.name}
                photo={element.photo}
                info={element.info}
                id={element.id}
                github={element.github}
                key={ind}
                />
              })}
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" />
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" />
            </button>
          </div>
        </div>
        <h1 className="ms-5 heading">&lt;/Projects&gt;</h1>
      </div>
    </>
  );
}
