import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Style/StyleHome.css';
import { Link } from "react-router-dom";

import Ilustrasi from './Assets/ilustrasi.jpg'
import { FaCheckCircle } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";

const Home = () => {
    AOS.init();
    return(
        <div>
            <div className = "mt-[85px] mb-[40px] text-center px-[30px]" >
                <div>
                    <h1 className="title text-[35px] font-bold mt-[10px]" 
                    data-aos="fade-down" 
                    data-aos-duration="1500">
                        Enjoyable Website <br /> Creation with Free Tools
                    </h1>
                    <p className = "description mt-[10px] text-[18px]" 
                    data-aos = "fade-down" 
                    data-aos-duration = "1000" >
                        <span>Make</span> your <span>Website</span> creation experience <span>Enjoyable</span> with free Tools
                    </p>
                </div>

                <Link to="/all-data-tools-framework">
                    <div className = "flex justify-center mt-[20px]">
                        <button className = "flex items-center gap-[5px] py-[7px] px-[10px] border-solid border-2 border-black rounded-[30px]"
                        data-aos = "zoo~m-in"
                        data-aos-duration = "1000" >
                            <p>Get Started</p>
                            <GoArrowRight id="arrow" className="icon-arrow text-[20px] mt-[1px]" />
                        </button>
                    </div>
                </Link>

                <div div className = "flex justify-center mt-[5px]"
                    data-aos = "zoom-in-up"
                    data-aos-duration = "1500" >
                        <img className="max-w-[600px] w-full" src={Ilustrasi} draggable="false" />
                </div>

                <div className="flex justify-center gap-[20px] flex-wrap  p-[20px] rounded-[10px] text-start">
                    <div 
                        className="p-[10px] border border-1 rounded-[5px]"
                        data-aos="zoom-in"
                        data-aos-duration = "1500"    
                    >
                        <FaCheckCircle className="text-[30px] mb-[10px] text-blue-700" />
                        <p className="w-[150px] font-bold text-[14px] text-black">Makes it easier to create a website</p>
                    </div>

                    <div 
                        className="p-[10px] border border-1 rounded-[5px]"
                        data-aos="zoom-in"
                        data-aos-duration = "1500"    
                    >
                        <FaCheckCircle className="text-[30px] mb-[10px] text-blue-700" />
                        <p className="w-[150px] font-bold text-[14px] text-black">Add insight with the quiz feature</p>
                    </div>

                    <div 
                        className="p-[10px] border border-1 rounded-[5px]"
                        data-aos="zoom-in"
                        data-aos-duration = "1500"    
                    >
                        <FaCheckCircle className="text-[30px] mb-[10px] text-blue-700" />
                        <p className="w-[150px] font-bold text-[14px] text-black">Provides learning channels from masters</p>
                    </div>

                    <div 
                        className="p-[10px] border border-1 rounded-[5px]"
                        data-aos="zoom-in"
                        data-aos-duration = "1500"    
                    >
                        <FaCheckCircle className="text-[30px] mb-[10px] text-blue-700" />
                        <p className="w-[150px] font-bold text-[14px] text-black">Displays frequently asked questions</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;