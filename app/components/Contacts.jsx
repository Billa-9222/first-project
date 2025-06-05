"use client";
import Image from "next/image";
import ball from "@/app/assets/icons/ball.svg";
import insta from "@/app/assets/icons/insta.svg";
import be from "@/app/assets/icons/be.svg";
import inImage from "@/app/assets/icons/inImage.svg"

export default function Contacts() {
  return (
    <>
      <div
        id="contact"
        className="container mx-auto flex flex-col items-center justify-center gap-6 py-8 w-screen h-96"
      >
        <h1 className="font-bold text-4xl">Contacts</h1>
        <p className="flex items-center justify-center text-center">
          Want to know more or just chat?
          <br /> You are welcome!
        </p>
        <button className="border border-black rounded-full text-white bg-black py-2 px-4">
          Send message
        </button>
        <div className="flex gap-12 mt-10">
          <Image src={ball} alt="intagram" />
          <Image src={insta} alt="ball" />
          <Image src={be} alt="be" />
          <Image src={inImage} alt="inImage" />
        </div>
      </div>
    </>
  );
}
