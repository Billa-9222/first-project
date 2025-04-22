"use client";

import Header from "./components/header";
import HeroSection from "./components/HeroSection";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Contacts from "./components/Contacts";
import Burger from "./components/Burger";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutMe />
      <Skills />
      <Portfolio />
      <Contacts />
      <Burger />
    </>
  );
}
