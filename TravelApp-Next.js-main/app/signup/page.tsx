// "use client";

// import React, { useEffect } from 'react';
// import axios from 'axios';
// import { useRouter } from 'next/router';
// import { useRouter } from 'next/navigation';
import Link from "next/link";
// import toast from 'react-hot-toast';
// import { Toaster } from 'react-hot-toast';
function Signup() {
    // const router = useRouter();

    // const [user, setUser] = React.useState({
    //     email: "",
    //     username: "",
    //     password: "",
    // })
    // const [buttonDisabled, setButtonDisabled] = React.useState(false);
    // const [loading, setLoading] = React.useState(false);

    // const onSignup = async () => {
    //     try {
    //         setLoading(true);
    //         const response = await axios.post("/api/users/signup", user);
    //         console.log("successfully signedUp", response.data);
    //         router.push('/login');

    //     } catch (error) {
    //         console.log("signup failed", error.message);
    //         toast.error(error.message)

    //     }
    //     finally {
    //         setLoading(false);
    //     }
    // }

    // useEffect(() => {

    //     if (user.email.length > 0 && user.password.length > 0 && user.username.length > 0) {
    //         setButtonDisabled(false);
    //     }
    //     else {
    //         setButtonDisabled(true);
    //     }

    // }, [user]);

    return (
        <div className="bg-gray-100  flex items-center justify-center mx-auto max-w-[1440px] ">
            <div className="glass  m-10 text-light max-w-[600px]" >
                {/* <Toaster position="right-top" reverseOrder={false} /> */}
                <h1
                    className="font-mono text-xl text-center"
                    style={{ fontFamily: "" }}
                >
                    <img src="/camp.svg" alt="camp"></img>
                    Welcome to SignUp
                    {/* {loading ? "Processing" : "Welcome to Signup page."} */}
                </h1>
                <br />
                <div className=" text-light m-5 p-3">
                    <label htmlFor="username">Username</label>
                    <input
                        className="w-full px-4 py-2 rounded-lg focus:ring focus:ring-indigo-400"
                        placeholder="Username"
                    // value={user.username}
                    // onChange={(e) => setUser({ ...user, username: e.target.value })}
                    />
                    <label htmlFor="EmailId">Email Id</label>
                    <input
                        className="w-full px-4 py-2 rounded-lg focus:ring focus:ring-indigo-400"
                        placeholder="Email Id"
                    // value={user.email}
                    // onChange={(e) => setUser({ ...user, email: e.target.value })}
                    />
                    <label htmlFor="Password">Password</label>
                    <input
                        className="w-full px-4 py-2 rounded-lg focus:ring focus:ring-indigo-400"
                        placeholder="Password"
                        // value={user.password}
                        type="password"
                    // onChange={(e) => setUser({ ...user, password: e.target.value })}
                    />
                    {/* <button className="btn btn-primary mx-auto mt-3"
                        onClick={onSignup}
                    >
                        {buttonDisabled ? "Fill above Details" : "SignUp Now"}{" "}
                    </button> */}

                    <button
                        // onClick={onLogin}
                        className="block bg-indigo-600 text-white rounded-lg px-4 py-2 mt-3 mx-auto hover:bg-indigo-700 focus:ring focus:ring-indigo-400"
                    >
                        SignUp Now
                    </button>
                    <hr className="m-5" />
                    <Link
                        href="/login"
                        className=" block text-center text-light hover:underline mt-5 "
                        style={{ textDecoration: "none" }}
                    >
                        Visit Login Page
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Signup;
