import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { FaClock, FaArrowRight } from "react-icons/fa6";
import homeSVG from "/public/images/homeSVG.svg";
import motorbikeSVG from "/public/images/motorbikeSVG.svg";
import busSVG from "/public/images/busSVG.svg";
import personSVG from "/public/images/personSVG.svg";
import Image from "next/image";

export default function ScrollContent() {
  const tours = Array(5).fill(0);
  return (
    <ScrollArea className="h-screen my-10">
      <div className="flex flex-col gap-5">
        {tours.map((_, i) => (
          <div
            key={i}
            className="relative group cursor-pointer bg-[url('/images/Nature.png')] w-[757px] h-[450px] bg-cover bg-center rounded-xl flex flex-col justify-between p-6"
          >
            <div className="absolute inset-0 bg-black opacity-30 rounded-xl"></div>
            <div className="relative flex justify-end">
              <div className="py-2 px-3 flex gap-2 items-center rounded-3xl bg-blur w-fit text-white">
                <FaClock color="#E64827" />
                <p className="opacity-80">4 Days 5 Nights</p>
              </div>
            </div>
            <div className="relative text-white flex">
              <div className="basis-3/4">
                <p className="text-2xl font-black group-hover:underline">
                  Ha Giang Loop tour: Itinerary in 4 Days 5 Nights
                </p>
                <ul className="flex flex-col gap-2 mt-2">
                  <li className="flex items-center gap-2">
                    <Image src={homeSVG} alt="home" width={20} height={20} />
                    <p className="font-extrabold">Accommodation:</p>
                    <p>Phòng Doom</p>
                  </li>

                  <li className="flex items-center gap-2">
                    <Image
                      src={motorbikeSVG}
                      alt="home"
                      width={20}
                      height={20}
                    />
                    <p className="font-extrabold">Motorbike::</p>
                    <p>Xe Wave, Vision</p>
                  </li>

                  <li className="flex items-center gap-2">
                    <Image src={personSVG} alt="home" width={20} height={20} />
                    <p className="font-extrabold">Tour guide:</p>
                  </li>

                  <li className="flex items-center gap-2">
                    <Image src={busSVG} alt="home" width={20} height={20} />
                    <p className="font-extrabold">Transport:</p>
                    <p>Xe VIP, có trung chuyển</p>
                  </li>
                </ul>
              </div>
              <div className="basis-1/4 relative flex flex-col justify-between">
                <div className="absolute bottom-0 right-0 text-right transition-transform group-hover:-translate-y-20">
                  <p className="opacity-60 font-extrabold">From to</p>
                  <p className="font-extrabold text-5xl">$199</p>
                </div>
                <div className=" absolute inset-0 bottom-0 right-0 hidden group-hover:flex justify-end items-end transition-all duration-900">
                  <div className="px-5 py-3 bg-[#e64827] rounded-lg w-fit h-fit flex items-center gap-2">
                    <p className="uppercase">Details</p>
                    <FaArrowRight size={14} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </ScrollArea>
  );
}
