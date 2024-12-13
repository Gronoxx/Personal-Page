import React, { Suspense, useRef, useState, useEffect } from "react";
import { a, useSpring } from "@react-spring/three";
import { Canvas, useFrame } from "@react-three/fiber";
import { Center, PerspectiveCamera } from "@react-three/drei";
import { myProjects } from "../constants/index.js";
import CanvasLoader from "../components/CanvasLoader";
import Trophy from "../components/Trophy";
import Folder from "../components/Folder";
import GolfCart from "../components/GolfCart";
import Sky from "../components/Sky";
import Cone from "../components/Cone";

const projectCount = myProjects.length;


const Projects = () => {
  
  
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

  const currentProject = myProjects[selectedProjectIndex];

  const handleNavigation = (direction) => {
    setSelectedProjectIndex((prevIndex) => {
      if (direction === "previous") {
        return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
      } else {
        return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
      }
    });
  };

  const renderModel = () => {
    switch (currentProject.model) {
      case "Trophy":
        return <Trophy scale={0.2} position={[5, -32, 0]} />;
      case "Folder":
        return <Folder scale={0.5} position = {[4,-14,-10]}/>;
      case "GolfCart":
        return <GolfCart scale = {0.7} position = {[6,-6,0]} rotation = {[0,0.8,0]}/>;
      case "Sky":
        return<Sky scale={10} position = {[4,40,0]}/>;
      case "Cone":
        return <Cone scale = {30} position = {[0,-5,0]}/>;
      default:
        return <Trophy scale={0.2} position={[-4, -35, -90]} />; // Fallback model
    }
  };

   const renderLighting = () => {
    const { ambientLight, directionalLights } = currentProject.lighting;

    return (
      <>
        <ambientLight
          intensity={ambientLight.intensity}
          position={ambientLight.position}
        />
        {directionalLights.map((light, index) => (
          <directionalLight
            key={index}
            intensity={light.intensity}
            color={light.color}
            position={light.position}
            castShadow={true}
          />
        ))}
      </>
    );
  };

  return (
    <section className="c-space my-20" id="work">
      <p className="head-text"> My Work </p>
      <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
        <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200">
          <div className="absolute top-0 right-0">
            <img
              src={currentProject.spotlight}
              alt="spotlight"
              className="w-full h-96 object-cover rounded-xl"
            />
          </div>

          <div
            className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg"
            style={currentProject.logoStyle}
          >
            <img
              src={currentProject.logo}
              alt="logo"
              className="w-10 h-10 shadow-sm"
            />
          </div>

          <div className="flex flex-col gap-5 text-white-600 my-5">
            <p className="text-white text-2xl font-semibold animatedText">
              {currentProject.title}
            </p>
            <p className="animatedText">{currentProject.desc}</p>
            <p className="animatedText">{currentProject.subdesc}</p>
          </div>

          <div className=" flex items-center justify-between flex-wrap gap-5">
            <div className="flex items-center gap-3 ">
              {currentProject.tags.map((tag, index) => (
                <div key={index} className="tech-logo">
                  <img src={tag.path} alt={tag.name} />
                </div>
              ))}
            </div>

            <a
              className="flex items-center gap-2 cursor-pointer text-white-600 z-10"
              href={currentProject.href}
              target="_blank"
              rel="noreferrer"
            >
              <p> {selectedProjectIndex === 4 ? "Check My Old Website" : "Check GitHub Project!"}</p>
              <img src="/assets/arrow-up.png" className="w-3 h-3" alt="arrow" />
            </a>
          </div>

          <div className="flex justify-between items-center mt-7">
            <button
              className="arrow-btn"
              onClick={() => handleNavigation("previous")}
            >
              <img
                src="/assets/left-arrow.png"
                alt="left arrow"
                className="w-4 h-4"
              />
            </button>

            <button
              className="arrow-btn"
              onClick={() => handleNavigation("next")}
            >
              <img
                src="/assets/right-arrow.png"
                alt="right arrow"
                className="w-4 h-4"
              />
            </button>
          </div>
        </div>

        <div className="border border-black-300 bg-black-200 rounded-lg h-96 md:h-full ">
          <Canvas>
            
            <ambientLight intensity={1} position={[-4, -35, -80]} />
            {renderLighting()}
            <PerspectiveCamera
              makeDefault
              position={[0, 120, 237]}
              rotation={[-0.4, 0, 0]}
              fov={49}
            />

            <Center>
              <Suspense fallback={<CanvasLoader />}>
                <group scale={2} position={[0, -13, 0]} rotation={[0, -0.1, 0]}>
                    {renderModel()}
                </group>
              </Suspense>
            </Center>
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default Projects;
