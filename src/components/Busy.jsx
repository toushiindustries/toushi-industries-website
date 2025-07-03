import React from "react";

const Busy = () => {
  return (
    <div class="w-full h-screen flex bg-[#f2f2f2]">
      <div class="mx-auto my-auto flex flex-col items-center justify-center text-center gap-4">
        <div class="text-[4rem] font-bold font-notosanssunuwar max-xss:text-[2rem] xss:max-xs:text-[2.5rem] xs:max-sm:text-[3rem]">
          Toushi Industries
        </div>
        <div class="text-2xl font-semibold max-xss:text-xl xss:max-xs:text-xl xs:max-sm:text-xl">
          We are busy creating pages for you.
        </div>
      </div>
    </div>
  );
};

export default Busy;
