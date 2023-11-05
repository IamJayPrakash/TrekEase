import Image from 'next/image'
import Button from './Button'

const Hero = () => {
    return (
        <section className="mx-auto max-w-[1440px] padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
            <div className="">
                <img src='/pattern-bg.png' alt='background pattern' className='absolute right-0 top-0 h-screen w-screen bg-cover bg-center md:-right-28 xl:-top-60'></img>
            </div>

            <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
                <Image
                    src="/camp.svg"
                    alt="camp"
                    width={50}
                    height={50}
                    className="absolute left-[-5px] top-[-50px] w-10 lg:w-[50px]"
                />
                <h1 className="font-extrabold lg:text-6xl">Putuk Truno Camp Area</h1>
                <p className="font-light mt-6 text-gray-600 xl:max-w-[520px]">
                    We want to be on each of your journeys seeking the satisfaction of seeing the incorruptible beauty of nature. We can help you on an adventure around the world in just one app
                </p>

                <div className="my-11 flex flex-wrap gap-5">
                    <div className="flex items-center gap-2">
                        {Array(5).fill(1).map((_, index) => (
                            <Image
                                src="/star.svg"
                                key={index}
                                alt="star"
                                width={24}
                                height={24}
                            />
                        ))}
                    </div>

                    <p className="font-bold lg:font-extrabold text-cyan-950">
                        198k
                        <span className="font-light lg:regular-20 ml-2">Excellent Reviews</span>
                    </p>
                </div>
                {/* --------------------download and how we work button------------------  */}
                <div className="flex flex-col w-full gap-3 sm:flex-row">
                    <Button
                        type="button"
                        title="Download App"
                        icon='/download.svg'
                        variant="border-green-500 bg-green-500 px-5 py-5 text-white animate-bounce flex hover:bg-sky-400 hover:text-black"
                    />
                    <Button
                        type="button"
                        title="How we work?"
                        icon="/play.svg"
                        variant="border-white bg-teal-100 px-5 py-5 text-blue-950 flex hover:bg-blue-950 hover:text-white"
                    />
                </div>
            </div>

            {/* -------------------Location card--------------------- */}

            <div className="relative flex flex-1 items-start py-7">
                <div className="relative z-20 flex w-[260px] flex-col gap-4 rounded-3xl bg-emerald-500 px-4 py-3">

                    <div className="flex flex-col">
                        <div className="flex justify-between items-start">
                            <p className="font-light text-gray-800">Location</p>
                            <Image src="/close.svg" alt="close" width={24} height={24} />
                        </div>
                        <p className="font-bold text-white">Aguas Calientes</p>
                    </div>

                    <div className="justify-between items-start flex gap-3">
                        <div className="flex flex-col">
                            <p className="font-light block text-gray-800">Distance</p>
                            <p className="font-bold text-white">173.28 mi</p>
                        </div>
                        <div className="flex flex-col">
                            <p className="font-light block text-gray-800">Elevation</p>
                            <p className="font-bold text-white">2.040 km</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero