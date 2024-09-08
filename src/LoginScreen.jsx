import LoginScreenIMG from './assets/images/LoginScreenIMG.png'
import { FaRegCopyright } from "react-icons/fa";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import Logo3 from './assets/images/2.png'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LoginScreenSkeleton from './LoginScreenSkeleton';

export default function LoginScreen() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate a loading period (e.g., fetching data)
        setTimeout(() => {
            setLoading(false)
        }, 1500); // Adjust the time as necessary
    }, []);

    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <>
            {loading ? (
                <LoginScreenSkeleton /> // Show the skeleton while loading
            ) : (
                <div className="min-w-screen min-h-screen bg-slate-300 sm:flex">
                    <div className="hidden sm:w-2/3 sm:bg-slate-300 sm:flex sm:justify-center sm:items-center">
                        <div className="w-1/2 p-4 rounded-lg bg-white flex flex-col items-center">
                            <img src={Logo3} className='w-1/6 shadow-md shadow-gray-400 rounded-full' />
                            <img src={LoginScreenIMG} className='' />
                            <p className='text-sm'>
                                <i>A great way your day to day task<br /></i>
                            </p>
                            <div className='flex gap-2 items-center'>
                                <FaRegCopyright /><span className='text-slate-500'>Shreyash Jain</span>
                            </div>
                        </div>
                    </div>

                    <div className="sm:w-1/3 h-screen bg-slate-500 p-4 gap-3 flex flex-col">
                        <div className='sm:hidden h-1/3 py-11 '>
                            <img src={Logo3} className='w-1/6 h-16  mx-auto rounded-full' />
                        </div>
                        <div className='sm:h-screen flex flex-col justify-center items-center gap-3'>
                            <input type='text' className='w-full rounded-md px-2 py-3 outline-none' placeholder='Email' />
                            <div className='w-full relative'>
                                <input type={passwordVisible ? 'text' : 'password'} className='w-full rounded-md px-2 py-3 outline-none' placeholder='Password' />
                                <div className='absolute top-4 right-3 cursor-pointer text-xl text-slate-500' onClick={togglePasswordVisibility}>
                                    {passwordVisible ? <AiFillEye /> : <AiFillEyeInvisible />}
                                </div>
                            </div>
                            <div className='flex justify-between w-full'>
                                <p className='text-slate-300 text-sm underline'>Forgot Password?</p>
                                <Link to="/home">
                                    <button className='bg-slate-300 text-slate-800 px-6 py-1 rounded-md'>Login</button>
                                </Link>
                            </div>
                            <hr className='text-slate-300 w-full mt-4' />
                            <h1 className='text-slate-300'><i>Or</i></h1>
                            <Link to ="/registration" className='w-full rounded-md px-2 py-3 bg-slate-300 text-slate-800 mt-4 flex items-center justify-center gap-2'>
                            Create Account With Us
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
