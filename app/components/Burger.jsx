"use client";

import Image from "next/image";
import burger from "@/app/assets/icons/burger.svg";
import close from "@/app/assets/icons/close.svg";
import ChangeLangButton from "./ChangeLangButton";
import useLanguage from "../context/useLanguage";
import { langs } from "../data/langs";

import { useEffect, useState } from "react";

export default function Burger({ button }) {
  const { lang } = useLanguage();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [open]);

  const links = [
    {
      id: "home",
      link: "#home",
      text: langs.home[lang],
    },
    {
      id: "about",
      link: "#about",
      text: langs.about[lang],
    },
    {
      id: "skills",
      link: "#skills",
      text: langs.skills[lang],
    },
    {
      id: "projects",
      link: "#portfolio",
      text: langs.portfolio[lang],
    },
    {
      id: "contact",
      link: "#contact",
      text: langs.contacts[lang],
    },
  ];

  function scrollTo(link) {
    console.log(link);

    setOpen(false);
    document.querySelector(link).scrollIntoView({
      behavior: "smooth",
    });
  }
  return (
    <>
      <div className="block lg:hidden">
        {button && (
          <button onClick={() => setOpen(true)} className="w-10 h-10 \">
            <Image
              className="w-full h-full "
              src={burger}
              alt="burger"
              width={10}
              height={10}
            />
          </button>
        )}
        {open && (
          <div className="bg-white absolute w-screen h-screen z-30 top-0 left-0 p-8 ">
            <div className="flex justify-between items-start">
              <div className="flex flex-col items-start gap-8">
                {links.map((link) => (
                  <button
                    key={link.id}
                    className="cursor-pointer text-3xl font-semibold"
                    onClick={() => scrollTo(link.link)}
                  >
                    {link.id}
                  </button>
                ))}
              </div>
              <button className="w-8 h-8" onClick={() => setOpen(false)}>
                <Image
                  className="w-full h-full"
                  src={close}
                  alt="close"
                  width={10}
                  height={10}
                />
              </button>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-20 p-8">
              <ChangeLangButton />
            </div>
            {/* <div className="relative h-1/2">
              <button className="text-3xl absolute -rotate-90 text-nowrap bottom-0 right-0 translate-x-1/3">
                RU | EN
              </button>
            </div> */}
          </div>
        )}
      </div>
    </>
  );
}
