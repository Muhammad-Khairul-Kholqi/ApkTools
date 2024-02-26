import React, { useState } from "react";
import '../Style/StyleNavbar.css';
import { Link } from "react-router-dom";

import Logo from '../Assets/logo.png';
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
    // responsive navbar
    const [showNav, setShowNav] = useState(false);
    const toggleNav = () => {
        setShowNav(!showNav);
    };

    // dropdown menu
    const [dropDownTools, setDropDownTools] = useState(false);
    const [dropDownLanguage, setDropDownLanguage] = useState(false);

    const toggleDropdownTools = () => {
        setDropDownTools(!dropDownTools);
    };

    const toggleDropdownLanguage = () => {
        setDropDownLanguage(!dropDownLanguage);
    };

    return (
        <div>
            <div div className = "navbar flex flex-wrap justify-between items-center py-[15px] px-[5%] fixed top-0 w-full bg-white shadow-md z-10" >
                <div>
                    <Link to="/">
                        <div className="flex gap-[5px] items-center cursor-pointer">
                            <img className="w-[40px]" src={Logo} alt="Logo" />
                            <p className="text-[#3C66D4] text-[15px] leading-[17px] font-semibold">GC <br /> Tools</p>
                        </div>
                    </Link>
                </div>

                <div div className = {`navbar-nav-link flex gap-[20px] items-center ${showNav ? 'show' : ''}`} >
                        <div className="first">
                            <Link>
                                <p>Home</p>
                            </Link>
                        </div>

                        <div>
                            <Link>
                                <p>All</p>
                            </Link>
                        </div>

                    <div className="flex gap-[5px] items-center cursor-pointer" onClick={toggleDropdownTools}>
                        <p className="tools">Tools</p>
                        <IoMdArrowDropdown className={`transition-transform transform ${dropDownTools ? 'rotate-180' : ''}`} />
                    </div>

                    {dropDownTools && (
                        <div className = "dropdown-tools absolute top-full right-0 mr-[140px] mt-[-20px] bg-white shadow-md rounded-md p-5 text-[15px] z-50" >
                            <ul className="flex items-center gap-[20px]">
                                <div>
                                    <li>
                                        <p>Form</p>
                                    </li>
                                    <li>
                                        <p>Card</p>
                                    </li>
                                </div>

                                <div>
                                    <li>
                                        <p>Navbar</p>
                                    </li>

                                    <li>
                                        <p>Button</p>
                                    </li>
                                </div>
                            </ul>
                        </div>
                    )}

                    <div className="flex gap-[5px] items-center cursor-pointer" onClick={toggleDropdownLanguage}>
                        <p className="framework">Framework</p>
                        <IoMdArrowDropdown className={`transition-transform transform ${dropDownLanguage ? 'rotate-180' : ''}`} />
                    </div>

                    {dropDownLanguage && (
                        <div className = "dropdown-language absolute top-full right-0 mr-[40px] mt-[-20px] bg-white shadow-md rounded-md p-5 text-[15px] z-50" >
                            <ul>
                                <li>
                                    <p>Laravel</p>
                                </li>
                                <li>
                                    <p>React Js</p>
                                </li>

                                <li>
                                    <p>Vue Js</p>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
                <div className="hidden">
                    <IoMenu id="hamburger-menu" style={{ display: showNav ? 'none' : 'block' }} onClick={toggleNav} />
                    <IoClose id="close" style={{ display: showNav ? 'block' : 'none' }} onClick={toggleNav} />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
