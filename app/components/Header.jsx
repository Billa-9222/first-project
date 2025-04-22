"use client";

import useLanguage from "../context/useLanguage";
import { langs } from "../data/langs";

export default function Header() {
  const { lang } = useLanguage();
  const links = [
    {
      id: "home",
      text: langs.home[lang],
      link: "#home",
    },
    {
      id: "about",
      text: langs.about[lang],
      link: "#about",
    },
    {
      id: "skills",
      text: langs.skills[lang],
      link: "#skills",
    },
    {
      id: "projects",
      text: langs.portfolio[lang],
      link: "#portfolio",
    },
    {
      id: "contacts",
      text: langs.contacts[lang],
      link: "#contacts",
    },
  ];

  function scrollTo(link) {
    document.querySelector(link).scrollIntoView({
      behavior: "smooth",
    });
  }

  return (
    <div className="hidden md:block">
      <nav className="container mx-auto w-screen ">
        <ul className="flex justify-between  py-8 text-xl border-b-4 border-b-gray-400  ">
          {links.map((link) => (
            <li key={link.id}>
              <a href={link.link} className="cursor-pointer ">
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
