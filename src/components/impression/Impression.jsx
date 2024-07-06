import React from "react";

export default function Impression() {
  const value = [
    { title1: "", title2: "" },
    { title1: "Personalization", title2: "Personalization" },
    {
      title1: "Tour guide with good English",
      title2: "Tour guide with good English",
    },
    { title1: "", title2: "" },
    { title1: "Unique Experiences", title2: "Unique Experiences" },
  ];
  return (
    <div className="flex items-center gap-3 justify-center">
      {value.map((item, index) => (
        <div
          className="relative text-white text-sm uppercase flex flex-col justify-center items-center"
          key={index}
        >
          <div className="group w-44 h-44 flex justify-center items-center cursor-pointer">
            <div className="border-2 border-dashed border-white animate-spin-dashed rounded-full transition-transform duration-500 w-full h-full group-hover:bg-[#DA4B19]  group-hover:scale-150"></div>
            <div className="absolute text-center transition-opacity duration-900 opacity-100 group-hover:opacity-0">
              {item.title1}
            </div>
            <div className="absolute text-center transition-opacity duration-900 opacity-0 group-hover:opacity-100">
              {item.title2}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
