import LoginScreenIMG from './assets/images/LoginScreenIMG.png';
import { FaRegCopyright } from "react-icons/fa";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import Logo3 from './assets/images/2.png';
import { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

export default function Registration() {

    const [formData, setFormData] = useState({
        fname: "",
        lname: "",
        email: "",
        phNo: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }));
    };

    const handlePhoneChange = (value) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            phNo: value
        }));
    };

    const handleRegistration = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <>

            <div className="min-w-screen min-h-screen bg-slate-300 sm:flex">
                <div className="hidden sm:w-2/3 sm:bg-slate-300 sm:flex sm:justify-center sm:items-center">
                    <div className="w-1/2 p-4 rounded-lg bg-white flex flex-col items-center">
                        <img src={Logo3} className="w-1/6 shadow-md shadow-gray-400 rounded-full" alt="Logo" />
                        <img src={LoginScreenIMG} alt="Login Screen" />
                        <p className="text-sm">
                            <i>A great way to manage your day-to-day tasks<br /></i>
                        </p>
                        <div className="flex gap-2 items-center">
                            <FaRegCopyright /><span className="text-slate-500">Shreyash Jain</span>
                        </div>
                    </div>
                </div>

                <div className="sm:w-1/3 h-screen bg-slate-500 p-4 gap-3 flex flex-col">
                    <div className="sm:hidden h-1/3 py-11 ">
                        <img src={Logo3} className="w-1/6 h-16 mx-auto rounded-full" alt="Logo" />
                    </div>

                    <form className="sm:h-screen flex flex-col justify-center items-center gap-3" onSubmit={handleRegistration}>
                        <input
                            type="text"
                            name="fname"
                            value={formData.fname}
                            onChange={handleChange}
                            className="w-full rounded-md px-2 py-3 outline-none"
                            placeholder="First Name"
                        />
                        <input
                            type="text"
                            name="lname"
                            value={formData.lname}
                            onChange={handleChange}
                            className="w-full rounded-md px-2 py-3 outline-none"
                            placeholder="Last Name"
                        />
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full rounded-md px-2 py-3 outline-none"
                            placeholder="Email"
                        />
                        <PhoneInput
                            country={'in'}
                            value={formData.phNo}
                            onChange={handlePhoneChange}
                            inputStyle={{
                                width: '100%', 
                                height: '48px', 
                                padding: '10px 50px', 
                            }}
                            buttonStyle={{
                                height: '48px',
                            }}
                        />


                        <div className="w-full relative">
                            <input
                                type={passwordVisible ? 'text' : 'password'}
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                className="w-full rounded-md px-2 py-3 outline-none"
                                placeholder="Password"
                            />
                            <div
                                className="absolute top-4 right-3 cursor-pointer text-xl text-slate-500"
                                onClick={togglePasswordVisibility}
                            >
                                {passwordVisible ? <AiFillEye /> : <AiFillEyeInvisible />}
                            </div>
                        </div>
                        <div className="flex justify-between w-full">
                            <button className="bg-slate-300 text-slate-800 rounded-md w-full py-3">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
