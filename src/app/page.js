import Header from "@/components/header/Header";
import Image from "next/image";
import { Londrina_Solid } from "next/font/google";
import Contact from "@/components/contact/Contact";
import sectionIMG from "/public/images/section.svg";
import sectionH from "/public/images/sectionH.svg";
import DirectSVG from "/public/images/Group 1000004021.svg";
import TickSVG from "/public/images/Tick.svg";
import MOUNTAINIMG from "/public/images/mountain.png";
import Cloud from "/public/images/Mây.png";
import Cloud2 from "/public/images/Mây-2.png";
import MAPPNG from "/public/images/map-remove-gb.png";
import Cloudy_icon from "/public/images/cloudly.svg";

import Price from "@/components/price-of-tour/Price";
import Impression from "@/components/impression/Impression";
import { GoPerson, GoArrowRight } from "react-icons/go";
import localFont from "next/font/local";
import AutoPlayVideo from "@/components/auto-play-video/AutoPlayVideo";
import ScrollContent from "@/components/scroll-content/ScrollContent";
import Schedule from "@/components/schedule/Schedule";

const LS = Londrina_Solid({
  subsets: ["latin"],
  weight: ["100", "300", "400", "900"],
});

const HVN = localFont({
  src: "../../src/font/HAVANA_SUNSET/havana-sunset-script.ttf",
});

