import React from "react";

import toDoList from "./assets/toDoList.jpg";
import stopWatch from "./assets/stopWatch.webp";
import weatherApp from "./assets/weatherApp.webp";
import recipeApp from "./assets/recipeApp.jpg";

const SpaceExcursion = ({ language }) => {
  const texts = {
    cz: {
      planetTitle: "Vesmírné Exkurze",
      planetReact: "Planeta React - ToDo List",
      planetReactText: `Tato planeta je domovem mého To-Do Listu, kde organizuji úkoly a projekty, které mě drží na správné dráze. 
          Vydejte se na objevnou cestu, jak zjednodušit a zpřehlednit svůj den díky Reactu.
          Odkaz na GitHub repozitář`,
      planetStopwatch: `Planeta Stopwatch`,
      planetStopwatchText: `Na této planetě vládne JavaScript a jejím hlavním lákadlem je Stopwatch - přesný a rychlý časovač. Prozkoumejte, jak se tento projekt točí kolem 
          čistého JavaScriptu a přetváří jednoduchý koncept na elegantní funkční nástroj.
          Odkaz na GitHub repozitář`,
      planetWeather: `Planeta React Weather`,
      planetWeatherText: `Tato planeta se zaměřuje na předpověď počasí, díky mé React Weather App. 
                          Ponořte se do místní atmosféry a sledujte, jak React využívám pro zobrazení aktuálních meteorologických dat. 
                          Odkaz na GitHub repozitář`,
      planetRecipes: `Planeta Recipe App`,
      planetRecipesText: `Tato planeta je domovem mé Recipe App, která vám pomůže najít nové recepty, ukládat je a organizovat podle ingrediencí nebo typu jídla. 
                          Ponořte se do světa chutí a experimentujte s novými pokrmy!`,
    },
    en: {
      planetTitle: "Space Excursion",
      planetReact: "Planet React - ToDo List",
      planetReactText: `This planet is home to my To-Do List, where I organize tasks and projects that keep me on the right track.
                        Embark on a journey to discover how to simplify and streamline your day with React.
                        GitHub repository link `,
      planetStopwatch: `Planet Stopwatch`,
      planetStopwatchText: `This planet is ruled by JavaScript, and its main attraction is the Stopwatch — a precise and fast timer. 
                            Explore how this project revolves around pure JavaScript, transforming a simple concept into a sleek and functional tool.
                            GitHub repository link`,
      planetWeather: `Planet React Weather`,
      planetWeatherText: `This planet focuses on weather forecasting through my React Weather App. Dive into the local atmosphere 
                          and see how I use React to display real-time meteorological data.
                          GitHub repository link`,
      planetRecipes: `Planet Recipe App`,
      planetRecipesText: `This planet is home to my Recipe App, which helps you discover new recipes, save them, and organize them by ingredients or meal type.
                          Immerse yourself in a world of flavors and experiment with new dishes! `,
    },
  };
  return (
    <section className="SpaceExcursion" id="SpaceExcursion">
      <h1>{texts[language].planetTitle}</h1>
      <div className="card-container">
        <div className="card">
          <h2 className="card-title">{texts[language].planetReact}</h2>
          <a
            href="https://todolist-react-23.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <img src={toDoList} alt="img" />
          </a>
          <p>
            {texts[language].planetReactText}➡️{" "}
            <a
              href="https://github.com/ester-a/toDoList"
              target="_blank"
              rel="noopener noreferrer"
            >
              toDo list
            </a>
          </p>
        </div>
        <div className="card">
          <h2 className="card-title">{texts[language].planetStopwatch}</h2>
          <a
            href="https://stopwatch-app-js217.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={stopWatch} alt="img" />
          </a>
          <p>
            {texts[language].planetStopwatchText} ➡️{" "}
            <a
              href="https://github.com/ester-a/Stopwatch-JS-HTML-CSS-"
              target="_blank"
              rel="noopener noreferrer"
            >
              StopWatch
            </a>
          </p>
        </div>
        <div className="card">
          <h2 className="card-title">{texts[language].planetWeather}</h2>
          <a
            href="https://weather-app217.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={weatherApp} alt="img" />
          </a>
          <p>
            {texts[language].planetWeatherText} ➡️{" "}
            <a
              href="https://github.com/ester-a/React-Weather-App"
              target="_blank"
              rel="noopener noreferrer"
            >
              Weather app
            </a>
          </p>
        </div>
        {/* <div className="card">
          <h2 className="card-title">{texts[language].planetRecipes}</h2>
          <a href="">
            <img src={recipeApp} alt="img" />
          </a>
          <p>{texts[language].planetRecipesText}</p>
        </div> */}
      </div>
    </section>
  );
};

export default SpaceExcursion;
