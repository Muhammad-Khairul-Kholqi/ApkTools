import React from "react";

import CardForms from "./CardForms";
import Footer from "../../../Template/Footer";

import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

const Forms = () => {
    return (
        <div>
            <div className="mt-[100px]">
                <div div className = "text-center text-[40px] mb-[10px] font-bold"
                data-aos = "fade-down" 
                data-aos-duration = "1500" >
                    Forms
                </div>

                <div className="flex justify-center items-center gap-[7px]">
                    <Link to="/">
                        <p className="text-[#1C57D5] hover:underline">Home</p>
                    </Link>

                    <MdKeyboardArrowRight className="mt-[4px]" />

                    <Link to="/category-tools">
                        <p className="text-[#1C57D5] hover:underline">Tools</p>
                    </Link>

                    <MdKeyboardArrowRight className="mt-[4px]" />

                    <p>Forms</p>
                </div>

                <div>
                    <CardForms />
                </div>

                <div>
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default Forms;