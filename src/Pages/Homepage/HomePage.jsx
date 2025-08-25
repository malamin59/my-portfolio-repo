// src/Pages/HomePage.jsx
import React from "react";
import Home from "../Home/Home";
import About from "../About/About";
import Skills from "../Skills/Skills";
import Educational from "../Educational/Educational.JSX";
import Contact from "../Contact/Contact";
import Project from "../Project/Project";
import CommentList from "../Comment/CommentList";

export default function HomePage() {
  return (
    <div>
      <section id="home" className="bg-[#0f172a] lg:px-25">
        <Home />
      </section>
      <section id="about" className="bg-[#1c2741]">
        <About />
      </section>
      <section id="skills" className="bg-[#0f172a] lg:px-25 px-2 ">
        <Skills />
      </section>
      <section id="comment" className="bg-[#0f172a] lg:px-25 px-2  ">
        <CommentList />
      </section>

      <section id="education" className="bg-[#1c2741] py-8 lg:px-25 px-6">
        <Educational />
      </section>
      <section id="project" className="">
        <Project />
      </section>
      <section id="contact" className="">
        <Contact />
      </section>
    </div>
  );
}
