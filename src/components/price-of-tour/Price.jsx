import React from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export default function Price() {
  const data = [
    { title: "DAYS", description: "5 days 4 nights" },
    { title: "TYPE OF TOUR", description: "Best Budget" },
    { title: "SELF DRIVING", description: "5 pax" },
    { title: "PRIVATE DRIVING", description: "5 pax" },
  ];
  return (
    <div>
      <div className="bg-white rounded-xl grid grid-cols-5 gap-6 items-center justify-center py-3 pl-8 pr-3 w-[844px] -mt-10">
        {data.map((item, index) => (
          <div className="col-span-1" key={index}>
            <p className="text-xs font-normal uppercase">{item.title}</p>
            <div className="text-base font-extrabold flex items-center justify-between">
              <p>{item.description}</p>
              <IoIosArrowDown size={16} />
            </div>
          </div>
        ))}

        <div className="col-span-1 bg-[#E64827] rounded-[8px] px-6 py-3 text-white text-center">
          <h4 className="text-3xl font-normal ">$ 299</h4>
          <p>BOOK NOW</p>
        </div>
      </div>
    </div>
  );
}