export default function Home() {
  return (
    <main className="">
      <header className="bg-green-800 h-screen flex flex-col w-full ">
        <Header />

        <div className="w-full flex flex-col items-center justify-center relative">
          <Image src="/images/silder.png" alt="img" width={485} height={512} />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-8xl font-extrabold uppercase gap-3 ">
            <h3 className="text-lg text-white opacity-40">GET READY</h3>
            <h3 className="text-white">DISCORVER</h3>
            <h3 className="bg-gradient-to-b from-white to-slate-900 inline-block text-transparent bg-clip-text">
              HA GIANG LOOP
            </h3>
          </div>

          <Price />
        </div>
      </header>

      <section className="w-full bg-[#122718]">
        <div className="py-36 flex flex-col justify-center items-center gap-16">
          <div className="relative flex justify-center items-center">
            <Image src={sectionIMG} alt="Image" width={112} height={111} />
            <Image
              src={sectionH}
              alt="Image"
              width={57}
              height={112}
              className="absolute inset-0 m-auto"
            />
          </div>
          <h4
            className={`text-white text-6xl text-center ${LS.className} w-[860px]`}
          >
            Hong Hao Travel is a travel company in Ha Giang, we specialize in
            organizing unforgettable tours to explore Ha Giang loop but still
            focus on the pristine nature of nature.
          </h4>

          <Impression />
        </div>

        <div className="flex flex-col items-center justify-center gap-7">
          <h3 className="opacity-90 text-center text-white text-sm font-extrabold tracking-tight">
            EXPLORE YOUR JOURNEY WITH US
          </h3>
          <Image src={DirectSVG} alt="SVG" width={49} height={49} />
        </div>

        <div className="relative overflow-hidden pt-20">
          <div className="absolute inset-0 bg-[url('/images/field.png')] bg-cover blur-sm"></div>
          <div className="absolute inset-0 bg-[#122718] opacity-95"></div>

          <div className="relative grid grid-cols-7 text-white px-20 h-full">
            <div className="col-span-3 flex flex-col z-10">
              <h4 className={`text-5xl ${LS.className}`}>
                HONG HAO MOTORBIKE TOUR
              </h4>
              <p className="text-base font-thin tracking-wide mt-14">
                Experience the raw beauty of Hà Giang with our immersive travel
                adventures. From rugged mountain landscapes to vibrant ethnic
                cultures, Hà Giang offers a truly unique and authentic
                experience. Explore remote villages.
              </p>
              <ul className="mt-4 flex flex-col gap-3 font-bold">
                <li className="flex items-center gap-2">
                  <Image src={TickSVG} alt="tick" width={15} height={14} />
                  <p>Tours accommodate a maximum of 10 guests</p>
                </li>
                <li className="flex items-center gap-2">
                  <Image src={TickSVG} alt="tick" width={15} height={14} />
                  <p>Flexible cancellation policy</p>
                </li>
                <li className="flex items-center gap-2">
                  <Image src={TickSVG} alt="tick" width={15} height={14} />
                  <p>Book now, pay later</p>
                </li>
                <li className="flex items-center gap-2">
                  <Image src={TickSVG} alt="tick" width={15} height={14} />
                  <p>Fluent English-speaking guides</p>
                </li>
                <li className="flex items-center gap-2">
                  <Image src={TickSVG} alt="tick" width={15} height={14} />
                  <p>Creating job opportunities for the Vietnamese community</p>
                </li>
              </ul>
              <div className="mt-8 flex items-center gap-4">
                <div className="w-fit py-4 px-8 bg-[#DA4B19] flex items-center justify-center gap-2 rounded-md cursor-pointer">
                  <GoPerson className="" />
                  <p>BUTTON</p>
                  <GoArrowRight />
                </div>
                <div className="w-fit py-4 px-8 border flex items-center justify-center gap-2 rounded-md cursor-pointer">
                  <GoPerson className="" />
                  <p>BUTTON</p>
                  <GoArrowRight />
                </div>
              </div>
            </div>
            <div className="col-span-1"></div>
            <div className="col-span-3 relative z-10">
              <Image src={MOUNTAINIMG} alt="Image" width={819} height={533} />
              <Image
                src={Cloud}
                alt="Image"
                width={448}
                height={189}
                className="absolute -inset-12 animate-moveX"
              />
              <Image
                src={Cloud2}
                alt="Image"
                width={234}
                height={225}
                className="absolute inset-y-10 animate-moveY"
              />
            </div>
          </div>

          <div className="text-white text-center mt-40 flex flex-col justify-center">
            <p className={`opacity-40 text-lg uppercase font-extrabold`}>
              WELCOME TO
            </p>
            <p
              className={`z-10 text-6xl uppercase font-black text-[#E9F1ED] ${LS.className} `}
            >
              HA GIANG NATURALLY
            </p>

            <p
              className={`z-10 ${HVN.className} text-[250px] font-normal text-[#E9F1ED] -mt-20`}
            >
              Beautiful
            </p>
            <div className="flex items-center justify-center -mt-10">
              <AutoPlayVideo />
            </div>
          </div>
        </div>

        <div className="bg-white h-screen flex">
          <div className="flex flex-col items-center justify-center basis-1/2">
            <h3
              className={`${LS.className} text-6xl font-black text-[#262626]`}
            >
              BEST TRIP FOR YOU
            </h3>
            <Image src={MAPPNG} alt="map" width={469} height={449} />
          </div>

          <div className="basis-1/2 relative h-full">
            <ScrollContent />
          </div>
        </div>

        <div className="bg-white pt-20 flex flex-col items-center justify-between ">
          <div className="bg-[url('/images/bg_cloudy.png')] flex flex-col justify-between bg-cover bg-center w-[1440px] h-[704px] rounded-3xl p-5">
            <div className="w-[150px] h-[150px] rounded-xl backdrop-blur-sm text-white text-center flex flex-col justify-end items-center p-3">
              <div className="text-3xl font-extrabold">24°C</div>
              <div className="flex items-center justify-center w-[60px] h-[50px]">
                <Image src={Cloudy_icon} alt="x" width={100} height={100} />
              </div>
              <div className="text-lg">19/03</div>
            </div>

            <div className="flex justify-between cursor-pointer">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_7807_27940)">
                  <circle
                    cx="20"
                    cy="20"
                    r="19.5"
                    transform="matrix(-1 0 0 1 40 0)"
                    stroke="white"
                  />
                  <path
                    d="M13.5 20H27"
                    stroke="url(#paint0_linear_7807_27940)"
                    stroke-width="2"
                  />
                  <g filter="url(#filter0_i_7807_27940)">
                    <path
                      d="M12 20L20 27L16.7816 20L20 13L12 20Z"
                      fill="white"
                    />
                  </g>
                </g>
                <defs>
                  <filter
                    id="filter0_i_7807_27940"
                    x="12"
                    y="13"
                    width="28"
                    height="18"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dx="20" dy="4" />
                    <feGaussianBlur stdDeviation="50" />
                    <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                    />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="shape"
                      result="effect1_innerShadow_7807_27940"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear_7807_27940"
                    x1="26"
                    y1="20"
                    x2="15"
                    y2="20"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="white" />
                    <stop offset="1" stop-color="white" stop-opacity="0" />
                  </linearGradient>
                  <clipPath id="clip0_7807_27940">
                    <rect
                      width="40"
                      height="40"
                      rx="20"
                      transform="matrix(-1 0 0 1 40 0)"
                      fill="white"
                    />
                  </clipPath>
                </defs>
              </svg>
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_7807_27939)">
                  <circle cx="20" cy="20" r="19.5" stroke="white" />
                  <path
                    d="M26.5 20H13"
                    stroke="url(#paint0_linear_7807_27939)"
                    stroke-width="2"
                  />
                  <g filter="url(#filter0_i_7807_27939)">
                    <path
                      d="M28 20L20 27L23.2184 20L20 13L28 20Z"
                      fill="white"
                    />
                  </g>
                </g>
                <defs>
                  <filter
                    id="filter0_i_7807_27939"
                    x="20"
                    y="13"
                    width="28"
                    height="18"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dx="20" dy="4" />
                    <feGaussianBlur stdDeviation="50" />
                    <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                    />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="shape"
                      result="effect1_innerShadow_7807_27939"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear_7807_27939"
                    x1="14"
                    y1="20"
                    x2="25"
                    y2="20"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="white" />
                    <stop offset="1" stop-color="white" stop-opacity="0" />
                  </linearGradient>
                  <clipPath id="clip0_7807_27939">
                    <rect width="40" height="40" rx="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>

            <div className="text-white">
              <Schedule />
            </div>
          </div>
        </div>

        <div></div>
      </section>
      <Contact />
    </main>
  );
}
