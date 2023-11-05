import Image from "next/image";
import React from "react";

const Guide = () => {
  return (
    <section className="flex items-center justify-center flex-col">
      <div className="px-6 lg:px-20 3xl:px-0 mx-auto max-w-[1440px] w-full pb-24">
        <Image src="/camp.svg" alt="camp" width={50} height={50} />
        <p className="uppercase text-[18px] font-[400] mt-1 mb-3 text-green-600">
          We are here for you
        </p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="text-[40px] font-[700] leading-[120%] lg:text-[64px] font-[700] leading-[120%]  xl:max-w-[390px]">
            Guide You to Easy Path
          </h2>
          <p className="text-[16px] font-[400] text-gray-30 xl:max-w-[520px]">
            Only with the TrekEase application you will no longer get lost and get
            lost again, because we already support offline maps when there is no
            internet connection in the field. Invite your friends, relatives and
            friends to have fun in the wilderness through the valley and reach
            the top of the mountain
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center mx-auto max-w-[1440px] relative w-full">
        <Image
          src="/boat.png"
          alt="boat"
          width={1440}
          height={580}
          className="w-full object-cover object-center 2xl:rounded-5xl xl:rounded-2xl"
        />

        <div className="absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20">
          <Image
            src="/meter.svg"
            alt="meter"
            width={16}
            height={158}
            className="h-full w-auto"
          />
          <div className="flex items-center justify-between flex-col">
            <div className="flex w-full flex-col">
              <div className="flex items-center justify-between w-full">
                <p className="text-[16px] font-[400] text-gray-20">
                  Destination
                </p>
                <p className="text-[16px] font-[700] text-green-50">48 min</p>
              </div>
              <p className="text-[20px] font-[700] mt-2">Aguas Calientes</p>
            </div>

            <div className="flex w-full flex-col">
              <p className="text-[16px] font-[400] text-gray-20">Start track</p>
              <h4 className="text-[20px] font-[700] mt-2 whitespace-nowrap">
                Wonorejo Pasuruan
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guide;
