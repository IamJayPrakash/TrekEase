import React from "react";
import Button from "./Button";
import Image from "next/image";

const GetApp = () => {
  return (
    <section className="flex items-center justify-center  text-white  w-full flex-col pb-[100px]">
      <div className=" mx-auto max-w-[1440px] relative flex w-full  flex-col justify-between gap-32 overflow-hidden bg-green-900 bg-cover bg-center bg-no-repeat px-6 py-12 sm:flex-row sm:gap-12 sm:py-24 lg:px-20 xl:max-h-[598px] 2xl:rounded-4xl "
        style={{ backgroundImage: "url('pattern.png')", borderRadius: '100px' }}>
        <div className="z-20 flex w-full flex-1 flex-col items-start justify-center gap-12">
          <h2 className="text-[40px] font-[700] leading-[120%] lg:text-[64px] font-[700] leading-[120%]  xl:max-w-[320px]">
            Get for free now!
          </h2>
          <p className="regular-16 text-gray-10">
            Available on iOS and Android
          </p>
          <div className="flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row">
            <Button
              type="button"
              title="App Store"
              icon="/apple.svg"
              variant="px-5 py-5 flex bg-slate-600 hover:bg-slate-700 text-gray-300 hover:text-white"
              full
            />
            <Button
              type="button"
              title="Play Store"
              icon="/android.svg"
              variant="border-white-500 bg-green-700 px-5 py-5 text-white flex hover:bg-sky-400 hover:text-white"
              full
            />
          </div>
        </div>

        <div className="flex flex-1 items-center justify-end">
          <Image src="/phones.png" alt="phones" width={550} height={870} />
        </div>
      </div>
      <div className="p-5">
        <a href="#top" className="scroll-smooth ">
          <img src="top.gif" ></img>
        </a>
      </div>
    </section>
  );
};

export default GetApp;
