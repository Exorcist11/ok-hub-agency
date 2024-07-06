import Image from "next/image";
import React from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

export default function Header() {
  const menu = [
    { title: "Home", path: "/" },
    { title: "About Us", path: "/gioi-thieu" },
    { title: "Tours", path: "/tin-tuc" },
    { title: "Activity", path: "/dich-vu" },
    { title: "Destination", path: "/lien-he" },
    { title: "Blog", path: "/dich-vu" },
    { title: "FAQ", path: "/lien-he" },
    { title: "Contact", path: "/dich-vu" },
  ];

  return (
    <header className="flex justify-between px-20 py-6">
      <div>
        <Image
          src="/images/Logo trắng 1.png"
          alt="Logo"
          width={120}
          height={40}
          priority
        />
      </div>

      <div className="bg-[#E64827] rounded-3xl py-2 pl-2 pr-4 ">
        <Sheet>
          <SheetTrigger className="flex gap-2 items-center ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="33"
              height="33"
              viewBox="0 0 33 33"
              fill="none"
            >
              <path
                opacity="0.9"
                d="M23.375 10.7812H9.625C9.06125 10.7812 8.59375 10.4412 8.59375 10.0312C8.59375 9.62125 9.06125 9.28125 9.625 9.28125H23.375C23.9388 9.28125 24.4062 9.62125 24.4062 10.0312C24.4062 10.4412 23.9388 10.7812 23.375 10.7812Z"
                fill="white"
              />
              <path
                opacity="0.9"
                d="M23.375 16.9688H9.625C9.06125 16.9688 8.59375 16.6287 8.59375 16.2188C8.59375 15.8088 9.06125 15.4688 9.625 15.4688H23.375C23.9388 15.4688 24.4062 15.8088 24.4062 16.2188C24.4062 16.6287 23.9388 16.9688 23.375 16.9688Z"
                fill="white"
              />
              <path
                opacity="0.9"
                d="M23.375 23.1562H9.625C9.06125 23.1562 8.59375 22.8162 8.59375 22.4062C8.59375 21.9963 9.06125 21.6562 9.625 21.6562H23.375C23.9388 21.6562 24.4062 21.9963 24.4062 22.4062C24.4062 22.8162 23.9388 23.1562 23.375 23.1562Z"
                fill="white"
              />
            </svg>

            <h6 className="text-xl text-white font-extrabold ">MENU</h6>
          </SheetTrigger>

          <SheetContent
            side="top"
            className="w-full p-0 bg-[url('/images/menu-banner.jpg')] bg-cover bg-center"
          >
            <div className=" text-white top-0 h-full flex">
              <div className="bg-gradient-to-l from-lime-700 to-green-800 opacity-95 w-1/2 h-full px-20 py-6">
                <div>
                  <Image
                    src="/images/Logo trắng 1.png"
                    alt="Logo"
                    width={120}
                    height={40}
                    priority
                  />
                </div>

                <div className="mt-10">
                  <ul className="flex flex-col gap-6 text-3xl">
                    {menu.map((item, index) => (
                      <li
                        key={index}
                        className="menu-item flex gap-2 items-center relative border-b-[1px] w-80"
                      >
                        <a
                          href={item.path}
                          className="menu-link cursor-pointer transition-all duration-700"
                        >
                          {item.title}
                        </a>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="24"
                          height="24"
                          fill="white"
                          className="menu-icon absolute left-0 transition-all duration-300"
                        >
                          <path d="m20.447 11.105-16-8A1 1 0 0 0 3.152 4.53L7.82 12l-4.668 7.47a1 1 0 0 0 1.3 1.425l16-8a1 1 0 0 0 0-1.79zM6.731 17.517 9.554 13H12a1 1 0 0 0 0-2H9.554L6.731 6.483 17.764 12z" />
                        </svg>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
