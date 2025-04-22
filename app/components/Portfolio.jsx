"use client";
import Image from "next/image";
import fashion from "@/app/assets/images/fashion.png";
import reebok from "@/app/assets/images/reebok.png";
import braun from "@/app/assets/images/braun.png";

export default function Portfolio() {
  const portfolio = [
    {
      link: fashion,
      text: "Online fashion store - Homepage",
    },
    {
      link: reebok,
      text: "Reebok Store - Concept",
    },
    {
      link: braun,
      text: "Braun Landing Page - Concept",
    },
  ];

  return (
    <>
      <div
        id="portfolio"
        className="bg-gray-100 w-full py-20 flex flex-col justify-center items-center text-center  "
      >
        <h1 className="text-4xl font-bold">Portfolio</h1>
        <div className="flex flex-col gap-8 ">
          {portfolio.map((port, index) => (
            <div key={index}>
              <Image className="m-10" src={port.link} alt={port.text} />
              <a href={port.link}>{port.text}</a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
