import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Template/Footer";
import "./Style/StyleContact.css";

import { GrInstagram } from "react-icons/gr";
import { FaFacebookF } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { FaTiktok } from "react-icons/fa";

const Contact = () => {
    return(
        <div>
            <div className="container-contact mt-[100px] px-[30px] flex justify-center gap-[70px]">
                <div className="bg-white rounded-[5px] shadow border-t-[5px] border-blue-600 p-[20px] w-full">
                    <form>
                        <div className="flex justify-center gap-[10px]">
                            <div>
                                <label className="text-gray-600 text-[13px]" for="fName">First Name</label>
                                <input
                                    type="text"
                                    className="w-full border p-[5px] mt-[10px]"
                                    id="fName"
                                />
                            </div>

                            <div>
                                <label className="text-gray-600 text-[13px]" for="lName">Last Name</label>
                                <input
                                    type="text"
                                    className="w-full border p-[5px] mt-[10px]"
                                    id="lName"
                                />
                            </div>
                        </div>
                        <div className="mt-[15px]">
                            <label className="text-gray-600 text-[13px]" for="tArea">How can we help?</label>
                            <textarea 
                                type="text"
                                className="w-full border p-[5px] mt-[10px]"
                                id="tArea"
                            />
                        </div>
                        <button className="bg-blue-600 w-full py-[5px] text-white hover:bg-blue-700 mt-[10px] rounded-[3px]">Send</button>
                    </form>
                </div>

                <div className="sosmed w-full">
                    <div>
                        <p className="font-bold text-[16px] text-blue-600">Contact Us</p>
                        <p className="text-[20px] text-gray-600 w-[200px]">How can we help?</p>
                        <p className="text-[15px] text-gray-500 mt-[10px]">Contact us via the social media account below or directly type 
                        a message in the form provided for input or assistance.</p>
                    </div>
                    <div className="mt-[20px] flex flex-wrap justify-center gap-[30px] bg-white shadow border-t-[5px] border-blue-600 p-[20px] w-full rounded-[5px]">
                        <Link>
                             <div className="text-center flex flex-col items-center bg-white border hover:shadow w-[100px] p-[10px] rounded-[5px]">
                                <GrInstagram className="text-[30px]" />
                                <p className="mt-2">Instagram</p>
                            </div>
                        </Link>

                        <Link>
                             <div className="text-center flex flex-col items-center bg-white border hover:shadow w-[100px] p-[10px] rounded-[5px]">
                                <CgMail className="text-[30px]" />
                                <p className="mt-2">Email</p>
                            </div>
                        </Link>

                        <Link>
                             <div className="text-center flex flex-col items-center bg-white border hover:shadow w-[100px] p-[10px] rounded-[5px]">
                                <FaFacebookF className="text-[30px]" />
                                <p className="mt-2">Facebook</p>
                            </div>
                        </Link>

                        <Link>
                             <div className="text-center flex flex-col items-center bg-white border hover:shadow w-[100px] p-[10px] rounded-[5px]">
                                <FaTiktok className="text-[30px]" />
                                <p className="mt-2">TikTok</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="mt-[100px]">
                <Footer />
            </div>
        </div>
    )
}

export default Contact;