import React from "react";

export default function Schedule() {
  const newArr = Array(12).fill(0);
  return (
    <div className="flex justify-between items-center">
      {newArr.map((_, i) => (
        <div key={i} className="flex flex-col gap-1 rounded-xl items-center backdrop-blur-sm p-3 w-20">
          <p className="font-extrabold">JAN</p>
          <p className="text-xs">Degree</p>
          <p className="text-xs">27-32</p>
          <svg
            width="14"
            height="15"
            viewBox="0 0 14 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask id="path-1-inside-1_652_1479" fill="white">
              <path d="M3.03899 2.8C3.61556 1.16873 5.17129 0 7 0C9.31959 0 11.2 1.8804 11.2 4.2C12.7464 4.2 14 5.4536 14 7C14 8.54637 12.7464 9.8 11.2 9.8H3.5C1.56701 9.8 0 8.23298 0 6.3C0 4.52829 1.31642 3.06405 3.02448 2.83203" />
            </mask>
            <path
              d="M2.09615 2.46675C1.9121 2.98747 2.18503 3.55879 2.70574 3.74284C3.22646 3.92689 3.79778 3.65396 3.98183 3.13325L2.09615 2.46675ZM11.2 4.2H10.2C10.2 4.75229 10.6477 5.2 11.2 5.2V4.2ZM3.15908 3.82293C3.70634 3.7486 4.08972 3.24469 4.01538 2.69743C3.94105 2.15017 3.43714 1.7668 2.88988 1.84113L3.15908 3.82293ZM3.98183 3.13325C4.42159 1.88903 5.60826 1 7 1V-1C4.73432 -1 2.80952 0.448439 2.09615 2.46675L3.98183 3.13325ZM7 1C8.76731 1 10.2 2.43269 10.2 4.2H12.2C12.2 1.32812 9.87187 -1 7 -1V1ZM11.2 5.2C12.1941 5.2 13 6.00589 13 7H15C15 4.90131 13.2986 3.2 11.2 3.2V5.2ZM13 7C13 7.99409 12.1941 8.8 11.2 8.8V10.8C13.2987 10.8 15 9.09866 15 7H13ZM11.2 8.8H3.5V10.8H11.2V8.8ZM3.5 8.8C2.11929 8.8 1 7.6807 1 6.3H-1C-1 8.78526 1.01472 10.8 3.5 10.8V8.8ZM1 6.3C1 5.03531 1.94001 3.98853 3.15908 3.82293L2.88988 1.84113C0.69283 2.13957 -1 4.02126 -1 6.3H1Z"
              fill="white"
              mask="url(#path-1-inside-1_652_1479)"
            />
            <path
              d="M3.325 12.25L2.625 13.65"
              stroke="white"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M6.825 12.25L6.125 13.65"
              stroke="white"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10.325 12.25L9.625 13.65"
              stroke="white"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <p className="text-xs">65-80 mm</p>
        </div>
      ))}
    </div>
  );
}
