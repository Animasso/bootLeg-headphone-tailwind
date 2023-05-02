import React from "react";
import { Card } from "./Card";
import HeadImg from "../assets/headphone.png";
import HeadRed from "../assets/redhead.png";
import HeadYellow from "../assets/yellowh.png";
import HeadBlack from "../assets/blackh.png";

export const Header = () => {
  return (
    <>
      <header className="max-w-7xl m-auto h-20 border-b flex justify-between items-center">
        <div className="text-4xl text-violet-900">HeadphoneCool</div>
        <nav className=" flex justify-around ">
          <ul className=" w-72 flex justify-around text-2xl text-sky-900">
            <li className=" cursor-pointer hover:bg-gray-100 p-2">Home</li>
            <li className=" cursor-pointer  hover:bg-gray-100 p-2">Products</li>
            <li className=" cursor-pointer  hover:bg-gray-100 p-2">About us</li>
          </ul>
        </nav>
      </header>
      <main>
        <section className=" p-4 text-center my-20  text-gray-500 shadow-md shadow-black/60">
          <h1 className="text-2xl">Hyper Super Duper Headphones </h1>
          <p className=" mt-4 text-xl">
            Get the lasts Headphones at a very cheap price with a very good.
            quality
          </p>
          <button className=" text-lg w-28 my-4 bg-blue-500 rounded p-3 shadow-lg  text-slate-50 hover:bg-blue-900">
            See More
          </button>
        </section>
        <section className=" my-3">
          <div className=" flex flex-wrap justify-center gap-x-2.5  gap-y-1.5 cursor-pointer">
            <Card
              imgCard={HeadImg}
              alt="Bootleg Sony White"
              titleCard="Bootleg Sony White"
              DescriptionCard="Your will hear every sound your music make!! And then never hear again!!"
            />
            <Card
              imgCard={HeadRed}
              alt="Bootleg Sony"
              titleCard="Bootleg Sony Red"
              DescriptionCard="Your will hear every sound your music make!! And then never hear again!!"
            />
            <Card
              imgCard={HeadBlack}
              alt="Bootleg Sony Black"
              titleCard="Bootleg Sony "
              DescriptionCard="Your will hear every sound your music make!!And then never hear again!!"
            />
            <Card
              imgCard={HeadYellow}
              alt="Bootleg Sony Yellow"
              titleCard="Bootleg Sony"
              DescriptionCard="Your will hear every sound your music make!! And then never hear again!!"
            />
          </div>
        </section>
      </main>
    </>
  );
};
