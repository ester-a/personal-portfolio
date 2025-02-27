import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faJs,
  faHtml5,
  faCss3Alt,
  faNpm,
  faNodeJs,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import reactIcon from "./assets/react.svg";
import es6Icon from "./assets/es6.svg";
import sassIcon from "./assets/sass.svg";
import apiIcon from "./assets/api.svg";
import webpackIcon from "./assets/webpack.svg";
import parcelIcon from "./assets/parcel.svg";
import tailwindIcon from "./assets/tailwindcss.svg";
import supabaseIcon from "./assets/supabase.svg";
import viteIcon from "./assets/vite.svg";

import "./styles/main.scss";

const skillData = [
  {
    id: "react",
    icon: <img src={reactIcon} alt="React" className="icon" />,
    text: {
      cz: "V Reactu pracuji se základními koncepty, jako jsou komponenty, props, useState a useEffect.",
      en: "In React, I work with fundamental concepts such as components, props, useState, and useEffect.",
    },
  },
  {
    id: "javascript",
    icon: <FontAwesomeIcon icon={faJs} className="icon" />,
    text: {
      cz: "Pracuji s základními datovými typy, proměnnými, objekty a poli. Používám základní metody pro manipulaci s poli (forEach, map nebo filter).",
      en: "I work with basic data types, variables, objects, and arrays. I use fundamental methods for array manipulation (forEach, map, or filter).",
    },
  },
  {
    id: "es6",
    icon: <img src={es6Icon} alt="ES6" className="icon" />,
    text: {
      cz: "Pracuji s ES6 komponentami v Reactu, používám spread a rest operator.",
      en: "I work with ES6 components in React and use the spread and rest operators.",
    },
  },
  {
    id: "html",
    icon: <FontAwesomeIcon icon={faHtml5} className="icon" />,
    text: {
      cz: "V HTML pracuji se základními elementy pro strukturování a formátování webových stránek.",
      en: "In HTML, I work with basic elements for structuring and formatting web pages.",
    },
  },
  {
    id: "css",
    icon: <FontAwesomeIcon icon={faCss3Alt} className="icon" />,
    text: {
      cz: "V CSS pracuji se základními technikami pro stylování webových stránek. Pro responsivní design používám media queries, flexbox a grid.",
      en: "In CSS, I use fundamental techniques for styling web pages. For responsive design, I use media queries, flexbox, and grid.",
    },
  },
  {
    id: "sass",
    icon: <img src={sassIcon} alt="SASS" className="icon" />,
    text: {
      cz: "Využívám vnořování, rozdělení do jednotlivých souborů, mixiny a proměnné.",
      en: "I utilize nesting, file splitting, mixins, and variables.",
    },
  },
  {
    id: "api",
    icon: <img src={apiIcon} alt="API" className="icon api-icon" />,
    text: {
      cz: "Využívám pro získávání a zobrazování dat na webových stránkách z veřejných API nebo z vlastních JSON souborů.",
      en: "I use APIs to fetch and display data on web pages, either from public APIs or custom JSON files.",
    },
  },
  {
    id: "vite",
    icon: <img src={viteIcon} alt="Vite" className="icon" />,
    text: {
      cz: "Pro vývoj preferuji Vite, protože je rychlý, jednoduchý a podporuje moderní ES6+ funkce bez nutnosti složité konfigurace",
      en: "I prefer Vite for development because it's fast, simple, and supports modern ES6+ features without requiring complex configuration.",
    },
  },
  {
    id: "webpack",
    icon: <img src={webpackIcon} alt="Webpack" className="icon" />,
    text: {
      cz: "V kurzu jsme používali Webpack pro konfiguraci React aplikací a ES6, ale pro vlastní projekty preferuji Vite.",
      en: "We used Webpack in the course for configuring React applications and ES6, but for my own projects, I prefer Vite.",
    },
  },
  {
    id: "parcel",
    icon: <img src={parcelIcon} alt="Parcel" className="icon" />,
    text: {
      cz: "Parcel jsme používali v kurzu pro transpilaci SCSS a jednoduché nastavení. Pro vlastní projekty preferuji Vite.",
      en: "We used Parcel in the course for SCSS transpilation and simple setup, but for my own projects, I prefer Vite.",
    },
  },
  {
    id: "tailwind",
    icon: <img src={tailwindIcon} alt="Tailwind" className="icon" />,
    text: {
      cz: "Preferuji vlastní CSS a SCSS, protože se v nich chci stále zlepšovat, ale umím pracovat i s Tailwind.",
      en: "I prefer using CSS and SCSS as I want to keep improving in them, but I can also work with Tailwind.",
    },
  },
  {
    id: "npm",
    icon: <FontAwesomeIcon icon={faNpm} className="icon" />,
    text: {
      cz: "NPM Využívám ke správě balíčků, buildování aplikací a spouštění lokálního serveru.",
      en: "I use NPM for package management, building applications, and running a local server.",
    },
  },
  {
    id: "node",
    icon: <FontAwesomeIcon icon={faNodeJs} className="icon" />,
    text: {
      cz: "Node.js používám pro správu balíčků a spouštění JS skriptů lokálně.",
      en: "I use Node.js for package management and running JS scripts locally.",
    },
  },
  {
    id: "git",
    icon: <FontAwesomeIcon icon={faGithub} className="icon" />,
    text: {
      cz: "Verzování kódu dělám přes Git a projekty ukládám na GitHub.",
      en: "I use Git for version control and store my projects on GitHub.",
    },
  },
  {
    id: "supabase",
    icon: <img src={supabaseIcon} alt="Supabase" className="icon" />,
    text: {
      cz: "Supabase používám jako databázi dat včetně uživatelských dat. Využívám pro správu uživatelů, včetně autentifikace a přihlašování.",
      en: "I use Supabase as a database for storing data, including user data. I use it for user management, authentication, and login.",
    },
  },
];

