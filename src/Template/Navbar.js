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

    const [dropDownFramework, setDropDownFramework] = useState(false);

    const toggleDropdownFramework = () => {
        setDropDownFramework(!dropDownFramework);
    };

    return (
        <div>
            <div className = "navbar flex flex-wrap justify-between items-center py-[15px] px-[5%] fixed top-0 w-full bg-white shadow z-10" >
                <div>
                    <Link to="/"> 
                        <div className="flex gap-[5px] items-center cursor-pointer">
                            <img className="w-[40px]" src={Logo} alt="Logo" draggable="false" />
                            <p className="text-[#3C66D4] text-[15px] leading-[17px] font-semibold">GC <br /> Tools</p>
                        </div>
                    </Link>
                </div>

                <div className = {`navbar-nav-link flex gap-[20px] items-center ${showNav ? 'show' : ''}`} >
                        <div className="first">
                            <Link to="/">
                                <p>Home</p>
                            </Link>
                        </div>

                        <div>
                            <Link to="">
                                <p>All</p>
                            </Link>
                        </div>

                        <div>
                            <Link to="/blogs">
                                <p>Blog</p>
                            </Link>
                        </div>

                        <div>
                            <Link to = "/category-tools" >
                                <p>Tools</p>
                            </Link>
                        </div>

                    <div className="flex gap-[5px] items-center cursor-pointer" onClick={toggleDropdownFramework}>
                        <p className="framework">Framework</p>
                        <IoMdArrowDropdown className={`transition-transform transform ${dropDownFramework ? 'rotate-180' : ''}`} />
                    </div>

                    {dropDownFramework && (
                        <div className = "dropdown-framework absolute top-full right-0 mr-[30px] mt-[3px] bg-white shadow-md rounded-md p-5 text-[15px] z-50" >
                            <ul>
                                <li>
                                    <p className="py-[5px]">React Js</p>
                                </li>

                                <li>
                                    <p className="py-[5px]">Vue Js</p>
                                </li>
                                <li>
                                    <p className="py-[5px]">Tailwind</p>
                                </li>
                                <li>
                                    <p className="py-[5px]">Bootstrap</p>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
                <div className="hidden text-[25px]">
                    <IoMenu id="hamburger-menu" style={{ display: showNav ? 'none' : 'block' }} onClick={toggleNav} />
                    <IoClose id="close" style={{ display: showNav ? 'block' : 'none' }} onClick={toggleNav} />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
