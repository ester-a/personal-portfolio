import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

import "./styles/main.scss";

import astronautImage from "./assets/astronaut.png";

const Hero = ({ language }) => {

  const texts = {
    cz: {
      greeting: "Ahoj, jmenuji se Ester a jsem ",
      typewriterWords: ["front-end developer.", "tvůrce webů.", "nadšenec do Reactu."],
      welcome: "Vítejte na mém profilu! Tato stránka je mým vesmírným prostorem, kde prezentuji projekty, které tvořím při učení a zdokonalování se v psaní kódu. Připravte se na vesmírné cestování po mé galaxii. Přeji příjemný let!",
      buttonText: "EN",
      buttonTitle: "United Kingdom",
    },
    en: {
      greeting: "Hi, my name is Ester and I am a ",
      typewriterWords: ["front-end developer.", "web creator.", "React enthusiast."],
      welcome: "Welcome to my profile! This website is my space where I showcase projects I create while learning and improving my coding skills. Get ready for a space journey through my galaxy. Have a pleasant flight!",
      buttonText: "CZ",
      buttonTitle: "Czech Republic",
    },
  };

  return (
    <section className="hero" id="home">

      <div className="container">

        <img src={astronautImage} alt="Astronaut" className="astronaut" />
        {/* Text */}
        <div className="introduction">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {texts[language].greeting}
            <span className="highlight">
              <Typewriter
                words={texts[language].typewriterWords}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 1 }}
            className="welcome-text"
          >
            {texts[language].welcome}
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
