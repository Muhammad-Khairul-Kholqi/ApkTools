import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Style/StyleHome.css';
import { Link } from "react-router-dom";

import Ilustrasi from './Assets/ilustrasi.jpg'
import { GoArrowRight } from "react-icons/go";

const Home = () => {
    AOS.init();
    return(
        <div>
            <div className = "mt-[85px] text-center px-[30px]" >
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
            </div>
        </div>
    )
}

export default Home;