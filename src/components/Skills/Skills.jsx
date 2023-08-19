import { motion } from "framer-motion";

// Images
import HTML from "../../assets/skills/HTML.png";
import CSS from "../../assets/skills/CSS.png";
import Js from "../../assets/skills/JS.png";
import React from "../../assets/skills/React.png";
import Postgress from "../../assets/skills/Postgress.png";
import Redux from "../../assets/skills/Redux.png";
import Node from "../../assets/skills/NodeJs.png";
import Git from "../../assets/skills/GIT.png";
import Bootstrap from "../../assets/skills/Bootstrap.png";
import Tailwind from "../../assets/skills/Tailwind.png";
import Sass from "../../assets/skills/Sass.png";
import Sequelize from "../../assets/skills/Sequelize.png";
import SQLite from "../../assets/skills/sqlite.png"

const techsIcons = [
  { name: "HTML", img: HTML, url: "https://developer.mozilla.org/es/docs/Web/HTML"},
  { name: "CSS", img: CSS, url: "https://developer.mozilla.org/es/docs/Web/CSS"},
  { name: "Javascript", img: Js, url: "https://developer.mozilla.org/es/docs/Web/JavaScript"},
  { name: "React", img: React, url: "https://es.react.dev/" },
  { name: "Postgress", img: Postgress, url: "https://www.postgresql.org/" },
  { name: "Redux", img: Redux, url: "https://redux.js.org/" },
  { name: "Node", img: Node, url: "https://nodejs.org/es" },
  { name: "Git", img: Git, url: "https://git-scm.com/" },
  { name: "Bootstrap", img: Bootstrap, url: "https://getbootstrap.com/" },
  { name: "Tailwind", img: Tailwind, url: "https://tailwindcss.com/" },
  { name: "Sass", img: Sass, url: "https://sass-lang.com/" },
  { name: "Sequelize", img: Sequelize, url: "https://sequelize.org/" },
  { name: "SQLite", img: SQLite, url: "https://sqlite.org/" },
];

const Skills = () => {
  return (
    <div className="Skills">
      <div className="w-11/12 flex flex-col items-center text-center mx-auto">
        <h1 className="w-64 text-center text-blue-400 dark:text-blue-400 text-5xl pb-2 mb-6 mx-auto border-b-4 border-blue-400">
          Skills
        </h1>
        <h4 className="w-full pb-8">
          Estas son las tecnologías que he trabajado
        </h4>
      </div>
      <div className="w-10/12 mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
        {techsIcons.map((icon, index) => (
          <div key={index}>
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 1000 }}
              className="w-28 h-28 flex items-center justify-center p-3 bg-black dark:bg-white rounded-full cursor-pointer hover:shadow-[0_0_12px_#000] dark:hover:shadow-[0_0_12px_#fff]"
            >
              <a href={icon.url} target="_blank" rel="noopener noreferrer">
                <motion.img src={icon.img} alt={icon.name} className="w-20" />
              </a>
            </motion.div>
            <h4 className="text-center pt-2">{icon.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
