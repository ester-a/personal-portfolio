import React from "react";
import { motion } from "framer-motion";
import astronaut2 from "./assets/astronaut2.png";

import "./styles/main.scss";

const Bio = ({ language }) => {
  const texts = {
    cz: {
      bio: `Po absolvování intenzivního kurzu JavaScript Frontend Developer se
              zaměřuji na vstup do světa webového vývoje. Mám více než šest let
              zkušeností v logistice a zákaznickém servisu, kde jsem si osvojila
              dovednosti jako řešení problémů, týmová spolupráce a schopnost
              pracovat pod tlakem. Baví mě tvorba uživatelsky přívětivých a
              responzivních webových aplikací a ráda přispěji k úspěchu
              dynamického vývojářského týmu.`,
    },
    en: {
      bio: `After completing an intensive JavaScript Frontend Developer course, 
      I am now focused on entering the world of web development. I have over six years of experience 
      in logistics and customer service, where I honed skills such as problem-solving, teamwork, 
      and the ability to work under pressure. I enjoy creating user-friendly and responsive web 
      applications and look forward to contributing to the success of a dynamic development team.`,
    },
  };

  return (
    <div className="space-background">
      <section className="bio" id="bio">
        <h2 className="bio-title">Bio</h2>
        <div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 1 }}
            className="about-me"
          >
            {texts[language].bio}
          </motion.p>
        </div>
        <div className="shooting-star"></div>
        <div className="shooting-star2"></div>
        <div className="stars"></div>
      </section>
      <div className="bio-picture">
        <img src={astronaut2} alt="astronaut" className="astronaut2"/>
      </div>
    </div>
  );
};

export default Bio;
