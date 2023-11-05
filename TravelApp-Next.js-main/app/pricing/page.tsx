import React from 'react';

const Pricing = () => {
    return (
        <div className="bg-gray-100 py-5 mx-auto max-w-[1440px] p-6">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-extrabold text-gray-900 text-center">Pricing Plans</h2>
                <p className="mt-2 text-sm text-gray-600 text-center">Choose a pricing plan that suits your needs.</p>
            </div>

            <div className="mt-2 max-w-4xl mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
                {/* Pricing Plan 1 */}
                <div className="border rounded-lg shadow-sm overflow-hidden bg-white">
                    <div className="px-6 py-2">
                        <h3 className="text-2xl font-extrabold text-gray-900 text-center">
                            <img src='camp.svg' alt='camp logo'></img>
                            Basic Plan</h3>
                        <div className="mt-4 flex items-center justify-center">
                            <span className="text-6xl font-extrabold text-gray-900">Free</span>
                            <span className="text-xl font-medium text-gray-500">/month</span>
                        </div>
                    </div>
                    <div className="border-t border-gray-200">
                        <ul>
                            <li className="px-6 py-2 flex items-center">

                                <svg
                                    className="flex-shrink-0 h-6 w-6 text-green-500"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span className="ml-3 text-base font-medium text-gray-500">Map locator</span>
                            </li>
                            <li className="px-6 py-2 flex items-center">
                                <svg
                                    className="flex-shrink-0 h-6 w-6 text-green-500"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span className="ml-3 text-base font-medium text-gray-500">Planner</span>
                            </li>
                            <li className="px-6 py-2 flex items-center">
                                <svg
                                    className="flex-shrink-0 h-6 w-6 text-green-500"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span className="ml-3 text-base font-medium text-gray-500">Hiking Locations..</span>
                            </li>

                            {/* I will add more feature here...*/}

                        </ul>
                    </div>
                    <div className="p-6">
                        <a
                            href="#"
                            className="block w-full py-3 px-4 rounded-md text-center font-medium animate-bounce text-white bg-green-600 hover:bg-green-700"
                        >
                            Sign up
                        </a>
                    </div>
                </div>

                {/* Pricing Plan 2 */}
                <div className="border rounded-lg shadow-sm overflow-hidden bg-white">
                    {/* Price and features */}
                    <h1 className='text-center mt-40 text-lg font-mono font-extrabold'>Coming soon...</h1>

                    <div className='mx-auto ml-20 p-5 text-center'>
                        <img src="logo.png" alt="logo" width={150} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pricing;