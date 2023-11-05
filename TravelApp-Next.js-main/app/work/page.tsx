import React from "react";

const Work = () => {
    return (
        <div className="mx-auto max-w-[1440px] mt-6 p-6 glass pb-12 tracking-normal whitespace-wrap leading ">
            <p className="text-gray-700 font-light flex flex-col  ">
                <span className="text-green-800 font-extrabold font-semibold capitalize text">
                    Trek Ease
                </span>
                we are your companions on every journey, dedicated to helping you
                discover the unspoiled beauty of nature. With our all-in-one app, we aim
                to make your adventures around the world effortless and memorable.
                <p>   Whether you're a seasoned explorer or just starting your adventure,
                    we've got you covered. Our platform is designed to provide you with the
                    tools, information, and support you need to embark on your journeys with
                    confidence.
                </p>We understand that getting lost is a common concern for
                travelers, especially in unfamiliar terrain. That's why we're here to
                guide you every step of the way. With the TrekEase application, you can
                bid farewell to the worries of getting lost. Our app features offline
                maps, ensuring that you can navigate even in remote areas without an
                internet connection. Invite your friends, family, and fellow adventurers
                to join you in exploring valleys, scaling mountains, and experiencing
                the thrill of the great outdoors. With TrekEase, you'll always find the
                easy path to your next adventure.
            </p>
            <h1 className="p-4 mx-auto text-center from-stone-700 animate-pulse text-xl font-mono" >ThankYou!!</h1>
            <div className="text-center justify-center">

                <img src="logo.png" alt="logo" width={150} className="" />

            </div>
        </div>
    );
};

export default Work;
