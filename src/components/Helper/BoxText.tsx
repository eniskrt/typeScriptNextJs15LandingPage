import React from "react";

type BoxTextType = {
    children:React.ReactNode;
}

const BoxText = ({children}:BoxTextType) => {
  return (
    <h1 className="border-2 px-4 w-fit rounded-lg bg-gray-100 py-1 text-[#f68967] font-bolds">
      {children}
    </h1>
  );
};

export default BoxText;