const Skills = ({ language = "cz" }) => {
  const [activeSkill, setActiveSkill] = useState(skillData[0].id);
  const [isHovered, setIsHovered] = useState(false);
  const [changing, setChanging] = useState(false);
  const [displayedSkill, setDisplayedSkill] = useState(skillData[0].id);

  useEffect(() => {
    if (isHovered) return; // Pokud je myš nad ikonou, nepokračujeme

    const interval = setInterval(() => {
      setChanging(true); // Spustíme animaci odchodu

      setTimeout(() => {
        setDisplayedSkill((prevSkill) => {
          const currentIndex = skillData.findIndex(
            (skill) => skill.id === prevSkill
          );
          const nextIndex = (currentIndex + 1) % skillData.length;
          return skillData[nextIndex].id;
        });
        setTimeout(() => setChanging(false), 50); // Krátká pauza, než začne nová animace
      }, 500); // Po 500ms změníme text
    }, 3000);

    return () => clearInterval(interval);
  }, [isHovered]); // Znovu spustíme efekt, když se změní `isHovered`

  return (
    <section className="skills" id="skills">
      <div className="container-skills">
        <h2 className="title">{language === "cz" ? "Dovednosti" : "Skills"}</h2>
        <div className="skills-box">
          {skillData.map((skill) => (
            <div
              key={skill.id}
              className={`icon-box ${activeSkill === skill.id ? "active" : ""}`}
              onMouseEnter={() => {
                setActiveSkill(skill.id);
                setDisplayedSkill(skill.id);
                setIsHovered(true);
              }}
              onMouseLeave={() => setIsHovered(false)}
            >
              {skill.icon}
            </div>
          ))}
          <div className="skill-description">
            <span className={`skill-text ${changing ? "move-out" : "move-in"}`}>
              {
                skillData.find((skill) => skill.id === displayedSkill)?.text[
                  language
                ]
              }
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};


export default Skills;
