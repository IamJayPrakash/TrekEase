// import React, { useState } from 'react';
// import { useRouter } from 'next/router';
import Link from 'next/link';
import React from 'react'
function LoginPage() {
    // const router = useRouter();
    // const [user, setUser] = useState({
    //     email: '',
    //     password: '',
    // });

    //   const onLogin = async () => {
    //     // Add your login logic here
    //     // You can use 'user.email' and 'user.password' to access user input
    //   };

    return (
        <div className="bg-gray-100  flex items-center justify-center mx-auto max-w-[1440px]">
            <div className="glass p-5 m-20 text-light">
                <h1 className="text-center font-lobster text-3xl">
                    <img src='/camp.svg' alt='camp' />
                    Welcome to Login page</h1>
                <br />
                <div className="bg-dark p-3 rounded-lg max-w-sm mx-auto">
                    <label htmlFor="EmailId">Email Id</label>
                    <input
                        type="email"
                        id="EmailId"
                        placeholder="Email Id"
                        className="w-full px-4 py-2 rounded-lg focus:ring focus:ring-indigo-400"
                    // value={user.email}
                    // onChange={(e) => setUser({ ...user, email: e.target.value })}
                    />
                    <label htmlFor="Password">Password</label>
                    <input
                        type="password"
                        id="Password"
                        placeholder="Password"
                        className="w-full px-4 py-2 rounded-lg focus:ring focus:ring-indigo-400"
                    // value={user.password}
                    // onChange={(e) => setUser({ ...user, password: e.target.value })}
                    />
                    <button
                        // onClick={onLogin}
                        className="block bg-indigo-600 text-white rounded-lg px-4 py-2 mt-3 mx-auto hover:bg-indigo-700 focus:ring focus:ring-indigo-400"
                    >
                        Login Now
                    </button>
                    <hr className='mt-5' />
                    <Link href="/signup" className="block text-center text-light hover:underline mt-5" >
                        <button style={{ textDecoration: 'none' }}>
                            Visit Signup Page
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;