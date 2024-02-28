import React from "react";

import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div>
            <div className="flex justify-center gap-[20px] mt-[60px] text-[14px] font-bold text-gray-600">
                <Link to="">
                    <p className="hover:text-blue-600">
                        About
                    </p>
                </Link>

                <Link to="">
                    <p className = "hover:text-blue-600" >
                        Contact Us
                    </p>
                </Link>
            </div>
        </div>
    );
}

export default Footer;
