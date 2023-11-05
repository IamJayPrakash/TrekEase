import React from 'react';

const Service = () => {
    return (
        <div className="bg-white p-8 shadow-md rounded-lg m-4 mx-auto max-w-[1440px]">
            <h1 className="text-4xl font-bold text-gray-800 mb-6">Our Services</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="border p-6 rounded-lg hover:shadow-xl">
                    <h2 className="text-2xl font-semibold text-blue-900">Hiking Locations</h2>
                    <p className="text-gray-700 mt-4">
                        Explore our beautiful hiking locations with stunning views and diverse landscapes.
                    </p>
                </div>

                <div className="border p-6 rounded-lg hover:shadow-xl">
                    <h2 className="text-2xl font-semibold text-blue-900">Offline Maps</h2>
                    <p className="text-gray-700 mt-4">
                        Navigate even in remote areas with our offline maps, ensuring you never get lost.
                    </p>
                </div>

                <div className="border p-6 rounded-lg hover:shadow-xl">
                    <h2 className="text-2xl font-semibold text-blue-900">Adventure Scheduling</h2>
                    <p className="text-gray-700 mt-4">
                        Schedule adventures with friends and access special offers during holidays.
                    </p>
                </div>

                {/* Add more service cards here */}
            </div>
        </div>
    );
};

export default Service;