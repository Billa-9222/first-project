"use client";
import Image from "next/image";
import ae from "@/app/assets/icons/ae.svg";
import ai from "@/app/assets/icons/ai.svg";
import figma from "@/app/assets/icons/figma.svg";
import ps from "@/app/assets/icons/ps.svg";

export default function Skills() {
  const skills = [
    {
      src: figma,
      alt: "Figma",
    },
    {
      src: ps,
      alt: "ps",
    },
    {
      src: ai,
      alt: "ai",
    },
    {
      src: ae,
      alt: "ae",
    },
  ];

  return (
    <div
      id="skills"
      className="container mx-auto flex flex-col  items-center justify-center gap-6 py-6"
    >
      <h1 className="font-bold text-4xl ">Skills</h1>
      <p>I work in such programms as</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-8">
        {skills.map((skill, index) => (
          <div key={index}>
            <Image className="w-40 h-40 m-22" src={skill.src} alt={skill.alt} />
            <a href={skill.link}></a>
          </div>
        ))}
      </div>
    </div>
  );
}
