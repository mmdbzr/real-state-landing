import React from "react";

const Logo = () => {
  return (
    <div className="flex items-center space-x-1">
      <svg
        className="w-7 h-7 xl:w-[34px] xl:h-[34px] 2xl:w-12 2xl:h-12"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M14 28C6.26889 28 0 21.7311 0 14H14V28Z" fill="#703BF7" />
        <path d="M0 0C7.73111 0 14 6.26889 14 14H0V0Z" fill="#703BF7" />
        <path d="M14 28C21.7311 28 28 21.7311 28 14H14V28Z" fill="#703BF7" />
        <path d="M28 14C28 6.26889 21.7311 0 14 0V14H28Z" fill="#703BF7" />
      </svg>
      <p className=" text-white xl:text-lg 2xl:text-xl">Estatein</p>
    </div>
  );
};

export default Logo;
