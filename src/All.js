import React from "react";
import { GoClock } from "react-icons/go";
import { GoPencil } from "react-icons/go";
import { Link } from "react-router-dom";
import ImgSementara from "../src/Assets/sementara.webp";
import AOS from 'aos';
import Footer from "./Template/Footer";

// ini untuk sementara aja cardnya
// nanti tinggal import aja semua cardnya dari semua category

const All = () => {
    AOS.init();
    return(
        <div>
            <div className="mt-[100px]">
                <div className="text-center">
                    <p className="text-[30px] font-bold">All Tools</p>
                </div>

                <div className="flex justify-center flex-wrap gap-[30px] py-[50px] px-[30px]">
                    <Link to="/code-desc-forms">
                        <div className="bg-white border-solid border-[1px] border-gray-500 p-[10px] rounded-[5px]" data-aos="fade-up" data-aos-duration="1500">
                            <div>
                                <img className="hover:scale-105 duration-700 rounded-t-[5px] w-[300px] h-[170px]" src={ImgSementara} />
                            </div>
                            <div>
                                <h1 className="text-[20px] font-bold w-[300px] mt-[20px] hover:text-[#1559ED] line-clamp-2 overflow-hidden">Creating a Login Page UI using ReactJS and Tailwind CSS </h1>
                                <div className="flex justify-between mb-[20px]">
                                    <div className="flex items-center gap-[5px] mt-[10px]">
                                        <GoClock />
                                        <p className="text-[12px] text-gray-700 font-medium">12 DECEMBER 2023</p>
                                    </div>

                                    <div className="flex items-center gap-[5px] mt-[10px]">
                                        <GoPencil />
                                        <p className="text-[13px] text-gray-700 font-medium">Khairul Kholqi</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>

                    <Link to="/code-desc-forms">
                        <div className="bg-white border-solid border-[1px] border-gray-500 p-[10px] rounded-[5px]" data-aos="fade-up" data-aos-duration="1500">
                            <div>
                                <img className="hover:scale-105 duration-700 rounded-t-[5px] w-[300px] h-[170px]" src={ImgSementara} />
                            </div>
                            <div>
                                <h1 className="text-[20px] font-bold w-[300px] mt-[20px] hover:text-[#1559ED] line-clamp-2 overflow-hidden">Creating a Login Page UI using ReactJS and Tailwind CSS </h1>
                                <div className="flex justify-between mb-[20px]">
                                    <div className="flex items-center gap-[5px] mt-[10px]">
                                        <GoClock />
                                        <p className="text-[12px] text-gray-700 font-medium">12 DECEMBER 2023</p>
                                    </div>

                                    <div className="flex items-center gap-[5px] mt-[10px]">
                                        <GoPencil />
                                        <p className="text-[13px] text-gray-700 font-medium">Khairul Kholqi</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>

                    <Link to="/code-desc-forms">
                        <div className="bg-white border-solid border-[1px] border-gray-500 p-[10px] rounded-[5px]" data-aos="fade-up" data-aos-duration="1500">
                            <div>
                                <img className="hover:scale-105 duration-700 rounded-t-[5px] w-[300px] h-[170px]" src={ImgSementara} />
                            </div>
                            <div>
                                <h1 className="text-[20px] font-bold w-[300px] mt-[20px] hover:text-[#1559ED] line-clamp-2 overflow-hidden">Creating a Login Page UI using ReactJS and Tailwind CSS</h1>
                                <div className="flex justify-between mb-[20px]">
                                    <div className="flex items-center gap-[5px] mt-[10px]">
                                        <GoClock />
                                        <p className="text-[12px] text-gray-700 font-medium">12 DECEMBER 2023</p>
                                    </div>

                                    <div className="flex items-center gap-[5px] mt-[10px]">
                                        <GoPencil />
                                        <p className="text-[13px] text-gray-700 font-medium">Khairul Kholqi</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>

                    <Link to="/code-desc-forms">
                        <div className="bg-white border-solid border-[1px] border-gray-500 p-[10px] rounded-[5px]" data-aos="fade-up" data-aos-duration="1500">
                            <div>
                                <img className="hover:scale-105 duration-700 rounded-t-[5px] w-[300px] h-[170px]" src={ImgSementara} />
                            </div>
                            <div>
                                <h1 className="text-[20px] font-bold w-[300px] mt-[20px] hover:text-[#1559ED] line-clamp-2 overflow-hidden">Creating a Login Page UI using ReactJS and Tailwind CSS</h1>
                                <div className="flex justify-between mb-[20px]">
                                    <div className="flex items-center gap-[5px] mt-[10px]">
                                        <GoClock />
                                        <p className="text-[12px] text-gray-700 font-medium">12 DECEMBER 2023</p>
                                    </div>

                                    <div className="flex items-center gap-[5px] mt-[10px]">
                                        <GoPencil />
                                        <p className="text-[13px] text-gray-700 font-medium">Khairul Kholqi</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>

                    <Link to="/code-desc-forms">
                        <div className="bg-white border-solid border-[1px] border-gray-500 p-[10px] rounded-[5px]" data-aos="fade-up" data-aos-duration="1500">
                            <div>
                                <img className="hover:scale-105 duration-700 rounded-t-[5px] w-[300px] h-[170px]" src={ImgSementara} />
                            </div>
                            <div>
                                <h1 className="text-[20px] font-bold w-[300px] mt-[20px] hover:text-[#1559ED] line-clamp-2 overflow-hidden">Creating a Login Page UI using ReactJS and Tailwind CSS</h1>
                                <div className="flex justify-between mb-[20px]">
                                    <div className="flex items-center gap-[5px] mt-[10px]">
                                        <GoClock />
                                        <p className="text-[12px] text-gray-700 font-medium">12 DECEMBER 2023</p>
                                    </div>

                                    <div className="flex items-center gap-[5px] mt-[10px]">
                                        <GoPencil />
                                        <p className="text-[13px] text-gray-700 font-medium">Khairul Kholqi</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>

                    <Link to="/code-desc-forms">
                        <div className="bg-white border-solid border-[1px] border-gray-500 p-[10px] rounded-[5px]" data-aos="fade-up" data-aos-duration="1500">
                            <div>
                                <img className="hover:scale-105 duration-700 rounded-t-[5px] w-[300px] h-[170px]" src={ImgSementara} />
                            </div>
                            <div>
                                <h1 className="text-[20px] font-bold w-[300px] mt-[20px] hover:text-[#1559ED] line-clamp-2 overflow-hidden">Creating a Login Page UI using ReactJS and Tailwind CSS</h1>
                                <div className="flex justify-between mb-[20px]">
                                    <div className="flex items-center gap-[5px] mt-[10px]">
                                        <GoClock />
                                        <p className="text-[12px] text-gray-700 font-medium">12 DECEMBER 2023</p>
                                    </div>

                                    <div className="flex items-center gap-[5px] mt-[10px]">
                                        <GoPencil />
                                        <p className="text-[13px] text-gray-700 font-medium">Khairul Kholqi</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>

            <div>
                <Footer />
            </div>
        </div>
    )
}

export default All;