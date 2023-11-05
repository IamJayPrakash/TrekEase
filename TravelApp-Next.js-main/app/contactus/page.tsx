import React from 'react';

const ContactUs = () => {
    return (
        <div className="bg-gray-100 py-12 mx-auto max-w-[1440px]">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-extrabold text-gray-900 text-center">Contact Us</h2>
                <p className="mt-2 text-sm text-gray-600 text-center">We'd love to hear from you. Feel free to reach out.</p>
            </div>

            <div className="mt-10 max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-lg">
                <form>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 font-semibold">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-indigo-400"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-semibold">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-indigo-400"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="message" className="block text-gray-700 font-semibold">Message</label>
                        <textarea
                            id="message"
                            name="message"
                           
                            className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-indigo-400"
                            required
                        ></textarea>
                    </div>

                    <div className="mt-6">
                        <button
                            type="submit"
                            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-green-300 hover:text-black focus:ring focus:ring-indigo-400"
                        >
                            Submit
                        </button>
                        <div className='mx-auto ml-60 text-center'>
                            <img src="logo.png" alt="logo" width={150} />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactUs;