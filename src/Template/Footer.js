import React from "react";

import { Link } from "react-router-dom";

const Footer = () => {
    const CopyrightYear = new Date().getFullYear();
    return (
        <div>
            <div className="flex justify-center gap-[20px] mt-[60px] text-[14px] font-bold text-gray-600 mb-[10px]">
                <Link to="/about-gc-tools">
                    <p className="hover:text-blue-600">
                        About
                    </p>
                </Link>

                <Link to="">
                    <p className = "hover:text-blue-600" >
                        Contact
                    </p>
                </Link>
            </div>

            <div className="text-center mb-[20px] text-gray-600">
                <p>Copyright © {CopyrightYear} - GC Tools</p>
            </div>
        </div>
    );
}

export default Footer;
