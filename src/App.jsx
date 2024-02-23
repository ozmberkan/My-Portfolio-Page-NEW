import React, { useState } from 'react';
import Header from "./components/Header";
import Projects from "./components/Projects";
import WhoMe from "./components/WhoMe";
import { motion } from "framer-motion"


export default function App() {
  const [whoMeActive, setWhoMeActive] = useState(true);
  const [projectsActive, setProjectsActive] = useState(false);

  const handleWhoMe = () => {
    setWhoMeActive(!whoMeActive);
    setProjectsActive(!projectsActive)
  }

  const handleProjects = () => {
    setProjectsActive(!projectsActive);
    setWhoMeActive(!whoMeActive)
  }


  return (
    <div className='relative overflow-hidden h-screen bg-[#ffffff80]'>
      <video autoPlay loop muted className='absolute w-full h-full object-cover -z-10'>
        <source src="./dist/assets/background.mp4" type="video/mp4" />
      </video>
      <div className='container mx-auto'>
        <div>
          <Header handleWhoMe={handleWhoMe} handleProjects={handleProjects} />
          {whoMeActive && <WhoMe />}
          {projectsActive && <Projects />}
        </div>
      </div>



    </div>

  );
}
