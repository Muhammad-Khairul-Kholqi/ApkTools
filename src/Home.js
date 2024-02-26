import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Style/StyleHome.css';

import Ilustrasi from './Assets/ilustrasi2.png'

const Home = () => {
    AOS.init();
    return(
        <div>
            <div className = "mt-[85px] text-center" >
                <h1 className="title text-[30px] font-bold"
                data-aos="fade-down"
                data-aos-duration="1500"><span className="text-[#3C66D4] text-[50px]">GC</span> Tools</h1>

                <p className="description text-[18px] px-[30px] mt-[10px]" 
                data-aos="fade-down"
                data-aos-duration="1000">Make your website creation experience enjoyable with free tools.</p>
            </div>
        </div>
    )
}

export default Home;